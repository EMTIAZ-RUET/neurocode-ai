import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TestingContainer = styled.section`
  padding: ${props => props.theme?.spacing?.['2xl'] || '2rem'} 0;
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
`;

const TestingContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme?.spacing?.md || '1rem'};
  color: ${props => props.theme?.colors?.text || '#333'};
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme?.spacing?.xl || '2rem'};
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${props => props.theme?.spacing?.md || '1rem'};
  }
`;

const Title = styled.h2`
  font-size: ${props => props.theme?.fontSizes?.['3xl'] || '2.5rem'};
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: ${props => props.theme?.spacing?.md || '1rem'};
  color: ${props => props.theme?.colors?.primary || '#3498db'};
  
  i {
    color: ${props => props.theme?.colors?.accent || '#9b59b6'};
  }
`;

const TestingControls = styled.div`
  display: flex;
  gap: ${props => props.theme?.spacing?.md || '1rem'};
  margin-bottom: ${props => props.theme?.spacing?.xl || '2rem'};
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const ViewButton = styled.button`
  background: ${props => props.active ? 
    (props.theme?.colors?.primary || '#3498db') : 
    'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.active ? 'white' : (props.theme?.colors?.text || '#333')};
  border: 1px solid ${props => props.active ? 
    'transparent' : 
    'rgba(255, 255, 255, 0.2)'};
  padding: ${props => props.theme?.spacing?.sm || '0.5rem'} ${props => props.theme?.spacing?.md || '1rem'};
  border-radius: ${props => props.theme?.borderRadius?.md || '8px'};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: ${props => props.theme?.colors?.primary || '#3498db'};
    color: white;
    transform: translateY(-1px);
  }
`;

const SVGContainer = styled.div`
  width: 100%;
  height: 600px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${props => props.theme?.borderRadius?.md || '8px'};
  padding: ${props => props.theme?.spacing?.md || '1rem'};
  margin: ${props => props.theme?.spacing?.lg || '1.5rem'} 0;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${props => props.theme?.spacing?.md || '1rem'};
  margin: ${props => props.theme?.spacing?.lg || '1.5rem'} 0;
`;

const Metric = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.theme?.spacing?.md || '1rem'};
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${props => props.theme?.borderRadius?.md || '8px'};
  
  .metric-value {
    font-size: ${props => props.theme?.fontSizes?.xl || '1.5rem'};
    font-weight: 600;
    color: ${props => props.theme?.colors?.primary || '#3498db'};
    margin-bottom: ${props => props.theme?.spacing?.xs || '0.25rem'};
  }
  
  .metric-label {
    font-size: ${props => props.theme?.fontSizes?.sm || '0.875rem'};
    color: ${props => props.theme?.colors?.textSecondary || '#666'};
    text-align: center;
  }
`;

const SectionTitle = styled.h2`
  color: #34495e;
  border-left: 5px solid #3498db;
  padding-left: 20px;
  margin-top: 40px;
  font-size: 1.8em;
`;

const TestingCard = styled.div`
  background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);
  border: 2px solid #4caf50;
  border-radius: 12px;
  padding: 25px;
  margin: 20px 0;
`;

const CardTitle = styled.h3`
  color: #2e7d32;
  margin-bottom: 15px;
`;

const OverviewSection = styled.div`
  background: #fff3e0;
  border: 2px solid #ff9800;
  padding: 25px;
  border-radius: 15px;
  margin: 30px 0;
  
  h3 {
    margin-top: 0;
    color: #e65100;
  }
  
  p {
    color: #ef6c00;
  }
`;

const TestingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
`;

const MetricsCard = styled.div`
  background: #e3f2fd;
  border: 2px solid #2196f3;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
`;

const MetricValue = styled.div`
  font-size: 2em;
  font-weight: bold;
  color: #1976d2;
  margin-bottom: 10px;
`;

const MetricLabel = styled.div`
  color: #424242;
  font-size: 0.9em;
`;

