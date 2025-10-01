// Industry Configuration System
// This file contains all industry-specific terminology, branding, and settings
// Change the active industry to switch contexts (media, energy, retail, etc.)

const INDUSTRY_CONFIGS = {
  media: {
    // Core Information
    industryName: 'Media',
    companyName: 'TF1',
    brandPrimary: '#001b9c', // TF1 International Klein Blue
    brandSecondary: '#fb7e44', // TF1 Crusta Orange
    brandLight: '#3345c9',
    brandDark: '#001874',

    // Navigation & Titles
    businessPortalTitle: 'Media Business Portal',
    dashboardTitle: 'Tableau de bord',

    // Main Sections
    sections: {
      dashboard: 'Tableau de bord',
      campaigns: 'Analyse des campagnes',
      audience: 'Analyse audience'
    },

    // Core Metrics
    metrics: {
      totalViewers: 'Téléspectateurs Total',
      averageRating: 'Note Moyenne',
      activeCampaigns: 'Campagnes Actives',
      topPrograms: 'Émissions Phares',
      campaigns: 'Campagnes',
      programs: 'Émissions',
      shows: 'Programmes',
      viewership: 'Audience',
      viewers: 'Téléspectateurs',
      rating: 'Note',
      engagement: 'Engagement',
      reach: 'Portée',
      cost: 'Coût',
      roi: 'ROI',
      trend: 'Tendance'
    },

    // Time Slots
    timeSlots: {
      morning: 'Matinée (6h-12h)',
      evening: 'Soirée (18h-20h)',
      prime: 'Prime Time (20h-22h30)',
      late: 'Fin de soirée (22h30-2h)',
      weekend: 'Weekend'
    },

    // Content Types
    contentTypes: {
      drama: 'Drame',
      entertainment: 'Divertissement',
      sport: 'Sport',
      news: 'Information',
      documentary: 'Documentaire',
      variety: 'Variétés',
      reality: 'Télé-réalité'
    },

    // Sample Programs/Content
    sampleContent: [
      { name: 'JT 20H', type: 'news', rating: 9.2 },
      { name: 'Plus Belle la Vie', type: 'drama', rating: 8.1 },
      { name: 'Koh-Lanta', type: 'reality', rating: 8.8 },
      { name: 'The Voice', type: 'entertainment', rating: 7.9 },
      { name: 'Danse avec les Stars', type: 'entertainment', rating: 7.6 },
      { name: 'Star Academy', type: 'reality', rating: 9.5 },
      { name: 'Mask Singer', type: 'entertainment', rating: 8.9 }
    ],

    // Sample Campaigns
    sampleCampaigns: [
      {
        id: 1,
        name: 'Campagne Koh-Lanta 2024',
        status: 'active',
        reach: 6800000,
        engagement: 9.2,
        cost: 450000,
        roi: 285,
        trend: 'up'
      },
      {
        id: 2,
        name: 'Promotion The Voice France',
        status: 'active',
        reach: 5200000,
        engagement: 8.7,
        cost: 380000,
        roi: 240,
        trend: 'up'
      },
      {
        id: 3,
        name: 'JT 20H - Nouvelle saison',
        status: 'completed',
        reach: 8500000,
        engagement: 7.8,
        cost: 290000,
        roi: 195,
        trend: 'up'
      },
      {
        id: 4,
        name: 'Danse avec les Stars',
        status: 'active',
        reach: 4800000,
        engagement: 8.4,
        cost: 320000,
        roi: 210,
        trend: 'up'
      },
      {
        id: 5,
        name: 'Plus Belle la Vie - Spécial',
        status: 'paused',
        reach: 3200000,
        engagement: 6.9,
        cost: 180000,
        roi: 165,
        trend: 'down'
      },
      {
        id: 6,
        name: 'Star Academy 2024',
        status: 'active',
        reach: 7200000,
        engagement: 9.5,
        cost: 520000,
        roi: 310,
        trend: 'up'
      },
      {
        id: 7,
        name: 'Joséphine Ange Gardien',
        status: 'completed',
        reach: 4100000,
        engagement: 7.2,
        cost: 230000,
        roi: 180,
        trend: 'up'
      },
      {
        id: 8,
        name: 'Sept à Huit',
        status: 'active',
        reach: 3800000,
        engagement: 8.1,
        cost: 280000,
        roi: 220,
        trend: 'up'
      }
    ],

    // Units & Currency
    currency: 'EUR',
    viewerUnit: 'téléspectateurs',
    audienceScale: 'M', // Millions

    // Chart Titles
    chartTitles: {
      monthlyPerformance: 'Performance mensuelle globale',
      budgetVsSpending: 'Budget vs Dépenses par campagne',
      roiTrend: 'Tendance ROI par canal',
      audienceEvolution: 'Audience au cours de la journée',
      topPrograms: 'Top émissions par performance',
      demographics: 'Demographics de l\'audience',
      programAnalysis: 'Rating vs Audience Analysis',
      reachSource: "Sources de portée"
    },

    // Chart Legends
    chartLegends: {
      // Budget Chart
      budgetAllocated: 'Budget alloué',
      budgetSpent: 'Dépensé',
      budgetRemaining: 'Restant',

      // ROI Trend Chart
      roiOverall: 'ROI Global',
      roiDigital: 'ROI Digital',
      roiTv: 'ROI TV',
      roiRadio: 'ROI Radio',

      // Performance Chart
      reach: 'Portée (M)',
      engagement: 'Engagement %',

      // General
      viewers: 'Téléspectateurs'
    },

    // Dashboard Insights
    executiveSummary: {
      performance: 'Performance Campagnes',
      audience: 'Performance Audiences',
      campaignText: 'ROI exceptionnel de +15% vs objectifs annuels. Les campagnes phares (Koh-Lanta, Star Academy) génèrent un engagement record de 9.2%.',
      audienceText: '12.5M téléspectateurs quotidiens avec un pic historique à 8.5M au JT 20H. Leadership confirmé sur la cible 25-54 ans.',
      priorityAction: 'Capitaliser sur le succès des formats prime-time pour étendre l\'offensive digitale et maximiser les revenus publicitaires T4.'
    },

    // Dashboard Synthesis
    dashboardSynthesis: {
      audienceEvolution: 'Leadership incontesté sur le prime time avec une progression de +8% vs période précédente. Le JT 20H maintient son statut d\'émission la plus regardée de France.',
      topPrograms: 'Portfolio d\'émissions premium avec 4 émissions au-dessus de 8/10. {program1} et {program2} confirment leur statut d\'actifs stratégiques.'
    },

    // Modal Titles
    modalTitles: {
      reachSources: 'Source de portée',
      weeklyPerformance: 'Performance hebdomadaire',
      engagementDetails: 'Détails d\'engagement',
      costBreakdown: 'Répartition des coûts'
    }
  },

  energy: {
    // Core Information
    industryName: 'Energy',
    companyName: 'PowerCorp',
    brandPrimary: '#067915ff', // Deep Green
    brandSecondary: '#FF9800', // Orange
    brandLight: '#62cd74ff',
    brandDark: '#04531bff',

    // Navigation & Titles
    businessPortalTitle: 'Energy Business Portal',
    dashboardTitle: 'Tableau de bord',

    // Main Sections
    sections: {
      dashboard: 'Tableau de bord',
      campaigns: 'Analyse des opérations',
      audience: 'Analyse clientèle'
    },

    // Core Metrics
    metrics: {
      totalViewers: 'Clients Totaux',
      averageRating: 'Satisfaction Moyenne',
      activeCampaigns: 'Opérations Actives',
      topPrograms: 'Services Premium',
      campaigns: 'Opérations',
      programs: 'Services',
      shows: 'Offres',
      viewership: 'Clientèle',
      viewers: 'Clients',
      rating: 'Satisfaction',
      engagement: 'Utilisation',
      reach: 'Couverture',
      cost: 'Coût',
      roi: 'ROI',
      trend: 'Tendance'
    },

    // Time Slots
    timeSlots: {
      morning: 'Matin (6h-12h)',
      evening: 'Soirée (18h-22h)',
      prime: 'Heures de pointe (17h-20h)',
      late: 'Nuit (22h-6h)',
      weekend: 'Weekend'
    },

    // Content Types
    contentTypes: {
      drama: 'Résidentiel',
      entertainment: 'Commercial',
      sport: 'Industriel',
      news: 'Services publics',
      documentary: 'Énergies renouvelables',
      variety: 'Solutions hybrides',
      reality: 'Stockage d\'énergie'
    },

    // Sample Programs/Content
    sampleContent: [
      { name: 'Énergie Solaire Résidentielle', type: 'residential', rating: 9.1 },
      { name: 'Solutions Industrielles', type: 'industrial', rating: 8.7 },
      { name: 'Éolien Offshore', type: 'renewable', rating: 8.9 },
      { name: 'Stockage Batterie', type: 'storage', rating: 8.2 },
      { name: 'Réseau Intelligent', type: 'smart', rating: 8.5 },
      { name: 'Biomasse Locale', type: 'renewable', rating: 7.8 },
      { name: 'Géothermie Urbaine', type: 'renewable', rating: 8.1 }
    ],

    // Sample Campaigns
    sampleCampaigns: [
      {
        id: 1,
        name: 'Déploiement Solaire Résidentiel 2024',
        status: 'active',
        reach: 285000,
        engagement: 9.1,
        cost: 120000,
        roi: 310,
        trend: 'up'
      },
      {
        id: 2,
        name: 'Solutions Éolien Offshore',
        status: 'active',
        reach: 195000,
        engagement: 8.7,
        cost: 180000,
        roi: 265,
        trend: 'up'
      },
      {
        id: 3,
        name: 'Réseau Intelligent Urbain',
        status: 'completed',
        reach: 420000,
        engagement: 8.2,
        cost: 95000,
        roi: 285,
        trend: 'up'
      },
      {
        id: 4,
        name: 'Stockage Énergétique',
        status: 'active',
        reach: 165000,
        engagement: 8.9,
        cost: 140000,
        roi: 245,
        trend: 'up'
      },
      {
        id: 5,
        name: 'Biomasse Locale',
        status: 'paused',
        reach: 95000,
        engagement: 7.1,
        cost: 75000,
        roi: 185,
        trend: 'down'
      },
      {
        id: 6,
        name: 'Géothermie Industrielle',
        status: 'active',
        reach: 320000,
        engagement: 8.8,
        cost: 200000,
        roi: 295,
        trend: 'up'
      },
      {
        id: 7,
        name: 'Efficacité Énergétique',
        status: 'completed',
        reach: 150000,
        engagement: 7.9,
        cost: 85000,
        roi: 210,
        trend: 'up'
      },
      {
        id: 8,
        name: 'Solutions Hybrides',
        status: 'active',
        reach: 225000,
        engagement: 8.4,
        cost: 155000,
        roi: 235,
        trend: 'up'
      }
    ],

    // Units & Currency
    currency: 'EUR',
    viewerUnit: 'clients',
    audienceScale: 'K', // Thousands

    // Chart Titles
    chartTitles: {
      monthlyPerformance: 'Performance mensuelle des opérations',
      budgetVsSpending: 'Budget vs Dépenses par opération',
      roiTrend: 'Tendance ROI par type d\'énergie',
      audienceEvolution: 'Utilisation au cours de la journée',
      topPrograms: 'Top services par performance',
      demographics: 'Demographics de la clientèle',
      programAnalysis: 'Satisfaction vs Usage Analysis'
    },

    // Chart Legends
    chartLegends: {
      // Budget Chart
      budgetAllocated: 'Budget alloué',
      budgetSpent: 'Dépensé',
      budgetRemaining: 'Restant',

      // ROI Trend Chart
      roiOverall: 'ROI Global',
      roiDigital: 'ROI Digital',
      roiTv: 'ROI Solaire',
      roiRadio: 'ROI Éolien',

      // Performance Chart
      reach: 'Couverture (K)',
      engagement: 'Utilisation %',

      // General
      viewers: 'Clients'
    },

    // Dashboard Insights
    executiveSummary: {
      performance: 'Performance Opérationnelle',
      audience: 'Performance Clients',
      campaignText: 'ROI de +12% sur les énergies renouvelables. Les solutions solaires et éoliennes génèrent une satisfaction record de 9.1%.',
      audienceText: '450K clients avec une croissance de +8% sur le segment résidentiel. Leadership sur les solutions vertes.',
      priorityAction: 'Accélérer le déploiement des solutions de stockage pour optimiser l\'offre énergétique T4.'
    },

    // Dashboard Synthesis
    dashboardSynthesis: {
      audienceEvolution: 'Croissance soutenue sur les heures de pointe avec +12% d\'utilisation vs trimestre précédent. Les solutions renouvelables maintiennent leur leadership.',
      topPrograms: 'Portfolio de services premium avec 4 solutions au-dessus de 8/10. {program1} et {program2} confirment leur statut d\'offres stratégiques.'
    },

    // Modal Titles
    modalTitles: {
      reachSources: 'Sources de couverture',
      weeklyPerformance: 'Performance hebdomadaire',
      engagementDetails: 'Détails d\'utilisation',
      costBreakdown: 'Répartition des coûts'
    }
  },

  retail: {
    // Core Information
    industryName: 'Retail',
    companyName: 'RetailMax',
    brandPrimary: '#C62828', // Deep Red
    brandSecondary: '#2E7D32', // Green
    brandLight: '#e9706eff',
    brandDark: '#B71C1C',

    // Navigation & Titles
    businessPortalTitle: 'Retail Business Portal',
    dashboardTitle: 'Tableau de bord',

    // Main Sections
    sections: {
      dashboard: 'Tableau de bord',
      campaigns: 'Analyse des campagnes',
      audience: 'Analyse clientèle'
    },

    // Core Metrics
    metrics: {
      totalViewers: 'Clients Totaux',
      averageRating: 'Note Moyenne',
      activeCampaigns: 'Campagnes Actives',
      topPrograms: 'Produits Phares',
      campaigns: 'Campagnes',
      programs: 'Produits',
      shows: 'Collections',
      viewership: 'Clientèle',
      viewers: 'Clients',
      rating: 'Satisfaction',
      engagement: 'Fidélité',
      reach: 'Portée',
      cost: 'Coût',
      roi: 'ROI',
      trend: 'Tendance'
    },

    // Time Slots
    timeSlots: {
      morning: 'Matin (8h-12h)',
      evening: 'Soirée (17h-21h)',
      prime: 'Heures de pointe (12h-14h, 17h-19h)',
      late: 'Soirée tardive (21h-23h)',
      weekend: 'Weekend'
    },

    // Content Types
    contentTypes: {
      drama: 'Mode',
      entertainment: 'Électronique',
      sport: 'Sport & Loisirs',
      news: 'Informatique',
      documentary: 'Maison & Jardin',
      variety: 'Beauté & Santé',
      reality: 'Automobile'
    },

    // Sample Programs/Content
    sampleContent: [
      { name: 'Collection Automne', type: 'fashion', rating: 9.0 },
      { name: 'High-Tech Premium', type: 'electronics', rating: 8.6 },
      { name: 'Équipement Fitness', type: 'sports', rating: 8.3 },
      { name: 'Gaming Setup', type: 'electronics', rating: 8.8 },
      { name: 'Décoration Intérieure', type: 'home', rating: 7.9 },
      { name: 'Cosmétiques Bio', type: 'beauty', rating: 8.4 },
      { name: 'Accessoires Auto', type: 'automotive', rating: 7.7 }
    ],

    // Sample Campaigns
    sampleCampaigns: [
      {
        id: 1,
        name: 'Collection Automne-Hiver 2024',
        status: 'active',
        reach: 68000,
        engagement: 9.2,
        cost: 45000,
        roi: 285,
        trend: 'up'
      },
      {
        id: 2,
        name: 'Promotion High-Tech Black Friday',
        status: 'active',
        reach: 52000,
        engagement: 8.7,
        cost: 38000,
        roi: 340,
        trend: 'up'
      },
      {
        id: 3,
        name: 'Gaming Setup Nouvelle Génération',
        status: 'completed',
        reach: 45000,
        engagement: 8.8,
        cost: 29000,
        roi: 295,
        trend: 'up'
      },
      {
        id: 4,
        name: 'Fitness & Bien-être',
        status: 'active',
        reach: 35000,
        engagement: 8.4,
        cost: 32000,
        roi: 210,
        trend: 'up'
      },
      {
        id: 5,
        name: 'Déco & Maison Printemps',
        status: 'paused',
        reach: 28000,
        engagement: 7.2,
        cost: 18000,
        roi: 165,
        trend: 'down'
      },
      {
        id: 6,
        name: 'Cosmétiques Bio Premium',
        status: 'active',
        reach: 42000,
        engagement: 9.1,
        cost: 35000,
        roi: 320,
        trend: 'up'
      },
      {
        id: 7,
        name: 'Accessoires Auto Sport',
        status: 'completed',
        reach: 31000,
        engagement: 7.7,
        cost: 23000,
        roi: 185,
        trend: 'up'
      },
      {
        id: 8,
        name: 'Soldes d\'Été Exceptionnels',
        status: 'active',
        reach: 58000,
        engagement: 8.9,
        cost: 41000,
        roi: 275,
        trend: 'up'
      }
    ],

    // Units & Currency
    currency: 'EUR',
    viewerUnit: 'clients',
    audienceScale: 'K', // Thousands

    // Chart Titles
    chartTitles: {
      monthlyPerformance: 'Performance mensuelle des ventes',
      budgetVsSpending: 'Budget vs Dépenses par campagne',
      roiTrend: 'Tendance ROI par canal de vente',
      audienceEvolution: 'Trafic au cours de la journée',
      topPrograms: 'Top produits par performance',
      demographics: 'Demographics de la clientèle',
      programAnalysis: 'Satisfaction vs Ventes Analysis'
    },

    // Chart Legends
    chartLegends: {
      // Budget Chart
      budgetAllocated: 'Budget alloué',
      budgetSpent: 'Dépensé',
      budgetRemaining: 'Restant',

      // ROI Trend Chart
      roiOverall: 'ROI Global',
      roiDigital: 'ROI Digital',
      roiTv: 'ROI Magasin',
      roiRadio: 'ROI E-commerce',

      // Performance Chart
      reach: 'Portée (K)',
      engagement: 'Fidélité %',

      // General
      viewers: 'Clients'
    },

    // Dashboard Insights
    executiveSummary: {
      performance: 'Performance Ventes',
      audience: 'Performance Clients',
      campaignText: 'ROI de +18% sur les campagnes digitales. Les collections mode et high-tech génèrent une satisfaction de 8.8%.',
      audienceText: '85K clients fidèles avec une progression de +15% sur le e-commerce. Leadership sur le segment premium.',
      priorityAction: 'Optimiser l\'expérience omnicanal pour maximiser la conversion et la fidélisation T4.'
    },

    // Dashboard Synthesis
    dashboardSynthesis: {
      audienceEvolution: 'Trafic record sur les heures de pointe avec +15% de progression vs période précédente. Le e-commerce maintient sa dynamique de croissance.',
      topPrograms: 'Portfolio de produits premium avec 4 collections au-dessus de 8/10. {program1} et {program2} confirment leur statut de produits phares.'
    },

    // Modal Titles
    modalTitles: {
      reachSources: 'Sources de portée',
      weeklyPerformance: 'Performance hebdomadaire',
      engagementDetails: 'Détails de fidélité',
      costBreakdown: 'Répartition des coûts'
    }
  }
};

// Active industry configuration - Change this to switch contexts
const ACTIVE_INDUSTRY = 'media'; // Options: 'media', 'energy', 'retail'

// Export the active configuration and utilities
export const industryConfig = INDUSTRY_CONFIGS[ACTIVE_INDUSTRY];

export const switchIndustry = (industry) => {
  if (INDUSTRY_CONFIGS[industry]) {
    return INDUSTRY_CONFIGS[industry];
  }
  console.warn(`Industry "${industry}" not found. Available: ${Object.keys(INDUSTRY_CONFIGS).join(', ')}`);
  return INDUSTRY_CONFIGS.media; // Fallback to media
};

export const getAvailableIndustries = () => Object.keys(INDUSTRY_CONFIGS);

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: industryConfig.currency
  }).format(amount);
};

export const formatNumber = (number) => {
  const scale = industryConfig.audienceScale;
  if (scale === 'M') {
    return `${(number / 1000000).toFixed(1)}M`;
  } else if (scale === 'K') {
    return `${(number / 1000).toFixed(1)}K`;
  }
  return number.toLocaleString();
};

// Import and export mock data utilities
export { getMockDataForIndustry } from './mockData.js';

export default industryConfig;