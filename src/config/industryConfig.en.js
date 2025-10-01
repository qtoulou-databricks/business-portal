// Industry Configuration System - English Version
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
    dashboardTitle: 'Dashboard',

    // Main Sections
    sections: {
      dashboard: 'Dashboard',
      campaigns: 'Campaign Analysis',
      audience: 'Audience Analysis'
    },

    // Core Metrics
    metrics: {
      totalViewers: 'Total Viewers',
      averageRating: 'Average Rating',
      activeCampaigns: 'Active Campaigns',
      topPrograms: 'Top Shows',
      campaigns: 'Campaigns',
      programs: 'Programs',
      shows: 'Shows',
      viewership: 'Viewership',
      viewers: 'Viewers',
      rating: 'Rating',
      engagement: 'Engagement',
      reach: 'Reach',
      cost: 'Cost',
      roi: 'ROI',
      trend: 'Trend'
    },

    // Time Slots
    timeSlots: {
      morning: 'Morning (6am-12pm)',
      evening: 'Evening (6pm-8pm)',
      prime: 'Prime Time (8pm-10:30pm)',
      late: 'Late Night (10:30pm-2am)',
      weekend: 'Weekend'
    },

    // Content Types
    contentTypes: {
      drama: 'Drama',
      entertainment: 'Entertainment',
      sport: 'Sports',
      news: 'News',
      documentary: 'Documentary',
      variety: 'Variety',
      reality: 'Reality TV'
    },

    // Sample Programs/Content
    sampleContent: [
      { name: '8PM News', type: 'news', rating: 9.2 },
      { name: 'French Drama Series', type: 'drama', rating: 8.1 },
      { name: 'Survivor France', type: 'reality', rating: 8.8 },
      { name: 'The Voice France', type: 'entertainment', rating: 7.9 },
      { name: 'Dancing with the Stars', type: 'entertainment', rating: 7.6 },
      { name: 'Star Academy', type: 'reality', rating: 9.5 },
      { name: 'The Masked Singer', type: 'entertainment', rating: 8.9 }
    ],

    // Sample Campaigns
    sampleCampaigns: [
      {
        id: 1,
        name: 'Survivor France 2024 Campaign',
        status: 'active',
        reach: 6800000,
        engagement: 9.2,
        cost: 450000,
        roi: 285,
        trend: 'up'
      },
      {
        id: 2,
        name: 'The Voice France Promotion',
        status: 'active',
        reach: 5200000,
        engagement: 8.7,
        cost: 380000,
        roi: 240,
        trend: 'up'
      },
      {
        id: 3,
        name: '8PM News - New Season',
        status: 'completed',
        reach: 8500000,
        engagement: 7.8,
        cost: 290000,
        roi: 195,
        trend: 'up'
      },
      {
        id: 4,
        name: 'Dancing with the Stars',
        status: 'active',
        reach: 4800000,
        engagement: 8.4,
        cost: 320000,
        roi: 210,
        trend: 'up'
      },
      {
        id: 5,
        name: 'French Drama Special',
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
        name: 'Weekend Movie Special',
        status: 'completed',
        reach: 4100000,
        engagement: 7.2,
        cost: 230000,
        roi: 180,
        trend: 'up'
      },
      {
        id: 8,
        name: 'Sunday Magazine Show',
        status: 'active',
        reach: 3800000,
        engagement: 8.1,
        cost: 280000,
        roi: 220,
        trend: 'up'
      }
    ],

    // Units & Currency
    currency: '$',
    viewerUnit: 'viewers',
    audienceScale: 'M', // Millions

    // Chart Titles
    chartTitles: {
      monthlyPerformance: 'Overall Monthly Performance',
      budgetVsSpending: 'Budget vs Spending by Campaign',
      roiTrend: 'ROI Trend by Channel',
      audienceEvolution: 'Viewership Throughout the Day',
      topPrograms: 'Top Shows by Performance',
      demographics: 'Audience Demographics',
      programAnalysis: 'Rating vs Viewership Analysis'
    },

    // Chart Legends
    chartLegends: {
      // Budget Chart
      budgetAllocated: 'Budget Allocated',
      budgetSpent: 'Spent',
      budgetRemaining: 'Remaining',

      // ROI Trend Chart
      roiOverall: 'Overall ROI',
      roiDigital: 'Digital ROI',
      roiTv: 'TV ROI',
      roiRadio: 'Radio ROI',

      // Performance Chart
      reach: 'Reach (M)',
      engagement: 'Engagement %',

      // General
      viewers: 'Viewers'
    },

    // Dashboard Insights
    executiveSummary: {
      performance: 'Campaign Performance',
      audience: 'Audience Performance',
      campaignText: 'Exceptional ROI of +15% vs annual targets. Flagship campaigns (Survivor, Star Academy) generate record engagement of 9.2%.',
      audienceText: '12.5M daily viewers with historic peak at 8.5M for 8PM News. Confirmed leadership in 25-54 age group.',
      priorityAction: 'Capitalize on prime-time format success to expand digital offensive and maximize Q4 advertising revenue.'
    },

    // Dashboard Synthesis
    dashboardSynthesis: {
      audienceEvolution: 'Uncontested leadership in prime time with +8% growth vs previous period. 8PM News maintains its status as France\'s most-watched show.',
      topPrograms: 'Premium show portfolio with 4 shows above 8/10. {program1} and {program2} confirm their status as strategic assets.'
    },

    // Modal Titles
    modalTitles: {
      reachSources: 'Reach Sources',
      weeklyPerformance: 'Weekly Performance',
      engagementDetails: 'Engagement Details',
      costBreakdown: 'Cost Breakdown'
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
    dashboardTitle: 'Dashboard',

    // Main Sections
    sections: {
      dashboard: 'Dashboard',
      campaigns: 'Operations Analysis',
      audience: 'Customer Analysis'
    },

    // Core Metrics
    metrics: {
      totalViewers: 'Total Customers',
      averageRating: 'Average Satisfaction',
      activeCampaigns: 'Active Operations',
      topPrograms: 'Premium Services',
      campaigns: 'Operations',
      programs: 'Services',
      shows: 'Offerings',
      viewership: 'Customer Base',
      viewers: 'Customers',
      rating: 'Satisfaction',
      engagement: 'Usage',
      reach: 'Coverage',
      cost: 'Cost',
      roi: 'ROI',
      trend: 'Trend'
    },

    // Time Slots
    timeSlots: {
      morning: 'Morning (6am-12pm)',
      evening: 'Evening (6pm-10pm)',
      prime: 'Peak Hours (5pm-8pm)',
      late: 'Night (10pm-6am)',
      weekend: 'Weekend'
    },

    // Content Types
    contentTypes: {
      drama: 'Residential',
      entertainment: 'Commercial',
      sport: 'Industrial',
      news: 'Public Services',
      documentary: 'Renewable Energy',
      variety: 'Hybrid Solutions',
      reality: 'Energy Storage'
    },

    // Sample Programs/Content
    sampleContent: [
      { name: 'Residential Solar Energy', type: 'residential', rating: 9.1 },
      { name: 'Industrial Solutions', type: 'industrial', rating: 8.7 },
      { name: 'Offshore Wind', type: 'renewable', rating: 8.9 },
      { name: 'Battery Storage', type: 'storage', rating: 8.2 },
      { name: 'Smart Grid', type: 'smart', rating: 8.5 },
      { name: 'Local Biomass', type: 'renewable', rating: 7.8 },
      { name: 'Urban Geothermal', type: 'renewable', rating: 8.1 }
    ],

    // Sample Campaigns
    sampleCampaigns: [
      {
        id: 1,
        name: 'Residential Solar Deployment 2024',
        status: 'active',
        reach: 285000,
        engagement: 9.1,
        cost: 120000,
        roi: 310,
        trend: 'up'
      },
      {
        id: 2,
        name: 'Offshore Wind Solutions',
        status: 'active',
        reach: 195000,
        engagement: 8.7,
        cost: 180000,
        roi: 265,
        trend: 'up'
      },
      {
        id: 3,
        name: 'Urban Smart Grid',
        status: 'completed',
        reach: 420000,
        engagement: 8.2,
        cost: 95000,
        roi: 285,
        trend: 'up'
      },
      {
        id: 4,
        name: 'Energy Storage Systems',
        status: 'active',
        reach: 165000,
        engagement: 8.9,
        cost: 140000,
        roi: 245,
        trend: 'up'
      },
      {
        id: 5,
        name: 'Local Biomass Initiative',
        status: 'paused',
        reach: 95000,
        engagement: 7.1,
        cost: 75000,
        roi: 185,
        trend: 'down'
      },
      {
        id: 6,
        name: 'Industrial Geothermal',
        status: 'active',
        reach: 320000,
        engagement: 8.8,
        cost: 200000,
        roi: 295,
        trend: 'up'
      },
      {
        id: 7,
        name: 'Energy Efficiency Program',
        status: 'completed',
        reach: 150000,
        engagement: 7.9,
        cost: 85000,
        roi: 210,
        trend: 'up'
      },
      {
        id: 8,
        name: 'Hybrid Energy Solutions',
        status: 'active',
        reach: 225000,
        engagement: 8.4,
        cost: 155000,
        roi: 235,
        trend: 'up'
      }
    ],

    // Units & Currency
    currency: '$',
    viewerUnit: 'customers',
    audienceScale: 'K', // Thousands

    // Chart Titles
    chartTitles: {
      monthlyPerformance: 'Monthly Operational Performance',
      budgetVsSpending: 'Budget vs Spending by Operation',
      roiTrend: 'ROI Trend by Energy Type',
      audienceEvolution: 'Usage Throughout the Day',
      topPrograms: 'Top Services by Performance',
      demographics: 'Customer Demographics',
      programAnalysis: 'Satisfaction vs Usage Analysis',
      reachSource: "Reach origin"
    },

    // Chart Legends
    chartLegends: {
      // Budget Chart
      budgetAllocated: 'Budget Allocated',
      budgetSpent: 'Spent',
      budgetRemaining: 'Remaining',

      // ROI Trend Chart
      roiOverall: 'Overall ROI',
      roiDigital: 'Digital ROI',
      roiTv: 'Solar ROI',
      roiRadio: 'Wind ROI',

      // Performance Chart
      reach: 'Coverage (K)',
      engagement: 'Usage %',

      // General
      viewers: 'Customers'
    },

    // Dashboard Insights
    executiveSummary: {
      performance: 'Operational Performance',
      audience: 'Customer Performance',
      campaignText: '+12% ROI on renewable energy initiatives. Solar and wind solutions generate record satisfaction of 9.1%.',
      audienceText: '450K customers with +8% growth in residential segment. Leadership in green solutions.',
      priorityAction: 'Accelerate energy storage deployment to optimize Q4 energy offering.'
    },

    // Dashboard Synthesis
    dashboardSynthesis: {
      audienceEvolution: 'Sustained growth during peak hours with +12% usage vs previous quarter. Renewable solutions maintain their leadership position.',
      topPrograms: 'Premium service portfolio with 4 solutions above 8/10. {program1} and {program2} confirm their status as strategic offerings.'
    },

    // Modal Titles
    modalTitles: {
      reachSources: 'Coverage Sources',
      weeklyPerformance: 'Weekly Performance',
      engagementDetails: 'Usage Details',
      costBreakdown: 'Cost Breakdown'
    }
  },

  retail: {
    // Core Information
    industryName: 'Retail',
    companyName: 'RetailMax',
    brandPrimary: '#C62828', // Deep Red
    brandSecondary: '#2E7D32', // Green
    brandLight: '#EF5350',
    brandDark: '#B71C1C',

    // Navigation & Titles
    businessPortalTitle: 'Retail Business Portal',
    dashboardTitle: 'Dashboard',

    // Main Sections
    sections: {
      dashboard: 'Dashboard',
      campaigns: 'Campaign Analysis',
      audience: 'Customer Analysis'
    },

    // Core Metrics
    metrics: {
      totalViewers: 'Total Customers',
      averageRating: 'Average Rating',
      activeCampaigns: 'Active Campaigns',
      topPrograms: 'Top Products',
      campaigns: 'Campaigns',
      programs: 'Products',
      shows: 'Collections',
      viewership: 'Customer Base',
      viewers: 'Customers',
      rating: 'Satisfaction',
      engagement: 'Loyalty',
      reach: 'Reach',
      cost: 'Cost',
      roi: 'ROI',
      trend: 'Trend'
    },

    // Time Slots
    timeSlots: {
      morning: 'Morning (8am-12pm)',
      evening: 'Evening (5pm-9pm)',
      prime: 'Peak Hours (12pm-2pm, 5pm-7pm)',
      late: 'Late Evening (9pm-11pm)',
      weekend: 'Weekend'
    },

    // Content Types
    contentTypes: {
      drama: 'Fashion',
      entertainment: 'Electronics',
      sport: 'Sports & Leisure',
      news: 'Computing',
      documentary: 'Home & Garden',
      variety: 'Beauty & Health',
      reality: 'Automotive'
    },

    // Sample Programs/Content
    sampleContent: [
      { name: 'Fall Collection', type: 'fashion', rating: 9.0 },
      { name: 'Premium High-Tech', type: 'electronics', rating: 8.6 },
      { name: 'Fitness Equipment', type: 'sports', rating: 8.3 },
      { name: 'Gaming Setup', type: 'electronics', rating: 8.8 },
      { name: 'Home Decoration', type: 'home', rating: 7.9 },
      { name: 'Organic Cosmetics', type: 'beauty', rating: 8.4 },
      { name: 'Auto Accessories', type: 'automotive', rating: 7.7 }
    ],

    // Sample Campaigns
    sampleCampaigns: [
      {
        id: 1,
        name: 'Fall-Winter Collection 2024',
        status: 'active',
        reach: 68000,
        engagement: 9.2,
        cost: 45000,
        roi: 285,
        trend: 'up'
      },
      {
        id: 2,
        name: 'High-Tech Black Friday Promotion',
        status: 'active',
        reach: 52000,
        engagement: 8.7,
        cost: 38000,
        roi: 340,
        trend: 'up'
      },
      {
        id: 3,
        name: 'Next-Gen Gaming Setup',
        status: 'completed',
        reach: 45000,
        engagement: 8.8,
        cost: 29000,
        roi: 295,
        trend: 'up'
      },
      {
        id: 4,
        name: 'Fitness & Wellness',
        status: 'active',
        reach: 35000,
        engagement: 8.4,
        cost: 32000,
        roi: 210,
        trend: 'up'
      },
      {
        id: 5,
        name: 'Spring Home & Decor',
        status: 'paused',
        reach: 28000,
        engagement: 7.2,
        cost: 18000,
        roi: 165,
        trend: 'down'
      },
      {
        id: 6,
        name: 'Premium Organic Cosmetics',
        status: 'active',
        reach: 42000,
        engagement: 9.1,
        cost: 35000,
        roi: 320,
        trend: 'up'
      },
      {
        id: 7,
        name: 'Sport Auto Accessories',
        status: 'completed',
        reach: 31000,
        engagement: 7.7,
        cost: 23000,
        roi: 185,
        trend: 'up'
      },
      {
        id: 8,
        name: 'Exceptional Summer Sale',
        status: 'active',
        reach: 58000,
        engagement: 8.9,
        cost: 41000,
        roi: 275,
        trend: 'up'
      }
    ],

    // Units & Currency
    currency: '$',
    viewerUnit: 'customers',
    audienceScale: 'K', // Thousands

    // Chart Titles
    chartTitles: {
      monthlyPerformance: 'Monthly Sales Performance',
      budgetVsSpending: 'Budget vs Spending by Campaign',
      roiTrend: 'ROI Trend by Sales Channel',
      audienceEvolution: 'Traffic Throughout the Day',
      topPrograms: 'Top Products by Performance',
      demographics: 'Customer Demographics',
      programAnalysis: 'Satisfaction vs Sales Analysis'
    },

    // Chart Legends
    chartLegends: {
      // Budget Chart
      budgetAllocated: 'Budget Allocated',
      budgetSpent: 'Spent',
      budgetRemaining: 'Remaining',

      // ROI Trend Chart
      roiOverall: 'Overall ROI',
      roiDigital: 'Digital ROI',
      roiTv: 'Store ROI',
      roiRadio: 'E-commerce ROI',

      // Performance Chart
      reach: 'Reach (K)',
      engagement: 'Loyalty %',

      // General
      viewers: 'Customers'
    },

    // Dashboard Insights
    executiveSummary: {
      performance: 'Sales Performance',
      audience: 'Customer Performance',
      campaignText: '+18% ROI on digital campaigns. Fashion and high-tech collections generate 8.8% satisfaction.',
      audienceText: '85K loyal customers with +15% growth in e-commerce. Leadership in premium segment.',
      priorityAction: 'Optimize omnichannel experience to maximize Q4 conversion and retention.'
    },

    // Dashboard Synthesis
    dashboardSynthesis: {
      audienceEvolution: 'Record traffic during peak hours with +15% growth vs previous period. E-commerce maintains its growth momentum.',
      topPrograms: 'Premium product portfolio with 4 collections above 8/10. {program1} and {program2} confirm their status as flagship products.'
    },

    // Modal Titles
    modalTitles: {
      reachSources: 'Reach Sources',
      weeklyPerformance: 'Weekly Performance',
      engagementDetails: 'Loyalty Details',
      costBreakdown: 'Cost Breakdown'
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
  return new Intl.NumberFormat('en-US', {
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