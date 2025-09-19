// NeuroCode AI-Powered Code Psychology Platform
// Interactive Web Application

class NeuroCodeAgent {
    constructor() {
        this.isActive = true;
        this.demoData = new DemoDataGenerator();
        this.currentState = {
            stress: 35,
            flow: 78,
            cognitive: 62,
            burnout: 23,
            confidence: 94
        };
        this.recommendations = [];
        this.chatHistory = [];
        this.analysisData = {};
        this.codeAnalyzer = new CodeAnalyzer();
        this.githubIntegration = new GitHubIntegration();
        this.uploadedFiles = [];
        this.currentLanguage = 'javascript';
        this.realTimeAnalysisInterval = null;
        this.settings = {
            agentMode: 'reactive',
            interventionLevel: 7,
            notifications: {
                breaks: true,
                quality: true,
                wellness: false,
                team: true
            }
        };
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeCharts();
        this.startRealTimeUpdates();
        this.loadUserPreferences();
        console.log('NeuroCode Agent initialized successfully');
    }

    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = e.target.getAttribute('href').substring(1);
                this.navigateToSection(target);
            });
        });

        // Timeline controls
        document.querySelectorAll('.timeline-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.timeline-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.updateActivityChart(e.target.dataset.view);
            });
        });

        // Profile controls
        document.querySelectorAll('.profile-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.profile-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.updateProfileView(e.target.dataset.period);
            });
        });

        // Settings
        document.getElementById('agentMode')?.addEventListener('change', (e) => {
            this.settings.agentMode = e.target.value;
            this.updateAgentBehavior();
        });

        document.getElementById('interventionLevel')?.addEventListener('input', (e) => {
            this.settings.interventionLevel = e.target.value;
            document.querySelector('.slider-value').textContent = e.target.value;
        });

        // Chat input
        document.getElementById('chatInput')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });

        // Mobile navigation
        document.querySelector('.nav-toggle')?.addEventListener('click', () => {
            document.querySelector('.nav-menu').classList.toggle('active');
        });

        // Code Analysis controls
        document.querySelectorAll('.analysis-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.analysis-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.switchAnalysisMode(e.target.dataset.mode);
            });
        });

        // Editor tab controls
        document.querySelectorAll('.editor-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                document.querySelectorAll('.editor-tab').forEach(t => t.classList.remove('active'));
                e.target.classList.add('active');
                this.switchLanguage(e.target.dataset.lang);
            });
        });

        // Code editor real-time analysis
        const codeEditor = document.getElementById('code-editor');
        if (codeEditor) {
            codeEditor.addEventListener('input', (e) => {
                this.onCodeChange(e.target.value);
            });
            
            codeEditor.addEventListener('keydown', (e) => {
                this.trackKeystroke(e);
            });
        }

        // File upload handling
        const fileInput = document.getElementById('file-input');
        const uploadArea = document.getElementById('upload-area');
        
        if (fileInput) {
            fileInput.addEventListener('change', (e) => {
                this.handleFileUpload(e.target.files);
            });
        }
        
        if (uploadArea) {
            uploadArea.addEventListener('dragover', (e) => {
                e.preventDefault();
                uploadArea.classList.add('dragover');
            });
            
            uploadArea.addEventListener('dragleave', (e) => {
                e.preventDefault();
                uploadArea.classList.remove('dragover');
            });
            
            uploadArea.addEventListener('drop', (e) => {
                e.preventDefault();
                uploadArea.classList.remove('dragover');
                this.handleFileUpload(e.dataTransfer.files);
            });
        }
    }

    navigateToSection(sectionId) {
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });
        
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = 'block';
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    initializeCharts() {
        // Wait for DOM to be ready
        setTimeout(() => {
            this.initStateMeter();
            this.initActivityChart();
            this.initSentimentChart();
            this.initProfileRadar();
            this.initProductivityChart();
        }, 100);
    }

    initStateMeter() {
        const canvas = document.getElementById('stateMeter');
        if (!canvas) {
            console.warn('State meter canvas not found');
            return;
        }

        const ctx = canvas.getContext('2d');
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 80;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw background circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = '#f0f0f0';
        ctx.lineWidth = 10;
        ctx.stroke();

        // Draw progress arc based on overall wellness score
        const overallScore = Math.max(0, Math.min(100, (100 - this.currentState.stress + this.currentState.flow) / 2));
        const startAngle = -Math.PI / 2;
        const endAngle = startAngle + (2 * Math.PI * overallScore / 100);

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.strokeStyle = this.getWellnessColor(overallScore);
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Draw center text
        ctx.fillStyle = '#333';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(Math.round(overallScore) + '%', centerX, centerY - 5);
        ctx.font = '12px Arial';
        ctx.fillText('Wellness Score', centerX, centerY + 15);
    }

    getWellnessColor(score) {
        if (score >= 80) return '#28a745';
        if (score >= 60) return '#ffc107';
        if (score >= 40) return '#fd7e14';
        return '#dc3545';
    }

    initActivityChart() {
        const canvas = document.getElementById('activityChart');
        if (!canvas) {
            console.warn('Activity chart canvas not found');
            return;
        }

        const ctx = canvas.getContext('2d');
        
        // Use demo data generator for realistic timeline data
        const timelineData = this.demoData.generateActivityTimeline(24);
        const hours = timelineData.map(d => new Date(d.time).getHours() + ':00');
        const stressData = timelineData.map(d => d.stress);
        const flowData = timelineData.map(d => d.flow);
        const productivityData = timelineData.map(d => d.productivity);

        this.drawLineChart(ctx, canvas, {
            labels: hours,
            datasets: [
                { label: 'Stress Level', data: stressData, color: '#ff6b6b' },
                { label: 'Flow State', data: flowData, color: '#4ecdc4' },
                { label: 'Productivity', data: productivityData, color: '#45b7d1' }
            ]
        });
    }

    drawLineChart(ctx, canvas, data) {
        const padding = 60;
        const chartWidth = canvas.width - 2 * padding;
        const chartHeight = canvas.height - 2 * padding;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw grid
        ctx.strokeStyle = '#f0f0f0';
        ctx.lineWidth = 1;
        
        // Horizontal grid lines
        for (let i = 0; i <= 5; i++) {
            const y = padding + (chartHeight / 5) * i;
            ctx.beginPath();
            ctx.moveTo(padding, y);
            ctx.lineTo(padding + chartWidth, y);
            ctx.stroke();
            
            // Y-axis labels
            ctx.fillStyle = '#666';
            ctx.font = '12px Arial';
            ctx.textAlign = 'right';
            ctx.fillText((100 - i * 20) + '%', padding - 10, y + 4);
        }
        
        // Vertical grid lines
        const stepX = chartWidth / (data.labels.length - 1);
        for (let i = 0; i < data.labels.length; i += 4) {
            const x = padding + stepX * i;
            ctx.beginPath();
            ctx.moveTo(x, padding);
            ctx.lineTo(x, padding + chartHeight);
            ctx.stroke();
            
            // X-axis labels
            ctx.fillStyle = '#666';
            ctx.font = '12px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(data.labels[i], x, canvas.height - 20);
        }
        
        // Draw datasets
        data.datasets.forEach((dataset, index) => {
            ctx.strokeStyle = dataset.color;
            ctx.lineWidth = 3;
            ctx.beginPath();
            
            dataset.data.forEach((value, i) => {
                const x = padding + stepX * i;
                const y = padding + chartHeight - (value / 100) * chartHeight;
                
                if (i === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            });
            
            ctx.stroke();
            
            // Draw points
            ctx.fillStyle = dataset.color;
            dataset.data.forEach((value, i) => {
                const x = padding + stepX * i;
                const y = padding + chartHeight - (value / 100) * chartHeight;
                
                ctx.beginPath();
                ctx.arc(x, y, 4, 0, 2 * Math.PI);
                ctx.fill();
            });
        });
        
        // Draw legend
        const legendY = 20;
        data.datasets.forEach((dataset, index) => {
            const legendX = padding + index * 120;
            
            ctx.fillStyle = dataset.color;
            ctx.fillRect(legendX, legendY, 15, 3);
            
            ctx.fillStyle = '#333';
            ctx.font = '12px Arial';
            ctx.textAlign = 'left';
            ctx.fillText(dataset.label, legendX + 20, legendY + 8);
        });
    }

    initSentimentChart() {
        const canvas = document.getElementById('sentimentChart');
        if (!canvas) {
            console.warn('Sentiment chart canvas not found');
            return;
        }

        const ctx = canvas.getContext('2d');
        
        // Use demo data generator for realistic sentiment data
        const sentimentData = this.demoData.generateCommitSentiment();
        const distribution = sentimentData.distribution;
        const total = distribution.positive + distribution.neutral + distribution.negative;
        
        const data = [
            { label: 'Positive', value: Math.round((distribution.positive / total) * 100), color: '#28a745' },
            { label: 'Neutral', value: Math.round((distribution.neutral / total) * 100), color: '#ffc107' },
            { label: 'Negative', value: Math.round((distribution.negative / total) * 100), color: '#dc3545' }
        ];

        this.drawPieChart(ctx, canvas, data);
    }

    drawPieChart(ctx, canvas, data) {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = Math.min(centerX, centerY) - 20;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        let currentAngle = -Math.PI / 2;
        const total = data.reduce((sum, item) => sum + item.value, 0);
        
        data.forEach((item, index) => {
            const sliceAngle = (item.value / total) * 2 * Math.PI;
            
            // Draw slice
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
            ctx.closePath();
            ctx.fillStyle = item.color;
            ctx.fill();
            
            // Draw label
            const labelAngle = currentAngle + sliceAngle / 2;
            const labelX = centerX + Math.cos(labelAngle) * (radius * 0.7);
            const labelY = centerY + Math.sin(labelAngle) * (radius * 0.7);
            
            ctx.fillStyle = 'white';
            ctx.font = 'bold 12px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(item.value + '%', labelX, labelY);
            
            currentAngle += sliceAngle;
        });
    }

    initProfileRadar() {
        const canvas = document.getElementById('profileRadar');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const data = {
            labels: ['Focus', 'Creativity', 'Problem Solving', 'Collaboration', 'Code Quality', 'Learning'],
            values: [85, 72, 92, 68, 88, 75]
        };

        this.drawRadarChart(ctx, canvas, data);
    }

    drawRadarChart(ctx, canvas, data) {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = Math.min(centerX, centerY) - 40;
        const angleStep = (2 * Math.PI) / data.labels.length;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw grid circles
        ctx.strokeStyle = '#f0f0f0';
        ctx.lineWidth = 1;
        for (let i = 1; i <= 5; i++) {
            ctx.beginPath();
            ctx.arc(centerX, centerY, (radius / 5) * i, 0, 2 * Math.PI);
            ctx.stroke();
        }
        
        // Draw axes
        ctx.strokeStyle = '#ddd';
        data.labels.forEach((label, index) => {
            const angle = index * angleStep - Math.PI / 2;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(x, y);
            ctx.stroke();
            
            // Draw labels
            const labelX = centerX + Math.cos(angle) * (radius + 20);
            const labelY = centerY + Math.sin(angle) * (radius + 20);
            
            ctx.fillStyle = '#333';
            ctx.font = '12px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(label, labelX, labelY);
        });
        
        // Draw data polygon
        ctx.beginPath();
        ctx.strokeStyle = '#667eea';
        ctx.fillStyle = 'rgba(102, 126, 234, 0.2)';
        ctx.lineWidth = 2;
        
        data.values.forEach((value, index) => {
            const angle = index * angleStep - Math.PI / 2;
            const distance = (value / 100) * radius;
            const x = centerX + Math.cos(angle) * distance;
            const y = centerY + Math.sin(angle) * distance;
            
            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Draw data points
        ctx.fillStyle = '#667eea';
        data.values.forEach((value, index) => {
            const angle = index * angleStep - Math.PI / 2;
            const distance = (value / 100) * radius;
            const x = centerX + Math.cos(angle) * distance;
            const y = centerY + Math.sin(angle) * distance;
            
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, 2 * Math.PI);
            ctx.fill();
        });
    }

    initProductivityChart() {
        const canvas = document.getElementById('productivityChart');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const hours = ['6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'];
        const productivity = [20, 35, 60, 85, 95, 90, 70, 75, 80, 85, 75, 60, 40];

        this.drawBarChart(ctx, canvas, { labels: hours, data: productivity });
    }

    drawBarChart(ctx, canvas, data) {
        const padding = 40;
        const chartWidth = canvas.width - 2 * padding;
        const chartHeight = canvas.height - 2 * padding;
        const barWidth = chartWidth / data.labels.length;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw bars
        data.data.forEach((value, index) => {
            const barHeight = (value / 100) * chartHeight;
            const x = padding + index * barWidth + barWidth * 0.1;
            const y = padding + chartHeight - barHeight;
            const width = barWidth * 0.8;
            
            // Gradient fill
            const gradient = ctx.createLinearGradient(0, y, 0, y + barHeight);
            gradient.addColorStop(0, '#667eea');
            gradient.addColorStop(1, '#764ba2');
            
            ctx.fillStyle = gradient;
            ctx.fillRect(x, y, width, barHeight);
            
            // Labels
            ctx.fillStyle = '#666';
            ctx.font = '10px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(data.labels[index], x + width / 2, canvas.height - 10);
        });
    }

    startRealTimeUpdates() {
        // Simulate real-time data updates
        setInterval(() => {
            this.updatePsychologicalState();
            this.updateRecommendations();
            this.updateMetrics();
        }, 5000);

        // Update charts periodically
        setInterval(() => {
            this.initStateMeter();
            this.updateActivityChart('today');
        }, 30000);
    }

    updatePsychologicalState() {
        // Use demo data generator for realistic state updates
        const newState = this.demoData.generatePsychologicalState();
        
        // Smooth transition to avoid jarring changes
        const smoothFactor = 0.1;
        this.currentState.stress = this.currentState.stress * (1 - smoothFactor) + newState.stress * smoothFactor;
        this.currentState.flow = this.currentState.flow * (1 - smoothFactor) + newState.flow * smoothFactor;
        this.currentState.cognitive = this.currentState.cognitive * (1 - smoothFactor) + newState.cognitive * smoothFactor;
        this.currentState.burnout = this.currentState.burnout * (1 - smoothFactor) + newState.burnout * smoothFactor;
        this.currentState.confidence = this.currentState.confidence * (1 - smoothFactor) + newState.confidence * smoothFactor;
        
        // Update UI
        this.updateStateDisplay();
    }

    updateStateDisplay() {
        const states = ['stress', 'flow', 'cognitive', 'burnout'];
        
        states.forEach(state => {
            const element = document.querySelector(`.state-fill.${state}`);
            const valueElement = element?.parentElement.nextElementSibling;
            
            if (element && valueElement) {
                element.style.width = this.currentState[state] + '%';
                valueElement.textContent = Math.round(this.currentState[state]) + '%';
            }
        });

        // Update confidence score
        const confidenceElement = document.getElementById('confidence');
        if (confidenceElement) {
            confidenceElement.textContent = this.currentState.confidence + '%';
        }
    }

    updateRecommendations() {
        // Use demo data generator for realistic recommendations
        this.recommendations = this.demoData.generateRecommendations(this.currentState);
        this.updateRecommendationsDisplay();
    }

    updateRecommendationsDisplay() {
        const container = document.querySelector('.recommendations-list');
        if (!container) return;
        
        container.innerHTML = '';
        
        this.recommendations.forEach(rec => {
            const element = document.createElement('div');
            element.className = `recommendation-item priority-${rec.priority}`;
            element.innerHTML = `
                <div class="rec-icon">
                    <i class="fas fa-${this.getRecommendationIcon(rec.type)}"></i>
                </div>
                <div class="rec-content">
                    <h4>${rec.title}</h4>
                    <p>${rec.message}</p>
                    <div class="rec-actions">
                        <button class="btn-accept" onclick="neuroCode.acceptRecommendation('${rec.type}')">${rec.action}</button>
                        <button class="btn-dismiss" onclick="neuroCode.dismissRecommendation('${rec.type}')">Dismiss</button>
                    </div>
                </div>
            `;
            container.appendChild(element);
        });
    }

    getRecommendationIcon(type) {
        const icons = {
            break: 'coffee',
            refactor: 'tools',
            focus: 'bullseye',
            pair: 'users',
            wellness: 'heart'
        };
        return icons[type] || 'lightbulb';
    }

    updateMetrics() {
        // Use demo data generator for realistic metrics
        const metrics = this.demoData.generateCodeMetrics();
        
        // Update metric displays
        Object.keys(metrics).forEach(metric => {
            const valueElement = document.querySelector(`.metric-icon.${metric}`)?.parentElement.querySelector('.metric-value');
            if (valueElement) {
                const value = metric === 'bugs' ? Math.max(0, Math.round(metrics[metric])) : 
                             metric === 'complexity' ? metrics[metric].toFixed(1) :
                             Math.round(metrics[metric]) + '%';
                valueElement.textContent = value;
            }
        });
    }

    updateActivityChart(period) {
        // Update chart based on selected time period
        console.log(`Updating activity chart for period: ${period}`);
        this.initActivityChart();
    }

    updateProfileView(period) {
        // Update profile view based on selected period
        console.log(`Updating profile view for period: ${period}`);
        
        if (period === 'prediction') {
            // Show predicted values
            const predictedData = {
                labels: ['Focus', 'Creativity', 'Problem Solving', 'Collaboration', 'Code Quality', 'Learning'],
                values: [88, 75, 95, 72, 91, 78]
            };
            
            const canvas = document.getElementById('profileRadar');
            if (canvas) {
                this.drawRadarChart(canvas.getContext('2d'), canvas, predictedData);
            }
        } else {
            this.initProfileRadar();
        }
    }

    updateAgentBehavior() {
        console.log(`Agent mode changed to: ${this.settings.agentMode}`);
        
        // Adjust recommendation frequency based on mode
        if (this.settings.agentMode === 'proactive') {
            // More frequent recommendations
            this.recommendationInterval = 3000;
        } else if (this.settings.agentMode === 'reactive') {
            // Standard frequency
            this.recommendationInterval = 5000;
        } else {
            // Passive mode - minimal recommendations
            this.recommendationInterval = 10000;
        }
    }

    // User interaction methods
    acceptRecommendation(type) {
        console.log(`Accepted recommendation: ${type}`);
        
        switch (type) {
            case 'break':
                this.startBreakTimer();
                break;
            case 'refactor':
                this.showRefactoringDetails();
                break;
            case 'pair':
                this.connectWithColleague();
                break;
            case 'focus':
                this.enableFocusMode();
                break;
        }
        
        // Remove recommendation from list
        this.recommendations = this.recommendations.filter(rec => rec.type !== type);
        this.updateRecommendationsDisplay();
    }

    dismissRecommendation(type) {
        console.log(`Dismissed recommendation: ${type}`);
        this.recommendations = this.recommendations.filter(rec => rec.type !== type);
        this.updateRecommendationsDisplay();
    }

    startBreakTimer() {
        // Implement break timer functionality
        alert('Break timer started! Take a 10-minute break.');
        
        // Simulate break effect on stress levels
        setTimeout(() => {
            this.currentState.stress = Math.max(0, this.currentState.stress - 15);
            this.updateStateDisplay();
        }, 1000);
    }

    showRefactoringDetails() {
        // Show detailed refactoring suggestions
        alert('Refactoring suggestions:\n\n1. Break down the authenticate() method\n2. Extract validation logic\n3. Reduce nesting in error handling');
    }

    connectWithColleague() {
        // Simulate colleague connection
        alert('Connecting you with Sarah Kim for pair programming session...');
    }

    enableFocusMode() {
        // Enable focus mode
        alert('Focus mode enabled! Notifications will be minimized.');
        document.body.classList.add('focus-mode');
    }

    // Chat functionality
    sendMessage() {
        const input = document.getElementById('chatInput');
        const message = input.value.trim();
        
        if (!message) return;
        
        this.addChatMessage(message, 'user');
        input.value = '';
        
        // Simulate AI response
        setTimeout(() => {
            const response = this.generateAIResponse(message);
            this.addChatMessage(response, 'agent');
        }, 1000);
    }

    addChatMessage(message, sender) {
        const messagesContainer = document.getElementById('chatMessages');
        if (!messagesContainer) return;
        
        const messageElement = document.createElement('div');
        messageElement.className = `message ${sender}-message`;
        
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        messageElement.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-${sender === 'user' ? 'user' : 'robot'}"></i>
            </div>
            <div class="message-content">
                <p>${message}</p>
                <span class="message-time">${time}</span>
            </div>
        `;
        
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    generateAIResponse(userMessage) {
        const responses = {
            stress: "I notice your stress levels are elevated. Would you like me to suggest some relaxation techniques or schedule a break?",
            break: "Great idea! Taking regular breaks can improve focus by up to 23%. I'll start a 10-minute timer for you.",
            productivity: "Your productivity patterns show peak performance between 9-11 AM. Consider scheduling complex tasks during this window.",
            code: "I've analyzed your recent code changes. The complexity has increased, but your problem-solving approach is excellent. Consider refactoring the authentication module.",
            help: "I'm here to help you optimize your coding experience! I can provide insights on your psychological state, suggest improvements, and help prevent burnout.",
            default: "That's interesting! Based on your current coding patterns, I'd recommend focusing on maintaining your flow state while being mindful of stress levels."
        };
        
        const lowerMessage = userMessage.toLowerCase();
        
        if (lowerMessage.includes('stress')) return responses.stress;
        if (lowerMessage.includes('break')) return responses.break;
        if (lowerMessage.includes('productive')) return responses.productivity;
        if (lowerMessage.includes('code')) return responses.code;
        if (lowerMessage.includes('help')) return responses.help;
        
        return responses.default;
    }

    loadUserPreferences() {
        // Load user preferences from localStorage
        const saved = localStorage.getItem('neurocode-preferences');
        if (saved) {
            this.settings = { ...this.settings, ...JSON.parse(saved) };
            this.applySettings();
        }
    }

    saveUserPreferences() {
        localStorage.setItem('neurocode-preferences', JSON.stringify(this.settings));
    }

    applySettings() {
        // Apply loaded settings to UI
        const agentModeSelect = document.getElementById('agentMode');
        if (agentModeSelect) {
            agentModeSelect.value = this.settings.agentMode;
        }
        
        const interventionSlider = document.getElementById('interventionLevel');
        if (interventionSlider) {
            interventionSlider.value = this.settings.interventionLevel;
            document.querySelector('.slider-value').textContent = this.settings.interventionLevel;
        }
    }
}

// Global functions for HTML event handlers
function startAnalysis() {
    console.log('Starting comprehensive analysis...');
    neuroCode.runDeepAnalysis();
}

function runDeepAnalysis() {
    console.log('Running deep analysis with Cerebras and Llama...');
    
    // Simulate analysis process
    const processingStatus = document.querySelector('.processing-status');
    if (processingStatus) {
        processingStatus.innerHTML = '<div class="spinner"></div><span>Analyzing...</span>';
        
        setTimeout(() => {
            processingStatus.innerHTML = '<i class="fas fa-check-circle" style="color: #28a745;"></i><span>Analysis Complete</span>';
        }, 3000);
    }
}

function acceptRecommendation(type) {
    neuroCode.acceptRecommendation(type);
}

function dismissRecommendation(type) {
    neuroCode.dismissRecommendation(type);
}

function implementInsight(type) {
    console.log(`Implementing insight: ${type}`);
    
    switch (type) {
        case 'pomodoro':
            alert('Pomodoro technique activated! 25-minute focus session starting now.');
            break;
        default:
            alert(`Implementing ${type} optimization...`);
    }
}

function scheduleOptimalTasks() {
    alert('Optimal task scheduling:\n\n9:00-11:00 AM: Complex problem solving\n11:00-12:00 PM: Code reviews\n2:00-4:00 PM: Documentation\n4:00-5:00 PM: Team meetings');
}

function refactorCode() {
    alert('Opening refactoring assistant...\n\nSuggested improvements:\n1. Extract method for authentication\n2. Reduce cyclomatic complexity\n3. Add unit tests');
}

function planTeamActivity() {
    alert('Team wellness activity planned:\n\n📅 Tomorrow 3:00 PM\n🎯 Team building exercise\n📍 Conference room A\n⏱️ Duration: 30 minutes');
}

function toggleChat() {
    const chatContainer = document.getElementById('aiChat');
    const fab = document.querySelector('.fab-container');
    
    if (chatContainer.classList.contains('open')) {
        chatContainer.classList.remove('open');
        fab.style.display = 'block';
    } else {
        chatContainer.classList.add('open');
        fab.style.display = 'none';
    }
}

function sendMessage() {
    neuroCode.sendMessage();
}

// Initialize the NeuroCode system when page loads
let neuroCode;

document.addEventListener('DOMContentLoaded', () => {
    neuroCode = new NeuroCodeAgent();
    
    // Show dashboard by default
    document.querySelectorAll('section').forEach(section => {
        section.style.display = section.id === 'dashboard' ? 'block' : 'none';
    });
    
    console.log('NeuroCode system initialized and ready!');
});

// Service Worker registration for PWA functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
// 
Code Analysis Functionality
class CodeAnalyzer {
    constructor() {
        this.currentCode = '';
        this.analysisMetrics = {
            cognitive: 45,
            stress: 32,
            flow: 78,
            quality: 85
        };
        this.keystrokePattern = [];
        this.lastAnalysisTime = Date.now();
    }

    analyzeCode(code, language = 'javascript') {
        this.currentCode = code;
        
        // Calculate complexity metrics
        const complexity = this.calculateComplexity(code, language);
        const quality = this.calculateQuality(code, language);
        const patterns = this.analyzePatterns(code);
        
        // Update psychological metrics based on code analysis
        this.updatePsychologicalMetrics(complexity, quality, patterns);
        
        return {
            complexity,
            quality,
            patterns,
            insights: this.generateInsights(code, language),
            suggestions: this.generateSuggestions(code, language)
        };
    }

    calculateComplexity(code, language) {
        const lines = code.split('\n').filter(line => line.trim());
        const cyclomaticComplexity = this.calculateCyclomaticComplexity(code);
        const nestingDepth = this.calculateNestingDepth(code);
        
        return {
            lines: lines.length,
            cyclomatic: cyclomaticComplexity,
            nesting: nestingDepth,
            score: Math.min(100, Math.max(0, 100 - (cyclomaticComplexity * 5 + nestingDepth * 10)))
        };
    }

    calculateCyclomaticComplexity(code) {
        // Count decision points
        const patterns = [
            /if\s*\(/g, /else\s+if\s*\(/g, /while\s*\(/g, /for\s*\(/g,
            /switch\s*\(/g, /case\s+/g, /catch\s*\(/g, /\?\s*:/g,
            /&&/g, /\|\|/g
        ];
        
        let complexity = 1; // Base complexity
        patterns.forEach(pattern => {
            const matches = code.match(pattern);
            if (matches) complexity += matches.length;
        });
        
        return Math.min(20, complexity);
    }

    calculateNestingDepth(code) {
        let maxDepth = 0;
        let currentDepth = 0;
        
        for (let char of code) {
            if (char === '{') {
                currentDepth++;
                maxDepth = Math.max(maxDepth, currentDepth);
            } else if (char === '}') {
                currentDepth--;
            }
        }
        
        return Math.min(10, maxDepth);
    }

    calculateQuality(code, language) {
        const lines = code.split('\n');
        let score = 100;
        
        // Check for common quality indicators
        const hasComments = lines.some(line => line.trim().startsWith('//') || line.includes('/*'));
        const hasProperNaming = /[a-z][A-Z]/.test(code); // camelCase
        const hasErrorHandling = /try\s*{|catch\s*\(/.test(code);
        const hasConstants = /const\s+[A-Z_]+/.test(code);
        
        if (!hasComments) score -= 15;
        if (!hasProperNaming) score -= 10;
        if (!hasErrorHandling && code.length > 200) score -= 20;
        if (!hasConstants && code.length > 100) score -= 5;
        
        // Check for code smells
        const longLines = lines.filter(line => line.length > 120).length;
        const emptyLines = lines.filter(line => !line.trim()).length;
        const duplicatePatterns = this.findDuplicatePatterns(code);
        
        score -= longLines * 2;
        score -= Math.max(0, emptyLines - lines.length * 0.1) * 1;
        score -= duplicatePatterns * 5;
        
        return Math.max(0, Math.min(100, score));
    }

    findDuplicatePatterns(code) {
        // Simple duplicate detection
        const lines = code.split('\n').map(line => line.trim()).filter(line => line);
        const lineCount = {};
        
        lines.forEach(line => {
            if (line.length > 10) { // Only check substantial lines
                lineCount[line] = (lineCount[line] || 0) + 1;
            }
        });
        
        return Object.values(lineCount).filter(count => count > 1).length;
    }

    analyzePatterns(code) {
        const patterns = {
            functions: (code.match(/function\s+\w+|=>\s*{|\w+\s*\(/g) || []).length,
            variables: (code.match(/(?:let|const|var)\s+\w+/g) || []).length,
            loops: (code.match(/for\s*\(|while\s*\(|forEach\s*\(/g) || []).length,
            conditionals: (code.match(/if\s*\(|switch\s*\(/g) || []).length,
            classes: (code.match(/class\s+\w+/g) || []).length
        };
        
        return patterns;
    }

    updatePsychologicalMetrics(complexity, quality, patterns) {
        // Update cognitive load based on complexity
        this.analysisMetrics.cognitive = Math.min(100, 30 + complexity.cyclomatic * 3 + complexity.nesting * 5);
        
        // Update stress based on quality and complexity
        const stressFactor = (100 - quality.score) * 0.5 + complexity.cyclomatic * 2;
        this.analysisMetrics.stress = Math.min(100, Math.max(0, stressFactor));
        
        // Update flow state (inverse of stress and complexity)
        this.analysisMetrics.flow = Math.max(0, 100 - this.analysisMetrics.stress * 0.7 - this.analysisMetrics.cognitive * 0.3);
        
        // Update quality metric
        this.analysisMetrics.quality = quality;
    }

    generateInsights(code, language) {
        const insights = [];
        const lines = code.split('\n');
        
        // Positive insights
        if (code.includes('//') || code.includes('/*')) {
            insights.push({
                type: 'positive',
                message: 'Good documentation practices detected'
            });
        }
        
        if (/function\s+\w+/.test(code)) {
            insights.push({
                type: 'positive',
                message: 'Well-structured function definitions'
            });
        }
        
        // Neutral insights
        if (lines.length > 50) {
            insights.push({
                type: 'neutral',
                message: 'Consider breaking down into smaller modules'
            });
        }
        
        if (!code.includes('try') && code.length > 200) {
            insights.push({
                type: 'neutral',
                message: 'Consider adding error handling'
            });
        }
        
        // Negative insights
        if (this.analysisMetrics.cognitive > 70) {
            insights.push({
                type: 'negative',
                message: 'High cognitive complexity detected'
            });
        }
        
        return insights;
    }

    generateSuggestions(code, language) {
        const suggestions = [];
        
        if (this.analysisMetrics.stress > 60) {
            suggestions.push('Take a short break to reduce stress levels');
        }
        
        if (this.analysisMetrics.cognitive > 80) {
            suggestions.push('Consider simplifying the current logic');
        }
        
        if (this.analysisMetrics.flow > 80) {
            suggestions.push('Great flow state! Keep up the momentum');
        }
        
        if (code.length > 0 && !code.includes('//')) {
            suggestions.push('Add comments to improve code readability');
        }
        
        return suggestions;
    }

    trackKeystroke(event) {
        const now = Date.now();
        this.keystrokePattern.push({
            key: event.key,
            timestamp: now,
            interval: now - this.lastAnalysisTime
        });
        
        // Keep only last 100 keystrokes
        if (this.keystrokePattern.length > 100) {
            this.keystrokePattern.shift();
        }
        
        this.lastAnalysisTime = now;
        
        // Analyze typing patterns for stress indicators
        this.analyzeTypingPatterns();
    }

    analyzeTypingPatterns() {
        if (this.keystrokePattern.length < 10) return;
        
        const recent = this.keystrokePattern.slice(-10);
        const avgInterval = recent.reduce((sum, stroke) => sum + stroke.interval, 0) / recent.length;
        const variance = recent.reduce((sum, stroke) => sum + Math.pow(stroke.interval - avgInterval, 2), 0) / recent.length;
        
        // High variance indicates stress/frustration
        if (variance > 10000) {
            this.analysisMetrics.stress = Math.min(100, this.analysisMetrics.stress + 2);
        } else if (variance < 2000) {
            // Consistent typing indicates flow state
            this.analysisMetrics.flow = Math.min(100, this.analysisMetrics.flow + 1);
        }
    }
}

// GitHub Integration Class
class GitHubIntegration {
    constructor() {
        this.isConnected = false;
        this.accessToken = null;
        this.repositories = [];
        this.selectedRepo = null;
    }

    async connect() {
        // Simulate GitHub OAuth flow
        return new Promise((resolve) => {
            setTimeout(() => {
                this.isConnected = true;
                this.accessToken = 'demo_token_' + Date.now();
                this.loadDemoRepositories();
                resolve(true);
            }, 2000);
        });
    }

    loadDemoRepositories() {
        this.repositories = [
            {
                name: 'neurocode-frontend',
                description: 'React-based frontend for NeuroCode platform',
                language: 'JavaScript',
                stars: 42,
                commits: 156,
                lastCommit: '2 hours ago'
            },
            {
                name: 'ai-analysis-engine',
                description: 'Machine learning models for code psychology analysis',
                language: 'Python',
                stars: 28,
                commits: 89,
                lastCommit: '1 day ago'
            },
            {
                name: 'developer-wellness-api',
                description: 'REST API for developer wellness tracking',
                language: 'Node.js',
                stars: 15,
                commits: 67,
                lastCommit: '3 days ago'
            },
            {
                name: 'mobile-companion',
                description: 'Mobile app for wellness notifications',
                language: 'React Native',
                stars: 8,
                commits: 34,
                lastCommit: '1 week ago'
            }
        ];
    }

    async analyzeRepository(repoName) {
        const repo = this.repositories.find(r => r.name === repoName);
        if (!repo) return null;

        // Simulate repository analysis
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    commitPatterns: this.generateCommitPatterns(),
                    qualityTrends: this.generateQualityTrends(),
                    psychologicalIndicators: this.generatePsychIndicators()
                });
            }, 3000);
        });
    }

    generateCommitPatterns() {
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        return days.map(day => ({
            day,
            commits: Math.floor(Math.random() * 20) + 5,
            stress: Math.floor(Math.random() * 40) + 20,
            productivity: Math.floor(Math.random() * 60) + 40
        }));
    }

    generateQualityTrends() {
        const weeks = [];
        for (let i = 8; i >= 0; i--) {
            weeks.push({
                week: `Week ${9 - i}`,
                quality: Math.floor(Math.random() * 30) + 70,
                complexity: Math.floor(Math.random() * 20) + 10,
                coverage: Math.floor(Math.random() * 25) + 75
            });
        }
        return weeks;
    }

    generatePsychIndicators() {
        return {
            stressPatterns: Math.floor(Math.random() * 40) + 20,
            productivityCycles: Math.floor(Math.random() * 30) + 70,
            collaborationHealth: Math.floor(Math.random() * 25) + 75,
            burnoutRisk: Math.floor(Math.random() * 30) + 10
        };
    }
}

// Extended NeuroCodeAgent methods for code analysis
NeuroCodeAgent.prototype.switchAnalysisMode = function(mode) {
    // Hide all analysis modes
    document.querySelectorAll('.analysis-mode').forEach(mode => {
        mode.classList.remove('active');
    });
    
    // Show selected mode
    const targetMode = document.getElementById(mode + '-mode');
    if (targetMode) {
        targetMode.classList.add('active');
    }
    
    console.log(`Switched to ${mode} analysis mode`);
};

NeuroCodeAgent.prototype.switchLanguage = function(language) {
    this.currentLanguage = language;
    
    // Update editor placeholder and file name
    const editor = document.getElementById('code-editor');
    const fileName = document.querySelector('.file-name');
    
    if (editor && fileName) {
        const extensions = {
            javascript: 'js',
            python: 'py',
            java: 'java',
            cpp: 'cpp'
        };
        
        fileName.textContent = `main.${extensions[language] || 'txt'}`;
        
        const placeholders = {
            javascript: '// JavaScript code here...\nfunction example() {\n    console.log("Hello, NeuroCode!");\n}',
            python: '# Python code here...\ndef example():\n    print("Hello, NeuroCode!")',
            java: '// Java code here...\npublic class Example {\n    public static void main(String[] args) {\n        System.out.println("Hello, NeuroCode!");\n    }\n}',
            cpp: '// C++ code here...\n#include <iostream>\nint main() {\n    std::cout << "Hello, NeuroCode!" << std::endl;\n    return 0;\n}'
        };
        
        if (!editor.value.trim()) {
            editor.placeholder = placeholders[language] || '// Code here...';
        }
    }
    
    console.log(`Switched to ${language} language`);
};

NeuroCodeAgent.prototype.onCodeChange = function(code) {
    if (!this.codeAnalyzer) {
        this.codeAnalyzer = new CodeAnalyzer();
    }
    
    // Update editor stats
    this.updateEditorStats(code);
    
    // Perform real-time analysis
    const analysis = this.codeAnalyzer.analyzeCode(code, this.currentLanguage);
    
    // Update real-time metrics
    this.updateRealTimeMetrics(this.codeAnalyzer.analysisMetrics);
    
    // Update insights and suggestions
    this.updateCodeInsights(analysis.insights);
    this.updateAISuggestions(analysis.suggestions);
};

NeuroCodeAgent.prototype.updateEditorStats = function(code) {
    const lines = code.split('\n').length;
    const chars = code.length;
    const complexity = this.calculateComplexityLevel(code);
    
    const lineCount = document.getElementById('line-count');
    const charCount = document.getElementById('char-count');
    const complexityIndicator = document.getElementById('complexity-indicator');
    
    if (lineCount) lineCount.textContent = `Lines: ${lines}`;
    if (charCount) charCount.textContent = `Characters: ${chars}`;
    if (complexityIndicator) {
        complexityIndicator.textContent = `Complexity: ${complexity}`;
        complexityIndicator.className = `complexity-${complexity.toLowerCase()}`;
    }
};

NeuroCodeAgent.prototype.calculateComplexityLevel = function(code) {
    const cyclomaticComplexity = (code.match(/if|while|for|switch|catch|\?|&&|\|\|/g) || []).length;
    
    if (cyclomaticComplexity <= 5) return 'Low';
    if (cyclomaticComplexity <= 10) return 'Medium';
    return 'High';
};

NeuroCodeAgent.prototype.updateRealTimeMetrics = function(metrics) {
    const metricElements = {
        'rt-cognitive': metrics.cognitive,
        'rt-stress': metrics.stress,
        'rt-flow': metrics.flow,
        'rt-quality': metrics.quality
    };
    
    Object.entries(metricElements).forEach(([id, value]) => {
        const element = document.getElementById(id);
        const bar = element?.parentElement.querySelector('.metric-fill');
        
        if (element && bar) {
            element.textContent = Math.round(value) + '%';
            bar.style.width = value + '%';
        }
    });
};

NeuroCodeAgent.prototype.updateCodeInsights = function(insights) {
    const container = document.getElementById('code-insights-list');
    if (!container) return;
    
    container.innerHTML = '';
    
    insights.forEach(insight => {
        const element = document.createElement('div');
        element.className = `insight-item ${insight.type}`;
        element.innerHTML = `
            <i class="fas fa-${insight.type === 'positive' ? 'check-circle' : 
                                insight.type === 'negative' ? 'exclamation-triangle' : 'info-circle'}"></i>
            <span>${insight.message}</span>
        `;
        container.appendChild(element);
    });
};

NeuroCodeAgent.prototype.updateAISuggestions = function(suggestions) {
    const container = document.getElementById('ai-suggestions-list');
    if (!container) return;
    
    container.innerHTML = '';
    
    suggestions.forEach(suggestion => {
        const element = document.createElement('div');
        element.className = 'suggestion-item';
        element.innerHTML = `
            <i class="fas fa-lightbulb"></i>
            <span>${suggestion}</span>
        `;
        container.appendChild(element);
    });
};

NeuroCodeAgent.prototype.trackKeystroke = function(event) {
    if (!this.codeAnalyzer) {
        this.codeAnalyzer = new CodeAnalyzer();
    }
    
    this.codeAnalyzer.trackKeystroke(event);
};

NeuroCodeAgent.prototype.handleFileUpload = function(files) {
    Array.from(files).forEach(file => {
        if (this.isValidCodeFile(file)) {
            this.processUploadedFile(file);
        }
    });
};

NeuroCodeAgent.prototype.isValidCodeFile = function(file) {
    const validExtensions = ['.js', '.py', '.java', '.cpp', '.c', '.ts', '.jsx', '.vue', '.php', '.rb', '.go', '.rs', '.swift'];
    return validExtensions.some(ext => file.name.toLowerCase().endsWith(ext));
};

NeuroCodeAgent.prototype.processUploadedFile = function(file) {
    const reader = new FileReader();
    
    reader.onload = (e) => {
        const content = e.target.result;
        const analysis = this.analyzeUploadedFile(file, content);
        this.addFileToList(file, analysis);
        this.updateBatchAnalysis();
    };
    
    reader.readAsText(file);
};

NeuroCodeAgent.prototype.analyzeUploadedFile = function(file, content) {
    if (!this.codeAnalyzer) {
        this.codeAnalyzer = new CodeAnalyzer();
    }
    
    const language = this.detectLanguage(file.name);
    return this.codeAnalyzer.analyzeCode(content, language);
};

NeuroCodeAgent.prototype.detectLanguage = function(filename) {
    const ext = filename.split('.').pop().toLowerCase();
    const languageMap = {
        'js': 'javascript',
        'ts': 'typescript',
        'py': 'python',
        'java': 'java',
        'cpp': 'cpp',
        'c': 'c'
    };
    
    return languageMap[ext] || 'text';
};

NeuroCodeAgent.prototype.addFileToList = function(file, analysis) {
    const container = document.getElementById('files-list');
    if (!container) return;
    
    const fileElement = document.createElement('div');
    fileElement.className = 'file-item';
    fileElement.innerHTML = `
        <div class="file-info">
            <div class="file-icon">
                <i class="fas fa-file-code"></i>
            </div>
            <div class="file-details">
                <div class="file-name">${file.name}</div>
                <div class="file-size">${this.formatFileSize(file.size)} • Quality: ${Math.round(analysis.quality)}%</div>
            </div>
        </div>
        <div class="file-actions">
            <button class="btn-small btn-analyze" onclick="neuroCode.analyzeFile('${file.name}')">
                <i class="fas fa-search"></i>
            </button>
            <button class="btn-small btn-remove" onclick="neuroCode.removeFile('${file.name}')">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `;
    
    container.appendChild(fileElement);
    
    // Store file data
    if (!this.uploadedFiles) this.uploadedFiles = [];
    this.uploadedFiles.push({
        file,
        analysis,
        element: fileElement
    });
};

NeuroCodeAgent.prototype.formatFileSize = function(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

NeuroCodeAgent.prototype.updateBatchAnalysis = function() {
    if (!this.uploadedFiles || this.uploadedFiles.length === 0) return;
    
    const totalFiles = this.uploadedFiles.length;
    const totalLines = this.uploadedFiles.reduce((sum, item) => sum + item.analysis.complexity.lines, 0);
    const avgComplexity = this.uploadedFiles.reduce((sum, item) => sum + item.analysis.complexity.cyclomatic, 0) / totalFiles;
    const avgQuality = this.uploadedFiles.reduce((sum, item) => sum + item.analysis.quality, 0) / totalFiles;
    
    // Update batch metrics
    const elements = {
        'total-files': totalFiles,
        'total-lines': totalLines,
        'avg-complexity': avgComplexity.toFixed(1),
        'batch-quality': Math.round(avgQuality) + '%'
    };
    
    Object.entries(elements).forEach(([id, value]) => {
        const element = document.getElementById(id);
        if (element) element.textContent = value;
    });
    
    // Update batch analysis chart
    this.updateFileAnalysisChart();
};

NeuroCodeAgent.prototype.updateFileAnalysisChart = function() {
    const canvas = document.getElementById('fileAnalysisChart');
    if (!canvas || !this.uploadedFiles) return;
    
    const ctx = canvas.getContext('2d');
    const data = {
        labels: this.uploadedFiles.map(item => item.file.name.split('.')[0]),
        datasets: [{
            label: 'Quality Score',
            data: this.uploadedFiles.map(item => item.analysis.quality),
            color: '#667eea'
        }]
    };
    
    this.drawBarChart(ctx, canvas, data);
};

// Global functions for code analysis
function clearEditor() {
    const editor = document.getElementById('code-editor');
    if (editor) {
        editor.value = '';
        neuroCode.onCodeChange('');
    }
}

function analyzeCode() {
    const editor = document.getElementById('code-editor');
    if (editor && editor.value.trim()) {
        console.log('Analyzing code...');
        neuroCode.onCodeChange(editor.value);
        
        // Show analysis complete notification
        setTimeout(() => {
            neuroCode.showAnalysisComplete();
        }, 1500);
    }
}

function connectGitHub() {
    if (!neuroCode.githubIntegration) {
        neuroCode.githubIntegration = new GitHubIntegration();
    }
    
    const authStatus = document.getElementById('github-auth-status');
    const reposSection = document.getElementById('github-repos');
    
    if (authStatus) {
        authStatus.innerHTML = '<span class="status-indicator"></span><span>Connecting...</span>';
    }
    
    neuroCode.githubIntegration.connect().then(() => {
        if (authStatus) {
            authStatus.innerHTML = '<span class="status-indicator connected"></span><span>Connected</span>';
        }
        
        if (reposSection) {
            reposSection.style.display = 'block';
            loadRepositories();
        }
    });
}

function loadRepositories() {
    const reposList = document.getElementById('repos-list');
    if (!reposList || !neuroCode.githubIntegration) return;
    
    reposList.innerHTML = '';
    
    neuroCode.githubIntegration.repositories.forEach(repo => {
        const repoElement = document.createElement('div');
        repoElement.className = 'repo-item';
        repoElement.onclick = () => selectRepository(repo.name);
        repoElement.innerHTML = `
            <div class="repo-info">
                <div class="repo-name">${repo.name}</div>
                <div class="repo-description">${repo.description}</div>
            </div>
            <div class="repo-stats">
                <span><i class="fas fa-star"></i> ${repo.stars}</span>
                <span><i class="fas fa-code-branch"></i> ${repo.commits}</span>
                <span><i class="fas fa-clock"></i> ${repo.lastCommit}</span>
            </div>
        `;
        reposList.appendChild(repoElement);
    });
}

function selectRepository(repoName) {
    const repoAnalysis = document.getElementById('repo-analysis');
    const repoInfo = document.getElementById('selected-repo-info');
    
    if (repoInfo) {
        repoInfo.innerHTML = `<h5>Analyzing: ${repoName}</h5><p>Loading repository data...</p>`;
    }
    
    if (repoAnalysis) {
        repoAnalysis.style.display = 'block';
    }
    
    // Simulate repository analysis
    neuroCode.githubIntegration.analyzeRepository(repoName).then(analysis => {
        if (repoInfo) {
            repoInfo.innerHTML = `<h5>${repoName}</h5><p>Analysis complete - ${analysis.commitPatterns.length} days analyzed</p>`;
        }
        
        // Update charts and indicators with analysis data
        updateRepoCharts(analysis);
    });
}

function updateRepoCharts(analysis) {
    // Update commit patterns chart
    const commitCanvas = document.getElementById('commitPatternsChart');
    if (commitCanvas) {
        const ctx = commitCanvas.getContext('2d');
        const data = {
            labels: analysis.commitPatterns.map(d => d.day),
            data: analysis.commitPatterns.map(d => d.commits)
        };
        neuroCode.drawBarChart(ctx, commitCanvas, data);
    }
    
    // Update quality trends chart
    const qualityCanvas = document.getElementById('qualityTrendsChart');
    if (qualityCanvas) {
        const ctx = qualityCanvas.getContext('2d');
        const data = {
            labels: analysis.qualityTrends.map(d => d.week),
            datasets: [{
                label: 'Quality',
                data: analysis.qualityTrends.map(d => d.quality),
                color: '#28a745'
            }]
        };
        neuroCode.drawLineChart(ctx, qualityCanvas, data);
    }
    
    // Update psychological indicators
    const indicators = analysis.psychologicalIndicators;
    const indicatorElements = {
        stress: indicators.stressPatterns,
        productivity: indicators.productivityCycles,
        collaboration: indicators.collaborationHealth
    };
    
    Object.entries(indicatorElements).forEach(([type, value]) => {
        const fill = document.querySelector(`.indicator-fill.${type}`);
        const valueElement = fill?.parentElement.nextElementSibling;
        
        if (fill && valueElement) {
            fill.style.width = value + '%';
            valueElement.textContent = value + '%';
        }
    });
}

function refreshRepos() {
    console.log('Refreshing repositories...');
    loadRepositories();
}

// Initialize code analysis when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize code analyzer
    if (typeof neuroCode !== 'undefined') {
        neuroCode.codeAnalyzer = new CodeAnalyzer();
        neuroCode.githubIntegration = new GitHubIntegration();
        neuroCode.uploadedFiles = [];
        neuroCode.currentLanguage = 'javascript';
        
        console.log('Code analysis features initialized');
    }
});// Enha
nced System Design Functions
NeuroCodeAgent.prototype.switchDesignTab = function(tabName) {
    // Hide all tabs
    document.querySelectorAll('.design-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected tab
    const targetTab = document.getElementById(tabName + '-tab');
    if (targetTab) {
        targetTab.classList.add('active');
        
        // Initialize Mermaid diagrams if this is the flows tab
        if (tabName === 'flows') {
            this.initializeMermaidDiagrams();
        }
    }
    
    console.log(`Switched to ${tabName} design tab`);
};

NeuroCodeAgent.prototype.initializeMermaidDiagrams = function() {
    // Load Mermaid.js if not already loaded
    if (typeof mermaid === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js';
        script.onload = () => {
            mermaid.initialize({
                theme: 'default',
                flowchart: { 
                    useMaxWidth: true,
                    htmlLabels: true,
                    curve: 'basis'
                },
                sequence: { 
                    useMaxWidth: true 
                },
                gantt: { 
                    useMaxWidth: true 
                }
            });
            
            // Re-render all mermaid diagrams
            mermaid.init();
        };
        document.head.appendChild(script);
    } else {
        // Re-render all mermaid diagrams
        mermaid.init();
    }
};

NeuroCodeAgent.prototype.switchFlowDiagram = function(flowType) {
    // Hide all flow diagrams
    document.querySelectorAll('.flow-diagram').forEach(diagram => {
        diagram.classList.remove('active');
    });
    
    // Update flow buttons
    document.querySelectorAll('.flow-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected flow diagram
    const targetFlow = document.getElementById(flowType + '-flow');
    const targetBtn = document.querySelector(`[data-flow="${flowType}"]`);
    
    if (targetFlow && targetBtn) {
        targetFlow.classList.add('active');
        targetBtn.classList.add('active');
    }
    
    console.log(`Switched to ${flowType} flow diagram`);
};

// Global functions for interactive system design
function switchFlowDiagram(flowType) {
    if (neuroCode) {
        neuroCode.switchFlowDiagram(flowType);
    }
}

// Enhanced event listeners for new interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Flow diagram selector buttons
    document.querySelectorAll('.flow-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const flowType = e.target.getAttribute('data-flow');
            if (flowType && neuroCode) {
                neuroCode.switchFlowDiagram(flowType);
            }
        });
    });
    
    // Enhanced design tab switching
    document.querySelectorAll('.design-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.design-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            const tabName = e.target.getAttribute('data-view');
            if (tabName && neuroCode) {
                neuroCode.switchDesignTab(tabName);
            }
        });
    });
    
    // Initialize Mermaid on page load
    if (typeof neuroCode !== 'undefined') {
        setTimeout(() => {
            neuroCode.initializeMermaidDiagrams();
        }, 1000);
    }
});