# Business Portal - Databricks App

A comprehensive TV audience campaign analysis and program recommendation application built with React and integrated with Databricks for data processing and analytics.

## Features

### 📊 Dashboard
- Real-time audience metrics overview
- Key performance indicators (KPIs)
- Viewership trends throughout the day
- Top-performing programs analysis

### 📈 Campaign Analysis
- Detailed campaign performance tracking
- Audience demographic breakdowns
- ROI and engagement metrics
- Competitive analysis
- Weekly performance trends

### 🎯 Audience analysis
- Demographic audience details
- Audience analysis
- Program details

## Architecture

### Frontend (React)
- **Material-UI**: Modern, responsive UI components
- **Recharts**: Interactive data visualizations
- **Axios**: HTTP client for API communications
- **React Hooks**: State management and lifecycle handling

### Backend Integration
- **Databricks SQL**: Data warehouse integration
- **REST APIs**: RESTful service architecture
- **Real-time Data**: Live metrics and monitoring

### Data Processing
- **Recommendation Engine**: Custom algorithm for program recommendations
- **Analytics Engine**: Campaign performance analysis
- **Data Aggregation**: Multi-source data consolidation

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Databricks workspace access
- SQL Warehouse configured in Databricks

### Setup Steps

1. **Clone and Install Dependencies**
   ```bash
   cd audience-explorer
   npm install
   ```

2. **Environment Configuration**
   ```bash
   cp .env.example .env
   ```

   Update the `.env` file with your Databricks configuration:
   ```bash
   REACT_APP_DATABRICKS_URL=https://your-workspace.cloud.databricks.com
   REACT_APP_DATABRICKS_TOKEN=your-personal-access-token
   REACT_APP_DATABRICKS_WAREHOUSE_ID=your-warehouse-id
   ```

3. **Database Schema Setup**

   Create the required tables in your Databricks workspace:

   ```sql
   -- Audience data table
   CREATE TABLE audience_data (
     timestamp TIMESTAMP,
     program_id STRING,
     viewers BIGINT,
     rating DOUBLE
   );

   -- Campaign performance table
   CREATE TABLE campaign_performance (
     campaign_id STRING,
     campaign_name STRING,
     status STRING,
     start_date DATE,
     end_date DATE,
     total_reach BIGINT,
     engagement_rate DOUBLE,
     total_cost DECIMAL(10,2),
     roi_percentage DOUBLE,
     target_demographic STRING
   );

   -- Program performance table
   CREATE TABLE program_performance (
     program_id STRING,
     program_name STRING,
     genre STRING,
     avg_rating DOUBLE,
     total_viewers BIGINT,
     production_cost DECIMAL(10,2),
     time_slot STRING,
     air_date DATE,
     demographic_breakdown MAP<STRING, INT>
   );
   ```

4. **Start the Application**
   ```bash
   npm start
   ```

## Databricks App Deployment

### 1. Databricks CLI Setup
```bash
databricks configure
```

### 2. Deploy the App
```bash
databricks bundle deploy
```

### 3. Start the App
```bash
databricks bundle run
```

## Configuration

### Recommendation Engine Parameters

The recommendation engine uses weighted scoring across multiple factors:

- **Rating Weight**: 25% - Program rating score
- **Viewership Weight**: 20% - Audience size factor
- **Cost Efficiency Weight**: 20% - Cost per viewer ratio
- **Competitive Advantage Weight**: 15% - Performance vs competitors
- **Seasonality Weight**: 10% - Seasonal demand patterns
- **Target Demo Weight**: 10% - Demographic alignment score

### Time Slot Multipliers
- **Prime Time**: 1.2x multiplier
- **Weekend**: 1.1x multiplier
- **Evening**: 1.0x multiplier
- **Morning**: 0.8x multiplier
- **Late Night**: 0.7x multiplier

## API Endpoints

The application integrates with several Databricks SQL endpoints:

- `GET /api/audience/metrics` - Get audience metrics
- `GET /api/campaigns` - Get campaign data
- `GET /api/programs` - Get program performance data
- `GET /api/demographics` - Get demographic analysis
- `GET /api/realtime` - Get real-time metrics

## Development

### Project Structure
```
src/
├── components/          # Reusable UI components
├── pages/              # Main application pages
├── services/           # API integration services
├── utils/              # Utility functions and algorithms
└── App.js              # Main application component
```

### Key Components
- **Dashboard**: Overview page with key metrics
- **CampaignAnalysis**: Detailed campaign performance analysis
- **ProgramRecommendations**: AI-powered program recommendations
- **MetricsCard**: Reusable metrics display component
- **ViewershipChart**: Configurable chart component

### Development Commands
```bash
npm start          # Start development server
npm test           # Run tests
npm run build      # Build for production
npm run eject      # Eject from Create React App (one-way)
```

## Data Sources

### Required Data Tables
1. **audience_data**: Real-time viewership and rating data
2. **campaign_performance**: Campaign metrics and ROI data
3. **program_performance**: Program-specific analytics
4. **demographic_analysis**: Audience demographic breakdowns
5. **realtime_metrics**: Live system metrics

### Mock Data
The application includes comprehensive mock data for development and testing when Databricks connections are not available.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Troubleshooting

### Common Issues

1. **Databricks Connection Failed**
   - Verify your personal access token is valid
   - Check that your SQL warehouse is running
   - Ensure network connectivity to Databricks workspace

2. **Charts Not Displaying**
   - Check browser console for JavaScript errors
   - Verify data format matches chart requirements
   - Ensure Recharts library is properly installed

3. **Slow Performance**
   - Review Databricks query performance
   - Consider implementing data caching
   - Optimize SQL queries for better performance

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- Create an issue in the GitHub repository
- Contact the development team
- Check the Databricks documentation for API-related issues