import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Chip,
  IconButton,
  Divider,
  Grid,
  Paper
} from '@mui/material';
import {
  Close as CloseIcon,
  Schedule as ScheduleIcon,
  PeopleAlt as PeopleIcon,
  MonetizationOn as MoneyIcon,
  Star as StarIcon,
  Category as CategoryIcon
} from '@mui/icons-material';
import { getModalDataForLanguage, getCurrentLanguage } from '../config/languageConfig';

const ProgramDetailsModal = ({ open, onClose, program, config }) => {
  if (!program || !config) return null;

  // Get modal data for current industry and language
  const currentLanguage = getCurrentLanguage();
  const modalData = getModalDataForLanguage(config.industryName.toLowerCase(), currentLanguage);

  // Get industry-specific descriptions and synopses
  const getDescription = (program) => {
    return modalData.programDescriptions[program.title] || `Programme de qualité développé spécialement pour ${config.companyName}, alliant excellence et innovation.`;
  };

  const getSynopsis = (program) => {
    return modalData.programSynopses[program.title] || `Un contenu exceptionnel qui saura captiver et engager l'audience ${config.companyName}.`;
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount);
  };

  // Get industry-specific time slot labels
  const timeSlotLabels = modalData.timeSlotLabels;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: { borderRadius: 2 }
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
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {program.title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
            <Chip
              label={program.genre}
              size="small"
              sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }}
            />
            <Chip
              label={timeSlotLabels[program.timeSlot] || program.timeSlot}
              size="small"
              sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }}
            />
          </Box>
        </Box>
        <IconButton onClick={onClose} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: 3 }}>
        {/* Key Info Cards */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={6} sm={3}>
            <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#f8faff' }}>
              <StarIcon sx={{ color: config.brandPrimary, mb: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: config.brandPrimary }}>
                {program.rating}/10
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Note
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#f8faff' }}>
              <PeopleIcon sx={{ color: config.brandLight, mb: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: config.brandLight }}>
                {(program.viewership / 1000000).toFixed(1)}M
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Audience
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#f8faff' }}>
              <MoneyIcon sx={{ color: config.brandSecondary, mb: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: config.brandSecondary }}>
                {formatCurrency(program.cost)}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Budget
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#f8faff' }}>
              <CategoryIcon sx={{ color: config.brandDark, mb: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: config.brandDark }}>
                {program.recommendationScore}%
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Score
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Description */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ color: config.brandPrimary, fontWeight: 600 }}>
            Description du programme
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7, color: 'text.primary' }}>
            {getDescription(program)}
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Synopsis */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ color: config.brandPrimary, fontWeight: 600 }}>
            Synopsis
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7, color: 'text.primary', fontStyle: 'italic' }}>
            {getSynopsis(program)}
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Additional Info */}
        <Box>
          <Typography variant="h6" gutterBottom sx={{ color: config.brandPrimary, fontWeight: 600 }}>
            Informations techniques
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <ScheduleIcon sx={{ color: config.brandLight, mr: 1, fontSize: 20 }} />
                <Typography variant="body2">
                  <strong>Créneau :</strong> {timeSlotLabels[program.timeSlot] || program.timeSlot}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <PeopleIcon sx={{ color: config.brandLight, mr: 1, fontSize: 20 }} />
                <Typography variant="body2">
                  <strong>Cible :</strong> {program.targetDemo} ans
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <CategoryIcon sx={{ color: config.brandLight, mr: 1, fontSize: 20 }} />
                <Typography variant="body2">
                  <strong>Genre :</strong> {program.genre}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <StarIcon sx={{ color: config.brandLight, mr: 1, fontSize: 20 }} />
                <Typography variant="body2">
                  <strong>Saisonnalité :</strong> {
                    program.seasonality === 'high' ? 'Forte' :
                    program.seasonality === 'medium' ? 'Moyenne' : 'Faible'
                  }
                </Typography>
              </Box>
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

export default ProgramDetailsModal;