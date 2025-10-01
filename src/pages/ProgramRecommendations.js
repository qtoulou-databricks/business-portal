import React, { useState, useEffect } from 'react';
import {
  Grid, Paper, Typography, Box, Card, CardContent, Button,
  Chip, Rating, FormControl, InputLabel, Select, MenuItem,
  TextField, Slider, Alert, Switch, FormControlLabel, Autocomplete
} from '@mui/material';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Brush, ReferenceLine } from 'recharts';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import recommendationEngine from '../utils/recommendationEngine';
import ProgramAnalysisModal from '../components/ProgramAnalysisModal';
import ProgramDetailsModal from '../components/ProgramDetailsModal';
import { formatCurrency, formatNumber } from '../config/industryConfig';
import { getMockDataForLanguage, getModalDataForLanguage, getCurrentLanguage } from '../config/languageConfig';

function ProgramRecommendations({ config }) {
  // Get industry-specific configuration data for current language
  const currentLanguage = getCurrentLanguage();
  const mockData = getMockDataForLanguage(config.industryName.toLowerCase(), currentLanguage);
  const modalData = getModalDataForLanguage(config.industryName.toLowerCase(), currentLanguage);
  const recommendationsConfig = modalData?.programRecommendationsData || {};

  // Default UI labels fallback
  const defaultUILabels = {
    advancedFilters: 'Advanced Filters',
    searchProgram: 'Search programs',
    searchPlaceholder: 'Type name...',
    genre: 'Genre',
    allGenres: 'All genres',
    timeSlot: 'Time Slot',
    allTimeSlots: 'All time slots',
    sortBy: 'Sort by',
    budget: 'Budget',
    minRating: 'Minimum rating',
    minScore: 'Minimum score (%)',
    resetFilters: 'Reset filters',
    scoresInfo: 'Scores are based on performance metrics.',
    topPrograms: 'Top Programs',
    results: 'results',
    sortedBy: 'Sorted by:',
    rating: 'Rating:',
    audience: 'Audience:',
    budgetLabel: 'Budget:',
    efficiency: 'Efficiency:',
    viewersPerEuro: 'viewers',
    analyze: 'Analyze',
    details: 'Details',
    noResults: 'No results match the selected filters',
    modifySearch: 'Try modifying your search criteria',
    genreOptions: {
      drame: 'Drama',
      divertissement: 'Entertainment',
      sport: 'Sports',
      information: 'News',
      documentaire: 'Documentary'
    },
    timeSlotOptions: {
      morning: 'Morning',
      evening: 'Evening',
      prime: 'Prime Time',
      late: 'Late Night',
      weekend: 'Weekend'
    },
    sortOptions: {
      score: 'Performance Score',
      rating: 'Rating',
      viewership: 'Audience',
      cost: 'Budget',
      efficiency: 'Efficiency'
    },
    evolutionChart: {
      trendLabel: 'Trend:',
      trendDescription: 'Performance data shows consistent growth patterns.',
      interactionLabel: '💡 Interaction:',
      interactionDescription: 'Use the selection area below to zoom in on a specific period.',
      tooltipLabels: {
        totalAudience: 'Total Audience',
        primeTime: 'Prime Time',
        dateLabel: 'Date:'
      },
      referenceLabel: 'Average',
      lineLabels: {
        total: 'total',
        primeTimeSlot: 'Prime Time'
      }
    }
  };

  const uiLabels = {
    ...defaultUILabels,
    ...recommendationsConfig?.uiLabels,
    genreOptions: { ...defaultUILabels.genreOptions, ...recommendationsConfig?.uiLabels?.genreOptions },
    timeSlotOptions: { ...defaultUILabels.timeSlotOptions, ...recommendationsConfig?.uiLabels?.timeSlotOptions },
    sortOptions: { ...defaultUILabels.sortOptions, ...recommendationsConfig?.uiLabels?.sortOptions },
    evolutionChart: {
      ...defaultUILabels.evolutionChart,
      ...recommendationsConfig?.uiLabels?.evolutionChart,
      tooltipLabels: {
        ...defaultUILabels.evolutionChart.tooltipLabels,
        ...recommendationsConfig?.uiLabels?.evolutionChart?.tooltipLabels
      },
      lineLabels: {
        ...defaultUILabels.evolutionChart.lineLabels,
        ...recommendationsConfig?.uiLabels?.evolutionChart?.lineLabels
      }
    }
  };

  const COLORS = recommendationsConfig?.colors || ['#001b9c', '#6679f9', '#fb7e44', '#620162', '#2e7d32'];
  const [programs, setPrograms] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [demographicData, setDemographicData] = useState([]);
  const [audienceEvolutionData, setAudienceEvolutionData] = useState([]);
  const [filters, setFilters] = useState(recommendationsConfig?.defaultFilters || {
    genre: 'all',
    timeSlot: 'all',
    targetAudience: 'all',
    budget: [0, 500000],
    minRating: 0,
    minViewership: 0,
    minScore: 0,
    sortBy: 'score',
    showActiveOnly: false,
    searchQuery: ''
  });
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [analysisModalOpen, setAnalysisModalOpen] = useState(false);
  const [selectedProgramForAnalysis, setSelectedProgramForAnalysis] = useState(null);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [selectedProgramForDetails, setSelectedProgramForDetails] = useState(null);

  useEffect(() => {
    // Get mock data for the current industry and language
    const currentLanguage = getCurrentLanguage();
    const mockData = getMockDataForLanguage(config.industryName.toLowerCase(), currentLanguage);

    setPrograms(mockData.programs);
    setDemographicData(mockData.demographicData);
    setAudienceEvolutionData(mockData.audienceEvolutionData);

    const recommendations = recommendationEngine.generateRecommendations(mockData.programs);
    setRecommendations(recommendations);
  }, [config]);

  const getScoreColor = (score) => {
    const thresholds = recommendationsConfig?.scoreThresholds || { excellent: 90, good: 80 };
    if (score >= thresholds.excellent) return 'success';
    if (score >= thresholds.good) return 'warning';
    return 'error';
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount);
  };

  const handleAnalyzeProgram = (program) => {
    setSelectedProgramForAnalysis(program);
    setAnalysisModalOpen(true);
  };

  const handleCloseAnalysisModal = () => {
    setAnalysisModalOpen(false);
    setSelectedProgramForAnalysis(null);
  };

  const handleShowDetails = (program) => {
    setSelectedProgramForDetails(program);
    setDetailsModalOpen(true);
  };

  const handleCloseDetailsModal = () => {
    setDetailsModalOpen(false);
    setSelectedProgramForDetails(null);
  };

  const filteredPrograms = programs.filter(program => {
    const matchesGenre = filters.genre === 'all' || program.genre.toLowerCase() === filters.genre;
    const matchesTimeSlot = filters.timeSlot === 'all' || program.timeSlot === filters.timeSlot;
    const matchesAudience = filters.targetAudience === 'all' || program.targetDemo.includes(filters.targetAudience);
    const matchesBudget = program.cost >= filters.budget[0] && program.cost <= filters.budget[1];

    return matchesGenre && matchesTimeSlot && matchesAudience && matchesBudget;
  });

  const scatterData = programs.map(program => ({
    x: program.viewership / 1000000,
    y: program.rating,
    z: program.recommendationScore,
    name: program.title,
    cost: program.cost
  }));

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {config.sections.audience}
      </Typography>

      {/* Analytics Charts Row */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ color: config.brandPrimary, fontWeight: 600 }}>
              {config.chartTitles.demographics}
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={demographicData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {demographicData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ color: config.brandPrimary, fontWeight: 600 }}>
              {config.chartTitles.programAnalysis}
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart data={scatterData}>
                <CartesianGrid />
                <XAxis
                  dataKey="x"
                  name="Viewership"
                  unit="M"
                  type="number"
                  domain={['dataMin', 'dataMax']}
                />
                <YAxis
                  dataKey="y"
                  name="Rating"
                  unit="/10"
                  type="number"
                  domain={[6, 10]}
                />
                <Tooltip
                  formatter={(value, name) => {
                    if (name === 'Viewership') return [value + 'M', 'Viewership'];
                    if (name === 'Rating') return [value + '/10', 'Rating'];
                    return value;
                  }}
                  labelFormatter={() => ''}
                  cursor={{ strokeDasharray: '3 3' }}
                />
                <Scatter name={config.metrics.programs} dataKey="y" fill={config.brandPrimary} />
              </ScatterChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>

      {/* Audience Evolution Chart */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ color: config.brandPrimary, fontWeight: 600 }}>
              {config.metrics.viewership}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              <strong>{uiLabels.evolutionChart.trendLabel}</strong> {uiLabels.evolutionChart.trendDescription}
              <br />
              <strong>{uiLabels.evolutionChart.interactionLabel}</strong> {uiLabels.evolutionChart.interactionDescription}
            </Typography>
            <ResponsiveContainer width="100%" height={450}>
              <LineChart
                data={audienceEvolutionData}
                margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="date"
                  angle={-45}
                  textAnchor="end"
                  height={60}
                  interval={0}
                  tick={{ fontSize: 12 }}
                />
                <YAxis
                  tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
                  tick={{ fontSize: 12 }}
                />
                <Tooltip
                  formatter={(value, name) => [
                    (value / 1000000).toFixed(1) + 'M',
                    name === 'audienceTotale' ? uiLabels.evolutionChart.tooltipLabels.totalAudience : uiLabels.evolutionChart.tooltipLabels.primeTime
                  ]}
                  labelFormatter={(label) => `${uiLabels.evolutionChart.tooltipLabels.dateLabel} ${label}`}
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: `1px solid ${config.brandPrimary}`,
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Legend />

                {/* Ligne de référence pour la moyenne */}
                <ReferenceLine
                  y={8750000}
                  stroke={config.brandSecondary}
                  strokeDasharray="5 5"
                  label={{ value: uiLabels.evolutionChart.referenceLabel, position: "topRight" }}
                />

                <Line
                  type="monotone"
                  dataKey="audienceTotale"
                  stroke={config.brandPrimary}
                  strokeWidth={3}
                  name={`${config.metrics.viewership} ${uiLabels.evolutionChart.lineLabels.total}`}
                  dot={{ fill: config.brandPrimary, strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: config.brandPrimary, strokeWidth: 2, fill: '#ffffff' }}
                />
                <Line
                  type="monotone"
                  dataKey="primeTime"
                  stroke={config.brandLight}
                  strokeWidth={3}
                  name={uiLabels.evolutionChart.lineLabels.primeTimeSlot}
                  dot={{ fill: config.brandLight, strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: config.brandLight, strokeWidth: 2, fill: '#ffffff' }}
                />

                {/* Brush pour la sélection et le zoom */}
                <Brush
                  dataKey="date"
                  height={30}
                  stroke={config.brandPrimary}
                  fill="#f8faff"
                  startIndex={0}
                  endIndex={audienceEvolutionData.length - 1}
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>

      {/* Main Content Row */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ color: config.brandPrimary, fontWeight: 600 }}>
              {uiLabels.advancedFilters}
            </Typography>

            {/* Search */}
            <Box sx={{ mb: 2 }}>
              <TextField
                fullWidth
                size="small"
                label={uiLabels.searchProgram}
                value={filters.searchQuery}
                onChange={(e) => setFilters({...filters, searchQuery: e.target.value})}
                placeholder={uiLabels.searchPlaceholder}
              />
            </Box>

            {/* Genre */}
            <Box sx={{ mb: 2 }}>
              <FormControl fullWidth size="small">
                <InputLabel>{uiLabels.genre}</InputLabel>
                <Select
                  value={filters.genre}
                  label={uiLabels.genre}
                  onChange={(e) => setFilters({...filters, genre: e.target.value})}
                >
                  <MenuItem value="all">{uiLabels.allGenres}</MenuItem>
                  <MenuItem value="drame">{uiLabels.genreOptions.drame}</MenuItem>
                  <MenuItem value="divertissement">{uiLabels.genreOptions.divertissement}</MenuItem>
                  <MenuItem value="sport">{uiLabels.genreOptions.sport}</MenuItem>
                  <MenuItem value="information">{uiLabels.genreOptions.information}</MenuItem>
                  <MenuItem value="documentaire">{uiLabels.genreOptions.documentaire}</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* Time Slot */}
            <Box sx={{ mb: 2 }}>
              <FormControl fullWidth size="small">
                <InputLabel>{uiLabels.timeSlot}</InputLabel>
                <Select
                  value={filters.timeSlot}
                  label={uiLabels.timeSlot}
                  onChange={(e) => setFilters({...filters, timeSlot: e.target.value})}
                >
                  <MenuItem value="all">{uiLabels.allTimeSlots}</MenuItem>
                  <MenuItem value="morning">{uiLabels.timeSlotOptions.morning}</MenuItem>
                  <MenuItem value="evening">{uiLabels.timeSlotOptions.evening}</MenuItem>
                  <MenuItem value="prime">{uiLabels.timeSlotOptions.prime}</MenuItem>
                  <MenuItem value="late">{uiLabels.timeSlotOptions.late}</MenuItem>
                  <MenuItem value="weekend">{uiLabels.timeSlotOptions.weekend}</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* Sort By */}
            <Box sx={{ mb: 2 }}>
              <FormControl fullWidth size="small">
                <InputLabel>{uiLabels.sortBy}</InputLabel>
                <Select
                  value={filters.sortBy}
                  label={uiLabels.sortBy}
                  onChange={(e) => setFilters({...filters, sortBy: e.target.value})}
                >
                  <MenuItem value="score">{uiLabels.sortOptions.score}</MenuItem>
                  <MenuItem value="rating">{uiLabels.sortOptions.rating}</MenuItem>
                  <MenuItem value="viewership">{uiLabels.sortOptions.viewership}</MenuItem>
                  <MenuItem value="cost">{uiLabels.sortOptions.cost}</MenuItem>
                  <MenuItem value="efficiency">{uiLabels.sortOptions.efficiency}</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* Budget Range */}
            <Box sx={{ mb: 2 }}>
              <Typography gutterBottom sx={{ fontSize: '0.9rem' }}>{uiLabels.budget}</Typography>
              <Slider
                value={filters.budget}
                onChange={(e, newValue) => setFilters({...filters, budget: newValue})}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => formatCurrency(value)}
                min={recommendationsConfig?.defaultFilters?.budget?.[0] || 0}
                max={recommendationsConfig?.defaultFilters?.budget?.[1] || 500000}
                step={25000}
                sx={{ color: config.brandPrimary }}
              />
            </Box>

            {/* Min Rating */}
            <Box sx={{ mb: 2 }}>
              <Typography gutterBottom sx={{ fontSize: '0.9rem' }}>{uiLabels.minRating}</Typography>
              <Slider
                value={filters.minRating}
                onChange={(e, newValue) => setFilters({...filters, minRating: newValue})}
                valueLabelDisplay="auto"
                min={0}
                max={10}
                step={0.1}
                sx={{ color: config.brandLight }}
              />
            </Box>

            {/* Min Score */}
            <Box sx={{ mb: 2 }}>
              <Typography gutterBottom sx={{ fontSize: '0.9rem' }}>{uiLabels.minScore}</Typography>
              <Slider
                value={filters.minScore}
                onChange={(e, newValue) => setFilters({...filters, minScore: newValue})}
                valueLabelDisplay="auto"
                min={0}
                max={100}
                step={5}
                sx={{ color: config.brandSecondary }}
              />
            </Box>

            {/* Reset Filters */}
            <Button
              fullWidth
              variant="outlined"
              onClick={() => setFilters(recommendationsConfig?.defaultFilters || {
                genre: 'all',
                timeSlot: 'all',
                targetAudience: 'all',
                budget: [0, 500000],
                minRating: 0,
                minViewership: 0,
                minScore: 0,
                sortBy: 'score',
                showActiveOnly: false,
                searchQuery: ''
              })}
              sx={{
                borderColor: config.brandPrimary,
                color: config.brandPrimary,
                '&:hover': {
                  borderColor: config.brandPrimary,
                  backgroundColor: 'rgba(0, 27, 156, 0.04)'
                }
              }}
            >
              {uiLabels.resetFilters}
            </Button>

            <Alert severity="info" sx={{ mt: 2 }}>
              <Typography variant="body2">
                {uiLabels.scoresInfo}
              </Typography>
            </Alert>
          </Paper>
        </Grid>

        <Grid item xs={12} md={9}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h6" sx={{ color: config.brandPrimary, fontWeight: 600 }}>
                {uiLabels.topPrograms} ({filteredPrograms.filter(program => {
                  const matchesSearch = !filters.searchQuery || program.title.toLowerCase().includes(filters.searchQuery.toLowerCase());
                  const matchesRating = program.rating >= filters.minRating;
                  const matchesScore = program.recommendationScore >= filters.minScore;
                  return matchesSearch && matchesRating && matchesScore;
                }).length} {uiLabels.results})
              </Typography>
              <Chip
                label={`${uiLabels.sortedBy} ${recommendationsConfig?.sortLabels?.[filters.sortBy] || 'Efficacité'}`}
                sx={{ backgroundColor: '#f8faff', color: config.brandPrimary }}
              />
            </Box>
            <Grid container spacing={3}>
              {filteredPrograms
                .filter(program => {
                  const matchesSearch = !filters.searchQuery || program.title.toLowerCase().includes(filters.searchQuery.toLowerCase());
                  const matchesRating = program.rating >= filters.minRating;
                  const matchesScore = program.recommendationScore >= filters.minScore;
                  return matchesSearch && matchesRating && matchesScore;
                })
                .sort((a, b) => {
                  if (filters.sortBy === 'score') return b.recommendationScore - a.recommendationScore;
                  if (filters.sortBy === 'rating') return b.rating - a.rating;
                  if (filters.sortBy === 'viewership') return b.viewership - a.viewership;
                  if (filters.sortBy === 'cost') return a.cost - b.cost;
                  if (filters.sortBy === 'efficiency') return (b.viewership / b.cost) - (a.viewership / a.cost);
                  return 0;
                })
                .map((program) => (
                  <Grid item xs={12} sm={6} md={4} key={program.id}>
                    <Card variant="outlined" sx={{
                      height: '100%',
                      '&:hover': {
                        boxShadow: '0 4px 12px rgba(0, 27, 156, 0.15)',
                        transform: 'translateY(-2px)',
                        transition: 'all 0.3s ease'
                      }
                    }}>
                      <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                          <Typography variant="h6" component="h3" sx={{ fontSize: '1.1rem' }}>
                            {program.title}
                          </Typography>
                          <Chip
                            label={`${program.recommendationScore}%`}
                            color={getScoreColor(program.recommendationScore)}
                            size="small"
                            icon={<ThumbUpIcon />}
                          />
                        </Box>

                        <Box sx={{ display: 'flex', gap: 0.5, mb: 2, flexWrap: 'wrap' }}>
                          <Chip label={program.genre} size="small" variant="outlined" sx={{ fontSize: '0.7rem' }} />
                          <Chip label={program.timeSlot} size="small" variant="outlined" sx={{ fontSize: '0.7rem' }} />
                          <Chip label={program.targetDemo} size="small" variant="outlined" sx={{ fontSize: '0.7rem' }} />
                        </Box>

                        <Box sx={{ mb: 2, flexGrow: 1 }}>
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                            <strong>{uiLabels.rating}</strong> {program.rating}/10
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                            <strong>{uiLabels.audience}</strong> {(program.viewership / 1000000).toFixed(1)}M
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                            <strong>{uiLabels.budgetLabel}</strong> {formatCurrency(program.cost)}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            <strong>{uiLabels.efficiency}</strong> {(program.viewership / program.cost * 1000).toFixed(1)} {uiLabels.viewersPerEuro}
                          </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
                          <Button
                            size="small"
                            variant="contained"
                            startIcon={<TrendingUpIcon />}
                            onClick={() => handleAnalyzeProgram(program)}
                            sx={{
                              background: `linear-gradient(135deg, ${config.brandPrimary} 0%, ${config.brandLight} 100%)`,
                              flex: 1
                            }}
                          >
                            {uiLabels.analyze}
                          </Button>
                          <Button
                            size="small"
                            variant="outlined"
                            onClick={() => handleShowDetails(program)}
                            sx={{
                              borderColor: config.brandPrimary,
                              color: config.brandPrimary,
                              flex: 1,
                              '&:hover': {
                                borderColor: config.brandPrimary,
                                backgroundColor: 'rgba(0, 27, 156, 0.04)'
                              }
                            }}
                          >
                            {uiLabels.details}
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
            </Grid>

            {filteredPrograms.filter(program => {
              const matchesSearch = !filters.searchQuery || program.title.toLowerCase().includes(filters.searchQuery.toLowerCase());
              const matchesRating = program.rating >= filters.minRating;
              const matchesScore = program.recommendationScore >= filters.minScore;
              return matchesSearch && matchesRating && matchesScore;
            }).length === 0 && (
              <Box sx={{ textAlign: 'center', py: 4 }}>
                <Typography variant="h6" color="text.secondary">
                  {uiLabels.noResults}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {uiLabels.modifySearch}
                </Typography>
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>

      {/* Program Analysis Modal */}
      <ProgramAnalysisModal
        open={analysisModalOpen}
        onClose={handleCloseAnalysisModal}
        program={selectedProgramForAnalysis}
        config={config}
      />

      {/* Program Details Modal */}
      <ProgramDetailsModal
        open={detailsModalOpen}
        onClose={handleCloseDetailsModal}
        program={selectedProgramForDetails}
        config={config}
      />
    </Box>
  );
}

export default ProgramRecommendations;