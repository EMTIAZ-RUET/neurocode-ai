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
        this.initStateMeter();
        this.initActivityChart();
        this.initSentimentChart();
        this.initProfileRadar();
        this.initProductivityChart();
    }

    initStateMeter() {
        const canvas = document.getElementById('stateMeter');
        if (!canvas) return;

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
        const overallScore = (100 - this.currentState.stress + this.currentState.flow) / 2;
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
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        
        // Generate sample data for the last 24 hours
        const hours = [];
        const stressData = [];
        const flowData = [];
        const productivityData = [];

        for (let i = 23; i >= 0; i--) {
            const hour = new Date();
            hour.setHours(hour.getHours() - i);
            hours.push(hour.getHours() + ':00');
            
            // Simulate realistic patterns
            const baseStress = 30 + Math.sin((hour.getHours() - 9) * Math.PI / 8) * 20;
            const baseFlow = 60 + Math.cos((hour.getHours() - 10) * Math.PI / 6) * 25;
            const baseProductivity = 50 + Math.sin((hour.getHours() - 9) * Math.PI / 7) * 30;
            
            stressData.push(Math.max(0, Math.min(100, baseStress + (Math.random() - 0.5) * 20)));
            flowData.push(Math.max(0, Math.min(100, baseFlow + (Math.random() - 0.5) * 15)));
            productivityData.push(Math.max(0, Math.min(100, baseProductivity + (Math.random() - 0.5) * 25)));
        }

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
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const data = [
            { label: 'Positive', value: 65, color: '#28a745' },
            { label: 'Neutral', value: 25, color: '#ffc107' },
            { label: 'Negative', value: 10, color: '#dc3545' }
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