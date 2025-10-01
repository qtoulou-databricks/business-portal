import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Chip,
  IconButton,
  Tooltip
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { getAvailableLanguages, getCurrentLanguage, setCurrentLanguage } from '../config/languageConfig';

const LanguageSwitcher = ({ currentLanguage, onLanguageChange }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage);

  const languages = getAvailableLanguages();

  const handleLanguageChange = (languageCode) => {
    if (languageCode !== currentLanguage) {
      setSelectedLanguage(languageCode);
      setCurrentLanguage(languageCode);
      onLanguageChange(languageCode);
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Tooltip title="Change Language / Changer de langue">
        <IconButton size="small" sx={{ color: 'white' }}>
          <LanguageIcon />
        </IconButton>
      </Tooltip>

      <FormControl size="small" sx={{ minWidth: 120 }}>
        <InputLabel
          sx={{
            color: 'rgba(255,255,255,0.8)',
            '&.Mui-focused': { color: 'white' }
          }}
        >
          Language
        </InputLabel>
        <Select
          value={selectedLanguage}
          label="Language"
          onChange={(e) => handleLanguageChange(e.target.value)}
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
          {languages.map((language) => (
            <MenuItem key={language.code} value={language.code}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <span>{language.flag}</span>
                <span>{language.name}</span>
                {language.code === currentLanguage && (
                  <Chip
                    label="Current"
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
    </Box>
  );
};

export default LanguageSwitcher;