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
  IconButton
} from '@mui/material';
import {
  Close as CloseIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  PeopleAlt as PeopleIcon,
  MonetizationOn as MoneyIcon,
  Campaign as CampaignIcon,
  Schedule as ScheduleIcon,
  Analytics as AnalyticsIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { getModalDataForLanguage, getCurrentLanguage } from '../config/languageConfig';

const CampaignDetailsModal = ({ open, onClose, campaign, config }) => {
  if (!campaign || !config) return null;

  // Get modal data for current industry and language
  const currentLanguage = getCurrentLanguage();
  const modalData = getModalDataForLanguage(config.industryName.toLowerCase(), currentLanguage);
  const baseDetailedData = modalData?.campaignDetailsData;

  if (!baseDetailedData) {
    console.error('Campaign details data not found for industry:', config.industryName);
    return null;
  }

  // Create dynamic detailed data with industry-specific colors
  const detailedData = {
    reachSources: baseDetailedData.reachSources.map(source => ({
      ...source,
      color: source.source.includes('Télévision') || source.source.includes('Digital B2B') || source.source.includes('E-commerce') ? config.brandPrimary :
             source.source.includes('Digital') || source.source.includes('Online') || source.source.includes('Réseaux sociaux') ? config.brandLight :
             source.source.includes('Radio') || source.source.includes('Événements') || source.source.includes('Influenceurs') ? config.brandSecondary :
             config.brandDark
    })),
    engagementDetails: baseDetailedData.engagementDetails,
    roiBreakdown: baseDetailedData.roiBreakdown,
    weeklyPerformance: [
      { week: 'S1', reach: campaign.reach * 0.35, engagement: campaign.engagement * 0.9, spend: campaign.cost * 0.2 },
      { week: 'S2', reach: campaign.reach * 0.53, engagement: campaign.engagement * 1.05, spend: campaign.cost * 0.28 },
      { week: 'S3', reach: campaign.reach * 0.8, engagement: campaign.engagement * 1.18, spend: campaign.cost * 0.34 },
      { week: 'S4', reach: campaign.reach, engagement: campaign.engagement * 1.2, spend: campaign.cost * 0.38 }
    ],
    keyInsights: baseDetailedData.keyInsights,
    nextBestActions: baseDetailedData.nextBestActions
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'success';
      case 'completed': return 'default';
      case 'paused': return 'warning';
      default: return 'default';
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
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
            {campaign.name}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
            <Chip
              label={campaign.status}
              color={getStatusColor(campaign.status)}
              size="small"
            />
            <Typography variant="body2" sx={{ color: 'white' }}>
              Budget: {formatCurrency(campaign.cost)}
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
                <PeopleIcon sx={{ color: config.brandPrimary, fontSize: 32, mb: 1 }} />
                <Typography variant="h5" sx={{ fontWeight: 700, color: config.brandPrimary }}>
                  {(campaign.reach / 1000000).toFixed(1)}M
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Portée totale
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#f8faff' }}>
                <AnalyticsIcon sx={{ color: config.brandLight, fontSize: 32, mb: 1 }} />
                <Typography variant="h5" sx={{ fontWeight: 700, color: config.brandLight }}>
                  {campaign.engagement}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Engagement
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#f8faff' }}>
                <MoneyIcon sx={{ color: config.brandSecondary, fontSize: 32, mb: 1 }} />
                <Typography variant="h5" sx={{ fontWeight: 700, color: config.brandSecondary }}>
                  {campaign.roi}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ROI
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#f8faff' }}>
                <CampaignIcon sx={{ color: config.brandDark, fontSize: 32, mb: 1 }} />
                <Typography variant="h5" sx={{ fontWeight: 700, color: config.brandDark }}>
                  {campaign.trend === 'up' ? '+' : ''}{Math.round((campaign.engagement - 6.5) * 10)}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  vs Objectif
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          {/* Charts Section */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {/* Reach Sources */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ color: config.brandPrimary, fontWeight: 600 }}>
                  {config.modalTitles?.reachSources || 'Source de portée'}
                </Typography>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={detailedData.reachSources}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ source, value }) => `${source} ${value}%`}
                      outerRadius={80}
                      dataKey="value"
                    >
                      {detailedData.reachSources.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>

            {/* Weekly Performance */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ color: config.brandPrimary, fontWeight: 600 }}>
                  {config.modalTitles?.weeklyPerformance || 'Performance hebdomadaire'}
                </Typography>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={detailedData.weeklyPerformance}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip formatter={(value, name) => [
                      name === 'reach' ? value.toLocaleString() :
                      name === 'spend' ? formatCurrency(value) :
                      value + '%',
                      name === 'reach' ? 'Portée' :
                      name === 'spend' ? 'Dépense' : 'Engagement'
                    ]} />
                    <Line type="monotone" dataKey="reach" stroke={config.brandPrimary} strokeWidth={2} />
                    <Line type="monotone" dataKey="engagement" stroke={config.brandLight} strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
          </Grid>

          {/* Engagement Details */}
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#001b9c', fontWeight: 600 }}>
              {config.modalTitles?.engagementDetails || 'Détails d\'engagement'}
            </Typography>
            <Grid container spacing={2}>
              {detailedData.engagementDetails.map((item, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <Box sx={{
                    p: 2,
                    border: '1px solid #e0e0e0',
                    borderRadius: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        {item.value}{item.unit}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.metric}
                      </Typography>
                    </Box>
                    {item.trend === 'up' ?
                      <TrendingUpIcon sx={{ color: '#2e7d32' }} /> :
                      <TrendingDownIcon sx={{ color: '#d32f2f' }} />
                    }
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* ROI Breakdown */}
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#001b9c', fontWeight: 600 }}>
              {config.modalTitles?.costBreakdown || 'Répartition des coûts'}
            </Typography>
            {detailedData.roiBreakdown.map((item, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">{item.category}</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {formatCurrency(item.amount)} ({item.percentage}%)
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={item.percentage}
                  sx={{
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: '#f0f0f0',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: config.brandPrimary
                    }
                  }}
                />
              </Box>
            ))}
          </Paper>

          {/* Key Insights and Next Best Actions */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" gutterBottom sx={{ color: config.brandPrimary, fontWeight: 600 }}>
                  Insights
                </Typography>
                <List dense>
                  {detailedData.keyInsights.map((insight, index) => (
                    <ListItem key={index} sx={{ pl: 0 }}>
                      <ListItemIcon>
                        <Box sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          backgroundColor: config.brandLight
                        }} />
                      </ListItemIcon>
                      <ListItemText primary={insight} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" gutterBottom sx={{ color: config.brandPrimary, fontWeight: 600 }}>
                  Next best actions
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {detailedData.nextBestActions.map((action, index) => {
                    const getPriorityColor = (priority) => {
                      switch (priority.toLowerCase()) {
                        case 'haute': return '#d32f2f';
                        case 'moyenne': return '#fb7e44';
                        case 'basse': return '#2e7d32';
                        default: return '#6679f9';
                      }
                    };

                    return (
                      <Box key={index} sx={{
                        p: 2,
                        border: `1px solid ${getPriorityColor(action.priority)}`,
                        borderRadius: 1,
                        backgroundColor: `${getPriorityColor(action.priority)}08`
                      }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                          <Chip
                            label={`Priorité ${action.priority}`}
                            size="small"
                            sx={{
                              backgroundColor: getPriorityColor(action.priority),
                              color: 'white',
                              fontWeight: 600
                            }}
                          />
                          <Typography variant="caption" sx={{ color: config.brandLight, fontWeight: 500 }}>
                            {action.timeline}
                          </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>
                          {action.action}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                          💡 {action.impact}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>
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

export default CampaignDetailsModal;