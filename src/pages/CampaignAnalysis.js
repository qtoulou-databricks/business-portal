import React, { useState, useEffect } from 'react';
import {
  Grid, Paper, Typography, Box, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Chip, Button, FormControl,
  InputLabel, Select, MenuItem, IconButton, Tooltip
} from '@mui/material';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as ChartTooltip, Legend, ResponsiveContainer } from 'recharts';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CampaignDetailsModal from '../components/CampaignDetailsModal';
import { formatCurrency } from '../config/industryConfig';
import { getMockDataForLanguage, getCurrentLanguage } from '../config/languageConfig';


function CampaignAnalysis({ config }) {
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState('all');
  const [performanceData, setPerformanceData] = useState([]);
  const [budgetData, setBudgetData] = useState([]);
  const [roiTrendData, setRoiTrendData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCampaignDetails, setSelectedCampaignDetails] = useState(null);

  useEffect(() => {
    // Get mock data for the current industry and language
    const currentLanguage = getCurrentLanguage();
    const mockData = getMockDataForLanguage(config.industryName.toLowerCase(), currentLanguage);

    // Use campaigns from industry configuration
    const mockCampaigns = config.sampleCampaigns || [];

    // Generate budget data from first 5 campaigns
    const mockBudgetData = mockCampaigns.slice(0, 5).map(campaign => ({
      campaign: campaign.name.split(' ').slice(0, 2).join(' '), // Shorten campaign name
      allocated: campaign.cost + Math.floor(campaign.cost * 0.1), // 10% more than actual cost
      spent: campaign.cost,
      remaining: Math.floor(campaign.cost * 0.1)
    }));

    setCampaigns(mockCampaigns);
    setPerformanceData(mockData.performanceData);
    setBudgetData(mockBudgetData);
    setRoiTrendData(mockData.roiTrendData);
  }, [config]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'success';
      case 'completed': return 'default';
      case 'paused': return 'warning';
      default: return 'default';
    }
  };

  const handleViewDetails = (campaign) => {
    setSelectedCampaignDetails(campaign);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedCampaignDetails(null);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {config.sections.campaigns}
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6">{config.metrics.campaigns} Performance</Typography>
              <FormControl size="small" sx={{ minWidth: 200 }}>
                <InputLabel>Filter Campaign</InputLabel>
                <Select
                  value={selectedCampaign}
                  label="Filter Campaign"
                  onChange={(e) => setSelectedCampaign(e.target.value)}
                >
                  <MenuItem value="all">Toutes les {config.metrics.campaigns.toLowerCase()}</MenuItem>
                  {campaigns.map((campaign) => (
                    <MenuItem key={campaign.id} value={campaign.id}>
                      {campaign.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>{config.metrics.campaigns}</TableCell>
                    <TableCell>Statut</TableCell>
                    <TableCell align="right">{config.metrics.reach}</TableCell>
                    <TableCell align="right">{config.metrics.engagement}</TableCell>
                    <TableCell align="right">{config.metrics.cost}</TableCell>
                    <TableCell align="right">{config.metrics.roi}</TableCell>
                    <TableCell align="center">{config.metrics.trend}</TableCell>
                    <TableCell align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {campaigns.map((campaign) => (
                    <TableRow key={campaign.id}>
                      <TableCell component="th" scope="row">
                        <Typography variant="subtitle2">{campaign.name}</Typography>
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={campaign.status}
                          color={getStatusColor(campaign.status)}
                          size="small"
                        />
                      </TableCell>
                      <TableCell align="right">
                        {campaign.reach.toLocaleString()}
                      </TableCell>
                      <TableCell align="right">{campaign.engagement}%</TableCell>
                      <TableCell align="right">
                        {formatCurrency(campaign.cost)}
                      </TableCell>
                      <TableCell align="right">{campaign.roi}%</TableCell>
                      <TableCell align="center">
                        {campaign.trend === 'up' ? (
                          <TrendingUpIcon color="success" />
                        ) : (
                          <TrendingDownIcon color="error" />
                        )}
                      </TableCell>
                      <TableCell align="center">
                        <Tooltip title={`Voir les détails de la ${config.metrics.campaigns.toLowerCase()}`}>
                          <IconButton
                            onClick={() => handleViewDetails(campaign)}
                            size="small"
                            sx={{
                              color: config.brandPrimary,
                              '&:hover': {
                                backgroundColor: `${config.brandPrimary}1A`
                              }
                            }}
                          >
                            <VisibilityIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ color: config.brandPrimary, fontWeight: 600 }}>
              {config.chartTitles.monthlyPerformance}
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" orientation="left" tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`} />
                <YAxis yAxisId="right" orientation="right" tickFormatter={(value) => `${value}%`} />
                <ChartTooltip
                  formatter={(value, name) => {
                    if (name === 'reach') return [(value / 1000000).toFixed(1) + 'M', 'Portée'];
                    if (name === 'cost') return [formatCurrency(value), 'Coût'];
                    if (name === 'roi') return [value + '%', 'ROI'];
                    return [value + '%', 'Engagement'];
                  }}
                />
                <Legend />
                <Area type="monotone" dataKey="reach" yAxisId="left" stroke={config.brandPrimary} fill={config.brandPrimary} fillOpacity={0.6} name={(config.chartLegends || {}).reach || 'Portée'} />
                <Area type="monotone" dataKey="engagement" yAxisId="right" stroke={config.brandLight} fill={config.brandLight} fillOpacity={0.6} name={(config.chartLegends || {}).engagement || 'Engagement'} />
              </AreaChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ color: config.brandPrimary, fontWeight: 600 }}>
              {config.chartTitles.budgetVsSpending}
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={budgetData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="campaign" angle={-45} textAnchor="end" height={80} />
                <YAxis />
                <ChartTooltip
                  formatter={(value, name) => {
                    const legends = config.chartLegends || {
                      budgetAllocated: 'Budget alloué',
                      budgetSpent: 'Dépensé',
                      budgetRemaining: 'Restant'
                    };
                    return [formatCurrency(value), name === 'allocated' ? legends.budgetAllocated : name === 'spent' ? legends.budgetSpent : legends.budgetRemaining];
                  }}
                />
                <Legend />
                <Bar dataKey="allocated" fill={config.brandPrimary} name={(config.chartLegends || {}).budgetAllocated || 'Budget alloué'} />
                <Bar dataKey="spent" fill={config.brandLight} name={(config.chartLegends || {}).budgetSpent || 'Dépensé'} />
                <Bar dataKey="remaining" fill={config.brandSecondary} name={(config.chartLegends || {}).budgetRemaining || 'Restant'} />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ color: config.brandPrimary, fontWeight: 600 }}>
              {config.chartTitles.roiTrend}
            </Typography>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={roiTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="period" />
                <YAxis />
                <ChartTooltip
                  formatter={(value, name) => {
                    const channelNames = {
                      overall: 'Global',
                      digital: 'Digital',
                      tv: 'TV',
                      radio: 'Radio'
                    };
                    return [value + '%', channelNames[name] || name];
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="overall" stroke={config.brandPrimary} strokeWidth={3} name={(config.chartLegends || {}).roiOverall || 'ROI Global'} />
                <Line type="monotone" dataKey="digital" stroke={config.brandLight} strokeWidth={2} name={(config.chartLegends || {}).roiDigital || 'ROI Digital'} />
                <Line type="monotone" dataKey="tv" stroke={config.brandSecondary} strokeWidth={2} name={(config.chartLegends || {}).roiTv || 'ROI TV'} />
                <Line type="monotone" dataKey="radio" stroke="#620162" strokeWidth={2} name={(config.chartLegends || {}).roiRadio || 'ROI Radio'} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>

      {/* Campaign Details Modal */}
      <CampaignDetailsModal
        open={modalOpen}
        onClose={handleCloseModal}
        campaign={selectedCampaignDetails}
        config={config}
      />
    </Box>
  );
}

export default CampaignAnalysis;