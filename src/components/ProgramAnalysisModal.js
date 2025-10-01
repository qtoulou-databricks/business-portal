import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  Paper,
  Typography,
  Box,
  LinearProgress,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import {
  Close as CloseIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  PeopleAlt as PeopleIcon,
  MonetizationOn as MoneyIcon,
  Schedule as ScheduleIcon,
  Analytics as AnalyticsIcon,
  Star as StarIcon,
  Visibility as VisibilityIcon,
  CompareArrows as CompareIcon
} from '@mui/icons-material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { getModalDataForLanguage, getCurrentLanguage } from '../config/languageConfig';

const ProgramAnalysisModal = ({ open, onClose, program, config }) => {
  if (!program || !config) return null;

  // Get modal data for current industry and language
  const currentLanguage = getCurrentLanguage();
  const modalData = getModalDataForLanguage(config.industryName.toLowerCase(), currentLanguage);
  const baseAnalysisData = modalData?.analysisData || {};

  // Default modal labels with fallbacks
  const defaultModalLabels = {
    title: 'Detailed Analysis:',
    scoreLabel: 'Score:',
    metricLabels: {
      audience: 'Audience',
      rating: 'Rating',
      cost: 'Cost',
      score: 'Score'
    },
    chartTitles: {
      multiCriteria: 'Multi-criteria Analysis',
      audienceTrend: 'Audience Trend',
      competitorAnalysis: 'Competitor Analysis'
    },
    radarLabels: {
      audience: 'Audience',
      costEfficiency: 'Cost-efficiency',
      engagement: 'Engagement',
      potential: 'Potential',
      competition: 'Competition',
      seasonality: 'Seasonality'
    },
    tooltipLabels: {
      audience: 'Audience',
      rating: 'Rating',
      cost: 'Cost',
      performance: 'Performance'
    },
    sectionTitles: {
      performanceMetrics: 'Performance Metrics',
      keyInsights: 'Key Insights',
      identifiedRisks: 'Identified Risks',
      recommendations: 'Recommendations'
    }
  };

  // Merge with language-specific labels
  const modalLabels = {
    ...defaultModalLabels,
    ...baseAnalysisData.modalLabels,
    metricLabels: { ...defaultModalLabels.metricLabels, ...baseAnalysisData.modalLabels?.metricLabels },
    chartTitles: { ...defaultModalLabels.chartTitles, ...baseAnalysisData.modalLabels?.chartTitles },
    radarLabels: { ...defaultModalLabels.radarLabels, ...baseAnalysisData.modalLabels?.radarLabels },
    tooltipLabels: { ...defaultModalLabels.tooltipLabels, ...baseAnalysisData.modalLabels?.tooltipLabels },
    sectionTitles: { ...defaultModalLabels.sectionTitles, ...baseAnalysisData.modalLabels?.sectionTitles }
  };

  // Create dynamic analysis data based on program and industry with safety checks
  const analysisData = {
    competitorComparison: (baseAnalysisData.competitorComparison || []).map((competitor, index) => ({
      ...competitor,
      rating: index === 0 ? program.rating : program.rating - (0.3 + index * 0.2),
      viewership: index === 0 ? program.viewership : program.viewership * (0.9 - index * 0.15),
      cost: index === 0 ? program.cost : program.cost * (0.8 + index * 0.1)
    })),
    audienceProfile: baseAnalysisData.audienceProfile || [],
    performanceMetrics: baseAnalysisData.performanceMetrics || [],
    weeklyTrend: [
      { week: 'S1', audience: program.viewership * 0.85, rating: program.rating - 0.3 },
      { week: 'S2', audience: program.viewership * 0.92, rating: program.rating - 0.1 },
      { week: 'S3', audience: program.viewership * 1.05, rating: program.rating + 0.2 },
      { week: 'S4', audience: program.viewership, rating: program.rating },
      { week: 'S5', audience: program.viewership * 1.08, rating: program.rating + 0.1 },
      { week: 'S6', audience: program.viewership * 1.12, rating: program.rating + 0.3 }
    ],
radarData: [
      { subject: modalLabels.radarLabels.audience, A: program.rating * 10, fullMark: 100 },
      { subject: modalLabels.radarLabels.costEfficiency, A: Math.max(10, 100 - (program.cost / 1000)), fullMark: 100 },
      { subject: modalLabels.radarLabels.engagement, A: program.recommendationScore * 0.8, fullMark: 100 },
      { subject: modalLabels.radarLabels.potential, A: program.recommendationScore, fullMark: 100 },
      { subject: modalLabels.radarLabels.competition, A: Math.min(90, Math.max(10, 60 + (program.rating - 7.5) * 20)), fullMark: 100 },
      { subject: modalLabels.radarLabels.seasonality, A: program.seasonality === 'high' ? 90 : program.seasonality === 'medium' ? 65 : 40, fullMark: 100 }
    ],
    keyInsights: baseAnalysisData.keyInsights || [],
    risks: baseAnalysisData.risks || [],
    recommendations: baseAnalysisData.recommendations || []
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount);
  };

  const getScoreColor = (value, benchmark) => {
    const ratio = value / benchmark;
    if (ratio >= 1.1) return '#2e7d32';
    if (ratio >= 0.95) return '#fb7e44';
    return '#d32f2f';
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xl"
      fullWidth
      PaperProps={{
        sx: { borderRadius: 2, maxHeight: '90vh' }
      }}
    >
      <DialogTitle sx={{
        background: `linear-gradient(135deg, ${config.brandPrimary} 0%, ${config.brandLight} 100%)`,
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700, color: 'white' }}>
{modalLabels.title} {program.title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
            <Chip
              label={program.genre}
              size="small"
              sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }}
            />
            <Chip
              label={program.timeSlot}
              size="small"
              sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }}
            />
            <Typography variant="body2" sx={{ color: 'white' }}>
{modalLabels.scoreLabel} {program.recommendationScore}%
            </Typography>
          </Box>
        </Box>
        <IconButton onClick={onClose} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: 0 }}>
        <Box sx={{ p: 3 }}>
          {/* Key Metrics Row */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={6} md={3}>
              <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#f8faff' }}>
                <VisibilityIcon sx={{ color: config.brandPrimary, fontSize: 32, mb: 1 }} />
                <Typography variant="h5" sx={{ fontWeight: 700, color: config.brandPrimary }}>
                  {(program.viewership / 1000000).toFixed(1)}M
                </Typography>
                <Typography variant="body2" color="text.secondary">
{modalLabels.metricLabels.audience}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#f8faff' }}>
                <StarIcon sx={{ color: config.brandLight, fontSize: 32, mb: 1 }} />
                <Typography variant="h5" sx={{ fontWeight: 700, color: config.brandLight }}>
                  {program.rating}/10
                </Typography>
                <Typography variant="body2" color="text.secondary">
{modalLabels.metricLabels.rating}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#f8faff' }}>
                <MoneyIcon sx={{ color: config.brandSecondary, fontSize: 32, mb: 1 }} />
                <Typography variant="h5" sx={{ fontWeight: 700, color: config.brandSecondary }}>
                  {formatCurrency(program.cost)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
{modalLabels.metricLabels.cost}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#f8faff' }}>
                <AnalyticsIcon sx={{ color: config.brandDark, fontSize: 32, mb: 1 }} />
                <Typography variant="h5" sx={{ fontWeight: 700, color: config.brandDark }}>
                  {program.recommendationScore}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
{modalLabels.metricLabels.score}
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          {/* Charts Section */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {/* Performance Radar */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ color: config.brandPrimary, fontWeight: 600 }}>
{modalLabels.chartTitles.multiCriteria}
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={analysisData.radarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tickCount={5} />
                    <Radar
name={modalLabels.tooltipLabels.performance}
                      dataKey="A"
                      stroke="#001b9c"
                      fill="#001b9c"
                      fillOpacity={0.3}
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>

            {/* Weekly Trend */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ color: config.brandPrimary, fontWeight: 600 }}>
{modalLabels.chartTitles.audienceTrend}
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={analysisData.weeklyTrend}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip formatter={(value, name) => [
                      name === 'audience' ? (value / 1000000).toFixed(1) + 'M' : value.toFixed(1),
name === 'audience' ? modalLabels.tooltipLabels.audience : modalLabels.tooltipLabels.rating
                    ]} />
                    <Line type="monotone" dataKey="audience" stroke="#001b9c" strokeWidth={2} name="audience" />
                    <Line type="monotone" dataKey="rating" stroke="#6679f9" strokeWidth={2} name="rating" />
                  </LineChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
          </Grid>

          {/* Competitive Analysis */}
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#001b9c', fontWeight: 600 }}>
{modalLabels.chartTitles.competitorAnalysis}
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={analysisData.competitorComparison}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="network" />
                <YAxis yAxisId="left" orientation="left" domain={[0, 10]} tickFormatter={(value) => `${value.toFixed(1)}`} />
                <YAxis yAxisId="right" orientation="right" tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`} />
                <Tooltip formatter={(value, name) => {
if (name === 'viewership') return [(value / 1000000).toFixed(1) + 'M', modalLabels.tooltipLabels.audience];
                  if (name === 'cost') return [formatCurrency(value), modalLabels.tooltipLabels.cost];
                  return [value.toFixed(1), modalLabels.tooltipLabels.rating];
                }} />
                <Bar dataKey="rating" yAxisId="left" fill="#001b9c" name="rating" />
                <Bar dataKey="viewership" yAxisId="right" fill="#6679f9" name="viewership" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>

          {/* Performance Metrics */}
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#001b9c', fontWeight: 600 }}>
              Indicateurs de performance
            </Typography>
            <Grid container spacing={2}>
              {analysisData.performanceMetrics.map((item, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <Box sx={{
                    p: 2,
                    border: '1px solid #e0e0e0',
                    borderRadius: 1,
                    textAlign: 'center'
                  }}>
                    <Typography variant="h6" sx={{
                      fontWeight: 700,
                      color: getScoreColor(item.value, item.benchmark)
                    }}>
                      {item.value}{item.unit}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {item.metric}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Benchmark: {item.benchmark}{item.unit}
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={Math.min((item.value / item.benchmark) * 100, 100)}
                      sx={{
                        mt: 1,
                        height: 4,
                        borderRadius: 2,
                        backgroundColor: '#f0f0f0',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: getScoreColor(item.value, item.benchmark)
                        }
                      }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* Insights and Recommendations */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ color: config.brandPrimary, fontWeight: 600 }}>
{modalLabels.sectionTitles.keyInsights}
                </Typography>
                <List dense>
                  {analysisData.keyInsights.map((insight, index) => (
                    <ListItem key={index} sx={{ pl: 0 }}>
                      <ListItemIcon>
                        <TrendingUpIcon sx={{ color: '#2e7d32' }} />
                      </ListItemIcon>
                      <ListItemText primary={insight} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ color: config.brandPrimary, fontWeight: 600 }}>
{modalLabels.sectionTitles.identifiedRisks}
                </Typography>
                <List dense>
                  {analysisData.risks.map((risk, index) => (
                    <ListItem key={index} sx={{ pl: 0 }}>
                      <ListItemIcon>
                        <TrendingDownIcon sx={{ color: '#d32f2f' }} />
                      </ListItemIcon>
                      <ListItemText primary={risk} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ color: config.brandPrimary, fontWeight: 600 }}>
{modalLabels.sectionTitles.recommendations}
                </Typography>
                <List dense>
                  {analysisData.recommendations.map((rec, index) => (
                    <ListItem key={index} sx={{ pl: 0 }}>
                      <ListItemIcon>
                        <Box sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          backgroundColor: config.brandLight
                        }} />
                      </ListItemIcon>
                      <ListItemText primary={rec} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 3, pt: 0 }}>
        <Button onClick={onClose} variant="contained" sx={{
          background: `linear-gradient(135deg, ${config.brandPrimary} 0%, ${config.brandLight} 100%)`,
          px: 4
        }}>
          Fermer
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProgramAnalysisModal;