import React from 'react';
import styled from 'styled-components';

const OverviewContainer = styled.div`
  max-width: 100%;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: white;
`;

const Container = styled.div`
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  margin-bottom: 30px;
  color: #333;
`;

const Title = styled.h1`
  color: #2c3e50;
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 30px;
  background: linear-gradient(45deg, #3498db, #9b59b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SystemOverviewGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin: 30px 0;
`;

const OverviewCard = styled.div`
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 25px;
  border-radius: 12px;
  border-left: 5px solid #3498db;

  h3 {
    color: #2c3e50;
    margin-top: 0;
    font-size: 1.4em;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 30px 0;
`;

const StatCard = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 25px;
  border-radius: 12px;
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2.5em;
  font-weight: bold;
  margin-bottom: 10px;
`;

const StatLabel = styled.div`
  font-size: 1.1em;
  opacity: 0.9;
`;

const SectionTitle = styled.h2`
  color: #34495e;
  border-left: 5px solid #3498db;
  padding-left: 20px;
  margin-top: 40px;
  font-size: 1.8em;
`;

const DiagramContainer = styled.div`
  text-align: center;
  margin: 40px 0;
  padding: 30px;
  background: #f8f9fa;
  border-radius: 15px;
  border: 2px solid #dee2e6;
`;

const TechStackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 30px 0;
`;

const TechCard = styled.div`
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #e9ecef;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }

  h4 {
    color: #495057;
    margin-top: 0;
    font-size: 1.2em;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    padding: 5px 0;
    border-bottom: 1px solid #e9ecef;
    
    &:last-child {
      border-bottom: none;
    }
    
    &::before {
      content: '✓';
      color: #28a745;
      font-weight: bold;
      margin-right: 8px;
    }
  }
`;

const FeatureList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 30px 0;
`;

const FeatureItem = styled.div`
  background: #e8f4f8;
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #17a2b8;

  h4 {
    color: #0c5460;
    margin-top: 0;
  }
`;

const SystemOverview = () => {
  return (
    <OverviewContainer>
      <Container>
        <Title>🧠 NeuroCode: AI-Powered Developer Wellness Platform</Title>
        
        <SystemOverviewGrid>
          <OverviewCard>
            <h3>🎯 What is NeuroCode?</h3>
            <p>NeuroCode is the world's first AI-powered platform that analyzes developer behavior patterns to predict and prevent burnout, optimize productivity, and enhance mental well-being through real-time code analysis and psychological insights.</p>
          </OverviewCard>
          
          <OverviewCard>
            <h3>🚀 Why It Matters?</h3>
            <p>With 83% of developers experiencing burnout and $75B annual productivity loss, NeuroCode addresses a critical industry problem by providing early warning systems and personalized interventions to maintain developer wellness.</p>
          </OverviewCard>
        </SystemOverviewGrid>
        
        <StatsGrid>
          <StatCard>
            <StatNumber>92%</StatNumber>
            <StatLabel>Burnout Detection Accuracy</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>3 weeks</StatNumber>
            <StatLabel>Early Warning Lead Time</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>35%</StatNumber>
            <StatLabel>Productivity Increase</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>&lt;50ms</StatNumber>
            <StatLabel>Real-time Response</StatLabel>
          </StatCard>
        </StatsGrid>

        <SectionTitle>🏗️ System Architecture Overview</SectionTitle>
        
        <DiagramContainer>
          <svg width="100%" height="700" viewBox="0 0 1200 700">
            <defs>
              <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f8f9fa" stopOpacity="1" />
                <stop offset="100%" stopColor="#e9ecef" stopOpacity="1" />
              </linearGradient>
              <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="3" dy="3" stdDeviation="3" floodOpacity="0.3"/>
              </filter>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="#34495e"/>
              </marker>
            </defs>
            
            <rect width="1200" height="700" fill="url(#bgGrad)"/>
            
            {/* Title */}
            <text x="600" y="40" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#2c3e50">
              NeuroCode System Architecture
            </text>
            
            {/* Developer Layer */}
            <rect x="50" y="80" width="1100" height="100" fill="#3498db" rx="15" filter="url(#shadow)"/>
            <text x="600" y="110" textAnchor="middle" fontSize="18" fontWeight="bold" fill="white">
              👨‍💻 Developer Interface Layer
            </text>
            
            {/* IDE Plugins */}
            <rect x="100" y="130" width="150" height="40" fill="#2980b9" rx="8"/>
            <text x="175" y="155" textAnchor="middle" fill="white" fontSize="12">VS Code Plugin</text>
            
            <rect x="270" y="130" width="150" height="40" fill="#2980b9" rx="8"/>
            <text x="345" y="155" textAnchor="middle" fill="white" fontSize="12">IntelliJ Plugin</text>
            
            <rect x="440" y="130" width="150" height="40" fill="#2980b9" rx="8"/>
            <text x="515" y="155" textAnchor="middle" fill="white" fontSize="12">Git Hooks</text>
            
            <rect x="610" y="130" width="150" height="40" fill="#2980b9" rx="8"/>
            <text x="685" y="155" textAnchor="middle" fill="white" fontSize="12">CI/CD Pipeline</text>
            
            <rect x="780" y="130" width="150" height="40" fill="#2980b9" rx="8"/>
            <text x="855" y="155" textAnchor="middle" fill="white" fontSize="12">Browser Extension</text>
            
            <rect x="950" y="130" width="150" height="40" fill="#2980b9" rx="8"/>
            <text x="1025" y="155" textAnchor="middle" fill="white" fontSize="12">Slack/Jira</text>
            
            {/* API Gateway */}
            <rect x="450" y="220" width="300" height="60" fill="#e74c3c" rx="12" filter="url(#shadow)"/>
            <text x="600" y="245" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white">
              🚪 API Gateway
            </text>
            <text x="600" y="265" textAnchor="middle" fill="white" fontSize="12">Kong + Rate Limiting + Auth</text>
            
            {/* AI Processing Layer */}
            <rect x="50" y="320" width="1100" height="180" fill="#9b59b6" rx="15" filter="url(#shadow)"/>
            <text x="600" y="350" textAnchor="middle" fontSize="18" fontWeight="bold" fill="white">
              🤖 AI Processing Layer
            </text>
            
            {/* AI Services */}
            <rect x="100" y="370" width="200" height="110" fill="#8e44ad" rx="10"/>
            <text x="200" y="395" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Code Analysis</text>
            <text x="200" y="415" textAnchor="middle" fill="white" fontSize="11">• Complexity Metrics</text>
            <text x="200" y="430" textAnchor="middle" fill="white" fontSize="11">• Quality Assessment</text>
            <text x="200" y="445" textAnchor="middle" fill="white" fontSize="11">• Pattern Detection</text>
            <text x="200" y="460" textAnchor="middle" fill="white" fontSize="11">SonarQube + Custom</text>
            
            <rect x="320" y="370" width="200" height="110" fill="#8e44ad" rx="10"/>
            <text x="420" y="395" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Cerebras CS-2</text>
            <text x="420" y="415" textAnchor="middle" fill="white" fontSize="11">• Real-time Analysis</text>
            <text x="420" y="430" textAnchor="middle" fill="white" fontSize="11">• Pattern Recognition</text>
            <text x="420" y="445" textAnchor="middle" fill="white" fontSize="11">• Anomaly Detection</text>
            <text x="420" y="460" textAnchor="middle" fill="white" fontSize="11">850K AI Cores</text>
            
            <rect x="540" y="370" width="200" height="110" fill="#8e44ad" rx="10"/>
            <text x="640" y="395" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Llama 3.1 405B</text>
            <text x="640" y="415" textAnchor="middle" fill="white" fontSize="11">• NLP Processing</text>
            <text x="640" y="430" textAnchor="middle" fill="white" fontSize="11">• Sentiment Analysis</text>
            <text x="640" y="445" textAnchor="middle" fill="white" fontSize="11">• Intent Classification</text>
            <text x="640" y="460" textAnchor="middle" fill="white" fontSize="11">128K Context</text>
            
            <rect x="760" y="370" width="200" height="110" fill="#8e44ad" rx="10"/>
            <text x="860" y="395" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">ML Pipeline</text>
            <text x="860" y="415" textAnchor="middle" fill="white" fontSize="11">• Stress Prediction</text>
            <text x="860" y="430" textAnchor="middle" fill="white" fontSize="11">• Burnout Detection</text>
            <text x="860" y="445" textAnchor="middle" fill="white" fontSize="11">• Flow State Recognition</text>
            <text x="860" y="460" textAnchor="middle" fill="white" fontSize="11">PyTorch + Scikit</text>
            
            {/* Data Layer */}
            <rect x="50" y="540" width="1100" height="120" fill="#27ae60" rx="15" filter="url(#shadow)"/>
            <text x="600" y="570" textAnchor="middle" fontSize="18" fontWeight="bold" fill="white">
              💾 Data Storage Layer
            </text>
            
            {/* Databases */}
            <rect x="100" y="590" width="180" height="50" fill="#229954" rx="8"/>
            <text x="190" y="610" textAnchor="middle" fill="white" fontSize="12">PostgreSQL</text>
            <text x="190" y="625" textAnchor="middle" fill="white" fontSize="10">Main Database</text>
            
            <rect x="300" y="590" width="180" height="50" fill="#229954" rx="8"/>
            <text x="390" y="610" textAnchor="middle" fill="white" fontSize="12">TimescaleDB</text>
            <text x="390" y="625" textAnchor="middle" fill="white" fontSize="10">Time Series</text>
            
            <rect x="500" y="590" width="180" height="50" fill="#229954" rx="8"/>
            <text x="590" y="610" textAnchor="middle" fill="white" fontSize="12">Redis Cache</text>
            <text x="590" y="625" textAnchor="middle" fill="white" fontSize="10">In-Memory</text>
            
            <rect x="700" y="590" width="180" height="50" fill="#229954" rx="8"/>
            <text x="790" y="610" textAnchor="middle" fill="white" fontSize="12">Pinecone</text>
            <text x="790" y="625" textAnchor="middle" fill="white" fontSize="10">Vector DB</text>
            
            <rect x="900" y="590" width="180" height="50" fill="#229954" rx="8"/>
            <text x="990" y="610" textAnchor="middle" fill="white" fontSize="12">S3/MinIO</text>
            <text x="990" y="625" textAnchor="middle" fill="white" fontSize="10">Object Storage</text>
            
            {/* Arrows */}
            <path d="M 600 180 L 600 220" stroke="#34495e" strokeWidth="3" markerEnd="url(#arrowhead)"/>
            <path d="M 600 280 L 600 320" stroke="#34495e" strokeWidth="3" markerEnd="url(#arrowhead)"/>
            <path d="M 600 500 L 600 540" stroke="#34495e" strokeWidth="3" markerEnd="url(#arrowhead)"/>
          </svg>
        </DiagramContainer>

        <SectionTitle>🔧 Core Technology Stack</SectionTitle>
        
        <TechStackGrid>
          <TechCard>
            <h4>🖥️ Frontend</h4>
            <ul>
              <li>React.js + TypeScript</li>
              <li>Material-UI Components</li>
              <li>D3.js for Visualizations</li>
              <li>WebSocket for Real-time</li>
            </ul>
          </TechCard>
          
          <TechCard>
            <h4>⚙️ Backend Services</h4>
            <ul>
              <li>Python FastAPI</li>
              <li>Node.js Express</li>
              <li>Go Gin Framework</li>
              <li>Kong API Gateway</li>
            </ul>
          </TechCard>
          
          <TechCard>
            <h4>🤖 AI/ML Stack</h4>
            <ul>
              <li>Cerebras CS-2 API</li>
              <li>Meta Llama 3.1</li>
              <li>PyTorch + Scikit-learn</li>
              <li>Hugging Face Transformers</li>
            </ul>
          </TechCard>
          
          <TechCard>
            <h4>💾 Data Storage</h4>
            <ul>
              <li>PostgreSQL 15+</li>
              <li>TimescaleDB</li>
              <li>Redis Cluster</li>
              <li>Pinecone Vector DB</li>
            </ul>
          </TechCard>
          
          <TechCard>
            <h4>🚀 Infrastructure</h4>
            <ul>
              <li>Docker + Kubernetes</li>
              <li>Istio Service Mesh</li>
              <li>Apache Kafka</li>
              <li>Prometheus + Grafana</li>
            </ul>
          </TechCard>
          
          <TechCard>
            <h4>🔌 IDE Integration</h4>
            <ul>
              <li>VS Code Extension API</li>
              <li>IntelliJ Platform SDK</li>
              <li>Git Hooks (Python)</li>
              <li>Browser Extensions</li>
            </ul>
          </TechCard>
        </TechStackGrid>

        <SectionTitle>✨ Key Features</SectionTitle>
        
        <FeatureList>
          <FeatureItem>
            <h4>🔍 Real-time Code Analysis</h4>
            <p>Continuous monitoring of code complexity, quality metrics, and development patterns with sub-second latency.</p>
          </FeatureItem>
          
          <FeatureItem>
            <h4>🧠 Psychological Insights</h4>
            <p>AI-powered analysis of developer mental state including stress levels, burnout risk, and flow state detection.</p>
          </FeatureItem>
          
          <FeatureItem>
            <h4>⚡ Predictive Interventions</h4>
            <p>Early warning system with personalized recommendations to prevent burnout and optimize productivity.</p>
          </FeatureItem>
          
          <FeatureItem>
            <h4>📊 Team Analytics</h4>
            <p>Comprehensive dashboards for team leads and managers to monitor team wellness and productivity trends.</p>
          </FeatureItem>
          
          <FeatureItem>
            <h4>🔒 Privacy-First Design</h4>
            <p>Complete data anonymization, GDPR compliance, and zero-trust security architecture.</p>
          </FeatureItem>
          
          <FeatureItem>
            <h4>🔧 IDE Integration</h4>
            <p>Seamless integration with popular IDEs including VS Code, IntelliJ, and web-based development environments.</p>
          </FeatureItem>
        </FeatureList>
      </Container>
    </OverviewContainer>
  );
};

export default SystemOverview;