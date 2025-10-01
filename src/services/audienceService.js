import axios from 'axios';

class AudienceService {
  constructor() {
    this.baseURL = process.env.REACT_APP_DATABRICKS_URL || 'https://your-databricks-workspace.cloud.databricks.com';
    this.token = process.env.REACT_APP_DATABRICKS_TOKEN;

    this.client = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json'
      },
      timeout: 30000
    });

    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error('Databricks API Error:', error);
        return Promise.reject(this.handleError(error));
      }
    );
  }

  handleError(error) {
    if (error.response) {
      return {
        status: error.response.status,
        message: error.response.data?.message || 'API request failed',
        data: error.response.data
      };
    } else if (error.request) {
      return {
        status: 0,
        message: 'Network error - unable to reach Databricks API',
        data: null
      };
    } else {
      return {
        status: -1,
        message: error.message || 'Unknown error occurred',
        data: null
      };
    }
  }

  async executeQuery(query) {
    try {
      const response = await this.client.post('/api/2.0/sql/statements', {
        statement: query,
        warehouse_id: process.env.REACT_APP_DATABRICKS_WAREHOUSE_ID
      });
      return response.data;
    } catch (error) {
      console.error('Query execution failed:', error);
      throw error;
    }
  }

  async getAudienceMetrics(timeRange = '7d') {
    const query = `
      SELECT
        DATE(timestamp) as date,
        SUM(viewers) as total_viewers,
        AVG(rating) as avg_rating,
        COUNT(DISTINCT program_id) as programs_aired
      FROM audience_data
      WHERE timestamp >= CURRENT_DATE() - INTERVAL ${timeRange}
      GROUP BY DATE(timestamp)
      ORDER BY date DESC
    `;

    try {
      const result = await this.executeQuery(query);
      return this.processQueryResult(result);
    } catch (error) {
      console.warn('Using mock data due to API error:', error.message);
      return this.getMockAudienceMetrics();
    }
  }

  async getCampaignData(campaignId = null) {
    const whereClause = campaignId ? `WHERE campaign_id = '${campaignId}'` : '';
    const query = `
      SELECT
        campaign_id,
        campaign_name,
        status,
        start_date,
        end_date,
        total_reach,
        engagement_rate,
        total_cost,
        roi_percentage,
        target_demographic
      FROM campaign_performance
      ${whereClause}
      ORDER BY start_date DESC
    `;

    try {
      const result = await this.executeQuery(query);
      return this.processQueryResult(result);
    } catch (error) {
      console.warn('Using mock campaign data due to API error:', error.message);
      return this.getMockCampaignData();
    }
  }

  async getProgramPerformance(programId = null) {
    const whereClause = programId ? `WHERE program_id = '${programId}'` : '';
    const query = `
      SELECT
        program_id,
        program_name,
        genre,
        avg_rating,
        total_viewers,
        production_cost,
        time_slot,
        air_date,
        demographic_breakdown
      FROM program_performance
      ${whereClause}
      ORDER BY total_viewers DESC
    `;

    try {
      const result = await this.executeQuery(query);
      return this.processQueryResult(result);
    } catch (error) {
      console.warn('Using mock program data due to API error:', error.message);
      return this.getMockProgramData();
    }
  }

  async getDemographicAnalysis(timeRange = '30d') {
    const query = `
      SELECT
        age_group,
        gender,
        SUM(viewers) as total_viewers,
        AVG(engagement_score) as avg_engagement,
        COUNT(DISTINCT program_id) as programs_watched
      FROM demographic_analysis
      WHERE date_recorded >= CURRENT_DATE() - INTERVAL ${timeRange}
      GROUP BY age_group, gender
      ORDER BY total_viewers DESC
    `;

    try {
      const result = await this.executeQuery(query);
      return this.processQueryResult(result);
    } catch (error) {
      console.warn('Using mock demographic data due to API error:', error.message);
      return this.getMockDemographicData();
    }
  }

  async getRealtimeMetrics() {
    const query = `
      SELECT
        current_viewers,
        active_programs,
        top_program,
        engagement_rate,
        timestamp
      FROM realtime_metrics
      WHERE timestamp >= CURRENT_TIMESTAMP() - INTERVAL 1 HOUR
      ORDER BY timestamp DESC
      LIMIT 1
    `;

    try {
      const result = await this.executeQuery(query);
      return this.processQueryResult(result);
    } catch (error) {
      console.warn('Using mock realtime data due to API error:', error.message);
      return this.getMockRealtimeMetrics();
    }
  }

  processQueryResult(result) {
    if (result.status && result.status.state === 'SUCCEEDED') {
      return result.result?.data_array || [];
    }
    throw new Error('Query execution failed or returned invalid data');
  }

  getMockAudienceMetrics() {
    return [
      { date: '2024-01-07', total_viewers: 2456789, avg_rating: 7.2, programs_aired: 15 },
      { date: '2024-01-06', total_viewers: 2123456, avg_rating: 6.9, programs_aired: 14 },
      { date: '2024-01-05', total_viewers: 2789012, avg_rating: 7.5, programs_aired: 16 },
      { date: '2024-01-04', total_viewers: 2345678, avg_rating: 7.1, programs_aired: 13 },
      { date: '2024-01-03', total_viewers: 2567890, avg_rating: 7.3, programs_aired: 15 },
      { date: '2024-01-02', total_viewers: 2890123, avg_rating: 7.8, programs_aired: 17 },
      { date: '2024-01-01', total_viewers: 3123456, avg_rating: 8.1, programs_aired: 12 }
    ];
  }

  getMockCampaignData() {
    return [
      {
        campaign_id: 'camp_001',
        campaign_name: 'Prime Time Drama Push',
        status: 'active',
        start_date: '2024-01-01',
        end_date: '2024-01-31',
        total_reach: 1850000,
        engagement_rate: 8.2,
        total_cost: 125000,
        roi_percentage: 185,
        target_demographic: '25-54'
      },
      {
        campaign_id: 'camp_002',
        campaign_name: 'Weekend Sports Special',
        status: 'active',
        start_date: '2024-01-15',
        end_date: '2024-02-15',
        total_reach: 2100000,
        engagement_rate: 9.1,
        total_cost: 180000,
        roi_percentage: 220,
        target_demographic: '25-65'
      }
    ];
  }

  getMockProgramData() {
    return [
      {
        program_id: 'prog_001',
        program_name: 'Mystery Tonight',
        genre: 'Mystery',
        avg_rating: 8.2,
        total_viewers: 1850000,
        production_cost: 125000,
        time_slot: 'prime',
        air_date: '2024-01-15',
        demographic_breakdown: { '18-24': 15, '25-34': 28, '35-44': 22, '45-54': 20, '55+': 15 }
      }
    ];
  }

  getMockDemographicData() {
    return [
      { age_group: '18-24', gender: 'M', total_viewers: 450000, avg_engagement: 7.2, programs_watched: 12 },
      { age_group: '18-24', gender: 'F', total_viewers: 520000, avg_engagement: 7.5, programs_watched: 14 },
      { age_group: '25-34', gender: 'M', total_viewers: 680000, avg_engagement: 8.1, programs_watched: 18 },
      { age_group: '25-34', gender: 'F', total_viewers: 720000, avg_engagement: 8.3, programs_watched: 16 }
    ];
  }

  getMockRealtimeMetrics() {
    return [{
      current_viewers: 1234567,
      active_programs: 8,
      top_program: 'Evening News',
      engagement_rate: 7.8,
      timestamp: new Date().toISOString()
    }];
  }

  async testConnection() {
    try {
      const response = await this.client.get('/api/2.0/clusters/list');
      return { success: true, message: 'Connected to Databricks successfully' };
    } catch (error) {
      return { success: false, message: `Connection failed: ${error.message}` };
    }
  }
}

export default new AudienceService();