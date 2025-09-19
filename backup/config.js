// NeuroCode Configuration
// Centralized configuration for the application

const NeuroCodeConfig = {
    // Application Information
    app: {
        name: 'NeuroCode',
        version: '1.0.0',
        description: 'AI-Powered Code Psychology Platform',
        author: 'NeuroCode Team',
        repository: 'https://github.com/your-username/neurocode'
    },

    // AI Model Configuration
    ai: {
        cerebras: {
            enabled: true,
            apiEndpoint: 'https://api.cerebras.ai/v1',
            model: 'cerebras-gpt-13b',
            maxTokens: 2048,
            temperature: 0.7,
            processingSpeed: 1800 // tokens per second
        },
        llama: {
            enabled: true,
            model: 'llama-3.1-70b',
            contextWindow: 128000,
            apiEndpoint: 'https://api.together.xyz/v1',
            temperature: 0.3,
            maxTokens: 4096
        }
    },

    // Psychological Analysis Parameters
    psychology: {
        stressThresholds: {
            low: 30,
            medium: 60,
            high: 80
        },
        flowStateIndicators: {
            minDuration: 90, // minutes
            consistencyThreshold: 0.85,
            productivityMultiplier: 1.3
        },
        burnoutRiskFactors: {
            codeVelocityDrop: 0.4, // 40% decrease
            qualityDegradation: 0.25, // 25% decrease
            timeWindow: 14 // days
        },
        cognitiveLoadMetrics: {
            complexityThreshold: 10,
            nestingDepthLimit: 5,
            methodLengthLimit: 50
        }
    },

    // Real-time Updates
    realtime: {
        updateInterval: 5000, // 5 seconds
        chartRefreshInterval: 30000, // 30 seconds
        stateMonitoringInterval: 1000, // 1 second
        recommendationCooldown: 300000 // 5 minutes
    },

    // User Interface
    ui: {
        theme: {
            primary: '#667eea',
            secondary: '#764ba2',
            success: '#28a745',
            warning: '#ffc107',
            danger: '#dc3545',
            info: '#17a2b8'
        },
        animations: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out'
        },
        charts: {
            defaultHeight: 300,
            animationDuration: 1000,
            responsive: true
        }
    },

    // Privacy and Security
    privacy: {
        dataRetentionDays: 30,
        anonymizationLevel: 5, // K-anonymity
        differentialPrivacyEpsilon: 1.0,
        localProcessingDefault: true,
        encryptionEnabled: true
    },

    // Notifications
    notifications: {
        enabled: true,
        types: {
            breaks: true,
            codeQuality: true,
            wellness: false,
            teamInsights: true,
            emergencyAlerts: true
        },
        timing: {
            breakReminder: 3600000, // 1 hour
            stressAlert: 1800000, // 30 minutes
            burnoutWarning: 86400000 // 24 hours
        }
    },

    // Integrations
    integrations: {
        vscode: {
            enabled: true,
            extensionId: 'neurocode.vscode-extension'
        },
        github: {
            enabled: true,
            webhookUrl: '/api/webhooks/github'
        },
        slack: {
            enabled: false,
            botToken: null,
            channelId: null
        },
        jira: {
            enabled: false,
            apiUrl: null,
            projectKey: null
        }
    },

    // Analytics
    analytics: {
        enabled: true,
        trackingId: null, // Set in production
        events: {
            pageViews: true,
            userInteractions: true,
            aiRecommendations: true,
            stateChanges: false // Privacy-sensitive
        }
    },

    // Development
    development: {
        debug: false,
        mockData: true,
        apiDelay: 1000, // Simulate API delay
        logLevel: 'info' // error, warn, info, debug
    },

    // Feature Flags
    features: {
        aiChat: true,
        teamAnalytics: true,
        predictiveAnalysis: true,
        voiceCommands: false,
        darkMode: true,
        offlineMode: true,
        exportData: true,
        customDashboard: false
    },

    // Performance
    performance: {
        maxConcurrentRequests: 10,
        cacheTimeout: 300000, // 5 minutes
        compressionEnabled: true,
        lazyLoadingEnabled: true
    },

    // Accessibility
    accessibility: {
        highContrast: false,
        fontSize: 'medium', // small, medium, large
        screenReaderSupport: true,
        keyboardNavigation: true,
        colorBlindSupport: true
    },

    // Localization
    localization: {
        defaultLanguage: 'en',
        supportedLanguages: ['en', 'es', 'fr', 'de', 'ja', 'zh'],
        dateFormat: 'MM/DD/YYYY',
        timeFormat: '12h', // 12h or 24h
        timezone: 'auto'
    },

    // API Configuration
    api: {
        baseUrl: window.location.origin,
        timeout: 30000, // 30 seconds
        retryAttempts: 3,
        retryDelay: 1000,
        rateLimiting: {
            enabled: true,
            requestsPerMinute: 60
        }
    },

    // Storage
    storage: {
        type: 'localStorage', // localStorage, sessionStorage, indexedDB
        prefix: 'neurocode_',
        encryption: false,
        compression: true
    }
};

// Environment-specific overrides
if (typeof window !== 'undefined') {
    // Browser environment
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        // Development environment
        NeuroCodeConfig.development.debug = true;
        NeuroCodeConfig.development.logLevel = 'debug';
        NeuroCodeConfig.ai.cerebras.enabled = false; // Use mock data in development
        NeuroCodeConfig.ai.llama.enabled = false;
    } else {
        // Production environment
        NeuroCodeConfig.development.mockData = false;
        NeuroCodeConfig.development.apiDelay = 0;
    }
}

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NeuroCodeConfig;
} else if (typeof window !== 'undefined') {
    window.NeuroCodeConfig = NeuroCodeConfig;
}