// NeuroCode Demo Data Generator
// Provides realistic sample data for demonstration purposes

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
        
        // Add natural variation
        const variation = () => (Math.random() - 0.5) * 10;
        
        return {
            stress: Math.max(0, Math.min(100, profile.stress * circadianMultiplier + variation())),
            flow: Math.max(0, Math.min(100, profile.flow * circadianMultiplier + variation())),
            productivity: Math.max(0, Math.min(100, profile.productivity * circadianMultiplier + variation())),
            cognitive: Math.max(0, Math.min(100, profile.cognitive * circadianMultiplier + variation())),
            burnout: Math.max(0, Math.min(100, (profile.stress * 0.6) + variation() * 0.5)),
            confidence: Math.max(80, Math.min(99, 90 + variation() * 0.5))
        };
    }

    // Simulate circadian rhythm effects on performance
    getCircadianMultiplier(hour) {
        // Peak performance hours: 9-11 AM and 2-4 PM
        if (hour >= 9 && hour <= 11) return 1.2;
        if (hour >= 14 && hour <= 16) return 1.1;
        if (hour >= 6 && hour <= 8) return 0.8;
        if (hour >= 22 || hour <= 5) return 0.6;
        return 1.0;
    }

    // Generate code quality metrics
    generateCodeMetrics() {
        const baseMetrics = {
            complexity: 8.5,
            quality: 92,
            bugs: 3,
            coverage: 87,
            duplication: 5,
            maintainability: 78
        };

        // Apply psychological state influence
        const state = this.generatePsychologicalState();
        const stressImpact = state.stress / 100;
        const flowImpact = state.flow / 100;

        return {
            complexity: Math.max(1, baseMetrics.complexity + (stressImpact * 5) - (flowImpact * 2)),
            quality: Math.max(60, Math.min(100, baseMetrics.quality - (stressImpact * 15) + (flowImpact * 8))),
            bugs: Math.max(0, Math.round(baseMetrics.bugs + (stressImpact * 3) - (flowImpact * 1))),
            coverage: Math.max(50, Math.min(100, baseMetrics.coverage - (stressImpact * 10) + (flowImpact * 5))),
            duplication: Math.max(0, Math.min(20, baseMetrics.duplication + (stressImpact * 8) - (flowImpact * 3))),
            maintainability: Math.max(40, Math.min(100, baseMetrics.maintainability - (stressImpact * 12) + (flowImpact * 6)))
        };
    }

    // Generate activity timeline data
    generateActivityTimeline(hours = 24) {
        const timeline = [];
        const now = new Date();
        
        for (let i = hours - 1; i >= 0; i--) {
            const time = new Date(now.getTime() - (i * 60 * 60 * 1000));
            const hour = time.getHours();
            
            // Simulate realistic coding patterns
            let activity = 0;
            if (hour >= 9 && hour <= 17) {
                // Work hours - higher activity
                activity = 60 + Math.sin((hour - 9) * Math.PI / 8) * 30 + (Math.random() - 0.5) * 20;
            } else if (hour >= 19 && hour <= 23) {
                // Evening coding - moderate activity
                activity = 40 + (Math.random() - 0.5) * 30;
            } else {
                // Night/early morning - low activity
                activity = 10 + (Math.random() - 0.5) * 15;
            }
            
            const state = this.generatePsychologicalState();
            
            timeline.push({
                time: time.toISOString(),
                hour: hour,
                activity: Math.max(0, Math.min(100, activity)),
                stress: state.stress,
                flow: state.flow,
                productivity: state.productivity,
                cognitive: state.cognitive
            });
        }
        
        return timeline;
    }

    // Generate commit message sentiment data
    generateCommitSentiment() {
        const messages = [
            { text: "Fix authentication bug", sentiment: 0.2, category: 'fix' },
            { text: "Add new user dashboard feature", sentiment: 0.8, category: 'feature' },
            { text: "Refactor messy code in utils", sentiment: -0.3, category: 'refactor' },
            { text: "Implement awesome new animation", sentiment: 0.9, category: 'feature' },
            { text: "Fix another stupid bug", sentiment: -0.7, category: 'fix' },
            { text: "Clean up code structure", sentiment: 0.4, category: 'refactor' },
            { text: "Add comprehensive tests", sentiment: 0.6, category: 'test' },
            { text: "Optimize performance bottleneck", sentiment: 0.3, category: 'optimization' }
        ];

        const recentCommits = messages.slice(0, 5).map(msg => ({
            ...msg,
            timestamp: new Date(Date.now() - Math.random() * 86400000).toISOString()
        }));

        const sentimentDistribution = {
            positive: recentCommits.filter(c => c.sentiment > 0.2).length,
            neutral: recentCommits.filter(c => c.sentiment >= -0.2 && c.sentiment <= 0.2).length,
            negative: recentCommits.filter(c => c.sentiment < -0.2).length
        };

        return {
            commits: recentCommits,
            distribution: sentimentDistribution,
            averageSentiment: recentCommits.reduce((sum, c) => sum + c.sentiment, 0) / recentCommits.length
        };
    }

    // Generate team collaboration data
    generateTeamData() {
        const teamMembers = [
            { 
                id: 'john_smith', 
                name: 'John Smith', 
                avatar: 'JS',
                role: 'Senior Developer',
                stress: 75,
                productivity: 85,
                collaboration: 90,
                status: 'high'
            },
            { 
                id: 'sarah_kim', 
                name: 'Sarah Kim', 
                avatar: 'SK',
                role: 'Full Stack Developer',
                stress: 45,
                productivity: 92,
                collaboration: 88,
                status: 'medium'
            },
            { 
                id: 'mike_johnson', 
                name: 'Mike Johnson', 
                avatar: 'MJ',
                role: 'Frontend Developer',
                stress: 25,
                productivity: 78,
                collaboration: 85,
                status: 'low'
            },
            { 
                id: 'lisa_chen', 
                name: 'Lisa Chen', 
                avatar: 'LC',
                role: 'DevOps Engineer',
                stress: 60,
                productivity: 88,
                collaboration: 75,
                status: 'medium'
            }
        ];

        const teamMetrics = {
            averageStress: teamMembers.reduce((sum, m) => sum + m.stress, 0) / teamMembers.length,
            averageProductivity: teamMembers.reduce((sum, m) => sum + m.productivity, 0) / teamMembers.length,
            collaborationScore: teamMembers.reduce((sum, m) => sum + m.collaboration, 0) / teamMembers.length,
            burnoutRisk: teamMembers.filter(m => m.stress > 70).length / teamMembers.length
        };

        return {
            members: teamMembers,
            metrics: teamMetrics,
            insights: this.generateTeamInsights(teamMemrics)
        };
    }

    generateTeamInsights(metrics) {
        const insights = [];
        
        if (metrics.averageStress > 60) {
            insights.push({
                type: 'warning',
                title: 'Elevated Team Stress',
                description: 'Team stress levels are above optimal range. Consider workload redistribution.',
                priority: 'high'
            });
        }
        
        if (metrics.collaborationScore < 80) {
            insights.push({
                type: 'info',
                title: 'Collaboration Opportunity',
                description: 'Team collaboration could be improved with pair programming sessions.',
                priority: 'medium'
            });
        }
        
        if (metrics.burnoutRisk > 0.3) {
            insights.push({
                type: 'danger',
                title: 'Burnout Risk Alert',
                description: 'Multiple team members showing burnout indicators. Immediate intervention recommended.',
                priority: 'critical'
            });
        }
        
        return insights;
    }

    // Generate AI recommendations based on current state
    generateRecommendations(state) {
        const recommendations = [];
        
        if (state.stress > 70) {
            recommendations.push({
                type: 'break',
                priority: 'high',
                title: 'Take a Break',
                message: `High stress detected (${Math.round(state.stress)}%). Consider a 10-15 minute break to reset.`,
                action: 'Start Break Timer',
                effectiveness: 85,
                timeToImplement: '5 minutes'
            });
        }
        
        if (state.cognitive > 80) {
            recommendations.push({
                type: 'refactor',
                priority: 'medium',
                title: 'Code Complexity Alert',
                message: `High cognitive load detected. Consider refactoring complex functions to improve maintainability.`,
                action: 'View Refactoring Suggestions',
                effectiveness: 70,
                timeToImplement: '30 minutes'
            });
        }
        
        if (state.flow > 85) {
            recommendations.push({
                type: 'focus',
                priority: 'low',
                title: 'Flow State Detected',
                message: `You're in the zone! Consider enabling focus mode to minimize interruptions.`,
                action: 'Enable Focus Mode',
                effectiveness: 95,
                timeToImplement: 'Immediate'
            });
        }
        
        if (state.productivity < 50) {
            recommendations.push({
                type: 'productivity',
                priority: 'medium',
                title: 'Productivity Enhancement',
                message: `Productivity below optimal levels. Try the Pomodoro technique or switch to a different task.`,
                action: 'Start Pomodoro Session',
                effectiveness: 75,
                timeToImplement: '25 minutes'
            });
        }
        
        return recommendations;
    }

    // Generate wellness insights
    generateWellnessInsights() {
        const insights = [
            {
                category: 'wellness',
                title: 'Stress Pattern Analysis',
                description: 'Your stress levels tend to peak around 3 PM. Consider scheduling breaks before this time.',
                impact: 'Medium',
                actionable: true,
                recommendation: 'Schedule a 10-minute break at 2:45 PM daily'
            },
            {
                category: 'productivity',
                title: 'Peak Performance Window',
                description: 'You show highest productivity between 9-11 AM. Schedule complex tasks during this window.',
                impact: 'High',
                actionable: true,
                recommendation: 'Block calendar for deep work from 9-11 AM'
            },
            {
                category: 'quality',
                title: 'Code Quality Correlation',
                description: 'Code complexity increases by 32% when stress levels exceed 70%. Monitor stress during complex tasks.',
                impact: 'High',
                actionable: true,
                recommendation: 'Use stress monitoring alerts during complex coding sessions'
            },
            {
                category: 'team',
                title: 'Collaboration Patterns',
                description: 'Your best collaborative work happens on Tuesday and Wednesday mornings.',
                impact: 'Medium',
                actionable: true,
                recommendation: 'Schedule pair programming sessions on Tuesday/Wednesday AM'
            }
        ];
        
        return insights;
    }

    // Switch between different developer profiles for demo
    switchProfile(profileName) {
        if (this.profiles[profileName]) {
            this.currentProfile = profileName;
            console.log(`Switched to ${profileName} profile`);
        }
    }

    // Get current profile information
    getCurrentProfile() {
        return {
            name: this.currentProfile,
            ...this.profiles[this.currentProfile]
        };
    }

    // Generate comprehensive demo dataset
    generateFullDataset() {
        const state = this.generatePsychologicalState();
        
        return {
            timestamp: new Date().toISOString(),
            psychologicalState: state,
            codeMetrics: this.generateCodeMetrics(),
            activityTimeline: this.generateActivityTimeline(),
            commitSentiment: this.generateCommitSentiment(),
            teamData: this.generateTeamData(),
            recommendations: this.generateRecommendations(state),
            wellnessInsights: this.generateWellnessInsights(),
            profile: this.getCurrentProfile()
        };
    }
}

// Export for use in main application
if (typeof window !== 'undefined') {
    window.DemoDataGenerator = DemoDataGenerator;
} else if (typeof module !== 'undefined' && module.exports) {
    module.exports = DemoDataGenerator;
}