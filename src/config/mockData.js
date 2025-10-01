// Mock Data Configuration System
// This file contains all mock data for different industries
// Each industry has realistic datasets appropriate for their sector

const MOCK_DATA_CONFIGS = {
  media: {
    // Dashboard Metrics
    metrics: {
      totalViewers: 12456789,
      avgRating: 7.8,
      activeCampaigns: 18,
      topPrograms: 12
    },

    // Viewership Data (hourly throughout the day)
    viewershipData: [
      { time: '18:00', viewers: 2800000 },
      { time: '19:00', viewers: 4200000 },
      { time: '20:00', viewers: 8500000 }, // Prime time peak
      { time: '21:00', viewers: 6800000 },
      { time: '22:00', viewers: 4100000 },
      { time: '23:00', viewers: 2300000 }
    ],

    // Top Programs Performance
    programData: [
      { program: 'JT 20H', rating: 9.2, viewers: 8500000 },
      { program: 'Plus Belle la Vie', rating: 8.1, viewers: 6800000 },
      { program: 'Koh-Lanta', rating: 8.8, viewers: 6200000 },
      { program: 'The Voice', rating: 7.9, viewers: 5800000 },
      { program: 'Danse avec les Stars', rating: 7.6, viewers: 5400000 }
    ],

    // Monthly Performance Data
    performanceData: [
      { month: 'Jan', reach: 25000000, engagement: 7.2, cost: 850000, roi: 190 },
      { month: 'Fév', reach: 28000000, engagement: 7.8, cost: 920000, roi: 210 },
      { month: 'Mar', reach: 32000000, engagement: 8.1, cost: 980000, roi: 240 },
      { month: 'Avr', reach: 35000000, engagement: 8.5, cost: 1100000, roi: 265 },
      { month: 'Mai', reach: 38000000, engagement: 8.9, cost: 1200000, roi: 285 },
      { month: 'Jun', reach: 42000000, engagement: 9.2, cost: 1350000, roi: 310 }
    ],

    // ROI Trend Data by Channel
    roiTrendData: [
      { period: 'T1 2024', overall: 220, digital: 280, tv: 190, radio: 160 },
      { period: 'T2 2024', overall: 245, digital: 310, tv: 210, radio: 180 },
      { period: 'T3 2024', overall: 265, digital: 340, tv: 225, radio: 195 },
      { period: 'T4 2024', overall: 285, digital: 365, tv: 245, radio: 210 }
    ],

    // Demographic Data
    demographicData: [
      { name: '18-24', value: 15, color: '#001b9c' },
      { name: '25-34', value: 28, color: '#6679f9' },
      { name: '35-44', value: 22, color: '#fb7e44' },
      { name: '45-54', value: 20, color: '#620162' },
      { name: '55+', value: 15, color: '#2e7d32' }
    ],

    // Audience Evolution (30 days)
    audienceEvolutionData: [
      { date: 'J-30', audienceTotale: 8200000, primeTime: 9800000, dateNum: -30 },
      { date: 'J-28', audienceTotale: 8450000, primeTime: 10100000, dateNum: -28 },
      { date: 'J-26', audienceTotale: 7900000, primeTime: 9600000, dateNum: -26 },
      { date: 'J-24', audienceTotale: 8300000, primeTime: 10200000, dateNum: -24 },
      { date: 'J-22', audienceTotale: 8600000, primeTime: 10400000, dateNum: -22 },
      { date: 'J-20', audienceTotale: 8100000, primeTime: 9900000, dateNum: -20 },
      { date: 'J-18', audienceTotale: 8800000, primeTime: 10600000, dateNum: -18 },
      { date: 'J-16', audienceTotale: 8500000, primeTime: 10300000, dateNum: -16 },
      { date: 'J-14', audienceTotale: 9100000, primeTime: 11000000, dateNum: -14 },
      { date: 'J-12', audienceTotale: 8700000, primeTime: 10500000, dateNum: -12 },
      { date: 'J-10', audienceTotale: 8900000, primeTime: 10800000, dateNum: -10 },
      { date: 'J-8', audienceTotale: 8400000, primeTime: 10100000, dateNum: -8 },
      { date: 'J-6', audienceTotale: 9200000, primeTime: 11200000, dateNum: -6 },
      { date: 'J-4', audienceTotale: 8800000, primeTime: 10700000, dateNum: -4 },
      { date: 'J-2', audienceTotale: 9400000, primeTime: 11400000, dateNum: -2 },
      { date: 'Aujourd\'hui', audienceTotale: 9100000, primeTime: 11100000, dateNum: 0 }
    ],

    // Program Recommendations Data
    programs: [
      {
        id: 1,
        title: 'Nouvelle série dramatique',
        genre: 'Drame',
        rating: 8.6,
        viewership: 6800000,
        cost: 250000,
        timeSlot: 'prime',
        targetDemo: '25-54',
        seasonality: 'high',
        competitorRating: 7.2,
        recommendationScore: 94
      },
      {
        id: 2,
        title: 'Émission de variétés',
        genre: 'Divertissement',
        rating: 8.1,
        viewership: 5200000,
        cost: 320000,
        timeSlot: 'prime',
        targetDemo: '18-49',
        seasonality: 'medium',
        competitorRating: 7.5,
        recommendationScore: 91
      },
      {
        id: 3,
        title: 'Match de football',
        genre: 'Sport',
        rating: 9.2,
        viewership: 8200000,
        cost: 450000,
        timeSlot: 'weekend',
        targetDemo: '18-65',
        seasonality: 'high',
        competitorRating: 8.8,
        recommendationScore: 98
      },
      {
        id: 4,
        title: 'Magazine matinal',
        genre: 'Information',
        rating: 7.3,
        viewership: 2800000,
        cost: 120000,
        timeSlot: 'morning',
        targetDemo: '35-65',
        seasonality: 'low',
        competitorRating: 6.9,
        recommendationScore: 79
      },
      {
        id: 5,
        title: 'Documentaire Histoire',
        genre: 'Documentaire',
        rating: 7.8,
        viewership: 3200000,
        cost: 180000,
        timeSlot: 'late',
        targetDemo: '25-55',
        seasonality: 'medium',
        competitorRating: 7.1,
        recommendationScore: 85
      }
    ]
  },

  energy: {
    // Dashboard Metrics
    metrics: {
      totalViewers: 450000, // Customers
      avgRating: 8.2, // Satisfaction
      activeCampaigns: 12, // Operations
      topPrograms: 8 // Services
    },

    // Usage Data (hourly throughout the day)
    viewershipData: [
      { time: '06:00', viewers: 180000 }, // Morning peak
      { time: '09:00', viewers: 320000 },
      { time: '12:00', viewers: 280000 },
      { time: '15:00', viewers: 250000 },
      { time: '18:00', viewers: 420000 }, // Evening peak
      { time: '21:00', viewers: 150000 }
    ],

    // Top Services Performance
    programData: [
      { program: 'Solaire Résidentiel', rating: 9.1, viewers: 285000 },
      { program: 'Éolien Offshore', rating: 8.7, viewers: 195000 },
      { program: 'Réseau Intelligent', rating: 8.9, viewers: 320000 },
      { program: 'Stockage Batterie', rating: 8.2, viewers: 165000 },
      { program: 'Géothermie', rating: 8.5, viewers: 225000 }
    ],

    // Monthly Performance Data (scaled for energy sector)
    performanceData: [
      { month: 'Jan', reach: 380000, engagement: 7.8, cost: 85000, roi: 210 },
      { month: 'Fév', reach: 395000, engagement: 8.1, cost: 92000, roi: 235 },
      { month: 'Mar', reach: 420000, engagement: 8.4, cost: 98000, roi: 250 },
      { month: 'Avr', reach: 445000, engagement: 8.7, cost: 105000, roi: 275 },
      { month: 'Mai', reach: 465000, engagement: 9.0, cost: 110000, roi: 295 },
      { month: 'Jun', reach: 485000, engagement: 9.2, cost: 115000, roi: 320 }
    ],

    // ROI Trend Data by Energy Type
    roiTrendData: [
      { period: 'T1 2024', overall: 245, digital: 290, tv: 210, radio: 180 },
      { period: 'T2 2024', overall: 265, digital: 320, tv: 235, radio: 200 },
      { period: 'T3 2024', overall: 285, digital: 350, tv: 255, radio: 220 },
      { period: 'T4 2024', overall: 310, digital: 385, tv: 280, radio: 245 }
    ],

    // Customer Demographic Data
    demographicData: [
      { name: '18-34', value: 12, color: '#1565C0' },
      { name: '35-44', value: 25, color: '#42A5F5' },
      { name: '45-54', value: 28, color: '#FF9800' },
      { name: '55-64', value: 22, color: '#FFB74D' },
      { name: '65+', value: 13, color: '#2e7d32' }
    ],

    // Customer Growth Evolution (30 days)
    audienceEvolutionData: [
      { date: 'J-30', audienceTotale: 420000, primeTime: 380000, dateNum: -30 },
      { date: 'J-28', audienceTotale: 425000, primeTime: 385000, dateNum: -28 },
      { date: 'J-26', audienceTotale: 430000, primeTime: 390000, dateNum: -26 },
      { date: 'J-24', audienceTotale: 435000, primeTime: 395000, dateNum: -24 },
      { date: 'J-22', audienceTotale: 440000, primeTime: 400000, dateNum: -22 },
      { date: 'J-20', audienceTotale: 445000, primeTime: 405000, dateNum: -20 },
      { date: 'J-18', audienceTotale: 450000, primeTime: 410000, dateNum: -18 },
      { date: 'J-16', audienceTotale: 455000, primeTime: 415000, dateNum: -16 },
      { date: 'J-14', audienceTotale: 460000, primeTime: 420000, dateNum: -14 },
      { date: 'J-12', audienceTotale: 465000, primeTime: 425000, dateNum: -12 },
      { date: 'J-10', audienceTotale: 470000, primeTime: 430000, dateNum: -10 },
      { date: 'J-8', audienceTotale: 475000, primeTime: 435000, dateNum: -8 },
      { date: 'J-6', audienceTotale: 480000, primeTime: 440000, dateNum: -6 },
      { date: 'J-4', audienceTotale: 485000, primeTime: 445000, dateNum: -4 },
      { date: 'J-2', audienceTotale: 490000, primeTime: 450000, dateNum: -2 },
      { date: 'Aujourd\'hui', audienceTotale: 495000, primeTime: 455000, dateNum: 0 }
    ],

    // Service Recommendations Data
    programs: [
      {
        id: 1,
        title: 'Solution Solaire Premium',
        genre: 'Résidentiel',
        rating: 9.1,
        viewership: 285000,
        cost: 85000,
        timeSlot: 'morning',
        targetDemo: '35-54',
        seasonality: 'high',
        competitorRating: 8.3,
        recommendationScore: 96
      },
      {
        id: 2,
        title: 'Éolien Industriel',
        genre: 'Commercial',
        rating: 8.7,
        viewership: 195000,
        cost: 120000,
        timeSlot: 'peak',
        targetDemo: '25-49',
        seasonality: 'medium',
        competitorRating: 8.1,
        recommendationScore: 92
      },
      {
        id: 3,
        title: 'Réseau Intelligent',
        genre: 'Infrastructure',
        rating: 8.9,
        viewership: 320000,
        cost: 95000,
        timeSlot: 'peak',
        targetDemo: '30-60',
        seasonality: 'high',
        competitorRating: 8.4,
        recommendationScore: 94
      },
      {
        id: 4,
        title: 'Stockage Énergétique',
        genre: 'Innovation',
        rating: 8.2,
        viewership: 165000,
        cost: 110000,
        timeSlot: 'evening',
        targetDemo: '25-55',
        seasonality: 'low',
        competitorRating: 7.8,
        recommendationScore: 87
      },
      {
        id: 5,
        title: 'Géothermie Urbaine',
        genre: 'Renouvelable',
        rating: 8.5,
        viewership: 225000,
        cost: 135000,
        timeSlot: 'morning',
        targetDemo: '35-65',
        seasonality: 'medium',
        competitorRating: 8.0,
        recommendationScore: 89
      }
    ]
  },

  retail: {
    // Dashboard Metrics
    metrics: {
      totalViewers: 85000, // Customers
      avgRating: 8.5, // Satisfaction
      activeCampaigns: 15, // Marketing Campaigns
      topPrograms: 10 // Product Lines
    },

    // Traffic Data (hourly throughout the day)
    viewershipData: [
      { time: '09:00', viewers: 15000 }, // Morning shoppers
      { time: '12:00', viewers: 45000 }, // Lunch peak
      { time: '15:00', viewers: 25000 },
      { time: '17:00', viewers: 65000 }, // After-work peak
      { time: '19:00', viewers: 55000 }, // Evening shopping
      { time: '21:00', viewers: 20000 }
    ],

    // Top Product Lines Performance
    programData: [
      { program: 'Collection Mode', rating: 9.0, viewers: 42000 },
      { program: 'High-Tech', rating: 8.6, viewers: 52000 },
      { program: 'Gaming', rating: 8.8, viewers: 35000 },
      { program: 'Fitness', rating: 8.3, viewers: 28000 },
      { program: 'Cosmétiques Bio', rating: 8.9, viewers: 38000 }
    ],

    // Monthly Performance Data (scaled for retail)
    performanceData: [
      { month: 'Jan', reach: 65000, engagement: 8.1, cost: 25000, roi: 230 },
      { month: 'Fév', reach: 68000, engagement: 8.3, cost: 27000, roi: 245 },
      { month: 'Mar', reach: 72000, engagement: 8.5, cost: 29000, roi: 260 },
      { month: 'Avr', reach: 75000, engagement: 8.7, cost: 31000, roi: 275 },
      { month: 'Mai', reach: 78000, engagement: 8.9, cost: 33000, roi: 290 },
      { month: 'Jun', reach: 85000, engagement: 9.2, cost: 35000, roi: 320 }
    ],

    // ROI Trend Data by Channel
    roiTrendData: [
      { period: 'T1 2024', overall: 265, digital: 320, tv: 230, radio: 195 },
      { period: 'T2 2024', overall: 285, digital: 350, tv: 255, radio: 220 },
      { period: 'T3 2024', overall: 310, digital: 385, tv: 280, radio: 245 },
      { period: 'T4 2024', overall: 340, digital: 425, tv: 310, radio: 270 }
    ],

    // Customer Demographic Data
    demographicData: [
      { name: '18-25', value: 22, color: '#C62828' },
      { name: '26-35', value: 32, color: '#EF5350' },
      { name: '36-45', value: 25, color: '#2E7D32' },
      { name: '46-55', value: 15, color: '#66BB6A' },
      { name: '55+', value: 6, color: '#FFA726' }
    ],

    // Customer Traffic Evolution (30 days)
    audienceEvolutionData: [
      { date: 'J-30', audienceTotale: 75000, primeTime: 55000, dateNum: -30 },
      { date: 'J-28', audienceTotale: 76000, primeTime: 56000, dateNum: -28 },
      { date: 'J-26', audienceTotale: 77000, primeTime: 57000, dateNum: -26 },
      { date: 'J-24', audienceTotale: 78000, primeTime: 58000, dateNum: -24 },
      { date: 'J-22', audienceTotale: 79000, primeTime: 59000, dateNum: -22 },
      { date: 'J-20', audienceTotale: 80000, primeTime: 60000, dateNum: -20 },
      { date: 'J-18', audienceTotale: 81000, primeTime: 61000, dateNum: -18 },
      { date: 'J-16', audienceTotale: 82000, primeTime: 62000, dateNum: -16 },
      { date: 'J-14', audienceTotale: 83000, primeTime: 63000, dateNum: -14 },
      { date: 'J-12', audienceTotale: 84000, primeTime: 64000, dateNum: -12 },
      { date: 'J-10', audienceTotale: 85000, primeTime: 65000, dateNum: -10 },
      { date: 'J-8', audienceTotale: 86000, primeTime: 66000, dateNum: -8 },
      { date: 'J-6', audienceTotale: 87000, primeTime: 67000, dateNum: -6 },
      { date: 'J-4', audienceTotale: 88000, primeTime: 68000, dateNum: -4 },
      { date: 'J-2', audienceTotale: 89000, primeTime: 69000, dateNum: -2 },
      { date: 'Aujourd\'hui', audienceTotale: 90000, primeTime: 70000, dateNum: 0 }
    ],

    // Product Recommendations Data
    programs: [
      {
        id: 1,
        title: 'Collection Premium Automne',
        genre: 'Mode',
        rating: 9.0,
        viewership: 42000,
        cost: 35000,
        timeSlot: 'evening',
        targetDemo: '25-45',
        seasonality: 'high',
        competitorRating: 8.2,
        recommendationScore: 95
      },
      {
        id: 2,
        title: 'Gaming Setup Elite',
        genre: 'Électronique',
        rating: 8.8,
        viewership: 35000,
        cost: 29000,
        timeSlot: 'evening',
        targetDemo: '18-35',
        seasonality: 'high',
        competitorRating: 8.1,
        recommendationScore: 93
      },
      {
        id: 3,
        title: 'Fitness Pro Equipment',
        genre: 'Sport & Loisirs',
        rating: 8.3,
        viewership: 28000,
        cost: 32000,
        timeSlot: 'morning',
        targetDemo: '25-50',
        seasonality: 'medium',
        competitorRating: 7.8,
        recommendationScore: 88
      },
      {
        id: 4,
        title: 'High-Tech Innovation',
        genre: 'Électronique',
        rating: 8.6,
        viewership: 52000,
        cost: 38000,
        timeSlot: 'prime',
        targetDemo: '20-45',
        seasonality: 'high',
        competitorRating: 8.0,
        recommendationScore: 91
      },
      {
        id: 5,
        title: 'Cosmétiques Bio Premium',
        genre: 'Beauté & Santé',
        rating: 8.9,
        viewership: 38000,
        cost: 35000,
        timeSlot: 'evening',
        targetDemo: '25-55',
        seasonality: 'medium',
        competitorRating: 8.3,
        recommendationScore: 94
      }
    ]
  }
};

