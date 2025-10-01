import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography, Box, Alert, Chip } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, ResponsiveContainer } from 'recharts';
import audienceService from '../services/audienceService';
import { formatCurrency, formatNumber } from '../config/industryConfig';
import { getMockDataForLanguage, getCurrentLanguage } from '../config/languageConfig';

const MetricCard = ({ title, value, unit, color = '#1976d2' }) => (
  <Paper sx={{ p: 3, textAlign: 'center', height: '120px' }}>
    <Typography variant="h4" sx={{ color, fontWeight: 'bold', mb: 1 }}>
      {value}{unit}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {title}
    </Typography>
  </Paper>
);

function Dashboard({ config }) {
  const [metrics, setMetrics] = useState({});

  const [viewershipData, setViewershipData] = useState([]);
  const [programData, setProgramData] = useState([]);

  useEffect(() => {
    // Get mock data for the current industry and language
    const currentLanguage = getCurrentLanguage();
    const mockData = getMockDataForLanguage(config.industryName.toLowerCase(), currentLanguage);

    setMetrics(mockData.metrics);
    setViewershipData(mockData.viewershipData);
    setProgramData(mockData.programData);
  }, [config]);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {config.dashboardTitle}
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard
            title={config.metrics.totalViewers}
            value={formatNumber(metrics.totalViewers)}
            unit=""
            color={config.brandPrimary}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard
            title={config.metrics.averageRating}
            value={metrics.avgRating}
            unit="/10"
            color={config.brandLight}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard
            title={config.metrics.activeCampaigns}
            value={metrics.activeCampaigns}
            unit=""
            color={config.brandSecondary}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard
            title={config.metrics.topPrograms}
            value={metrics.topPrograms}
            unit=""
            color="#620162"
          />
        </Grid>
      </Grid>

      {/* Executive Summary */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12}>
          <Paper sx={{
            p: 3,
            background: `linear-gradient(135deg, ${config.brandPrimary} 0%, ${config.brandLight} 100%)`,
            color: 'white'
          }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Exec Summary 
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box sx={{ p: 2, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 1, mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: 'white' }}>
                    📊 {config.executiveSummary.performance}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {config.executiveSummary.campaignText}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    <Chip label={`18 ${config.metrics.campaigns.toLowerCase()} actives`} size="small" sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                    <Chip label="ROI moyen: 245%" size="small" sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                    <Chip label="+12% vs 2023" size="small" sx={{ bgcolor: '#2e7d32', color: 'white' }} />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ p: 2, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 1, mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: 'white' }}>
                    👥 {config.executiveSummary.audience}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {config.executiveSummary.audienceText}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    <Chip label={`#1 ${config.industryName}`} size="small" sx={{ bgcolor: '#2e7d32', color: 'white' }} />
                    <Chip label="Note: 7.8/10" size="small" sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                    <Chip label="Prime Time: +8%" size="small" sx={{ bgcolor: '#2e7d32', color: 'white' }} />
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Alert severity="info" sx={{
              mt: 2,
              bgcolor: 'rgba(255,255,255,0.95)',
              color: config.brandPrimary,
              '& .MuiAlert-icon': { color: config.brandPrimary }
            }}>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                <strong>Action prioritaire :</strong> {config.executiveSummary.priorityAction}
              </Typography>
            </Alert>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" sx={{ color: config.brandPrimary, fontWeight: 600 }}>
                {config.chartTitles.audienceEvolution}
              </Typography>
              <Chip
                label="Pic: 8.5M à 20H"
                sx={{ bgcolor: '#f8faff', color: config.brandPrimary, fontWeight: 600 }}
                size="small"
              />
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              <strong>Synthèse :</strong> {config.dashboardSynthesis?.audienceEvolution || 'No synthesis available'}
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={viewershipData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip formatter={(value) => [value.toLocaleString(), 'Viewers']} />
                <Line type="monotone" dataKey="viewers" stroke={config.brandPrimary} strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" sx={{ color: config.brandPrimary, fontWeight: 600 }}>
                {config.chartTitles.topPrograms}
              </Typography>
              <Chip
                label="Note moyenne: 8.4/10"
                sx={{ bgcolor: '#f8faff', color: config.brandPrimary, fontWeight: 600 }}
                size="small"
              />
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              <strong>Synthèse :</strong> {config.dashboardSynthesis?.topPrograms
                ? config.dashboardSynthesis.topPrograms
                  .replace('{program1}', config.sampleContent[0]?.name || 'Program 1')
                  .replace('{program2}', config.sampleContent[2]?.name || 'Program 2')
                : 'No synthesis available'}
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={programData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="program" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="rating" fill={config.brandLight} />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;