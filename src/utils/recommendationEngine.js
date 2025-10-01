class RecommendationEngine {
  static WEIGHTS = {
    rating: 0.25,
    viewership: 0.20,
    costEfficiency: 0.20,
    competitiveAdvantage: 0.15,
    seasonality: 0.10,
    targetDemo: 0.10
  };

  static SEASONALITY_SCORES = {
    high: 1.0,
    medium: 0.7,
    low: 0.4
  };

  static TIME_SLOT_MULTIPLIERS = {
    prime: 1.2,
    evening: 1.0,
    morning: 0.8,
    late: 0.7,
    weekend: 1.1
  };

  static calculateCostEfficiency(program) {
    const audiencePerDollar = program.viewership / program.cost;
    const normalizedScore = Math.min(audiencePerDollar / 20, 1.0);
    return normalizedScore * 100;
  }

  static calculateCompetitiveAdvantage(program) {
    const advantage = (program.rating - program.competitorRating) / program.competitorRating;
    return Math.max(0, Math.min(advantage * 100 + 50, 100));
  }

  static calculateSeasonalityScore(program) {
    return this.SEASONALITY_SCORES[program.seasonality] * 100;
  }

  static calculateTargetDemoScore(program) {
    const demoScores = {
      '18-24': 85,
      '18-49': 90,
      '25-54': 95,
      '25-45': 88,
      '25-65': 92,
      '35-65': 78
    };
    return demoScores[program.targetDemo] || 80;
  }

  static calculateTimeSlotBonus(program) {
    return this.TIME_SLOT_MULTIPLIERS[program.timeSlot] || 1.0;
  }

  static calculateRecommendationScore(program) {
    const ratingScore = (program.rating / 10) * 100;
    const viewershipScore = Math.min((program.viewership / 3000000) * 100, 100);
    const costEfficiencyScore = this.calculateCostEfficiency(program);
    const competitiveScore = this.calculateCompetitiveAdvantage(program);
    const seasonalityScore = this.calculateSeasonalityScore(program);
    const targetDemoScore = this.calculateTargetDemoScore(program);

    const baseScore =
      (ratingScore * this.WEIGHTS.rating) +
      (viewershipScore * this.WEIGHTS.viewership) +
      (costEfficiencyScore * this.WEIGHTS.costEfficiency) +
      (competitiveScore * this.WEIGHTS.competitiveAdvantage) +
      (seasonalityScore * this.WEIGHTS.seasonality) +
      (targetDemoScore * this.WEIGHTS.targetDemo);

    const timeSlotBonus = this.calculateTimeSlotBonus(program);
    const finalScore = Math.round(baseScore * timeSlotBonus);

    return Math.min(finalScore, 100);
  }

  static generateRecommendations(programs) {
    return programs.map(program => ({
      ...program,
      recommendationScore: this.calculateRecommendationScore(program),
      insights: this.generateInsights(program)
    })).sort((a, b) => b.recommendationScore - a.recommendationScore);
  }

  static generateInsights(program) {
    const insights = [];

    if (program.rating >= 8.0) {
      insights.push('High audience satisfaction');
    }

    const costEfficiency = this.calculateCostEfficiency(program);
    if (costEfficiency >= 80) {
      insights.push('Excellent cost efficiency');
    } else if (costEfficiency <= 40) {
      insights.push('High production cost relative to audience');
    }

    const competitiveAdvantage = this.calculateCompetitiveAdvantage(program);
    if (competitiveAdvantage >= 70) {
      insights.push('Strong competitive position');
    } else if (competitiveAdvantage <= 30) {
      insights.push('Faces strong competition');
    }

    if (program.viewership >= 2000000) {
      insights.push('Mass market appeal');
    } else if (program.viewership <= 1000000) {
      insights.push('Niche audience');
    }

    if (program.seasonality === 'high') {
      insights.push('Strong seasonal demand');
    }

    return insights;
  }

  static getRecommendationsByGenre(programs, genre) {
    return this.generateRecommendations(
      programs.filter(program =>
        program.genre.toLowerCase() === genre.toLowerCase()
      )
    );
  }

  static getRecommendationsByTimeSlot(programs, timeSlot) {
    return this.generateRecommendations(
      programs.filter(program => program.timeSlot === timeSlot)
    );
  }

  static getRecommendationsByBudget(programs, minBudget, maxBudget) {
    return this.generateRecommendations(
      programs.filter(program =>
        program.cost >= minBudget && program.cost <= maxBudget
      )
    );
  }

  static predictPerformance(program, marketConditions = {}) {
    const baseScore = this.calculateRecommendationScore(program);

    const seasonalMultiplier = marketConditions.seasonal || 1.0;
    const competitiveMultiplier = marketConditions.competitive || 1.0;
    const economicMultiplier = marketConditions.economic || 1.0;

    const predictedScore = baseScore * seasonalMultiplier * competitiveMultiplier * economicMultiplier;

    return {
      predictedRating: Math.min(program.rating * (predictedScore / baseScore), 10),
      predictedViewership: Math.round(program.viewership * (predictedScore / baseScore)),
      confidenceLevel: this.calculateConfidence(program),
      riskFactors: this.identifyRiskFactors(program)
    };
  }

  static calculateConfidence(program) {
    let confidence = 70;

    if (program.rating >= 8.0) confidence += 10;
    if (program.viewership >= 1500000) confidence += 10;
    if (program.seasonality === 'high') confidence += 5;
    if (program.competitorRating < program.rating - 1) confidence += 5;

    return Math.min(confidence, 95);
  }

  static identifyRiskFactors(program) {
    const risks = [];

    if (program.cost > 200000) risks.push('High production cost');
    if (program.competitorRating >= program.rating) risks.push('Strong competition');
    if (program.seasonality === 'low') risks.push('Limited seasonal appeal');
    if (program.viewership < 1000000) risks.push('Limited audience reach');

    return risks;
  }
}

export default RecommendationEngine;