// Modal Data for detailed analysis
const MODAL_DATA_CONFIGS = {
  media: {
    // Program Details Modal Data
    programDescriptions: {
      'Nouvelle série dramatique': 'Une série française captivante qui explore les relations humaines dans un contexte contemporain. Avec un casting de renom et des scénarios bien ficelés, cette production TF1 cible particulièrement les téléspectateurs de 25-54 ans en quête de contenus émotionnels et authentiques.',
      'Émission de variétés': 'Un divertissement familial mêlant musique, humour et invités prestigieux. Format éprouvé qui rassemble les familles devant leur téléviseur le samedi soir, avec des segments interactifs et des performances live de qualité.',
      'Match de football': 'Retransmission exclusive des plus grands matchs de football, incluant la Ligue 1, la Coupe de France et les compétitions européennes. Un contenu premium qui garantit des audiences exceptionnelles et fidélise les passionnés de sport.',
      'Magazine matinal': 'Une émission d\'information et de société qui accompagne le réveil des Français. Format magazine dynamique alternant actualités, conseils pratiques, et interviews de personnalités, parfait pour la tranche matinale.',
      'Documentaire Histoire': 'Des documentaires de prestige explorant les grands moments de l\'Histoire de France et du monde. Production soignée avec des reconstitutions et des témoignages exclusifs, ciblant un public cultivé et curieux.'
    },
    programSynopses: {
      'Nouvelle série dramatique': 'Claire, avocate parisienne, voit sa vie basculer lorsqu\'elle découvre un secret de famille. Entre intrigues professionnelles et révélations personnelles, elle devra naviguer dans un monde où rien n\'est tel qu\'il semble.',
      'Émission de variétés': 'Chaque samedi, retrouvez les plus grandes stars dans un show exceptionnel mêlant musique, danse et surprises. Des moments magiques en famille garantis avec nos invités d\'exception.',
      'Match de football': 'Vivez l\'émotion du football français et européen en direct et en exclusivité. Analyses d\'experts, interviews exclusives et la passion du ballon rond dans toute sa splendeur.',
      'Magazine matinal': 'Réveillez-vous en douceur avec notre équipe de chroniqueurs. Au programme : actualités décryptées, tendances lifestyle, météo et bonne humeur pour bien commencer la journée.',
      'Documentaire Histoire': 'Plongez dans les coulisses de l\'Histoire avec des reconstitutions saisissantes et des archives inédites. Une approche moderne et captivante des grands événements qui ont façonné notre monde.'
    },
    timeSlotLabels: {
      'morning': 'Matinée (6h-12h)',
      'evening': 'Soirée (18h-20h)',
      'prime': 'Prime Time (20h-22h30)',
      'late': 'Fin de soirée (22h30-2h)',
      'weekend': 'Weekend'
    },
    // Program Analysis Modal Data
    analysisData: {
      competitorComparison: [
        { network: 'TF1', rating: 8.2, viewership: 8500000, cost: 25000 },
        { network: 'France 2', rating: 7.4, viewership: 6375000, cost: 21250 },
        { network: 'M6', rating: 7.7, viewership: 5525000, cost: 17500 },
        { network: 'Canal+', rating: 7.0, viewership: 3825000, cost: 22500 }
      ],
      audienceProfile: [
        { demographic: 'CSP+', percentage: 35 },
        { demographic: 'CSP-', percentage: 28 },
        { demographic: 'Retraités', percentage: 22 },
        { demographic: 'Étudiants', percentage: 15 }
      ],
      performanceMetrics: [
        { metric: 'Taux de rétention', value: 85, benchmark: 75, unit: '%' },
        { metric: 'Part d\'audience', value: 22, benchmark: 18, unit: '%' },
        { metric: 'Satisfaction', value: 8.4, benchmark: 7.8, unit: '/10' },
        { metric: 'Engagement social', value: 142, benchmark: 95, unit: 'K' }
      ],
      keyInsights: [
        'Performance supérieure vs concurrence directe',
        'Forte audience sur la cible 25-54 ans en prime time',
        'Efficacité budgétaire optimisée',
        'Potentiel de croissance identifié sur les réseaux sociaux'
      ],
      risks: [
        'Concurrence accrue sur le même créneau horaire',
        'Saisonnalité à prendre en compte pour la programmation',
        'Coût de production en hausse (+12% vs année précédente)'
      ],
      recommendations: [
        'Optimiser la stratégie digitale pour maximiser l\'engagement',
        'Négocier les coûts de production pour améliorer le ROI',
        'Étendre la diffusion sur les plateformes de replay',
        'Développer des contenus dérivés pour prolonger l\'audience'
      ],
      modalLabels: {
        title: 'Analyse détaillée :',
        scoreLabel: 'Score:',
        metricLabels: {
          audience: 'Audience',
          rating: 'Note',
          cost: 'Coût',
          score: 'Score'
        },
        chartTitles: {
          multiCriteria: 'Analyse multi-critères',
          audienceTrend: 'Tendance d\'audience',
          competitorAnalysis: 'Analyse concurrentielle'
        },
        radarLabels: {
          audience: 'Audience',
          costEfficiency: 'Coût-efficacité',
          engagement: 'Engagement',
          potential: 'Potentiel',
          competition: 'Concurrence',
          seasonality: 'Saisonnalité'
        },
        tooltipLabels: {
          audience: 'Audience',
          rating: 'Note',
          cost: 'Coût',
          performance: 'Performance'
        },
        sectionTitles: {
          performanceMetrics: 'Métriques de performance',
          keyInsights: 'Insights clés',
          identifiedRisks: 'Risques identifiés',
          recommendations: 'Recommandations'
        }
      }
    },
    // Campaign Details Modal Data
    campaignDetailsData: {
      reachSources: [
        { source: 'Télévision', value: 45, color: '#001b9c' },
        { source: 'Digital/Online', value: 25, color: '#6679f9' },
        { source: 'Radio', value: 15, color: '#fb7e44' },
        { source: 'Affichage', value: 10, color: '#620162' },
        { source: 'Presse', value: 5, color: '#2e7d32' }
      ],
      engagementDetails: [
        { metric: 'Taux de clic', value: 3.2, unit: '%', trend: 'up' },
        { metric: 'Temps de visionnage', value: 2.8, unit: 'min', trend: 'up' },
        { metric: 'Partages sociaux', value: 1240, unit: '', trend: 'up' },
        { metric: 'Commentaires', value: 856, unit: '', trend: 'down' }
      ],
      roiBreakdown: [
        { category: 'Coût de production', amount: 65000, percentage: 42 },
        { category: 'Achat d\'espaces', amount: 45000, percentage: 29 },
        { category: 'Digital/Social', amount: 25000, percentage: 16 },
        { category: 'Talents/Célébrités', amount: 20000, percentage: 13 }
      ],
      keyInsights: [
        'Performance exceptionnelle sur la cible 25-34 ans (+35% vs objectif)',
        'Fort engagement sur les réseaux sociaux TF1',
        'ROI supérieur à la moyenne des campagnes TF1 (+22%)',
        'Pic d\'audience lors des créneaux prime time'
      ],
      nextBestActions: [
        {
          priority: 'Haute',
          action: 'Augmenter le budget digital de 25% pour maximiser l\'engagement online',
          impact: 'ROI estimé: +15-20%',
          timeline: '2 semaines'
        },
        {
          priority: 'Moyenne',
          action: 'Étendre la campagne sur les créneaux adjacents (19h-20h)',
          impact: 'Audience potentielle: +1.2M',
          timeline: '1 mois'
        },
        {
          priority: 'Moyenne',
          action: 'Optimiser les créatifs pour mobile et réseaux sociaux',
          impact: 'Engagement: +30%',
          timeline: '3 semaines'
        },
        {
          priority: 'Basse',
          action: 'Négocier des tarifs préférentiels pour les prochaines campagnes',
          impact: 'Réduction coûts: 8-12%',
          timeline: '2 mois'
        }
      ]
    }
  },
  energy: {
    // Program Details Modal Data (adapted for energy)
    programDescriptions: {
      'Nouvelle série dramatique': 'Programme de formation avancé sur les énergies renouvelables destiné aux équipes techniques. Contenu spécialisé développé avec des experts du secteur pour améliorer les compétences et la sécurité opérationnelle.',
      'Émission de variétés': 'Campagne de sensibilisation multi-canal sur l\'efficacité énergétique. Format engageant combinant éducation et divertissement pour sensibiliser les clients aux bonnes pratiques énergétiques.',
      'Match de football': 'Parrainage exclusif d\'événements sportifs majeurs pour renforcer la notoriété de PowerCorp. Stratégie de communication premium qui garantit une visibilité exceptionnelle auprès de notre cible.',
      'Magazine matinal': 'Newsletter quotidienne d\'information sur les marchés de l\'énergie. Format informatif et accessible qui accompagne nos clients professionnels dans leurs décisions stratégiques.',
      'Documentaire Histoire': 'Série documentaire sur l\'évolution du secteur énergétique et les innovations technologiques. Production éducative valorisant l\'expertise PowerCorp et notre engagement pour la transition énergétique.'
    },
    programSynopses: {
      'Nouvelle série dramatique': 'Formation technique approfondie sur l\'installation et maintenance des systèmes solaires. Programme modulaire alliant théorie et pratique pour nos équipes terrain.',
      'Émission de variétés': 'Campagne créative mêlant conseils pratiques et témoignages clients pour promouvoir les solutions d\'efficacité énergétique PowerCorp.',
      'Match de football': 'Activation sponsoring lors des grands événements sportifs avec espaces d\'expérience PowerCorp et animations dédiées aux visiteurs.',
      'Magazine matinal': 'Analyse quotidienne des tendances du marché énergétique, prix du gaz et électricité, réglementations et opportunités sectorielles.',
      'Documentaire Histoire': 'Retour sur 50 ans d\'innovation énergétique : du nucléaire aux renouvelables, l\'histoire de la transformation du secteur par ses acteurs.'
    },
    timeSlotLabels: {
      'morning': 'Heures d\'ouverture (6h-12h)',
      'evening': 'Heures de pointe (17h-20h)',
      'prime': 'Pic de consommation (18h-21h)',
      'late': 'Heures creuses (22h-6h)',
      'weekend': 'Weekend'
    },
    analysisData: {
      competitorComparison: [
        { network: 'PowerCorp', rating: 8.2, viewership: 450000, cost: 75000 },
        { network: 'EnergieFrance', rating: 7.6, viewership: 337500, cost: 63750 },
        { network: 'GreenPower', rating: 7.9, viewership: 292500, cost: 52500 },
        { network: 'VoltCorp', rating: 7.2, viewership: 202500, cost: 67500 }
      ],
      audienceProfile: [
        { demographic: 'Entreprises', percentage: 45 },
        { demographic: 'Particuliers', percentage: 30 },
        { demographic: 'Collectivités', percentage: 20 },
        { demographic: 'Professionnels', percentage: 5 }
      ],
      performanceMetrics: [
        { metric: 'Taux de conversion', value: 12, benchmark: 8, unit: '%' },
        { metric: 'Satisfaction client', value: 8.7, benchmark: 8.2, unit: '/10' },
        { metric: 'Rétention annuelle', value: 94, benchmark: 87, unit: '%' },
        { metric: 'NPS Score', value: 58, benchmark: 45, unit: '' }
      ],
      keyInsights: [
        'Leadership sur les solutions énergétiques innovantes',
        'Forte pénétration sur le marché B2B',
        'Efficacité opérationnelle supérieure',
        'Potentiel de croissance sur les énergies vertes'
      ],
      risks: [
        'Volatilité des prix des matières premières',
        'Réglementation environnementale en évolution',
        'Concurrence accrue des pure players renouvelables'
      ],
      recommendations: [
        'Accélérer la transition vers les énergies vertes',
        'Optimiser la gestion des coûts opérationnels',
        'Renforcer la stratégie de fidélisation client',
        'Développer les services d\'accompagnement énergétique'
      ]
    }
  },
  retail: {
    // Program Details Modal Data (adapted for retail)
    programDescriptions: {
      'Nouvelle série dramatique': 'Campagne publicitaire premium mettant en scène nos nouveaux produits phares. Production haute qualité ciblant les consommateurs haut de gamme pour renforcer le positionnement premium de RetailMax.',
      'Émission de variétés': 'Opération marketing experiential dans nos magasins pilotes. Animation commerciale innovante combinant divertissement et vente pour dynamiser le trafic et l\'engagement client.',
      'Match de football': 'Partenariat sponsoring avec les événements sportifs majeurs pour accroître la notoriété RetailMax. Stratégie d\'activation premium garantissant une visibilité maximale auprès de notre clientèle cible.',
      'Magazine matinal': 'Catalogue digital interactif présentant nos nouvelles collections. Format moderne et engageant pour accompagner nos clients dans leurs choix d\'achat et tendances lifestyle.',
      'Documentaire Histoire': 'Série de contenus sur l\'évolution du retail et les innovations RetailMax. Production valorisant notre expertise et notre engagement pour l\'expérience client moderne.'
    },
    programSynopses: {
      'Nouvelle série dramatique': 'Campagne émotionnelle autour de nos produits lifestyle premium. Storytelling authentique mettant en scène de vrais clients dans leur quotidien RetailMax.',
      'Émission de variétés': 'Événement shopping expérientiel avec animations, démonstrations produits et offres exclusives pour créer un moment unique en magasin.',
      'Match de football': 'Activation brand content lors des grands événements sportifs avec espaces RetailMax et animations dédiées aux supporters.',
      'Magazine matinal': 'Présentation interactive de nos collections saisonnières, conseils style et tendances, avec possibilité d\'achat direct intégré.',
      'Documentaire Histoire': 'Retour sur l\'évolution du commerce moderne : de la boutique traditionnelle au retail phygital, l\'innovation par RetailMax.'
    },
    timeSlotLabels: {
      'morning': 'Ouverture (9h-12h)',
      'evening': 'Affluence du soir (17h-20h)',
      'prime': 'Rush du weekend (14h-18h)',
      'late': 'Nocturne (20h-22h)',
      'weekend': 'Weekend shopping'
    },
    analysisData: {
      competitorComparison: [
        { network: 'RetailMax', rating: 8.2, viewership: 85000, cost: 35000 },
        { network: 'ShopPlus', rating: 7.8, viewership: 63750, cost: 29750 },
        { network: 'MegaStore', rating: 7.5, viewership: 55250, cost: 24500 },
        { network: 'TrendShop', rating: 7.3, viewership: 38250, cost: 31500 }
      ],
      audienceProfile: [
        { demographic: 'Millennials', percentage: 38 },
        { demographic: 'Gen X', percentage: 32 },
        { demographic: 'Gen Z', percentage: 20 },
        { demographic: 'Baby Boomers', percentage: 10 }
      ],
      performanceMetrics: [
        { metric: 'Taux de conversion', value: 18, benchmark: 14, unit: '%' },
        { metric: 'Panier moyen', value: 87, benchmark: 72, unit: '€' },
        { metric: 'Satisfaction client', value: 8.9, benchmark: 8.4, unit: '/10' },
        { metric: 'Trafic magasin', value: 125, benchmark: 95, unit: 'K' }
      ],
      keyInsights: [
        'Performance supérieure sur les ventes premium',
        'Forte attraction clientèle weekend',
        'Efficacité des campagnes digitales',
        'Potentiel de croissance sur l\'e-commerce'
      ],
      risks: [
        'Concurrence e-commerce pure players',
        'Évolution des habitudes d\'achat post-covid',
        'Hausse des coûts logistiques et immobiliers'
      ],
      recommendations: [
        'Accélérer la transformation omnicanale',
        'Optimiser l\'expérience client en magasin',
        'Renforcer la stratégie data et personnalisation',
        'Développer les services de livraison rapide'
      ]
    },
    // Campaign Details Modal Data
    campaignDetailsData: {
      reachSources: [
        { source: 'Télévision', value: 45, color: '#001b9c' },
        { source: 'Digital/Online', value: 25, color: '#6679f9' },
        { source: 'Radio', value: 15, color: '#fb7e44' },
        { source: 'Affichage', value: 10, color: '#620162' },
        { source: 'Presse', value: 5, color: '#2e7d32' }
      ],
      engagementDetails: [
        { metric: 'Taux de clic', value: 3.2, unit: '%', trend: 'up' },
        { metric: 'Temps de visionnage', value: 2.8, unit: 'min', trend: 'up' },
        { metric: 'Partages sociaux', value: 1240, unit: '', trend: 'up' },
        { metric: 'Commentaires', value: 856, unit: '', trend: 'down' }
      ],
      roiBreakdown: [
        { category: 'Coût de production', amount: 65000, percentage: 42 },
        { category: 'Achat d\'espaces', amount: 45000, percentage: 29 },
        { category: 'Digital/Social', amount: 25000, percentage: 16 },
        { category: 'Talents/Célébrités', amount: 20000, percentage: 13 }
      ],
      keyInsights: [
        'Performance exceptionnelle sur la cible 25-34 ans (+35% vs objectif)',
        'Fort engagement sur les réseaux sociaux TF1',
        'ROI supérieur à la moyenne des campagnes TF1 (+22%)',
        'Pic d\'audience lors des créneaux prime time'
      ],
      nextBestActions: [
        {
          priority: 'Haute',
          action: 'Augmenter le budget digital de 25% pour maximiser l\'engagement online',
          impact: 'ROI estimé: +15-20%',
          timeline: '2 semaines'
        },
        {
          priority: 'Moyenne',
          action: 'Étendre la campagne sur les créneaux adjacents (19h-20h)',
          impact: 'Audience potentielle: +1.2M',
          timeline: '1 mois'
        },
        {
          priority: 'Moyenne',
          action: 'Optimiser les créatifs pour mobile et réseaux sociaux',
          impact: 'Engagement: +30%',
          timeline: '3 semaines'
        },
        {
          priority: 'Basse',
          action: 'Négocier des tarifs préférentiels pour les prochaines campagnes',
          impact: 'Réduction coûts: 8-12%',
          timeline: '2 mois'
        }
      ]
    },
    // Program Recommendations Page Data
    programRecommendationsData: {
      colors: ['#001b9c', '#6679f9', '#fb7e44', '#620162', '#2e7d32'],
      defaultFilters: {
        genre: 'all',
        timeSlot: 'all',
        targetAudience: 'all',
        budget: [0, 500000],
        minRating: 0,
        minViewership: 0,
        minScore: 0,
        sortBy: 'score',
        showActiveOnly: false,
        searchQuery: ''
      },
      scoreThresholds: {
        excellent: 90,
        good: 80
      },
      sortLabels: {
        score: 'Score',
        rating: 'Note',
        viewership: 'Audience',
        cost: 'Budget',
        efficiency: 'Efficacité'
      },
      uiLabels: {
        advancedFilters: 'Filtres avancés',
        searchProgram: 'Rechercher une émission',
        searchPlaceholder: 'Tapez le nom...',
        genre: 'Genre',
        allGenres: 'Tous les genres',
        timeSlot: 'Créneau horaire',
        allTimeSlots: 'Tous les créneaux',
        sortBy: 'Trier par',
        budget: 'Budget (€)',
        minRating: 'Note minimale',
        minScore: 'Score minimal (%)',
        resetFilters: 'Réinitialiser les filtres',
        scoresInfo: 'Les scores sont basés sur l\'engagement audience, l\'efficacité budgétaire et l\'analyse concurrentielle.',
        topPrograms: 'Top Émissions',
        results: 'résultats',
        sortedBy: 'Trié par:',
        rating: 'Note:',
        audience: 'Audience:',
        budgetLabel: 'Budget:',
        efficiency: 'Efficacité:',
        viewersPerEuro: 'viewers/€',
        analyze: 'Analyser',
        details: 'Détails',
        noResults: 'Aucune émission ne correspond aux filtres sélectionnés',
        modifySearch: 'Essayez de modifier vos critères de recherche',
        genreOptions: {
          drame: 'Drame',
          divertissement: 'Divertissement',
          sport: 'Sport',
          information: 'Information',
          documentaire: 'Documentaire'
        },
        timeSlotOptions: {
          morning: 'Matinée (6h-12h)',
          evening: 'Soirée (18h-20h)',
          prime: 'Prime Time (20h-22h30)',
          late: 'Fin de soirée (22h30-2h)',
          weekend: 'Weekend'
        },
        sortOptions: {
          score: 'Score de performance',
          rating: 'Note',
          viewership: 'Audience',
          cost: 'Budget',
          efficiency: 'Efficacité (audience/coût)'
        },
        evolutionChart: {
          trendLabel: 'Tendance :',
          trendDescription: 'Progression constante avec des pics remarquables les weekends et lors des grandes émissions. L\'audience prime time dépasse régulièrement les 11M de téléspectateurs.',
          interactionLabel: '💡 Interaction :',
          interactionDescription: 'Utilisez la zone de sélection en bas pour zoomer sur une période spécifique.',
          tooltipLabels: {
            totalAudience: 'Audience totale',
            primeTime: 'Prime Time',
            dateLabel: 'Date:'
          },
          referenceLabel: 'Moyenne (8.75M)',
          lineLabels: {
            total: 'totale',
            primeTimeSlot: 'Prime Time (20h-22h30)'
          }
        }
      }
    }
  },
  energy: {
    // Program Details Modal Data (adapted for energy)
    programDescriptions: {
      'Nouvelle série dramatique': 'Programme de formation avancé sur les énergies renouvelables destiné aux équipes techniques. Contenu spécialisé développé avec des experts du secteur pour améliorer les compétences et la sécurité opérationnelle.',
      'Émission de variétés': 'Campagne de sensibilisation multi-canal sur l\'efficacité énergétique. Format engageant combinant éducation et divertissement pour sensibiliser les clients aux bonnes pratiques énergétiques.',
      'Match de football': 'Parrainage exclusif d\'événements sportifs majeurs pour renforcer la notoriété de PowerCorp. Stratégie de communication premium qui garantit une visibilité exceptionnelle auprès de notre cible.',
      'Magazine matinal': 'Newsletter quotidienne d\'information sur les marchés de l\'énergie. Format informatif et accessible qui accompagne nos clients professionnels dans leurs décisions stratégiques.',
      'Documentaire Histoire': 'Série documentaire sur l\'évolution du secteur énergétique et les innovations technologiques. Production éducative valorisant l\'expertise PowerCorp et notre engagement pour la transition énergétique.'
    },
    programSynopses: {
      'Nouvelle série dramatique': 'Formation technique approfondie sur l\'installation et maintenance des systèmes solaires. Programme modulaire alliant théorie et pratique pour nos équipes terrain.',
      'Émission de variétés': 'Campagne créative mêlant conseils pratiques et témoignages clients pour promouvoir les solutions d\'efficacité énergétique PowerCorp.',
      'Match de football': 'Activation sponsoring lors des grands événements sportifs avec espaces d\'expérience PowerCorp et animations dédiées aux visiteurs.',
      'Magazine matinal': 'Analyse quotidienne des tendances du marché énergétique, prix du gaz et électricité, réglementations et opportunités sectorielles.',
      'Documentaire Histoire': 'Retour sur 50 ans d\'innovation énergétique : du nucléaire aux renouvelables, l\'histoire de la transformation du secteur par ses acteurs.'
    },
    timeSlotLabels: {
      'morning': 'Heures d\'ouverture (6h-12h)',
      'evening': 'Heures de pointe (17h-20h)',
      'prime': 'Pic de consommation (18h-21h)',
      'late': 'Heures creuses (22h-6h)',
      'weekend': 'Weekend'
    },
    analysisData: {
      competitorComparison: [
        { network: 'PowerCorp', rating: 8.2, viewership: 450000, cost: 75000 },
        { network: 'EnergieFrance', rating: 7.6, viewership: 337500, cost: 63750 },
        { network: 'GreenPower', rating: 7.9, viewership: 292500, cost: 52500 },
        { network: 'VoltCorp', rating: 7.2, viewership: 202500, cost: 67500 }
      ],
      audienceProfile: [
        { demographic: 'Entreprises', percentage: 45 },
        { demographic: 'Particuliers', percentage: 30 },
        { demographic: 'Collectivités', percentage: 20 },
        { demographic: 'Professionnels', percentage: 5 }
      ],
      performanceMetrics: [
        { metric: 'Taux de conversion', value: 12, benchmark: 8, unit: '%' },
        { metric: 'Satisfaction client', value: 8.7, benchmark: 8.2, unit: '/10' },
        { metric: 'Rétention annuelle', value: 94, benchmark: 87, unit: '%' },
        { metric: 'NPS Score', value: 58, benchmark: 45, unit: '' }
      ],
      keyInsights: [
        'Leadership sur les solutions énergétiques innovantes',
        'Forte pénétration sur le marché B2B',
        'Efficacité opérationnelle supérieure',
        'Potentiel de croissance sur les énergies vertes'
      ],
      risks: [
        'Volatilité des prix des matières premières',
        'Réglementation environnementale en évolution',
        'Concurrence accrue des pure players renouvelables'
      ],
      recommendations: [
        'Accélérer la transition vers les énergies vertes',
        'Optimiser la gestion des coûts opérationnels',
        'Renforcer la stratégie de fidélisation client',
        'Développer les services d\'accompagnement énergétique'
      ]
    },
    // Campaign Details Modal Data
    campaignDetailsData: {
      reachSources: [
        { source: 'Digital B2B', value: 40, color: '#1565C0' },
        { source: 'Événements sectoriels', value: 25, color: '#42A5F5' },
        { source: 'Presse spécialisée', value: 20, color: '#FF9800' },
        { source: 'Partenariats', value: 10, color: '#0D47A1' },
        { source: 'Relations publiques', value: 5, color: '#2e7d32' }
      ],
      engagementDetails: [
        { metric: 'Taux de conversion', value: 12.5, unit: '%', trend: 'up' },
        { metric: 'Temps d\'engagement', value: 4.2, unit: 'min', trend: 'up' },
        { metric: 'Demandes devis', value: 342, unit: '', trend: 'up' },
        { metric: 'Leads qualifiés', value: 156, unit: '', trend: 'up' }
      ],
      roiBreakdown: [
        { category: 'Marketing digital', amount: 45000, percentage: 38 },
        { category: 'Événements professionnels', amount: 35000, percentage: 29 },
        { category: 'Communication corporate', amount: 25000, percentage: 21 },
        { category: 'Relations presse', amount: 15000, percentage: 12 }
      ],
      keyInsights: [
        'Excellente performance sur la cible entreprises (+42% vs objectif)',
        'Forte génération de leads qualifiés sur les solutions vertes',
        'ROI supérieur aux campagnes secteur énergie (+28%)',
        'Pics d\'engagement lors des salons professionnels'
      ],
      nextBestActions: [
        {
          priority: 'Haute',
          action: 'Développer la stratégie ABM pour les grands comptes industriels',
          impact: 'Conversion estimée: +25-30%',
          timeline: '6 semaines'
        },
        {
          priority: 'Moyenne',
          action: 'Créer un webinar série sur la transition énergétique',
          impact: 'Leads potentiels: +400',
          timeline: '2 mois'
        },
        {
          priority: 'Moyenne',
          action: 'Optimiser les landing pages solutions renouvelables',
          impact: 'Taux de conversion: +15%',
          timeline: '3 semaines'
        },
        {
          priority: 'Basse',
          action: 'Étendre les partenariats avec les bureaux d\'études',
          impact: 'Pipeline: +20%',
          timeline: '3 mois'
        }
      ]
    },
    // Program Recommendations Page Data
    programRecommendationsData: {
      colors: ['#1565C0', '#42A5F5', '#FF9800', '#0D47A1', '#2e7d32'],
      defaultFilters: {
        genre: 'all',
        timeSlot: 'all',
        targetAudience: 'all',
        budget: [0, 200000],
        minRating: 0,
        minViewership: 0,
        minScore: 0,
        sortBy: 'score',
        showActiveOnly: false,
        searchQuery: ''
      },
      scoreThresholds: {
        excellent: 85,
        good: 75
      },
      sortLabels: {
        score: 'Score',
        rating: 'Performance',
        viewership: 'Portée',
        cost: 'Coût',
        efficiency: 'Efficacité'
      },
      uiLabels: {
        advancedFilters: 'Filtres avancés',
        searchProgram: 'Rechercher un projet',
        searchPlaceholder: 'Tapez le nom...',
        genre: 'Type de projet',
        allGenres: 'Tous les types',
        timeSlot: 'Phase déploiement',
        allTimeSlots: 'Toutes les phases',
        sortBy: 'Trier par',
        budget: 'Budget (€)',
        minRating: 'Performance minimale',
        minScore: 'Score minimal (%)',
        resetFilters: 'Réinitialiser les filtres',
        scoresInfo: 'Les scores sont basés sur l\'efficacité énergétique, la rentabilité et l\'impact environnemental.',
        topPrograms: 'Top Projets Énergétiques',
        results: 'résultats',
        sortedBy: 'Trié par:',
        rating: 'Performance:',
        audience: 'Impact:',
        budgetLabel: 'Budget:',
        efficiency: 'Efficacité:',
        viewersPerEuro: 'impact/€',
        analyze: 'Analyser',
        details: 'Détails',
        noResults: 'Aucun projet ne correspond aux filtres sélectionnés',
        modifySearch: 'Essayez de modifier vos critères de recherche',
        genreOptions: {
          drame: 'Résidentiel',
          divertissement: 'Commercial',
          sport: 'Industriel',
          information: 'Infrastructure',
          documentaire: 'Innovation'
        },
        timeSlotOptions: {
          morning: 'Phase 1 (Étude)',
          evening: 'Phase 2 (Développement)',
          prime: 'Phase 3 (Déploiement)',
          late: 'Phase 4 (Exploitation)',
          weekend: 'Maintenance'
        },
        sortOptions: {
          score: 'Score d\'efficacité',
          rating: 'Performance',
          viewership: 'Portée',
          cost: 'Coût',
          efficiency: 'Efficacité (impact/coût)'
        },
        evolutionChart: {
          trendLabel: 'Tendance :',
          trendDescription: 'Croissance soutenue de l\'impact énergétique avec des pics lors des déploiements majeurs. Les projets d\'envergure dépassent régulièrement les 500K d\'impact.',
          interactionLabel: '💡 Interaction :',
          interactionDescription: 'Utilisez la zone de sélection en bas pour zoomer sur une période spécifique.',
          tooltipLabels: {
            totalAudience: 'Impact total',
            primeTime: 'Heures de pointe',
            dateLabel: 'Date:'
          },
          referenceLabel: 'Moyenne (475K)',
          lineLabels: {
            total: 'total',
            primeTimeSlot: 'Heures de pointe (9h-17h)'
          }
        }
      }
    }
  },
  retail: {
    // Program Details Modal Data (adapted for retail)
    programDescriptions: {
      'Nouvelle série dramatique': 'Campagne publicitaire premium mettant en scène nos nouveaux produits phares. Production haute qualité ciblant les consommateurs haut de gamme pour renforcer le positionnement premium de RetailMax.',
      'Émission de variétés': 'Opération marketing experiential dans nos magasins pilotes. Animation commerciale innovante combinant divertissement et vente pour dynamiser le trafic et l\'engagement client.',
      'Match de football': 'Partenariat sponsoring avec les événements sportifs majeurs pour accroître la notoriété RetailMax. Stratégie d\'activation premium garantissant une visibilité maximale auprès de notre clientèle cible.',
      'Magazine matinal': 'Catalogue digital interactif présentant nos nouvelles collections. Format moderne et engageant pour accompagner nos clients dans leurs choix d\'achat et tendances lifestyle.',
      'Documentaire Histoire': 'Série de contenus sur l\'évolution du retail et les innovations RetailMax. Production valorisant notre expertise et notre engagement pour l\'expérience client moderne.'
    },
    programSynopses: {
      'Nouvelle série dramatique': 'Campagne émotionnelle autour de nos produits lifestyle premium. Storytelling authentique mettant en scène de vrais clients dans leur quotidien RetailMax.',
      'Émission de variétés': 'Événement shopping expérientiel avec animations, démonstrations produits et offres exclusives pour créer un moment unique en magasin.',
      'Match de football': 'Activation brand content lors des grands événements sportifs avec espaces RetailMax et animations dédiées aux supporters.',
      'Magazine matinal': 'Présentation interactive de nos collections saisonnières, conseils style et tendances, avec possibilité d\'achat direct intégré.',
      'Documentaire Histoire': 'Retour sur l\'évolution du commerce moderne : de la boutique traditionnelle au retail phygital, l\'innovation par RetailMax.'
    },
    timeSlotLabels: {
      'morning': 'Ouverture (9h-12h)',
      'evening': 'Affluence du soir (17h-20h)',
      'prime': 'Rush du weekend (14h-18h)',
      'late': 'Nocturne (20h-22h)',
      'weekend': 'Weekend shopping'
    },
    analysisData: {
      competitorComparison: [
        { network: 'RetailMax', rating: 8.2, viewership: 85000, cost: 35000 },
        { network: 'ShopPlus', rating: 7.8, viewership: 63750, cost: 29750 },
        { network: 'MegaStore', rating: 7.5, viewership: 55250, cost: 24500 },
        { network: 'TrendShop', rating: 7.3, viewership: 38250, cost: 31500 }
      ],
      audienceProfile: [
        { demographic: 'Millennials', percentage: 38 },
        { demographic: 'Gen X', percentage: 32 },
        { demographic: 'Gen Z', percentage: 20 },
        { demographic: 'Baby Boomers', percentage: 10 }
      ],
      performanceMetrics: [
        { metric: 'Taux de conversion', value: 18, benchmark: 14, unit: '%' },
        { metric: 'Panier moyen', value: 87, benchmark: 72, unit: '€' },
        { metric: 'Satisfaction client', value: 8.9, benchmark: 8.4, unit: '/10' },
        { metric: 'Trafic magasin', value: 125, benchmark: 95, unit: 'K' }
      ],
      keyInsights: [
        'Performance supérieure sur les ventes premium',
        'Forte attraction clientèle weekend',
        'Efficacité des campagnes digitales',
        'Potentiel de croissance sur l\'e-commerce'
      ],
      risks: [
        'Concurrence e-commerce pure players',
        'Évolution des habitudes d\'achat post-covid',
        'Hausse des coûts logistiques et immobiliers'
      ],
      recommendations: [
        'Accélérer la transformation omnicanale',
        'Optimiser l\'expérience client en magasin',
        'Renforcer la stratégie data et personnalisation',
        'Développer les services de livraison rapide'
      ]
    },
    // Campaign Details Modal Data
    campaignDetailsData: {
      reachSources: [
        { source: 'E-commerce', value: 35, color: '#E91E63' },
        { source: 'Réseaux sociaux', value: 30, color: '#FF6B9D' },
        { source: 'Magasins physiques', value: 20, color: '#C2185B' },
        { source: 'Influenceurs', value: 10, color: '#880E4F' },
        { source: 'Email marketing', value: 5, color: '#2e7d32' }
      ],
      engagementDetails: [
        { metric: 'Taux de clic', value: 4.8, unit: '%', trend: 'up' },
        { metric: 'Temps de session', value: 3.5, unit: 'min', trend: 'up' },
        { metric: 'Ajouts panier', value: 2145, unit: '', trend: 'up' },
        { metric: 'Partages social', value: 1876, unit: '', trend: 'up' }
      ],
      roiBreakdown: [
        { category: 'Publicité digitale', amount: 28000, percentage: 40 },
        { category: 'Influenceurs/Content', amount: 21000, percentage: 30 },
        { category: 'Animations magasin', amount: 14000, percentage: 20 },
        { category: 'Email/CRM', amount: 7000, percentage: 10 }
      ],
      keyInsights: [
        'Performance exceptionnelle sur la cible Millennials (+28% vs objectif)',
        'Forte conversion sur les produits lifestyle premium',
        'ROI digital supérieur aux campagnes retail (+25%)',
        'Pics de vente lors des animations weekend'
      ],
      nextBestActions: [
        {
          priority: 'Haute',
          action: 'Développer la stratégie omnicanale avec click & collect',
          impact: 'Ventes estimées: +18-22%',
          timeline: '4 semaines'
        },
        {
          priority: 'Moyenne',
          action: 'Créer un programme de fidélité personnalisé',
          impact: 'Rétention: +35%',
          timeline: '2 mois'
        },
        {
          priority: 'Moyenne',
          action: 'Optimiser les parcours d\'achat mobile',
          impact: 'Conversion mobile: +20%',
          timeline: '6 semaines'
        },
        {
          priority: 'Basse',
          action: 'Étendre les partenariats avec les marques premium',
          impact: 'Panier moyen: +15%',
          timeline: '3 mois'
        }
      ]
    },
    // Program Recommendations Page Data
    programRecommendationsData: {
      colors: ['#E91E63', '#FF6B9D', '#C2185B', '#880E4F', '#2e7d32'],
      defaultFilters: {
        genre: 'all',
        timeSlot: 'all',
        targetAudience: 'all',
        budget: [0, 100000],
        minRating: 0,
        minViewership: 0,
        minScore: 0,
        sortBy: 'score',
        showActiveOnly: false,
        searchQuery: ''
      },
      scoreThresholds: {
        excellent: 88,
        good: 78
      },
      sortLabels: {
        score: 'Score',
        rating: 'Performance',
        viewership: 'Trafic',
        cost: 'Coût',
        efficiency: 'ROI'
      },
      uiLabels: {
        advancedFilters: 'Filtres avancés',
        searchProgram: 'Rechercher une campagne',
        searchPlaceholder: 'Tapez le nom...',
        genre: 'Catégorie produit',
        allGenres: 'Toutes les catégories',
        timeSlot: 'Période promotion',
        allTimeSlots: 'Toutes les périodes',
        sortBy: 'Trier par',
        budget: 'Budget (€)',
        minRating: 'Performance minimale',
        minScore: 'Score minimal (%)',
        resetFilters: 'Réinitialiser les filtres',
        scoresInfo: 'Les scores sont basés sur le trafic généré, la conversion et le retour sur investissement.',
        topPrograms: 'Top Campagnes Marketing',
        results: 'résultats',
        sortedBy: 'Trié par:',
        rating: 'Performance:',
        audience: 'Trafic:',
        budgetLabel: 'Budget:',
        efficiency: 'ROI:',
        viewersPerEuro: 'visiteurs/€',
        analyze: 'Analyser',
        details: 'Détails',
        noResults: 'Aucune campagne ne correspond aux filtres sélectionnés',
        modifySearch: 'Essayez de modifier vos critères de recherche',
        genreOptions: {
          drame: 'Mode & Lifestyle',
          divertissement: 'Électronique',
          sport: 'Sport & Loisirs',
          information: 'Maison & Jardin',
          documentaire: 'Beauté & Santé'
        },
        timeSlotOptions: {
          morning: 'Matinale (9h-12h)',
          evening: 'Affluence du soir (17h-20h)',
          prime: 'Rush weekend (14h-18h)',
          late: 'Nocturne (20h-22h)',
          weekend: 'Weekend shopping'
        },
        sortOptions: {
          score: 'Score de performance',
          rating: 'Performance',
          viewership: 'Trafic',
          cost: 'Coût',
          efficiency: 'ROI (trafic/coût)'
        },
        evolutionChart: {
          trendLabel: 'Tendance :',
          trendDescription: 'Progression continue du trafic avec des pics lors des promotions et événements spéciaux. Les weekends génèrent régulièrement plus de 120K visiteurs.',
          interactionLabel: '💡 Interaction :',
          interactionDescription: 'Utilisez la zone de sélection en bas pour zoomer sur une période spécifique.',
          tooltipLabels: {
            totalAudience: 'Trafic total',
            primeTime: 'Heures d\'affluence',
            dateLabel: 'Date:'
          },
          referenceLabel: 'Moyenne (87K)',
          lineLabels: {
            total: 'total',
            primeTimeSlot: 'Heures d\'affluence (14h-18h)'
          }
        }
      }
    }
  }
};

// Export function to get mock data for specific industry
export const getMockDataForIndustry = (industryName) => {
  return MOCK_DATA_CONFIGS[industryName] || MOCK_DATA_CONFIGS.media;
};

// Export function to get modal data for specific industry
export const getModalDataForIndustry = (industryName) => {
  return MODAL_DATA_CONFIGS[industryName] || MODAL_DATA_CONFIGS.media;
};

// Export all mock data configs
export default MOCK_DATA_CONFIGS;