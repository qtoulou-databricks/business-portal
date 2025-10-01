// English Mock Data Configuration
// This file contains all mock data for different industries in English

const MOCK_DATA_CONFIGS = {
  media: {
    // Main dashboard metrics
    metrics: {
      totalViewers: 12456789,
      activeCampaigns: 18,
      avgRating: 8.2,
      topPrograms: 156
    },

    // Viewership evolution data for charts
    viewershipData: [
      { month: 'Jan', viewers: 11200000, engagement: 7.8, revenue: 45000000 },
      { month: 'Feb', viewers: 11800000, engagement: 8.1, revenue: 47500000 },
      { month: 'Mar', viewers: 12100000, engagement: 8.3, revenue: 48200000 },
      { month: 'Apr', viewers: 12600000, engagement: 8.0, revenue: 49800000 },
      { month: 'May', viewers: 13200000, engagement: 8.4, revenue: 52100000 },
      { month: 'Jun', viewers: 12800000, engagement: 8.2, revenue: 50600000 },
      { month: 'Jul', viewers: 13500000, engagement: 8.6, revenue: 53400000 },
      { month: 'Aug', viewers: 12900000, engagement: 8.1, revenue: 51200000 },
      { month: 'Sep', viewers: 13800000, engagement: 8.5, revenue: 54700000 },
      { month: 'Oct', viewers: 14200000, engagement: 8.7, revenue: 56300000 },
      { month: 'Nov', viewers: 13600000, engagement: 8.3, revenue: 53800000 },
      { month: 'Dec', viewers: 14800000, engagement: 8.9, revenue: 58600000 }
    ],

    // Top Programs Performance
    programData: [
      { program: 'Evening News', rating: 9.2, viewers: 8500000 },
      { program: 'Britain\'s Got Talent', rating: 8.1, viewers: 6800000 },
      { program: 'Koh-Lanta', rating: 8.8, viewers: 6200000 },
      { program: 'The Voice', rating: 7.9, viewers: 5800000 },
      { program: 'Strictly Come Dancing', rating: 7.6, viewers: 5400000 }
    ],

    // Program catalog with ratings and viewership
    programs: [
      {
        id: 1,
        title: 'New Drama Series',
        genre: 'Drama',
        rating: 8.9,
        viewership: 12450000,
        cost: 450000,
        timeSlot: 'prime',
        targetDemo: '25-54',
        seasonality: 'high',
        competitorRating: 8.2,
        recommendationScore: 94
      },
      {
        id: 2,
        title: 'Variety Show',
        genre: 'Entertainment',
        rating: 8.2,
        viewership: 9800000,
        cost: 320000,
        timeSlot: 'prime',
        targetDemo: '18-49',
        seasonality: 'medium',
        competitorRating: 7.9,
        recommendationScore: 91
      },
      {
        id: 3,
        title: 'Football Match',
        genre: 'Sports',
        rating: 9.1,
        viewership: 15200000,
        cost: 280000,
        timeSlot: 'weekend',
        targetDemo: '18-65',
        seasonality: 'high',
        competitorRating: 8.8,
        recommendationScore: 96
      },
      {
        id: 4,
        title: 'Morning Magazine',
        genre: 'Information',
        rating: 7.8,
        viewership: 6500000,
        cost: 180000,
        timeSlot: 'morning',
        targetDemo: '35-65',
        seasonality: 'low',
        competitorRating: 7.5,
        recommendationScore: 87
      },
      {
        id: 5,
        title: 'History Documentary',
        genre: 'Documentary',
        rating: 8.5,
        viewership: 4200000,
        cost: 220000,
        timeSlot: 'evening',
        targetDemo: '30-60',
        seasonality: 'medium',
        competitorRating: 8.1,
        recommendationScore: 89
      }
    ],

    // Demographic distribution data
    demographicData: [
      { name: '18-24 years', value: 12 },
      { name: '25-34 years', value: 24 },
      { name: '35-49 years', value: 31 },
      { name: '50-64 years', value: 22 },
      { name: '65+ years', value: 11 }
    ],

    // Daily audience evolution data
    audienceEvolutionData: [
      { date: '11/20', audienceTotale: 8200000, primeTime: 12100000 },
      { date: '11/21', audienceTotale: 8800000, primeTime: 13200000 },
      { date: '11/22', audienceTotale: 9100000, primeTime: 13800000 },
      { date: '11/23', audienceTotale: 8900000, primeTime: 13400000 },
      { date: '11/24', audienceTotale: 9400000, primeTime: 14200000 },
      { date: '11/25', audienceTotale: 10200000, primeTime: 15800000 },
      { date: '11/26', audienceTotale: 10800000, primeTime: 16400000 }
    ],

    // Performance trend data for campaigns/programs
    performanceData: [
      { month: 'Jan', reach: 8200000, engagement: 7.2, cost: 420000, roi: 145 },
      { month: 'Feb', reach: 8800000, engagement: 7.6, cost: 440000, roi: 152 },
      { month: 'Mar', reach: 9100000, engagement: 7.8, cost: 450000, roi: 158 },
      { month: 'Apr', reach: 8900000, engagement: 7.4, cost: 435000, roi: 149 },
      { month: 'May', reach: 9600000, engagement: 8.1, cost: 480000, roi: 164 },
      { month: 'Jun', reach: 9200000, engagement: 7.9, cost: 460000, roi: 156 }
    ],

    // ROI trend data by channel
    roiTrendData: [
      { period: 'Q1', overall: 142, digital: 156, tv: 138, radio: 128 },
      { period: 'Q2', overall: 148, digital: 162, tv: 144, radio: 132 },
      { period: 'Q3', overall: 155, digital: 171, tv: 149, radio: 138 },
      { period: 'Q4', overall: 161, digital: 178, tv: 154, radio: 145 }
    ]
  },

  energy: {
    // Main dashboard metrics (adapted for energy sector)
    metrics: {
      totalViewers: 450000,
      activeCampaigns: 12,
      avgRating: 8.7,
      topPrograms: 42
    },

    // Viewership evolution data (adapted as project impact data)
    viewershipData: [
      { month: 'Jan', viewers: 420000, engagement: 8.2, revenue: 2400000 },
      { month: 'Feb', viewers: 445000, engagement: 8.4, revenue: 2580000 },
      { month: 'Mar', viewers: 460000, engagement: 8.3, revenue: 2720000 },
      { month: 'Apr', viewers: 475000, engagement: 8.6, revenue: 2850000 },
      { month: 'May', viewers: 490000, engagement: 8.8, revenue: 2950000 },
      { month: 'Jun', viewers: 485000, engagement: 8.5, revenue: 2890000 }
    ],

    // Top Services Performance
    programData: [
      { program: 'Solar Residential', rating: 9.1, viewers: 285000 },
      { program: 'Wind Power Offshore', rating: 8.7, viewers: 195000 },
      { program: 'Smart Grid', rating: 8.9, viewers: 320000 },
      { program: 'Energy storage', rating: 8.2, viewers: 165000 },
      { program: 'Geothermy', rating: 8.5, viewers: 225000 }
    ],

    // Energy projects catalog
    programs: [
      {
        id: 1,
        title: 'Premium Solar Solution',
        genre: 'Residential',
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
        title: 'Industrial Wind Power',
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
        title: 'Smart Grid Network',
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
        title: 'Energy Storage System',
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
        title: 'Green Hydrogen Project',
        genre: 'Innovation',
        rating: 8.6,
        viewership: 145000,
        cost: 135000,
        timeSlot: 'peak',
        targetDemo: '30-65',
        seasonality: 'medium',
        competitorRating: 8.0,
        recommendationScore: 90
      }
    ],

    // Demographic data (adapted for energy sector)
    demographicData: [
      { name: 'Residential', value: 35 },
      { name: 'Small Business', value: 28 },
      { name: 'Industry', value: 22 },
      { name: 'Public Sector', value: 15 }
    ],

    // Daily evolution data (energy consumption/production)
    audienceEvolutionData: [
      { date: '11/20', audienceTotale: 420000, primeTime: 485000 },
      { date: '11/21', audienceTotale: 435000, primeTime: 510000 },
      { date: '11/22', audienceTotale: 445000, primeTime: 520000 },
      { date: '11/23', audienceTotale: 450000, primeTime: 525000 },
      { date: '11/24', audienceTotale: 460000, primeTime: 540000 },
      { date: '11/25', audienceTotale: 475000, primeTime: 560000 },
      { date: '11/26', audienceTotale: 480000, primeTime: 580000 }
    ],

    // Performance data (energy projects)
    performanceData: [
      { month: 'Jan', reach: 385000, engagement: 8.1, cost: 95000, roi: 185 },
      { month: 'Feb', reach: 410000, engagement: 8.3, cost: 98000, roi: 192 },
      { month: 'Mar', reach: 425000, engagement: 8.4, cost: 102000, roi: 198 },
      { month: 'Apr', reach: 440000, engagement: 8.6, cost: 105000, roi: 205 },
      { month: 'May', reach: 455000, engagement: 8.8, cost: 108000, roi: 212 },
      { month: 'Jun', reach: 470000, engagement: 8.7, cost: 110000, roi: 208 }
    ],

    // ROI trend by energy source
    roiTrendData: [
      { period: 'Q1', overall: 185, digital: 195, tv: 175, radio: 165 },
      { period: 'Q2', overall: 195, digital: 208, tv: 185, radio: 172 },
      { period: 'Q3', overall: 208, digital: 225, tv: 198, radio: 185 },
      { period: 'Q4', overall: 218, digital: 238, tv: 208, radio: 195 }
    ]
  },

  retail: {
    // Main dashboard metrics (adapted for retail)
    metrics: {
      totalViewers: 85000,
      activeCampaigns: 125000,
      avgRating: 8.4,
      topPrograms: 28
    },

    // Viewership data (adapted as customer traffic data)
    viewershipData: [
      { month: 'Jan', viewers: 78000, engagement: 8.8, revenue: 1250000 },
      { month: 'Feb', viewers: 82000, engagement: 9.1, revenue: 1380000 },
      { month: 'Mar', viewers: 85000, engagement: 8.9, revenue: 1420000 },
      { month: 'Apr', viewers: 88000, engagement: 9.2, revenue: 1510000 },
      { month: 'May', viewers: 91000, engagement: 9.0, revenue: 1580000 },
      { month: 'Jun', viewers: 87000, engagement: 8.7, revenue: 1460000 }
    ],

    // Top Product Lines Performance
    programData: [
      { program: 'Mode collection', rating: 9.0, viewers: 42000 },
      { program: 'High-Tech', rating: 8.6, viewers: 52000 },
      { program: 'Gaming', rating: 8.8, viewers: 35000 },
      { program: 'Fitness', rating: 8.3, viewers: 28000 },
      { program: 'Bio comestic', rating: 8.9, viewers: 38000 }
    ],

    // Retail campaigns catalog
    programs: [
      {
        id: 1,
        title: 'Fall Premium Collection',
        genre: 'Fashion',
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
        title: 'Elite Gaming Setup',
        genre: 'Electronics',
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
        genre: 'Sports & Leisure',
        rating: 8.9,
        viewership: 95000,
        cost: 42000,
        timeSlot: 'weekend',
        targetDemo: '20-50',
        seasonality: 'high',
        competitorRating: 8.5,
        recommendationScore: 95
      },
      {
        id: 4,
        title: 'Premium High-Tech Collection',
        genre: 'Electronics',
        rating: 8.6,
        viewership: 52000,
        cost: 38000,
        timeSlot: 'prime',
        targetDemo: '25-45',
        seasonality: 'medium',
        competitorRating: 8.0,
        recommendationScore: 90
      },
      {
        id: 5,
        title: 'Organic Beauty & Wellness',
        genre: 'Beauty & Health',
        rating: 8.9,
        viewership: 38000,
        cost: 25000,
        timeSlot: 'evening',
        targetDemo: '35-65',
        seasonality: 'medium',
        competitorRating: 7.9,
        recommendationScore: 87
      }
    ],

    // Demographic data (retail customers)
    demographicData: [
      { name: 'Millennials', value: 38 },
      { name: 'Gen X', value: 32 },
      { name: 'Gen Z', value: 20 },
      { name: 'Boomers', value: 10 }
    ],

    // Daily traffic evolution
    audienceEvolutionData: [
      { date: '11/20', audienceTotale: 78000, primeTime: 92000 },
      { date: '11/21', audienceTotale: 82000, primeTime: 98000 },
      { date: '11/22', audienceTotale: 85000, primeTime: 105000 },
      { date: '11/23', audienceTotale: 88000, primeTime: 110000 },
      { date: '11/24', audienceTotale: 91000, primeTime: 118000 },
      { date: '11/25', audienceTotale: 95000, primeTime: 125000 },
      { date: '11/26', audienceTotale: 92000, primeTime: 120000 }
    ],

    // Campaign performance data
    performanceData: [
      { month: 'Jan', reach: 72000, engagement: 8.8, cost: 28000, roi: 225 },
      { month: 'Feb', reach: 78000, engagement: 9.1, cost: 30000, roi: 245 },
      { month: 'Mar', reach: 82000, engagement: 8.9, cost: 32000, roi: 238 },
      { month: 'Apr', reach: 85000, engagement: 9.2, cost: 34000, roi: 255 },
      { month: 'May', reach: 88000, engagement: 9.0, cost: 36000, roi: 248 },
      { month: 'Jun', reach: 84000, engagement: 8.7, cost: 35000, roi: 235 }
    ],

    // ROI trend by channel
    roiTrendData: [
      { period: 'Q1', overall: 228, digital: 248, tv: 218, radio: 198 },
      { period: 'Q2', overall: 238, digital: 265, tv: 228, radio: 208 },
      { period: 'Q3', overall: 248, digital: 275, tv: 238, radio: 218 },
      { period: 'Q4', overall: 258, digital: 285, tv: 248, radio: 228 }
    ]
  }
};

