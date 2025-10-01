import React from 'react';
import { Paper, Typography, Box, IconButton } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import InfoIcon from '@mui/icons-material/Info';

const MetricsCard = ({
  title,
  value,
  unit = '',
  change = null,
  changePercent = null,
  icon: IconComponent,
  color = '#1976d2',
  subtitle = null,
  onClick = null
}) => {
  const formatValue = (val) => {
    if (typeof val === 'number') {
      if (val >= 1000000) {
        return (val / 1000000).toFixed(1) + 'M';
      } else if (val >= 1000) {
        return (val / 1000).toFixed(1) + 'K';
      }
      return val.toLocaleString();
    }
    return val;
  };

  const getTrendIcon = () => {
    if (!changePercent) return null;
    return changePercent > 0 ?
      <TrendingUpIcon sx={{ color: '#2e7d32', fontSize: 16 }} /> :
      <TrendingDownIcon sx={{ color: '#d32f2f', fontSize: 16 }} />;
  };

  const getTrendColor = () => {
    if (!changePercent) return 'text.secondary';
    return changePercent > 0 ? '#2e7d32' : '#d32f2f';
  };

  return (
    <Paper
      sx={{
        p: 3,
        height: '140px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: onClick ? 'pointer' : 'default',
        '&:hover': onClick ? { elevation: 4 } : {}
      }}
      onClick={onClick}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="caption" color="text.secondary" display="block">
              {subtitle}
            </Typography>
          )}
        </Box>
        {IconComponent && (
          <IconComponent sx={{ color: color, fontSize: 24, opacity: 0.7 }} />
        )}
      </Box>

      <Box>
        <Typography
          variant="h4"
          component="div"
          sx={{
            color: color,
            fontWeight: 600,
            lineHeight: 1.2,
            mb: 0.5
          }}
        >
          {formatValue(value)}{unit}
        </Typography>

        {(change !== null || changePercent !== null) && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            {getTrendIcon()}
            <Typography
              variant="body2"
              sx={{ color: getTrendColor(), fontWeight: 500 }}
            >
              {change && `${change > 0 ? '+' : ''}${formatValue(change)}${unit} `}
              {changePercent && `(${changePercent > 0 ? '+' : ''}${changePercent.toFixed(1)}%)`}
            </Typography>
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export default MetricsCard;