const TestingQASD = () => {
  const [activeView, setActiveView] = useState('pipeline');

  const views = [
    { key: 'pipeline', label: 'Testing Pipeline', icon: 'fas fa-project-diagram' },
    { key: 'automation', label: 'Automation Flow', icon: 'fas fa-robot' },
    { key: 'quality', label: 'Quality Metrics', icon: 'fas fa-chart-bar' },
    { key: 'monitoring', label: 'QA Monitoring', icon: 'fas fa-eye' }
  ];

  const renderTestingPipelineSVG = () => (
    <svg viewBox="0 0 1400 600" className="testing-pipeline">
      <defs>
        <linearGradient id="testingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2ecc71" />
          <stop offset="33%" stopColor="#f39c12" />
          <stop offset="66%" stopColor="#e74c3c" />
          <stop offset="100%" stopColor="#9b59b6" />
        </linearGradient>
        <marker id="testArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#3498db" />
        </marker>
        <filter id="testGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <text x="700" y="40" textAnchor="middle" fill="#2ecc71" fontSize="24" fontWeight="700">Testing Pipeline Flow</text>
      
      {/* Main Testing Flow */}
      <line x1="80" y1="300" x2="1320" y2="300" stroke="url(#testingGradient)" strokeWidth="6" markerEnd="url(#testArrow)" filter="url(#testGlow)" />
      
      {/* Stage 1: Unit Testing */}
      <g transform="translate(120, 180)">
        <rect width="140" height="90" rx="15" fill="rgba(46, 204, 113, 0.1)" stroke="#2ecc71" strokeWidth="3" />
        <text x="70" y="25" textAnchor="middle" fill="#2ecc71" fontSize="14" fontWeight="600">Unit Testing</text>
        <text x="70" y="45" textAnchor="middle" fill="#2ecc71" fontSize="11">Jest/PyTest</text>
        <text x="70" y="60" textAnchor="middle" fill="#2ecc71" fontSize="11">95%+ Coverage</text>
        <text x="70" y="75" textAnchor="middle" fill="#2ecc71" fontSize="11">Mocking</text>
        <circle cx="70" cy="110" r="8" fill="#2ecc71" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>
      
      {/* Stage 2: Integration Testing */}
      <g transform="translate(320, 180)">
        <rect width="140" height="90" rx="15" fill="rgba(243, 156, 18, 0.1)" stroke="#f39c12" strokeWidth="3" />
        <text x="70" y="25" textAnchor="middle" fill="#f39c12" fontSize="14" fontWeight="600">Integration</text>
        <text x="70" y="45" textAnchor="middle" fill="#f39c12" fontSize="11">API Contracts</text>
        <text x="70" y="60" textAnchor="middle" fill="#f39c12" fontSize="11">Database</text>
        <text x="70" y="75" textAnchor="middle" fill="#f39c12" fontSize="11">Services</text>
        <circle cx="70" cy="110" r="8" fill="#f39c12" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" begin="0.5s" repeatCount="indefinite" />
        </circle>
      </g>
      
      {/* Stage 3: E2E Testing */}
      <g transform="translate(520, 180)">
        <rect width="140" height="90" rx="15" fill="rgba(231, 76, 60, 0.1)" stroke="#e74c3c" strokeWidth="3" />
        <text x="70" y="25" textAnchor="middle" fill="#e74c3c" fontSize="14" fontWeight="600">End-to-End</text>
        <text x="70" y="45" textAnchor="middle" fill="#e74c3c" fontSize="11">Playwright</text>
        <text x="70" y="60" textAnchor="middle" fill="#e74c3c" fontSize="11">User Journeys</text>
        <text x="70" y="75" textAnchor="middle" fill="#e74c3c" fontSize="11">Cross-Browser</text>
        <circle cx="70" cy="110" r="8" fill="#e74c3c" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" begin="1s" repeatCount="indefinite" />
        </circle>
      </g>
      
      {/* Stage 4: Performance Testing */}
      <g transform="translate(720, 180)">
        <rect width="140" height="90" rx="15" fill="rgba(155, 89, 182, 0.1)" stroke="#9b59b6" strokeWidth="3" />
        <text x="70" y="25" textAnchor="middle" fill="#9b59b6" fontSize="14" fontWeight="600">Performance</text>
        <text x="70" y="45" textAnchor="middle" fill="#9b59b6" fontSize="11">Load Testing</text>
        <text x="70" y="60" textAnchor="middle" fill="#9b59b6" fontSize="11">Stress Testing</text>
        <text x="70" y="75" textAnchor="middle" fill="#9b59b6" fontSize="11">Monitoring</text>
        <circle cx="70" cy="110" r="8" fill="#9b59b6" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" begin="1.5s" repeatCount="indefinite" />
        </circle>
      </g>
      
      {/* Stage 5: Security Testing */}
      <g transform="translate(920, 180)">
        <rect width="140" height="90" rx="15" fill="rgba(52, 152, 219, 0.1)" stroke="#3498db" strokeWidth="3" />
        <text x="70" y="25" textAnchor="middle" fill="#3498db" fontSize="14" fontWeight="600">Security</text>
        <text x="70" y="45" textAnchor="middle" fill="#3498db" fontSize="11">Vulnerability</text>
        <text x="70" y="60" textAnchor="middle" fill="#3498db" fontSize="11">Penetration</text>
        <text x="70" y="75" textAnchor="middle" fill="#3498db" fontSize="11">OWASP</text>
        <circle cx="70" cy="110" r="8" fill="#3498db" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" begin="2s" repeatCount="indefinite" />
        </circle>
      </g>
      
      {/* Quality Gates */}
      <g transform="translate(1120, 120)">
        <rect width="100" height="70" rx="12" fill="rgba(26, 188, 156, 0.1)" stroke="#1abc9c" strokeWidth="2" />
        <text x="50" y="25" textAnchor="middle" fill="#1abc9c" fontSize="12" fontWeight="600">Quality Gate</text>
        <text x="50" y="40" textAnchor="middle" fill="#1abc9c" fontSize="10">Approval</text>
        <text x="50" y="55" textAnchor="middle" fill="#1abc9c" fontSize="10">Release Ready</text>
      </g>
      
      {/* Connection Arrows */}
      <path d="M260 225 Q290 205 320 225" stroke="#2ecc71" strokeWidth="3" fill="none" markerEnd="url(#testArrow)" />
      <path d="M460 225 Q490 205 520 225" stroke="#f39c12" strokeWidth="3" fill="none" markerEnd="url(#testArrow)" />
      <path d="M660 225 Q690 205 720 225" stroke="#e74c3c" strokeWidth="3" fill="none" markerEnd="url(#testArrow)" />
      <path d="M860 225 Q890 205 920 225" stroke="#9b59b6" strokeWidth="3" fill="none" markerEnd="url(#testArrow)" />
      <path d="M1060 225 Q1090 175 1120 155" stroke="#3498db" strokeWidth="3" fill="none" markerEnd="url(#testArrow)" />
      
      {/* Status Panel */}
      <g transform="translate(120, 420)">
        <rect width="1160" height="120" rx="15" fill="rgba(52, 73, 94, 0.05)" stroke="rgba(52, 73, 94, 0.2)" strokeWidth="1" />
        <text x="580" y="30" textAnchor="middle" fill="#34495e" fontSize="18" fontWeight="600">Testing Status &amp; Quality Metrics</text>
        
        <text x="200" y="65" textAnchor="middle" fill="#27ae60" fontSize="14" fontWeight="600">✓ Unit: 95.2% Coverage</text>
        <text x="400" y="65" textAnchor="middle" fill="#f39c12" fontSize="14" fontWeight="600">🔗 Integration: Pass</text>
        <text x="600" y="65" textAnchor="middle" fill="#e74c3c" fontSize="14" fontWeight="600">🌐 E2E: 245 Tests</text>
        <text x="800" y="65" textAnchor="middle" fill="#9b59b6" fontSize="14" fontWeight="600">⚡ Performance: OK</text>
        <text x="1000" y="65" textAnchor="middle" fill="#3498db" fontSize="14" fontWeight="600">🔒 Security: Secure</text>
        
        <text x="300" y="90" textAnchor="middle" fill="#7f8c8d" fontSize="12">Last Run: 15 minutes ago</text>
        <text x="580" y="90" textAnchor="middle" fill="#7f8c8d" fontSize="12">Total Test Suite Duration: 8 minutes</text>
        <text x="900" y="90" textAnchor="middle" fill="#7f8c8d" fontSize="12">Success Rate: 99.1% (Last 30 Days)</text>
        
        <text x="400" y="110" textAnchor="middle" fill="#27ae60" fontSize="12" fontWeight="600">🎯 Quality Score: 92/100</text>
        <text x="800" y="110" textAnchor="middle" fill="#e67e22" fontSize="12" fontWeight="600">⚠️ 3 Flaky Tests Detected</text>
      </g>
    </svg>
  );

  const renderAutomationFlowSVG = () => (
    <svg viewBox="0 0 1400 600" className="automation-flow">
      <defs>
        <linearGradient id="automationGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e67e22" />
          <stop offset="50%" stopColor="#3498db" />
          <stop offset="100%" stopColor="#2ecc71" />
        </linearGradient>
        <marker id="autoArrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#e67e22" />
        </marker>
      </defs>
      
      <text x="700" y="40" textAnchor="middle" fill="#e67e22" fontSize="24" fontWeight="700">Test Automation Workflow</text>
      
      {/* AI-Powered Test Generation */}
      <rect x="100" y="100" width="300" height="120" rx="15" fill="rgba(230, 126, 34, 0.1)" stroke="#e67e22" strokeWidth="3" />
      <text x="250" y="130" textAnchor="middle" fill="#e67e22" fontSize="16" fontWeight="600">AI Test Generation</text>
      <circle cx="180" cy="170" r="20" fill="rgba(230, 126, 34, 0.3)">
        <animate attributeName="r" values="15;25;15" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="180" y="175" textAnchor="middle" fill="#e67e22" fontSize="10" fontWeight="600">AI</text>
      <text x="280" y="160" textAnchor="middle" fill="#e67e22" fontSize="12">• Code Analysis</text>
      <text x="280" y="175" textAnchor="middle" fill="#e67e22" fontSize="12">• Pattern Recognition</text>
      <text x="280" y="190" textAnchor="middle" fill="#e67e22" fontSize="12">• Smart Test Creation</text>
      <text x="280" y="205" textAnchor="middle" fill="#e67e22" fontSize="12">• Coverage Optimization</text>
      
      {/* Continuous Test Execution */}
      <rect x="500" y="100" width="300" height="120" rx="15" fill="rgba(52, 152, 219, 0.1)" stroke="#3498db" strokeWidth="3" />
      <text x="650" y="130" textAnchor="middle" fill="#3498db" fontSize="16" fontWeight="600">Continuous Execution</text>
      <rect x="520" y="150" width="60" height="20" rx="5" fill="rgba(52, 152, 219, 0.3)" />
      <text x="550" y="165" textAnchor="middle" fill="#3498db" fontSize="10">Docker 1</text>
      <rect x="590" y="150" width="60" height="20" rx="5" fill="rgba(52, 152, 219, 0.3)" />
      <text x="620" y="165" textAnchor="middle" fill="#3498db" fontSize="10">Docker 2</text>
      <rect x="660" y="150" width="60" height="20" rx="5" fill="rgba(52, 152, 219, 0.3)" />
      <text x="690" y="165" textAnchor="middle" fill="#3498db" fontSize="10">Docker 3</text>
      <rect x="730" y="150" width="60" height="20" rx="5" fill="rgba(52, 152, 219, 0.3)" />
      <text x="760" y="165" textAnchor="middle" fill="#3498db" fontSize="10">Docker 4</text>
      <text x="650" y="185" textAnchor="middle" fill="#3498db" fontSize="12">Parallel Test Containers</text>
      <text x="650" y="200" textAnchor="middle" fill="#3498db" fontSize="12">Real-time Monitoring</text>
      
      {/* Smart Test Orchestration */}
      <rect x="900" y="100" width="300" height="120" rx="15" fill="rgba(46, 204, 113, 0.1)" stroke="#2ecc71" strokeWidth="3" />
      <text x="1050" y="130" textAnchor="middle" fill="#2ecc71" fontSize="16" fontWeight="600">Smart Orchestration</text>
      <circle cx="980" cy="170" r="15" fill="rgba(46, 204, 113, 0.4)">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <text x="980" y="175" textAnchor="middle" fill="#2ecc71" fontSize="9" fontWeight="600">ML</text>
      <text x="1100" y="160" textAnchor="middle" fill="#2ecc71" fontSize="12">• Test Prioritization</text>
      <text x="1100" y="175" textAnchor="middle" fill="#2ecc71" fontSize="12">• Failure Prediction</text>
      <text x="1100" y="190" textAnchor="middle" fill="#2ecc71" fontSize="12">• Resource Allocation</text>
      <text x="1100" y="205" textAnchor="middle" fill="#2ecc71" fontSize="12">• Risk Assessment</text>
      
      {/* Results & Analytics */}
      <rect x="200" y="300" width="800" height="150" rx="15" fill="rgba(155, 89, 182, 0.1)" stroke="#9b59b6" strokeWidth="3" />
      <text x="600" y="330" textAnchor="middle" fill="#9b59b6" fontSize="18" fontWeight="600">Intelligent Test Analytics & Reporting</text>
      
      <rect x="230" y="350" width="180" height="80" rx="10" fill="rgba(155, 89, 182, 0.2)" />
      <text x="320" y="375" textAnchor="middle" fill="#9b59b6" fontSize="14" fontWeight="600">Real-time Dashboard</text>
      <text x="320" y="395" textAnchor="middle" fill="#9b59b6" fontSize="11">• Live Test Status</text>
      <text x="320" y="410" textAnchor="middle" fill="#9b59b6" fontSize="11">• Performance Metrics</text>
      
      <rect x="430" y="350" width="180" height="80" rx="10" fill="rgba(155, 89, 182, 0.2)" />
      <text x="520" y="375" textAnchor="middle" fill="#9b59b6" fontSize="14" fontWeight="600">Failure Analysis</text>
      <text x="520" y="395" textAnchor="middle" fill="#9b59b6" fontSize="11">• Root Cause Analysis</text>
      <text x="520" y="410" textAnchor="middle" fill="#9b59b6" fontSize="11">• Auto Bug Reports</text>
      
      <rect x="630" y="350" width="180" height="80" rx="10" fill="rgba(155, 89, 182, 0.2)" />
      <text x="720" y="375" textAnchor="middle" fill="#9b59b6" fontSize="14" fontWeight="600">Quality Insights</text>
      <text x="720" y="395" textAnchor="middle" fill="#9b59b6" fontSize="11">• Trend Analysis</text>
      <text x="720" y="410" textAnchor="middle" fill="#9b59b6" fontSize="11">• Quality Predictions</text>
      
      <rect x="830" y="350" width="140" height="80" rx="10" fill="rgba(155, 89, 182, 0.2)" />
      <text x="900" y="375" textAnchor="middle" fill="#9b59b6" fontSize="14" fontWeight="600">Integration</text>
      <text x="900" y="395" textAnchor="middle" fill="#9b59b6" fontSize="11">• Jira/GitHub</text>
      <text x="900" y="410" textAnchor="middle" fill="#9b59b6" fontSize="11">• Slack Alerts</text>
      
      {/* Flow Arrows */}
      <line x1="400" y1="160" x2="500" y2="160" stroke="url(#automationGradient)" strokeWidth="4" markerEnd="url(#autoArrow)" />
      <line x1="800" y1="160" x2="900" y2="160" stroke="url(#automationGradient)" strokeWidth="4" markerEnd="url(#autoArrow)" />
      <line x1="650" y1="220" x2="600" y2="300" stroke="#9b59b6" strokeWidth="3" markerEnd="url(#autoArrow)" />
      
      {/* Performance Stats */}
      <rect x="100" y="500" width="1200" height="80" rx="10" fill="rgba(52, 73, 94, 0.05)" stroke="rgba(52, 73, 94, 0.2)" strokeWidth="1" />
      <text x="700" y="525" textAnchor="middle" fill="#34495e" fontSize="16" fontWeight="600">Test Automation Performance</text>
      
      <text x="200" y="555" textAnchor="middle" fill="#e67e22" fontSize="14">🤖 AI Generation: 2.5K tests/day</text>
      <text x="450" y="555" textAnchor="middle" fill="#3498db" fontSize="14">⚡ Execution: 15min suite</text>
      <text x="700" y="555" textAnchor="middle" fill="#2ecc71" fontSize="14">🎯 Success Rate: 99.2%</text>
      <text x="950" y="555" textAnchor="middle" fill="#9b59b6" fontSize="14">📊 Coverage: 96.8%</text>
      <text x="1150" y="555" textAnchor="middle" fill="#34495e" fontSize="14">💰 Cost Reduced: 75%</text>
    </svg>
  );
  
  const renderQualityMetricsSVG = () => (
    <svg viewBox="0 0 1400 600" className="quality-metrics">
      <defs>
        <linearGradient id="qualityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2ecc71" />
          <stop offset="25%" stopColor="#3498db" />
          <stop offset="50%" stopColor="#f39c12" />
          <stop offset="75%" stopColor="#e74c3c" />
          <stop offset="100%" stopColor="#9b59b6" />
        </linearGradient>
      </defs>
      
      <text x="700" y="40" textAnchor="middle" fill="#2ecc71" fontSize="24" fontWeight="700">Quality Metrics Dashboard</text>
      
      {/* Quality Score Gauge */}
      <g transform="translate(200, 100)">
        <circle cx="0" cy="0" r="80" fill="none" stroke="#ecf0f1" strokeWidth="20" />
        <circle cx="0" cy="0" r="80" fill="none" stroke="#2ecc71" strokeWidth="20" 
                strokeDasharray="460" strokeDashoffset="46" transform="rotate(-90)" />
        <text x="0" y="-10" textAnchor="middle" fill="#2ecc71" fontSize="32" fontWeight="700">92</text>
        <text x="0" y="15" textAnchor="middle" fill="#2ecc71" fontSize="14">Quality Score</text>
        <text x="0" y="110" textAnchor="middle" fill="#2ecc71" fontSize="12" fontWeight="600">Excellent</text>
      </g>
      
      {/* Test Coverage */}
      <g transform="translate(500, 100)">
        <rect x="-100" y="-50" width="200" height="100" rx="15" fill="rgba(52, 152, 219, 0.1)" stroke="#3498db" strokeWidth="3" />
        <text x="0" y="-20" textAnchor="middle" fill="#3498db" fontSize="16" fontWeight="600">Code Coverage</text>
        <rect x="-80" y="-5" width="160" height="15" rx="7" fill="#ecf0f1" />
        <rect x="-80" y="-5" width="153" height="15" rx="7" fill="#3498db" />
        <text x="0" y="30" textAnchor="middle" fill="#3498db" fontSize="20" fontWeight="700">95.2%</text>
        <text x="0" y="75" textAnchor="middle" fill="#3498db" fontSize="12">24,580 / 25,789 lines</text>
      </g>
      
      {/* Test Results */}
      <g transform="translate(800, 100)">
        <rect x="-100" y="-50" width="200" height="100" rx="15" fill="rgba(243, 156, 18, 0.1)" stroke="#f39c12" strokeWidth="3" />
        <text x="0" y="-20" textAnchor="middle" fill="#f39c12" fontSize="16" fontWeight="600">Test Results</text>
        <circle cx="-40" cy="10" r="12" fill="#2ecc71" />
        <text x="-40" y="15" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">✓</text>
        <text x="-10" y="15" textAnchor="middle" fill="#2ecc71" fontSize="14" fontWeight="600">2,847</text>
        <circle cx="40" cy="10" r="12" fill="#e74c3c" />
        <text x="40" y="15" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">✗</text>
        <text x="70" y="15" textAnchor="middle" fill="#e74c3c" fontSize="14" fontWeight="600">23</text>
        <text x="0" y="75" textAnchor="middle" fill="#f39c12" fontSize="12">Pass Rate: 99.2%</text>
      </g>
      
      {/* Performance Metrics */}
      <g transform="translate(1100, 100)">
        <rect x="-100" y="-50" width="200" height="100" rx="15" fill="rgba(155, 89, 182, 0.1)" stroke="#9b59b6" strokeWidth="3" />
        <text x="0" y="-20" textAnchor="middle" fill="#9b59b6" fontSize="16" fontWeight="600">Performance</text>
        <text x="0" y="0" textAnchor="middle" fill="#9b59b6" fontSize="18" fontWeight="700">8.2min</text>
        <text x="0" y="20" textAnchor="middle" fill="#9b59b6" fontSize="12">Suite Duration</text>
        <text x="0" y="75" textAnchor="middle" fill="#9b59b6" fontSize="12">Target: {'<'} 10min</text>
      </g>
      
      {/* Trend Charts */}
      <rect x="100" y="250" width="1200" height="250" rx="15" fill="rgba(52, 73, 94, 0.05)" stroke="rgba(52, 73, 94, 0.2)" strokeWidth="1" />
      <text x="700" y="280" textAnchor="middle" fill="#34495e" fontSize="18" fontWeight="600">Quality Trends (Last 30 Days)</text>
      
      {/* Coverage Trend */}
      <g transform="translate(200, 320)">
        <text x="100" y="20" textAnchor="middle" fill="#3498db" fontSize="14" fontWeight="600">Coverage Trend</text>
        <polyline points="20,100 40,95 60,98 80,92 100,90 120,88 140,85 160,82 180,80" 
                  fill="none" stroke="#3498db" strokeWidth="3" />
        <circle cx="180" cy="80" r="4" fill="#3498db" />
        <text x="100" y="130" textAnchor="middle" fill="#3498db" fontSize="12">95.2% (↗ 2.8%)</text>
      </g>
      
      {/* Pass Rate Trend */}
      <g transform="translate(500, 320)">
        <text x="100" y="20" textAnchor="middle" fill="#2ecc71" fontSize="14" fontWeight="600">Pass Rate Trend</text>
        <polyline points="20,90 40,85 60,88 80,82 100,78 120,80 140,75 160,72 180,70" 
                  fill="none" stroke="#2ecc71" strokeWidth="3" />
        <circle cx="180" cy="70" r="4" fill="#2ecc71" />
        <text x="100" y="130" textAnchor="middle" fill="#2ecc71" fontSize="12">99.2% (↗ 0.8%)</text>
      </g>
      
      {/* Performance Trend */}
      <g transform="translate(800, 320)">
        <text x="100" y="20" textAnchor="middle" fill="#f39c12" fontSize="14" fontWeight="600">Performance Trend</text>
        <polyline points="20,120 40,115 60,110 80,105 100,100 120,95 140,92 160,88 180,85" 
                  fill="none" stroke="#f39c12" strokeWidth="3" />
        <circle cx="180" cy="85" r="4" fill="#f39c12" />
        <text x="100" y="130" textAnchor="middle" fill="#f39c12" fontSize="12">8.2min (↘ 1.8min)</text>
      </g>
      
      {/* Bug Detection */}
      <g transform="translate(1100, 320)">
        <text x="100" y="20" textAnchor="middle" fill="#e74c3c" fontSize="14" fontWeight="600">Bug Detection</text>
        <rect x="30" y="40" width="20" height="60" fill="#e74c3c" opacity="0.7" />
        <rect x="60" y="50" width="20" height="50" fill="#e74c3c" opacity="0.7" />
        <rect x="90" y="45" width="20" height="55" fill="#e74c3c" opacity="0.7" />
        <rect x="120" y="60" width="20" height="40" fill="#e74c3c" opacity="0.7" />
        <rect x="150" y="70" width="20" height="30" fill="#e74c3c" opacity="0.7" />
        <text x="100" y="130" textAnchor="middle" fill="#e74c3c" fontSize="12">23 bugs (↘ 67%)</text>
      </g>
    </svg>
  );
  
  const renderQAMonitoringSVG = () => (
    <svg viewBox="0 0 1400 600" className="qa-monitoring">
      <defs>
        <linearGradient id="monitorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e74c3c" />
          <stop offset="50%" stopColor="#f39c12" />
          <stop offset="100%" stopColor="#2ecc71" />
        </linearGradient>
      </defs>
      
      <text x="700" y="40" textAnchor="middle" fill="#e74c3c" fontSize="24" fontWeight="700">QA Monitoring & Alerting</text>
      
      {/* Alert System */}
      <rect x="100" y="100" width="250" height="120" rx="15" fill="rgba(231, 76, 60, 0.1)" stroke="#e74c3c" strokeWidth="3" />
      <text x="225" y="130" textAnchor="middle" fill="#e74c3c" fontSize="16" fontWeight="600">Alert System</text>
      <circle cx="180" cy="170" r="20" fill="rgba(231, 76, 60, 0.3)">
        <animate attributeName="r" values="15;25;15" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="180" y="175" textAnchor="middle" fill="#e74c3c" fontSize="10" fontWeight="700">🚨</text>
      <text x="270" y="160" textAnchor="middle" fill="#e74c3c" fontSize="12">• Real-time Alerts</text>
      <text x="270" y="175" textAnchor="middle" fill="#e74c3c" fontSize="12">• Slack Integration</text>
      <text x="270" y="190" textAnchor="middle" fill="#e74c3c" fontSize="12">• PagerDuty</text>
      
      {/* Test Monitoring */}
      <rect x="400" y="100" width="250" height="120" rx="15" fill="rgba(243, 156, 18, 0.1)" stroke="#f39c12" strokeWidth="3" />
      <text x="525" y="130" textAnchor="middle" fill="#f39c12" fontSize="16" fontWeight="600">Test Monitoring</text>
      <rect x="450" y="150" width="150" height="50" rx="8" fill="rgba(243, 156, 18, 0.2)" />
      <text x="525" y="170" textAnchor="middle" fill="#f39c12" fontSize="12">Live Test Status</text>
      <text x="525" y="185" textAnchor="middle" fill="#f39c12" fontSize="12">Resource Usage</text>
      
      {/* Quality Gates */}
      <rect x="700" y="100" width="250" height="120" rx="15" fill="rgba(46, 204, 113, 0.1)" stroke="#2ecc71" strokeWidth="3" />
      <text x="825" y="130" textAnchor="middle" fill="#2ecc71" fontSize="16" fontWeight="600">Quality Gates</text>
      <text x="825" y="160" textAnchor="middle" fill="#2ecc71" fontSize="12">• Coverage ≥ 95%</text>
      <text x="825" y="175" textAnchor="middle" fill="#2ecc71" fontSize="12">• Pass Rate ≥ 99%</text>
      <text x="825" y="190" textAnchor="middle" fill="#2ecc71" fontSize="12">• Duration ≤ 10min</text>
      
      {/* Compliance Monitoring */}
      <rect x="1000" y="100" width="250" height="120" rx="15" fill="rgba(155, 89, 182, 0.1)" stroke="#9b59b6" strokeWidth="3" />
      <text x="1125" y="130" textAnchor="middle" fill="#9b59b6" fontSize="16" fontWeight="600">Compliance</text>
      <text x="1125" y="160" textAnchor="middle" fill="#9b59b6" fontSize="12">• SOX Compliance</text>
      <text x="1125" y="175" textAnchor="middle" fill="#9b59b6" fontSize="12">• Audit Trails</text>
      <text x="1125" y="190" textAnchor="middle" fill="#9b59b6" fontSize="12">• Evidence Collection</text>
      
      {/* Monitoring Dashboard */}
      <rect x="200" y="300" width="1000" height="200" rx="15" fill="rgba(44, 62, 80, 0.05)" stroke="rgba(44, 62, 80, 0.2)" strokeWidth="1" />
      <text x="700" y="330" textAnchor="middle" fill="#34495e" fontSize="18" fontWeight="600">Live QA Monitoring Dashboard</text>
      
      {/* Status Cards */}
      <rect x="250" y="350" width="150" height="80" rx="8" fill="rgba(46, 204, 113, 0.2)" />
      <text x="325" y="375" textAnchor="middle" fill="#2ecc71" fontSize="14" fontWeight="600">System Status</text>
      <circle cx="325" cy="395" r="8" fill="#2ecc71" />
      <text x="325" y="415" textAnchor="middle" fill="#2ecc71" fontSize="12" fontWeight="600">Healthy</text>
      
      <rect x="430" y="350" width="150" height="80" rx="8" fill="rgba(243, 156, 18, 0.2)" />
      <text x="505" y="375" textAnchor="middle" fill="#f39c12" fontSize="14" fontWeight="600">Active Tests</text>
      <text x="505" y="395" textAnchor="middle" fill="#f39c12" fontSize="18" fontWeight="700">24</text>
      <text x="505" y="415" textAnchor="middle" fill="#f39c12" fontSize="12">Running</text>
      
      <rect x="610" y="350" width="150" height="80" rx="8" fill="rgba(52, 152, 219, 0.2)" />
      <text x="685" y="375" textAnchor="middle" fill="#3498db" fontSize="14" fontWeight="600">Queue Depth</text>
      <text x="685" y="395" textAnchor="middle" fill="#3498db" fontSize="18" fontWeight="700">8</text>
      <text x="685" y="415" textAnchor="middle" fill="#3498db" fontSize="12">Pending</text>
      
      <rect x="790" y="350" width="150" height="80" rx="8" fill="rgba(231, 76, 60, 0.2)" />
      <text x="865" y="375" textAnchor="middle" fill="#e74c3c" fontSize="14" fontWeight="600">Failures</text>
      <text x="865" y="395" textAnchor="middle" fill="#e74c3c" fontSize="18" fontWeight="700">2</text>
      <text x="865" y="415" textAnchor="middle" fill="#e74c3c" fontSize="12">Last Hour</text>
      
      <rect x="970" y="350" width="150" height="80" rx="8" fill="rgba(155, 89, 182, 0.2)" />
      <text x="1045" y="375" textAnchor="middle" fill="#9b59b6" fontSize="14" fontWeight="600">Efficiency</text>
      <text x="1045" y="395" textAnchor="middle" fill="#9b59b6" fontSize="18" fontWeight="700">94%</text>
      <text x="1045" y="415" textAnchor="middle" fill="#9b59b6" fontSize="12">Resource Use</text>
    </svg>
  );

  return (
    <TestingContainer>
      <TestingContent>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader>
            <Title>
              <i className="fas fa-vial"></i>
              Testing & Quality Assurance
            </Title>
          </SectionHeader>
        </motion.div>
        
        <TestingControls>
          {views.map((view, index) => (
            <motion.div
              key={view.key}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ViewButton
                active={activeView === view.key}
                onClick={() => setActiveView(view.key)}
              >
                <i className={view.icon}></i>
                {view.label}
              </ViewButton>
            </motion.div>
          ))}
        </TestingControls>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <SVGContainer>
            {activeView === 'pipeline' && renderTestingPipelineSVG()}
            {activeView === 'automation' && renderAutomationFlowSVG()}
            {activeView === 'quality' && renderQualityMetricsSVG()}
            {activeView === 'monitoring' && renderQAMonitoringSVG()}
          </SVGContainer>
          
          <MetricsGrid>
            <Metric>
              <div className="metric-value">95.2%</div>
              <div className="metric-label">Code Coverage</div>
            </Metric>
            <Metric>
              <div className="metric-value">99.1%</div>
              <div className="metric-label">Test Pass Rate</div>
            </Metric>
            <Metric>
              <div className="metric-value">8min</div>
              <div className="metric-label">Test Duration</div>
            </Metric>
            <Metric>
              <div className="metric-value">245</div>
              <div className="metric-label">Total Tests</div>
            </Metric>
            <Metric>
              <div className="metric-value">92</div>
              <div className="metric-label">Quality Score</div>
            </Metric>
            <Metric>
              <div className="metric-value">3</div>
              <div className="metric-label">Flaky Tests</div>
            </Metric>
          </MetricsGrid>
        </motion.div>
      </TestingContent>
    </TestingContainer>
  );
};

export default TestingQASD;
