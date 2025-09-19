class DemoDataGenerator {
  constructor() {
    this.currentTime = new Date();
    this.baselineStress = 35;
    this.baselineFlow = 65;
    this.baselineProductivity = 70;
    this.baselineCognitive = 50;
    
    // Simulate different developer profiles
    this.profiles = {
      'focused': { stress: 25, flow: 85, productivity: 90, cognitive: 45 },
      'stressed': { stress: 80, flow: 30, productivity: 40, cognitive: 85 },
      'balanced': { stress: 40, flow: 70, productivity: 75, cognitive: 55 },
      'learning': { stress: 60, flow: 50, productivity: 60, cognitive: 75 }
    };
    
    this.currentProfile = 'balanced';
  }

  // Generate realistic psychological state data
  generatePsychologicalState() {
    const profile = this.profiles[this.currentProfile];
    const timeOfDay = this.currentTime.getHours();
    
    // Apply circadian rhythm effects
    const circadianMultiplier = this.getCircadianMultiplier(timeOfDay);
    
    // Add some randomness
    const variance = 0.1;
    const randomFactor = () => 1 + (Math.random() - 0.5) * variance;
    
    return {
      stress: Math.max(0, Math.min(100, profile.stress * circadianMultiplier * randomFactor())),
      flow: Math.max(0, Math.min(100, profile.flow * circadianMultiplier * randomFactor())),
      cognitive: Math.max(0, Math.min(100, profile.cognitive * circadianMultiplier * randomFactor())),
      burnout: Math.max(0, Math.min(100, (100 - profile.productivity) * randomFactor())),
      confidence: Math.max(80, Math.min(100, 90 + Math.random() * 10))
    };
  }

  // Generate code quality metrics
  generateCodeMetrics() {
    const variance = 0.05;
    const randomFactor = () => 1 + (Math.random() - 0.5) * variance;
    
    return {
      complexity: Math.max(1, Math.min(20, 8.5 * randomFactor())),
      quality: Math.max(70, Math.min(100, 92 * randomFactor())),
      bugs: Math.max(0, Math.min(10, Math.floor(3 * randomFactor()))),
      coverage: Math.max(60, Math.min(100, 87 * randomFactor()))
    };
  }

  // Generate activity timeline data
  generateActivityTimeline() {
    const data = [];
    const now = new Date();
    
    for (let i = 23; i >= 0; i--) {
      const time = new Date(now.getTime() - i * 60 * 60 * 1000);
      const hour = time.getHours();
      
      // Simulate realistic coding activity
      let activity = 0;
      if (hour >= 9 && hour <= 17) {
        activity = 60 + Math.random() * 40; // Work hours
      } else if (hour >= 19 && hour <= 22) {
        activity = 20 + Math.random() * 30; // Evening coding
      } else {
        activity = Math.random() * 10; // Low activity
      }
      
      data.push({
        time: time.toISOString(),
        activity: Math.round(activity),
        stress: this.generatePsychologicalState().stress,
        flow: this.generatePsychologicalState().flow
      });
    }
    
    return data;
  }

  // Generate recommendations
  generateRecommendations() {
    const recommendations = [
      {
        id: 1,
        type: 'break',
        priority: 'high',
        title: 'Take a Break',
        message: "You've been coding for 3.5 hours straight. Consider a 10-minute break to maintain focus.",
        action: 'Accept',
        timestamp: new Date().toISOString()
      },
      {
        id: 2,
        type: 'refactor',
        priority: 'medium',
        title: 'Code Refactoring Suggestion',
        message: 'High complexity detected in UserService.js. Consider breaking down the authenticate() method.',
        action: 'View Details',
        timestamp: new Date().toISOString()
      },
      {
        id: 3,
        type: 'collaboration',
        priority: 'low',
        title: 'Pair Programming',
        message: 'Your colleague Sarah is working on similar features. Consider collaborating.',
        action: 'Connect',
        timestamp: new Date().toISOString()
      }
    ];
    
    return recommendations;
  }

  // Get circadian rhythm multiplier
  getCircadianMultiplier(hour) {
    // Peak performance hours: 9-11 AM and 2-4 PM
    if ((hour >= 9 && hour <= 11) || (hour >= 14 && hour <= 16)) {
      return 1.2;
    }
    // Low energy hours: 1-3 PM and after 8 PM
    else if ((hour >= 13 && hour <= 15) || hour >= 20) {
      return 0.8;
    }
    // Normal hours
    return 1.0;
  }

  // Change developer profile
  setProfile(profileName) {
    if (this.profiles[profileName]) {
      this.currentProfile = profileName;
    }
  }

  // Generate team data
  generateTeamData() {
    return [
      {
        id: 1,
        name: 'John Smith',
        avatar: 'JS',
        stress: 'high',
        productivity: 75,
        currentTask: 'Authentication module'
      },
      {
        id: 2,
        name: 'Sarah Kim',
        avatar: 'SK',
        stress: 'medium',
        productivity: 85,
        currentTask: 'UI components'
      },
      {
        id: 3,
        name: 'Mike Johnson',
        avatar: 'MJ',
        stress: 'low',
        productivity: 90,
        currentTask: 'Database optimization'
      }
    ];
  }

  // Generate chart data for various visualizations
  generateChartData(type, timeRange = '24h') {
    const data = [];
    const labels = [];
    const now = new Date();
    
    let points, interval;
    switch (timeRange) {
      case '1h':
        points = 60;
        interval = 60 * 1000; // 1 minute
        break;
      case '24h':
        points = 24;
        interval = 60 * 60 * 1000; // 1 hour
        break;
      case '7d':
        points = 7;
        interval = 24 * 60 * 60 * 1000; // 1 day
        break;
      default:
        points = 24;
        interval = 60 * 60 * 1000;
    }
    
    for (let i = points - 1; i >= 0; i--) {
      const time = new Date(now.getTime() - i * interval);
      labels.push(time.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
      }));
      
      switch (type) {
        case 'stress':
          data.push(Math.random() * 100);
          break;
        case 'productivity':
          data.push(50 + Math.random() * 50);
          break;
        case 'flow':
          data.push(30 + Math.random() * 70);
          break;
        default:
          data.push(Math.random() * 100);
      }
    }
    
    return { labels, data };
  }
}

export const demoDataGenerator = new DemoDataGenerator();