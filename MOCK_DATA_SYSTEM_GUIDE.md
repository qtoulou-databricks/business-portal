# 📊 Mock Data Configuration System

## ✅ **Successfully Implemented!**

The mock data has been fully extracted into a centralized configuration system. Now each industry has **realistic, industry-specific datasets** that automatically switch when you change industries.

## 🎯 **What's Been Created**

### **📁 New File: `src/config/mockData.js`**
Centralized mock data configuration containing:

#### **📺 MEDIA Industry Data:**
- **Viewers**: 12.5M total viewers, 8.5M prime time peak
- **Programs**: JT 20H, Koh-Lanta, The Voice, etc.
- **Time Slots**: Peak at 20:00 (8.5M viewers)
- **Demographics**: 28% age 25-34, 22% age 35-44
- **Performance**: €850K-€1.35M monthly costs, 190-310% ROI

#### **⚡ ENERGY Industry Data:**
- **Customers**: 450K total customers, growing to 495K
- **Services**: Solar, Wind, Smart Grid, Battery Storage
- **Usage Patterns**: Peak at 18:00 (420K customers)
- **Demographics**: 28% age 45-54, 25% age 35-44
- **Performance**: €85K-€115K monthly costs, 210-320% ROI

#### **🛍️ RETAIL Industry Data:**
- **Customers**: 85K total customers, growing to 90K
- **Products**: Fashion, High-Tech, Gaming, Fitness, Beauty
- **Shopping Patterns**: Peak at 17:00 (65K customers)
- **Demographics**: 32% age 26-35, 25% age 36-45
- **Performance**: €25K-€35K monthly costs, 230-320% ROI

## 🔄 **How It Works Now**

### **Before (Hardcoded):**
```javascript
// Same TF1 data for all industries ❌
const mockViewershipData = [
  { time: '20:00', viewers: 8500000 }, // Always TV data
];
```

### **After (Dynamic):**
```javascript
// Industry-specific data ✅
const mockData = getMockDataForIndustry(config.industryName.toLowerCase());
// Returns appropriate data for media/energy/retail
```

## 📈 **Realistic Data Scaling**

### **📺 Media (TF1)**
- **Scale**: Millions of viewers
- **Peak Time**: 20:00 (8.5M viewers)
- **Example**: Prime time drama with 6.8M viewers

### **⚡ Energy (PowerCorp)**
- **Scale**: Hundreds of thousands of customers
- **Peak Time**: 18:00 (420K customers)
- **Example**: Solar residential service with 285K customers

### **🛍️ Retail (RetailMax)**
- **Scale**: Tens of thousands of customers
- **Peak Time**: 17:00 (65K customers)
- **Example**: Fashion collection with 42K customers

## 🎛️ **What Changes Automatically**

### **Dashboard Page:**
- ✅ **Metrics**: Total viewers/customers adapts to industry scale
- ✅ **Charts**: Viewership curves realistic for each industry
- ✅ **Program Data**: Industry-specific top performers

### **Campaign Analysis Page:**
- ✅ **Performance Data**: Monthly reach, engagement, costs scaled appropriately
- ✅ **Budget Data**: Realistic budgets for each industry size
- ✅ **ROI Trends**: Industry-appropriate return patterns

### **Audience Analysis Page:**
- ✅ **Demographics**: Realistic age distributions per industry
- ✅ **Evolution Data**: Growth patterns appropriate for sector
- ✅ **Program Recommendations**: Industry-specific content/services

## 🧪 **Testing the System**

### **Test 1: Media Industry**
1. **Select**: 🇫🇷 Français + Media
2. **See**: 8.5M viewers peak, JT 20H top program
3. **Charts**: TV-appropriate scale (millions)

### **Test 2: Energy Industry**
1. **Select**: 🇺🇸 English + Energy
2. **See**: 420K customers peak, "Residential Solar" top service
3. **Charts**: Energy-appropriate scale (hundreds of thousands)

### **Test 3: Retail Industry**
1. **Select**: 🇫🇷 Français + Retail
2. **See**: 65K customers peak, "Collection Mode" top product
3. **Charts**: Retail-appropriate scale (tens of thousands)

## 💡 **Key Benefits**

### **✅ Realistic Data**
- Each industry has **authentic scale** and **appropriate metrics**
- **No more TF1 viewers** in energy/retail contexts

### **✅ Automatic Switching**
- **Zero manual work** - just switch industry dropdown
- **All charts and data** update instantly

### **✅ Maintainable**
- **Single file** to update mock data for all industries
- **Easy to add** new industries or modify existing data

### **✅ Comprehensive**
- **All pages** now use industry-specific data
- **All charts** scale appropriately
- **All metrics** make sense for each sector

## 🚀 **Ready to Use!**

**Your mock data system is fully operational:**

- ✅ **Centralized Configuration**: All data in `mockData.js`
- ✅ **Industry-Specific**: Realistic data for Media/Energy/Retail
- ✅ **Automatic Switching**: Changes when industry changes
- ✅ **Proper Scaling**: Appropriate metrics for each sector
- ✅ **All Pages Updated**: Dashboard, Campaigns, Audience Analysis

**Open http://localhost:3000 and switch between industries to see realistic, industry-appropriate data throughout the entire application!** 🎉

### **Pro Tip:**
Compare the data when switching:
- **Media**: Millions of viewers, TV programs, prime time peaks
- **Energy**: Hundreds of thousands of customers, renewable services, usage patterns
- **Retail**: Tens of thousands of customers, product collections, shopping peaks

**Each industry now has its own authentic dataset!** ✨