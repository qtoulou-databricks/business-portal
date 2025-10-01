import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Chip,
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Alert
} from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import BusinessIcon from '@mui/icons-material/Business';
import { getAvailableIndustries } from '../config/industryConfig';
import { switchIndustryInLanguage, getCurrentLanguage } from '../config/languageConfig';

const IndustrySwitcher = ({ currentIndustry, onIndustryChange, currentLanguage }) => {
  const [selectedIndustry, setSelectedIndustry] = useState(currentIndustry);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [pendingIndustry, setPendingIndustry] = useState(null);

  const industries = getAvailableIndustries();
  const lang = currentLanguage || getCurrentLanguage();

  // Get industry labels based on current language
  const industryLabels = lang === 'en' ? {
    media: 'Media & Television',
    energy: 'Energy & Utilities',
    retail: 'Retail & Commerce'
  } : {
    media: 'Médias & Télévision',
    energy: 'Énergie & Utilities',
    retail: 'Commerce & Retail'
  };

  const handleIndustrySelect = (industry) => {
    if (industry !== currentIndustry) {
      setPendingIndustry(industry);
      setDialogOpen(true);
    }
  };

  const handleConfirmSwitch = () => {
    if (pendingIndustry) {
      setSelectedIndustry(pendingIndustry);
      const newConfig = switchIndustryInLanguage(pendingIndustry, lang);
      onIndustryChange(pendingIndustry, newConfig);
    }
    setDialogOpen(false);
    setPendingIndustry(null);
  };

  const handleCancelSwitch = () => {
    setDialogOpen(false);
    setPendingIndustry(null);
  };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Tooltip title={lang === 'en' ? 'Change business sector' : 'Changer de secteur d\'activité'}>
          <IconButton size="small" sx={{ color: 'white' }}>
            <BusinessIcon />
          </IconButton>
        </Tooltip>

        <FormControl size="small" sx={{ minWidth: 180 }}>
          <InputLabel
            sx={{
              color: 'rgba(255,255,255,0.8)',
              '&.Mui-focused': { color: 'white' }
            }}
          >
            {lang === 'en' ? 'Sector' : 'Secteur'}
          </InputLabel>
          <Select
            value={selectedIndustry}
            label={lang === 'en' ? 'Sector' : 'Secteur'}
            onChange={(e) => handleIndustrySelect(e.target.value)}
            sx={{
              color: 'white',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(255,255,255,0.3)'
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(255,255,255,0.5)'
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white'
              },
              '& .MuiSvgIcon-root': {
                color: 'white'
              }
            }}
          >
            {industries.map((industry) => (
              <MenuItem key={industry} value={industry}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <span>{industryLabels[industry] || industry}</span>
                  {industry === currentIndustry && (
                    <Chip
                      label={lang === 'en' ? 'Current' : 'Actuel'}
                      size="small"
                      color="primary"
                      sx={{ fontSize: '0.6rem', height: 16 }}
                    />
                  )}
                </Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Tooltip title={lang === 'en' ? 'Switch between contexts' : 'Basculer entre les contextes'}>
          <IconButton size="small" sx={{ color: 'rgba(255,255,255,0.8)' }}>
            <SwapHorizIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Dialog
        open={dialogOpen}
        onClose={handleCancelSwitch}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{
          color: '#001b9c',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}>
          <SwapHorizIcon />
          {lang === 'en' ? 'Change industrial context' : 'Changer de contexte industriel'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 2 }}>
            {lang === 'en'
              ? `You are about to switch from ${industryLabels[currentIndustry]} context to ${industryLabels[pendingIndustry]} context.`
              : `Vous êtes sur le point de basculer du contexte ${industryLabels[currentIndustry]} vers ${industryLabels[pendingIndustry]}.`
            }
          </DialogContentText>

          <Alert severity="info" sx={{ mb: 2 }}>
            <strong>{lang === 'en' ? 'Changes applied:' : 'Changements appliqués :'}</strong>
            <ul style={{ margin: '8px 0', paddingLeft: '20px' }}>
              {lang === 'en' ? (
                <>
                  <li>Business terminology adapted to the sector</li>
                  <li>Specific metrics and indicators</li>
                  <li>Adjusted colors and branding</li>
                  <li>Representative data samples</li>
                </>
              ) : (
                <>
                  <li>Terminologie métier adaptée au secteur</li>
                  <li>Métriques et indicateurs spécifiques</li>
                  <li>Couleurs et branding ajustés</li>
                  <li>Échantillons de données représentatifs</li>
                </>
              )}
            </ul>
          </Alert>

          <DialogContentText>
            {lang === 'en'
              ? 'This action will reload the interface with the new configuration. Do you want to continue?'
              : 'Cette action rechargera l\'interface avec la nouvelle configuration. Souhaitez-vous continuer ?'
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelSwitch} color="primary">
            {lang === 'en' ? 'Cancel' : 'Annuler'}
          </Button>
          <Button
            onClick={handleConfirmSwitch}
            color="primary"
            variant="contained"
            startIcon={<SwapHorizIcon />}
          >
            {lang === 'en'
              ? `Switch to ${industryLabels[pendingIndustry]}`
              : `Basculer vers ${industryLabels[pendingIndustry]}`
            }
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default IndustrySwitcher;