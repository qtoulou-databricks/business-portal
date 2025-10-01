// Language Configuration System
// This file manages language switching between French and English versions

// Language imports
import * as industryConfigFR from './industryConfig.js';
import * as industryConfigEN from './industryConfig.en.js';
import * as mockDataFR from './mockData.js';
import * as mockDataEN from './mockData.en.js';

// Available languages
const AVAILABLE_LANGUAGES = {
  fr: {
    code: 'fr',
    name: 'Français',
    flag: '🇫🇷',
    config: industryConfigFR.default,
    switchIndustry: industryConfigFR.switchIndustry,
    mockData: mockDataFR
  },
  en: {
    code: 'en',
    name: 'English',
    flag: '🇺🇸',
    config: industryConfigEN.default,
    switchIndustry: industryConfigEN.switchIndustry,
    mockData: mockDataEN
  }
};

// Default language
const DEFAULT_LANGUAGE = 'fr';

// Get current language from localStorage or default
export const getCurrentLanguage = () => {
  const savedLanguage = localStorage.getItem('app-language');
  return savedLanguage && AVAILABLE_LANGUAGES[savedLanguage] ? savedLanguage : DEFAULT_LANGUAGE;
};

// Set current language and save to localStorage
export const setCurrentLanguage = (languageCode) => {
  if (AVAILABLE_LANGUAGES[languageCode]) {
    localStorage.setItem('app-language', languageCode);
    return true;
  }
  return false;
};

// Get configuration for a specific language
export const getLanguageConfig = (languageCode = getCurrentLanguage()) => {
  const language = AVAILABLE_LANGUAGES[languageCode];
  return language ? language.config : AVAILABLE_LANGUAGES[DEFAULT_LANGUAGE].config;
};

// Get language metadata
export const getLanguageInfo = (languageCode = getCurrentLanguage()) => {
  return AVAILABLE_LANGUAGES[languageCode] || AVAILABLE_LANGUAGES[DEFAULT_LANGUAGE];
};

// Get all available languages
export const getAvailableLanguages = () => {
  return Object.values(AVAILABLE_LANGUAGES);
};

// Switch industry within current language
export const switchIndustryInLanguage = (industry, languageCode = getCurrentLanguage()) => {
  const language = AVAILABLE_LANGUAGES[languageCode];
  if (language && language.switchIndustry) {
    return language.switchIndustry(industry);
  }
  return getLanguageConfig(languageCode);
};

// Format currency based on language/region
export const formatCurrencyByLanguage = (amount, languageCode = getCurrentLanguage()) => {
  const config = getLanguageConfig(languageCode);
  const locale = languageCode === 'fr' ? 'fr-FR' : 'en-US';

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: config.currency || 'EUR'
  }).format(amount);
};

// Format numbers based on language/region
export const formatNumberByLanguage = (number, languageCode = getCurrentLanguage()) => {
  const config = getLanguageConfig(languageCode);
  const locale = languageCode === 'fr' ? 'fr-FR' : 'en-US';
  const scale = config.audienceScale;

  if (scale === 'M') {
    return `${(number / 1000000).toFixed(1)}M`;
  } else if (scale === 'K') {
    return `${(number / 1000).toFixed(1)}K`;
  }
  return number.toLocaleString(locale);
};

// Get mock data for a specific language and industry
export const getMockDataForLanguage = (industry, languageCode = getCurrentLanguage()) => {
  const language = AVAILABLE_LANGUAGES[languageCode];
  if (language && language.mockData) {
    return language.mockData.getMockDataForIndustry(industry);
  }
  return AVAILABLE_LANGUAGES[DEFAULT_LANGUAGE].mockData.getMockDataForIndustry(industry);
};

// Get modal data for a specific language and industry
export const getModalDataForLanguage = (industry, languageCode = getCurrentLanguage()) => {
  const language = AVAILABLE_LANGUAGES[languageCode];
  if (language && language.mockData) {
    return language.mockData.getModalDataForIndustry(industry);
  }
  return AVAILABLE_LANGUAGES[DEFAULT_LANGUAGE].mockData.getModalDataForIndustry(industry);
};

export default {
  getCurrentLanguage,
  setCurrentLanguage,
  getLanguageConfig,
  getLanguageInfo,
  getAvailableLanguages,
  switchIndustryInLanguage,
  formatCurrencyByLanguage,
  formatNumberByLanguage,
  getMockDataForLanguage,
  getModalDataForLanguage
};