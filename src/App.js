import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, AppBar, Toolbar, Typography, Container, Tabs, Tab, Box, Chip } from '@mui/material';
import CampaignAnalysis from './pages/CampaignAnalysis';
import ProgramRecommendations from './pages/ProgramRecommendations';
import Dashboard from './pages/Dashboard';
import TF1Logo from './components/TF1Logo';
import IndustrySwitcher from './components/IndustrySwitcher';
import LanguageSwitcher from './components/LanguageSwitcher';
import { getLanguageConfig, getCurrentLanguage, setCurrentLanguage, switchIndustryInLanguage } from './config/languageConfig';

const createAppTheme = (config) => createTheme({
  palette: {
    primary: {
      main: config.brandPrimary,
      dark: config.brandDark,
      light: config.brandLight,
    },
    secondary: {
      main: config.brandSecondary,
      dark: config.brandSecondary,
      light: config.brandSecondary,
    },
    background: {
      default: '#f5f7fa',
      paper: '#ffffff',
    },
    text: {
      primary: '#2c3e50',
      secondary: '#7f8c8d',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
      color: config.brandPrimary,
      letterSpacing: '-0.02em',
    },
    h6: {
      fontWeight: 600,
      color: '#2c3e50',
      letterSpacing: '-0.01em',
    },
    body1: {
      fontSize: '0.95rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: `linear-gradient(135deg, ${config.brandPrimary} 0%, ${config.brandLight} 100%)`,
          boxShadow: `0 2px 12px ${config.brandPrimary}25`,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '0.95rem',
        },
      },
    },
  },
});

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function App() {
  const [tabValue, setTabValue] = useState(0);
  const [currentIndustry, setCurrentIndustry] = useState('media');
  const [currentLanguage, setCurrentLanguageState] = useState(getCurrentLanguage());
  const [config, setConfig] = useState(getLanguageConfig(currentLanguage));
  const [theme, setTheme] = useState(createAppTheme(getLanguageConfig(currentLanguage)));

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleIndustryChange = (industry, newConfig) => {
    setCurrentIndustry(industry);
    setConfig(newConfig);
    setTheme(createAppTheme(newConfig));
  };

  const handleLanguageChange = (languageCode) => {
    setCurrentLanguageState(languageCode);
    setCurrentLanguage(languageCode);
    const newConfig = switchIndustryInLanguage(currentIndustry, languageCode);
    setConfig(newConfig);
    setTheme(createAppTheme(newConfig));
  };

  useEffect(() => {
    document.title = config.businessPortalTitle;
  }, [config]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" elevation={0}>
        <Toolbar sx={{ py: 1 }}>
          <TF1Logo width={0} height={0} />
          <Box sx={{ ml: 2, display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 700,
                fontSize: '1.3rem',
                letterSpacing: '-0.01em',
                color: 'white'
              }}
            >
              {config.businessPortalTitle}
            </Typography>
          </Box>
          <Box sx={{ ml: 'auto', display: 'flex', gap: 2 }}>
            <LanguageSwitcher
              currentLanguage={currentLanguage}
              onLanguageChange={handleLanguageChange}
            />
            <IndustrySwitcher
              currentIndustry={currentIndustry}
              currentLanguage={currentLanguage}
              onIndustryChange={handleIndustryChange}
            />
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl">
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 2 }}>
          <Tabs value={tabValue} onChange={handleTabChange} aria-label={`${config.companyName} business portal tabs`}>
            <Tab label={config.sections.dashboard} />
            <Tab label={config.sections.campaigns} />
            <Tab label={config.sections.audience} />
          </Tabs>
        </Box>

        <TabPanel value={tabValue} index={0}>
          <Dashboard config={config} />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <CampaignAnalysis config={config} />
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <ProgramRecommendations config={config} />
        </TabPanel>
      </Container>
    </ThemeProvider>
  );
}

export default App;