// Modal data configurations for different industries
const MODAL_DATA_CONFIGS = {
  media: {
    // Program Details Modal Data
    programDescriptions: {
      'New Drama Series': 'Premium TV drama series designed specifically for TF1, combining excellence and innovation in French television production.',
      'Variety Show': 'High-quality entertainment program featuring top French celebrities and international guests, creating unforgettable TV moments.',
      'Football Match': 'Exclusive live sports coverage of major football events, providing comprehensive analysis and expert commentary for French audiences.',
      'Morning Magazine': 'Daily morning show covering news, lifestyle, and entertainment topics relevant to French viewers starting their day.',
      'History Documentary': 'Educational documentary series exploring French and world history with cutting-edge production values and expert insights.'
    },
    programSynopses: {
      'New Drama Series': 'Captivating storylines featuring compelling characters in contemporary French society, addressing current social issues with depth and authenticity.',
      'Variety Show': 'A blend of music, comedy, and celebrity interviews creating an entertaining evening experience for the whole family.',
      'Football Match': 'Live coverage of premier football matches with pre-game analysis, halftime insights, and post-match interviews.',
      'Morning Magazine': 'Your daily companion featuring weather updates, traffic reports, lifestyle segments, and celebrity interviews.',
      'History Documentary': 'Journey through time exploring pivotal moments in history with stunning visuals and expert narration.'
    },
    timeSlotLabels: {
      'morning': 'Morning (6am-12pm)',
      'evening': 'Evening (6pm-8pm)',
      'prime': 'Prime Time (8pm-10:30pm)',
      'late': 'Late Night (10:30pm-2am)',
      'weekend': 'Weekend Programming'
    },
    analysisData: {
      competitorComparison: [
        { network: 'TF1', rating: 8.4, viewership: 12456789, cost: 485000 },
        { network: 'France 2', rating: 7.8, viewership: 9342592, cost: 412500 },
        { network: 'M6', rating: 7.6, viewership: 8076543, cost: 357000 },
        { network: 'Canal+', rating: 8.1, viewership: 5234567, cost: 425000 }
      ],
      audienceProfile: [
        { demographic: '18-24 years', percentage: 15 },
        { demographic: '25-34 years', percentage: 28 },
        { demographic: '35-49 years', percentage: 32 },
        { demographic: '50-64 years', percentage: 18 },
        { demographic: '65+ years', percentage: 7 }
      ],
      performanceMetrics: [
        { metric: 'Audience Engagement', value: 8.7, trend: 'up', change: '+12%' },
        { metric: 'Market Share', value: 24.5, trend: 'up', change: '+2.3%' },
        { metric: 'Ad Revenue per Hour', value: 125000, trend: 'up', change: '+8%' },
        { metric: 'Social Media Mentions', value: 15420, trend: 'up', change: '+25%' }
      ],
      keyInsights: [
        'Market leader with strong brand recognition',
        'Premium content quality and production values',
        'Strong presence across all time slots',
        'Effective digital integration strategy'
      ],
      strengths: [
        'Market leader with strong brand recognition',
        'Premium content quality and production values',
        'Strong presence across all time slots',
        'Effective digital integration strategy'
      ],
      risks: [
        'Increasing competition from streaming platforms',
        'Fragmentation of traditional TV audience',
        'Rising content production costs',
        'Evolving advertising landscape'
      ],
      recommendations: [
        'Invest in original premium content production',
        'Strengthen digital and streaming offerings',
        'Develop targeted content for younger demographics',
        'Enhance interactive and social media integration'
      ]
    },
    campaignDetailsData: {
      reachSources: [
        { source: 'Linear TV', value: 65 },
        { source: 'Digital Replay', value: 20 },
        { source: 'Social Media', value: 10 },
        { source: 'Streaming Platform', value: 5 }
      ],
      engagementDetails: [
        { metric: 'Social Shares', value: 15420, unit: '', trend: 'up' },
        { metric: 'Comments', value: 8760, unit: '', trend: 'up' },
        { metric: 'Watch Time', value: 42, unit: 'min', trend: 'up' },
        { metric: 'Interaction Rate', value: 12.8, unit: '%', trend: 'down' }
      ],
      roiBreakdown: [
        { category: 'Content Production', amount: 285000, percentage: 45 },
        { category: 'Marketing & Promotion', amount: 190000, percentage: 30 },
        { category: 'Distribution', amount: 95000, percentage: 15 },
        { category: 'Technical Costs', amount: 63500, percentage: 10 }
      ],
      keyInsights: [
        'Prime time shows generate 65% higher engagement than other slots',
        'Social media integration increases overall viewership by 18%',
        'Younger demographics prefer digital replay viewing',
        'Interactive content features drive higher retention rates'
      ],
      nextBestActions: [
        {
          priority: 'High',
          action: 'Launch targeted social media campaign for younger demographics',
          impact: 'Expected +15% increase in 18-34 viewership',
          timeline: '2 weeks'
        },
        {
          priority: 'Medium',
          action: 'Enhance second screen experience with interactive content',
          impact: 'Improved engagement metrics and retention',
          timeline: '1 month'
        },
        {
          priority: 'Low',
          action: 'Develop content partnership with streaming platforms',
          impact: 'Extended reach and new revenue streams',
          timeline: '3 months'
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
        rating: 'Rating',
        viewership: 'Audience',
        cost: 'Budget',
        efficiency: 'Efficiency'
      },
      uiLabels: {
        advancedFilters: 'Advanced Filters',
        searchProgram: 'Search shows',
        searchPlaceholder: 'Type name...',
        genre: 'Genre',
        allGenres: 'All genres',
        timeSlot: 'Time Slot',
        allTimeSlots: 'All time slots',
        sortBy: 'Sort by',
        budget: 'Budget ($)',
        minRating: 'Minimum rating',
        minScore: 'Minimum score (%)',
        resetFilters: 'Reset filters',
        scoresInfo: 'Scores are based on audience engagement, budget efficiency, and competitive analysis.',
        topPrograms: 'Top Shows',
        results: 'results',
        sortedBy: 'Sorted by:',
        rating: 'Rating:',
        audience: 'Audience:',
        budgetLabel: 'Budget:',
        efficiency: 'Efficiency:',
        viewersPerEuro: 'viewers/$',
        analyze: 'Analyze',
        details: 'Details',
        noResults: 'No shows match the selected filters',
        modifySearch: 'Try modifying your search criteria',
        genreOptions: {
          drame: 'Drama',
          divertissement: 'Entertainment',
          sport: 'Sports',
          information: 'News',
          documentaire: 'Documentary'
        },
        timeSlotOptions: {
          morning: 'Morning (6am-12pm)',
          evening: 'Evening (6pm-8pm)',
          prime: 'Prime Time (8pm-10:30pm)',
          late: 'Late Night (10:30pm-2am)',
          weekend: 'Weekend'
        },
        sortOptions: {
          score: 'Performance Score',
          rating: 'Rating',
          viewership: 'Audience',
          cost: 'Budget',
          efficiency: 'Efficiency (audience/cost)'
        },
        evolutionChart: {
          trendLabel: 'Trend:',
          trendDescription: 'Consistent growth with notable peaks during weekends and major shows. Prime time audience regularly exceeds 11M viewers.',
          interactionLabel: '💡 Interaction:',
          interactionDescription: 'Use the selection area below to zoom in on a specific period.',
          tooltipLabels: {
            totalAudience: 'Total Audience',
            primeTime: 'Prime Time',
            dateLabel: 'Date:'
          },
          referenceLabel: 'Average (8.75M)',
          lineLabels: {
            total: 'total',
            primeTimeSlot: 'Prime Time (8pm-10:30pm)'
          }
        }
      }
    }
  },

  energy: {
    // Program Details Modal Data (adapted for energy)
    programDescriptions: {
      'Premium Solar Solution': 'High-performance solar energy system designed specifically for PowerCorp, combining cutting-edge technology and environmental innovation.',
      'Industrial Wind Power': 'Large-scale wind energy project featuring advanced turbine technology for maximum energy production and grid integration.',
      'Smart Grid Network': 'Next-generation smart grid infrastructure enabling efficient energy distribution and real-time demand management.',
      'Energy Storage System': 'Advanced battery storage solution providing grid stability and renewable energy integration capabilities.',
      'Green Hydrogen Project': 'Revolutionary hydrogen production facility using renewable energy sources for clean fuel generation.'
    },
    programSynopses: {
      'Premium Solar Solution': 'Comprehensive residential solar installation program with smart monitoring and maximum efficiency panels.',
      'Industrial Wind Power': 'Commercial-scale wind farm development with advanced turbine technology and grid integration.',
      'Smart Grid Network': 'Intelligent energy distribution system with real-time monitoring and automated load balancing.',
      'Energy Storage System': 'Large-scale battery storage facility enabling renewable energy storage and grid stabilization.',
      'Green Hydrogen Project': 'Clean hydrogen production using electrolysis powered by renewable energy sources.'
    },
    timeSlotLabels: {
      'morning': 'Phase 1 (Planning)',
      'evening': 'Phase 2 (Development)',
      'prime': 'Phase 3 (Deployment)',
      'late': 'Phase 4 (Operation)',
      'weekend': 'Maintenance'
    },
    analysisData: {
      competitorComparison: [
        { network: 'PowerCorp', rating: 8.7, viewership: 450000, cost: 125000 },
        { network: 'EnergyPlus', rating: 8.2, viewership: 380000, cost: 118000 },
        { network: 'GreenTech', rating: 8.0, viewership: 320000, cost: 105000 },
        { network: 'SolarMax', rating: 7.8, viewership: 285000, cost: 95000 }
      ],
      audienceProfile: [
        { demographic: 'Residential', percentage: 35 },
        { demographic: 'Small Business', percentage: 28 },
        { demographic: 'Industry', percentage: 22 },
        { demographic: 'Public Sector', percentage: 15 }
      ],
      performanceMetrics: [
        { metric: 'Energy Efficiency', value: 92.5, trend: 'up', change: '+5.2%' },
        { metric: 'Cost Reduction', value: 18.7, trend: 'up', change: '+3.1%' },
        { metric: 'Customer Satisfaction', value: 8.9, trend: 'up', change: '+0.4%' },
        { metric: 'Environmental Impact', value: 95.2, trend: 'up', change: '+2.8%' }
      ],
      keyInsights: [
        'Leading renewable energy technology',
        'Strong market penetration in B2B sector',
        'Superior operational efficiency',
        'Growth potential in green energy sector'
      ],
      strengths: [
        'Leading renewable energy technology',
        'Strong market penetration in B2B sector',
        'Superior operational efficiency',
        'Growth potential in green energy sector'
      ],
      risks: [
        'Commodity price volatility',
        'Evolving environmental regulations',
        'Increased competition from renewable specialists',
        'Grid integration challenges'
      ],
      recommendations: [
        'Accelerate green energy transition',
        'Optimize operational cost management',
        'Strengthen customer retention strategy',
        'Develop comprehensive energy services'
      ]
    },
    campaignDetailsData: {
      reachSources: [
        { source: 'Digital B2B', value: 45 },
        { source: 'Industry Events', value: 25 },
        { source: 'Direct Sales', value: 20 },
        { source: 'Partnerships', value: 10 }
      ],
      engagementDetails: [
        { metric: 'Project Inquiries', value: 2840, unit: '', trend: 'up' },
        { metric: 'Site Assessments', value: 1250, unit: '', trend: 'up' },
        { metric: 'Proposal Conversion', value: 68, unit: '%', trend: 'up' },
        { metric: 'Customer Retention', value: 94, unit: '%', trend: 'up' }
      ],
      roiBreakdown: [
        { category: 'Equipment & Installation', amount: 85000, percentage: 55 },
        { category: 'Engineering & Design', amount: 31000, percentage: 20 },
        { category: 'Project Management', amount: 23250, percentage: 15 },
        { category: 'Marketing & Sales', amount: 15500, percentage: 10 }
      ],
      keyInsights: [
        'B2B digital channels generate 70% higher qualified leads',
        'Industry event participation increases brand recognition by 35%',
        'Direct sales approach yields highest conversion rates',
        'Partnership channels provide cost-effective market expansion'
      ],
      nextBestActions: [
        {
          priority: 'High',
          action: 'Expand digital marketing for renewable energy solutions',
          impact: 'Expected +25% increase in qualified leads',
          timeline: '6 weeks'
        },
        {
          priority: 'Medium',
          action: 'Develop strategic partnerships with construction companies',
          impact: 'Access to new market segments and projects',
          timeline: '3 months'
        },
        {
          priority: 'Low',
          action: 'Enhance customer portal with energy monitoring tools',
          impact: 'Improved customer satisfaction and retention',
          timeline: '4 months'
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
        viewership: 'Reach',
        cost: 'Cost',
        efficiency: 'Efficiency'
      },
      uiLabels: {
        advancedFilters: 'Advanced Filters',
        searchProgram: 'Search projects',
        searchPlaceholder: 'Type name...',
        genre: 'Project Type',
        allGenres: 'All types',
        timeSlot: 'Deployment Phase',
        allTimeSlots: 'All phases',
        sortBy: 'Sort by',
        budget: 'Budget ($)',
        minRating: 'Minimum performance',
        minScore: 'Minimum score (%)',
        resetFilters: 'Reset filters',
        scoresInfo: 'Scores are based on energy efficiency, profitability, and environmental impact.',
        topPrograms: 'Top Energy Projects',
        results: 'results',
        sortedBy: 'Sorted by:',
        rating: 'Performance:',
        audience: 'Impact:',
        budgetLabel: 'Budget:',
        efficiency: 'Efficiency:',
        viewersPerEuro: 'impact/$',
        analyze: 'Analyze',
        details: 'Details',
        noResults: 'No projects match the selected filters',
        modifySearch: 'Try modifying your search criteria',
        genreOptions: {
          drame: 'Residential',
          divertissement: 'Commercial',
          sport: 'Industrial',
          information: 'Infrastructure',
          documentaire: 'Innovation'
        },
        timeSlotOptions: {
          morning: 'Phase 1 (Planning)',
          evening: 'Phase 2 (Development)',
          prime: 'Phase 3 (Deployment)',
          late: 'Phase 4 (Operation)',
          weekend: 'Maintenance'
        },
        sortOptions: {
          score: 'Efficiency Score',
          rating: 'Performance',
          viewership: 'Reach',
          cost: 'Cost',
          efficiency: 'Efficiency (impact/cost)'
        },
        evolutionChart: {
          trendLabel: 'Trend:',
          trendDescription: 'Sustained growth in energy impact with peaks during major deployments. Large-scale projects regularly exceed 500K impact.',
          interactionLabel: '💡 Interaction:',
          interactionDescription: 'Use the selection area below to zoom in on a specific period.',
          tooltipLabels: {
            totalAudience: 'Total Impact',
            primeTime: 'Peak Hours',
            dateLabel: 'Date:'
          },
          referenceLabel: 'Average (475K)',
          lineLabels: {
            total: 'total',
            primeTimeSlot: 'Peak Hours (9am-5pm)'
          }
        }
      }
    }
  },

  retail: {
    // Program Details Modal Data (adapted for retail)
    programDescriptions: {
      'New Drama Series': 'Premium marketing campaign featuring our flagship products. High-quality production targeting premium consumers to strengthen RetailMax\'s positioning.',
      'Variety Show': 'Experiential marketing operation in our pilot stores. Innovative commercial animation combining entertainment and sales to boost traffic and customer engagement.',
      'Football Match': 'Sponsorship partnership with major sporting events to increase RetailMax brand awareness. Premium activation strategy ensuring maximum visibility to our target audience.',
      'Morning Magazine': 'Interactive digital catalog showcasing our new collections. Modern and engaging format to guide customers in their purchases and lifestyle trends.',
      'History Documentary': 'Content series on retail evolution and RetailMax innovations. Production highlighting our expertise and commitment to modern customer experience.'
    },
    programSynopses: {
      'New Drama Series': 'Emotional campaign around our premium lifestyle products. Authentic storytelling featuring real customers in their daily RetailMax experience.',
      'Variety Show': 'Experiential shopping event with animations, product demonstrations, and exclusive offers to create a unique in-store moment.',
      'Football Match': 'Brand content activation during major sporting events with RetailMax spaces and dedicated fan animations.',
      'Morning Magazine': 'Interactive presentation of our seasonal collections, style advice and trends, with integrated direct purchase capability.',
      'History Documentary': 'Look back at modern commerce evolution: from traditional shops to phygital retail, innovation by RetailMax.'
    },
    timeSlotLabels: {
      'morning': 'Opening Hours (9am-12pm)',
      'evening': 'Evening Rush (5pm-8pm)',
      'prime': 'Weekend Rush (2pm-6pm)',
      'late': 'Late Shopping (8pm-10pm)',
      'weekend': 'Weekend Shopping'
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
        { demographic: 'Boomers', percentage: 10 }
      ],
      performanceMetrics: [
        { metric: 'Store Traffic', value: 125.3, trend: 'up', change: '+8.7%' },
        { metric: 'Conversion Rate', value: 15.8, trend: 'up', change: '+2.1%' },
        { metric: 'Average Basket', value: 67.50, trend: 'up', change: '+5.3%' },
        { metric: 'Customer Satisfaction', value: 8.9, trend: 'up', change: '+0.6%' }
      ],
      strengths: [
        'Strong omnichannel customer experience',
        'Excellent product range and quality',
        'Effective loyalty program',
        'Strategic store locations'
      ],
      keyInsights: [
        'Strong omnichannel customer experience',
        'Excellent product range and quality',
        'Effective loyalty program',
        'Strategic store locations'
      ],
      risks: [
        'Intense competition from e-commerce',
        'Changing consumer shopping habits',
        'Rising operational costs',
        'Supply chain disruptions'
      ],
      recommendations: [
        'Strengthen digital and mobile experience',
        'Enhance personalization and customer data use',
        'Develop sustainable product lines',
        'Optimize inventory and supply chain'
      ]
    },
    campaignDetailsData: {
      reachSources: [
        { source: 'In-Store', value: 50 },
        { source: 'E-commerce', value: 30 },
        { source: 'Social Media', value: 15 },
        { source: 'Mobile App', value: 5 }
      ],
      engagementDetails: [
        { metric: 'Store Visits', value: 12500, unit: '', trend: 'up' },
        { metric: 'Online Orders', value: 3250, unit: '', trend: 'up' },
        { metric: 'App Downloads', value: 1840, unit: '', trend: 'up' },
        { metric: 'Loyalty Sign-ups', value: 950, unit: '', trend: 'up' }
      ],
      roiBreakdown: [
        { category: 'Digital Marketing', amount: 15750, percentage: 45 },
        { category: 'In-Store Promotion', amount: 10500, percentage: 30 },
        { category: 'Influencer Partnership', amount: 5250, percentage: 15 },
        { category: 'Content Creation', amount: 3500, percentage: 10 }
      ],
      keyInsights: [
        'In-store experiences drive 60% of total engagement',
        'Social media campaigns increase foot traffic by 22%',
        'Mobile app users have 40% higher lifetime value',
        'Loyalty program members spend 35% more per visit'
      ],
      nextBestActions: [
        {
          priority: 'High',
          action: 'Launch personalized mobile push notification campaigns',
          impact: 'Expected +20% increase in repeat visits',
          timeline: '3 weeks'
        },
        {
          priority: 'Medium',
          action: 'Develop influencer partnerships for lifestyle content',
          impact: 'Enhanced brand awareness and social engagement',
          timeline: '2 months'
        },
        {
          priority: 'Low',
          action: 'Implement AR try-before-buy features',
          impact: 'Improved customer experience and conversion',
          timeline: '3 months'
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
        viewership: 'Traffic',
        cost: 'Cost',
        efficiency: 'ROI'
      },
      uiLabels: {
        advancedFilters: 'Advanced Filters',
        searchProgram: 'Search campaigns',
        searchPlaceholder: 'Type name...',
        genre: 'Product Category',
        allGenres: 'All categories',
        timeSlot: 'Promotion Period',
        allTimeSlots: 'All periods',
        sortBy: 'Sort by',
        budget: 'Budget ($)',
        minRating: 'Minimum performance',
        minScore: 'Minimum score (%)',
        resetFilters: 'Reset filters',
        scoresInfo: 'Scores are based on traffic generated, conversion rate, and return on investment.',
        topPrograms: 'Top Marketing Campaigns',
        results: 'results',
        sortedBy: 'Sorted by:',
        rating: 'Performance:',
        audience: 'Traffic:',
        budgetLabel: 'Budget:',
        efficiency: 'ROI:',
        viewersPerEuro: 'visitors/$',
        analyze: 'Analyze',
        details: 'Details',
        noResults: 'No campaigns match the selected filters',
        modifySearch: 'Try modifying your search criteria',
        genreOptions: {
          drame: 'Fashion & Lifestyle',
          divertissement: 'Electronics',
          sport: 'Sports & Leisure',
          information: 'Home & Garden',
          documentaire: 'Beauty & Health'
        },
        timeSlotOptions: {
          morning: 'Morning Rush (9am-12pm)',
          evening: 'Evening Rush (5pm-8pm)',
          prime: 'Weekend Rush (2pm-6pm)',
          late: 'Late Shopping (8pm-10pm)',
          weekend: 'Weekend Shopping'
        },
        sortOptions: {
          score: 'Performance Score',
          rating: 'Performance',
          viewership: 'Traffic',
          cost: 'Cost',
          efficiency: 'ROI (traffic/cost)'
        },
        evolutionChart: {
          trendLabel: 'Trend:',
          trendDescription: 'Continuous traffic growth with peaks during promotions and special events. Weekends regularly generate over 120K visitors.',
          interactionLabel: '💡 Interaction:',
          interactionDescription: 'Use the selection area below to zoom in on a specific period.',
          tooltipLabels: {
            totalAudience: 'Total Traffic',
            primeTime: 'Rush Hours',
            dateLabel: 'Date:'
          },
          referenceLabel: 'Average (87K)',
          lineLabels: {
            total: 'total',
            primeTimeSlot: 'Rush Hours (2pm-6pm)'
          }
        }
      }
    }
  }
};

// Helper function to get mock data for a specific industry
export const getMockDataForIndustry = (industry) => {
  return MOCK_DATA_CONFIGS[industry] || MOCK_DATA_CONFIGS.media;
};

// Helper function to get modal data for a specific industry
export const getModalDataForIndustry = (industry) => {
  return MODAL_DATA_CONFIGS[industry] || MODAL_DATA_CONFIGS.media;
};

export { MOCK_DATA_CONFIGS, MODAL_DATA_CONFIGS };