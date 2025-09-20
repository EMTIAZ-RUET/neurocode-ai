import React, { useState } from 'react';
import styled from 'styled-components';

const WorkflowsContainer = styled.div`
  max-width: 100%;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: white;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  color: white;
`;

const WorkflowSelector = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const WorkflowButton = styled.button`
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.2)'};
  color: ${props => props.active ? '#333' : 'white'};
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 12px 24px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.9);
    color: #333;
    transform: translateY(-2px);
  }
`;

const WorkflowDiagram = styled.div`
  width: 100%;
  min-height: 600px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
  margin-bottom: 2rem;
`;

const WorkflowTitle = styled.h2`
  font-size: 2rem;
  color: #fff;
  margin-bottom: 1.5rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Description = styled.p`
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  text-align: center;
  font-size: 1.1rem;
`;

const InteractiveWorkflows = () => {
  const [activeWorkflow, setActiveWorkflow] = useState('user-journey');

  const renderUserJourneyFlow = () => (
    <svg width="100%" height="500" viewBox="0 0 1200 500">
      <defs>
        <linearGradient id="userGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4facfe" />
          <stop offset="100%" stopColor="#00f2fe" />
        </linearGradient>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#fff" />
        </marker>
      </defs>
      
      {/* User Journey Steps */}
      <rect x="50" y="100" width="140" height="60" rx="30" fill="url(#userGradient)" />
      <text x="120" y="135" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">👤 Developer Login</text>
      
      <rect x="250" y="100" width="140" height="60" rx="30" fill="url(#userGradient)" />
      <text x="320" y="125" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">📝 Code Input</text>
      <text x="320" y="145" textAnchor="middle" fill="white" fontSize="10">Git integration active</text>
      
      <rect x="450" y="100" width="140" height="60" rx="30" fill="url(#userGradient)" />
      <text x="520" y="125" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">🔍 Real-time Analysis</text>
      <text x="520" y="145" textAnchor="middle" fill="white" fontSize="10">Cerebras processing</text>
      
      <rect x="650" y="100" width="140" height="60" rx="30" fill="url(#userGradient)" />
      <text x="720" y="125" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">🧠 AI Insights</text>
      <text x="720" y="145" textAnchor="middle" fill="white" fontSize="10">Llama 3.1 analysis</text>
      
      <rect x="850" y="100" width="140" height="60" rx="30" fill="url(#userGradient)" />
      <text x="920" y="125" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">⚡ Recommendations</text>
      <text x="920" y="145" textAnchor="middle" fill="white" fontSize="10">Actionable insights</text>
      
      {/* Flow Arrows */}
      <path d="M190 130 L250 130" stroke="#fff" strokeWidth="3" markerEnd="url(#arrowhead)" />
      <path d="M390 130 L450 130" stroke="#fff" strokeWidth="3" markerEnd="url(#arrowhead)" />
      <path d="M590 130 L650 130" stroke="#fff" strokeWidth="3" markerEnd="url(#arrowhead)" />
      <path d="M790 130 L850 130" stroke="#fff" strokeWidth="3" markerEnd="url(#arrowhead)" />
      
      {/* Decision Points */}
      <polygon points="320,200 360,230 320,260 280,230" fill="#ff6b6b" />
      <text x="320" y="235" textAnchor="middle" fill="white" fontSize="11">High Stress?</text>
      
      <polygon points="720,200 760,230 720,260 680,230" fill="#feca57" />
      <text x="720" y="235" textAnchor="middle" fill="white" fontSize="11">Burnout Risk?</text>
      
      {/* Decision Flow Lines */}
      <path d="M320 160 L320 200" stroke="#fff" strokeWidth="2" markerEnd="url(#arrowhead)" />
      <path d="M720 160 L720 200" stroke="#fff" strokeWidth="2" markerEnd="url(#arrowhead)" />
      
      {/* Emergency Interventions */}
      <rect x="250" y="320" width="140" height="50" rx="25" fill="#ff4757" />
      <text x="320" y="350" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">🚨 Immediate Alert</text>
      
      <rect x="650" y="320" width="140" height="50" rx="25" fill="#ffa502" />
      <text x="720" y="350" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">📞 Manager Notify</text>
      
      <path d="M320 260 L320 320" stroke="#ff4757" strokeWidth="2" markerEnd="url(#arrowhead)" />
      <path d="M720 260 L720 320" stroke="#ffa502" strokeWidth="2" markerEnd="url(#arrowhead)" />
      
      {/* Success Path */}
      <rect x="450" y="320" width="140" height="50" rx="25" fill="#2ed573" />
      <text x="520" y="350" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">✅ Normal Flow</text>
      
      <path d="M520 160 L520 320" stroke="#2ed573" strokeWidth="2" markerEnd="url(#arrowhead)" strokeDasharray="5,5" />
      
      {/* Flow metrics */}
      <text x="100" y="50" fill="rgba(255,255,255,0.8)" fontSize="12">⏱️ Response Time: &lt; 100ms</text>
      <text x="300" y="50" fill="rgba(255,255,255,0.8)" fontSize="12">🎯 Accuracy: 94.2%</text>
      <text x="500" y="50" fill="rgba(255,255,255,0.8)" fontSize="12">⚡ Throughput: 10K events/sec</text>
      <text x="700" y="50" fill="rgba(255,255,255,0.8)" fontSize="12">🔄 Availability: 99.9%</text>
    </svg>
  );

  const renderDataProcessingPipeline = () => (
    <svg width="100%" height="500" viewBox="0 0 1200 500">
      <defs>
        <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="100%" stopColor="#764ba2" />
        </linearGradient>
        <radialGradient id="processingGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#667eea" stopOpacity="0.2" />
        </radialGradient>
      </defs>
      
      {/* Data Sources */}
      <g transform="translate(50, 80)">
        <rect width="100" height="60" rx="10" fill="#3742fa" />
        <text x="50" y="35" textAnchor="middle" fill="white" fontSize="12">📁 Git Repos</text>
        <text x="50" y="50" textAnchor="middle" fill="white" fontSize="9">Real-time commits</text>
      </g>
      
      <g transform="translate(50, 180)">
        <rect width="100" height="60" rx="10" fill="#2f3542" />
        <text x="50" y="35" textAnchor="middle" fill="white" fontSize="12">💻 IDE Events</text>
        <text x="50" y="50" textAnchor="middle" fill="white" fontSize="9">Keystroke patterns</text>
      </g>
      
      <g transform="translate(50, 280)">
        <rect width="100" height="60" rx="10" fill="#ff4757" />
        <text x="50" y="35" textAnchor="middle" fill="white" fontSize="12">📊 Metrics</text>
        <text x="50" y="50" textAnchor="middle" fill="white" fontSize="9">Performance data</text>
      </g>
      
      {/* Data Ingestion */}
      <g transform="translate(250, 180)">
        <circle cx="50" cy="50" r="40" fill="url(#processingGlow)" />
        <text x="50" y="45" textAnchor="middle" fill="#333" fontSize="12" fontWeight="bold">📥 Kafka</text>
        <text x="50" y="60" textAnchor="middle" fill="#333" fontSize="9">Stream Processing</text>
      </g>
      
      {/* Data flows to ingestion */}
      <path d="M150 110 Q200 110 250 200" stroke="#3742fa" strokeWidth="3" fill="none" strokeDasharray="5,5">
        <animate attributeName="stroke-dashoffset" values="0;-10;0" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M150 210 L250 210" stroke="#2f3542" strokeWidth="3" fill="none" strokeDasharray="5,5">
        <animate attributeName="stroke-dashoffset" values="0;-10;0" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M150 310 Q200 310 250 260" stroke="#ff4757" strokeWidth="3" fill="none" strokeDasharray="5,5">
        <animate attributeName="stroke-dashoffset" values="0;-10;0" dur="2s" repeatCount="indefinite" />
      </path>
      
      {/* Processing Stages */}
      <g transform="translate(420, 80)">
        <rect width="120" height="80" rx="15" fill="url(#dataGradient)" />
        <text x="60" y="30" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">🔍 Data Cleaning</text>
        <text x="60" y="45" textAnchor="middle" fill="white" fontSize="9">Noise reduction</text>
        <text x="60" y="58" textAnchor="middle" fill="white" fontSize="9">Format validation</text>
        <text x="60" y="71" textAnchor="middle" fill="white" fontSize="9">Schema enforcement</text>
      </g>
      
      <g transform="translate(420, 200)">
        <rect width="120" height="80" rx="15" fill="url(#dataGradient)" />
        <text x="60" y="30" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">⚙️ Feature Extract</text>
        <text x="60" y="45" textAnchor="middle" fill="white" fontSize="9">Code complexity</text>
        <text x="60" y="58" textAnchor="middle" fill="white" fontSize="9">Behavioral patterns</text>
        <text x="60" y="71" textAnchor="middle" fill="white" fontSize="9">Temporal features</text>
      </g>
      
      <g transform="translate(420, 320)">
        <rect width="120" height="80" rx="15" fill="url(#dataGradient)" />
        <text x="60" y="30" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">🧮 Normalization</text>
        <text x="60" y="45" textAnchor="middle" fill="white" fontSize="9">Z-score scaling</text>
        <text x="60" y="58" textAnchor="middle" fill="white" fontSize="9">Outlier handling</text>
        <text x="60" y="71" textAnchor="middle" fill="white" fontSize="9">Missing data</text>
      </g>
      
      {/* Processing flows */}
      <path d="M330 220 L420 120" stroke="#667eea" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
      <path d="M330 230 L420 240" stroke="#667eea" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
      <path d="M330 240 L420 360" stroke="#667eea" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
      
      {/* AI Processing */}
      <g transform="translate(650, 180)">
        <ellipse cx="80" cy="50" rx="70" ry="45" fill="#ff6b6b" />
        <text x="80" y="35" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">🧠 Cerebras CS-2</text>
        <text x="80" y="50" textAnchor="middle" fill="white" fontSize="10">850K AI Cores</text>
        <text x="80" y="65" textAnchor="middle" fill="white" fontSize="10">Pattern Recognition</text>
      </g>
      
      {/* AI Input flows */}
      <path d="M540 120 Q600 120 650 200" stroke="#667eea" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)" />
      <path d="M540 240 L650 230" stroke="#667eea" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)" />
      <path d="M540 360 Q600 360 650 260" stroke="#667eea" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)" />
      
      {/* Output Storage */}
      <g transform="translate(880, 120)">
        <rect width="100" height="60" rx="10" fill="#2ed573" />
        <text x="50" y="30" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">📊 Insights DB</text>
        <text x="50" y="45" textAnchor="middle" fill="white" fontSize="9">TimescaleDB</text>
        <text x="50" y="57" textAnchor="middle" fill="white" fontSize="9">Real-time queries</text>
      </g>
      
      <g transform="translate(880, 220)">
        <rect width="100" height="60" rx="10" fill="#ffa502" />
        <text x="50" y="30" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">🔔 Alerts</text>
        <text x="50" y="45" textAnchor="middle" fill="white" fontSize="9">Real-time notifications</text>
        <text x="50" y="57" textAnchor="middle" fill="white" fontSize="9">Slack/Email</text>
      </g>
      
      <g transform="translate(880, 320)">
        <rect width="100" height="60" rx="10" fill="#5352ed" />
        <text x="50" y="30" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">📈 Analytics</text>
        <text x="50" y="45" textAnchor="middle" fill="white" fontSize="9">Historical trends</text>
        <text x="50" y="57" textAnchor="middle" fill="white" fontSize="9">ML model training</text>
      </g>
      
      {/* Output flows */}
      <path d="M730 200 Q800 170 880 150" stroke="#2ed573" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
      <path d="M730 230 L880 250" stroke="#ffa502" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
      <path d="M730 260 Q800 290 880 350" stroke="#5352ed" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
      
      {/* Performance Metrics */}
      <text x="100" y="30" fill="rgba(255,255,255,0.9)" fontSize="11">📊 Data Volume: 50TB/day</text>
      <text x="300" y="30" fill="rgba(255,255,255,0.9)" fontSize="11">⚡ Latency: &lt; 500ms</text>
      <text x="500" y="30" fill="rgba(255,255,255,0.9)" fontSize="11">🔄 Throughput: 100K events/sec</text>
      <text x="750" y="30" fill="rgba(255,255,255,0.9)" fontSize="11">🎯 Accuracy: 96.8%</text>
    </svg>
  );

  const renderAIMLInferenceFlow = () => (
    <svg width="100%" height="500" viewBox="0 0 1200 500">
      <defs>
        <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff9a9e" />
          <stop offset="100%" stopColor="#fecfef" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge> 
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" /> 
          </feMerge>
        </filter>
      </defs>
      
      {/* Input Layer */}
      <g transform="translate(50, 150)">
        <rect width="120" height="100" rx="15" fill="#3742fa" filter="url(#glow)" />
        <text x="60" y="25" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">📝 Code Input</text>
        <text x="60" y="45" textAnchor="middle" fill="white" fontSize="10">• Function complexity</text>
        <text x="60" y="58" textAnchor="middle" fill="white" fontSize="10">• Variable patterns</text>
        <text x="60" y="71" textAnchor="middle" fill="white" fontSize="10">• Comment sentiment</text>
        <text x="60" y="84" textAnchor="middle" fill="white" fontSize="10">• Commit frequency</text>
      </g>
      
      {/* Feature Engineering */}
      <g transform="translate(250, 100)">
        <polygon points="60,20 100,50 60,80 20,50" fill="#ff6b6b" filter="url(#glow)" />
        <text x="60" y="45" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">🔧 Feature</text>
        <text x="60" y="58" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Engineering</text>
      </g>
      
      <g transform="translate(250, 200)">
        <polygon points="60,20 100,50 60,80 20,50" fill="#ffa502" filter="url(#glow)" />
        <text x="60" y="45" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">📊 Vector</text>
        <text x="60" y="58" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Embedding</text>
      </g>
      
      <g transform="translate(250, 300)">
        <polygon points="60,20 100,50 60,80 20,50" fill="#2ed573" filter="url(#glow)" />
        <text x="60" y="45" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">⏰ Temporal</text>
        <text x="60" y="58" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Patterns</text>
      </g>
      
      {/* Input to Feature flows */}
      <path d="M170 180 L250 130" stroke="#667eea" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
      <path d="M170 200 L250 230" stroke="#667eea" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
      <path d="M170 220 L250 330" stroke="#667eea" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
      
      {/* Cerebras Processing */}
      <g transform="translate(450, 150)">
        <rect width="160" height="120" rx="20" fill="url(#aiGradient)" filter="url(#glow)" />
        <text x="80" y="25" textAnchor="middle" fill="#333" fontSize="16" fontWeight="bold">🧠 Cerebras CS-2</text>
        <text x="80" y="45" textAnchor="middle" fill="#333" fontSize="11">Wafer-Scale Engine</text>
        <text x="80" y="65" textAnchor="middle" fill="#333" fontSize="10">• 850,000 AI cores</text>
        <text x="80" y="78" textAnchor="middle" fill="#333" fontSize="10">• 1.2TB/s memory bandwidth</text>
        <text x="80" y="91" textAnchor="middle" fill="#333" fontSize="10">• Real-time inference &lt;1ms</text>
        <text x="80" y="104" textAnchor="middle" fill="#333" fontSize="10">• Pattern recognition ML</text>
      </g>
      
      {/* Feature to Cerebras flows */}
      <path d="M350 130 Q400 130 450 180" stroke="#ff6b6b" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)">
        <animate attributeName="stroke-dasharray" values="0 20;20 0" dur="1s" repeatCount="indefinite" />
      </path>
      <path d="M350 230 L450 210" stroke="#ffa502" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)">
        <animate attributeName="stroke-dasharray" values="0 20;20 0" dur="1s" begin="0.3s" repeatCount="indefinite" />
      </path>
      <path d="M350 330 Q400 330 450 240" stroke="#2ed573" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)">
        <animate attributeName="stroke-dasharray" values="0 20;20 0" dur="1s" begin="0.6s" repeatCount="indefinite" />
      </path>
      
      {/* Llama 3.1 Processing */}
      <g transform="translate(450, 320)">
        <rect width="160" height="100" rx="20" fill="#4ecdc4" filter="url(#glow)" />
        <text x="80" y="25" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">🦙 Llama 3.1 405B</text>
        <text x="80" y="45" textAnchor="middle" fill="white" fontSize="10">Natural Language Understanding</text>
        <text x="80" y="62" textAnchor="middle" fill="white" fontSize="10">• 405B parameters</text>
        <text x="80" y="75" textAnchor="middle" fill="white" fontSize="10">• 128K context window</text>
        <text x="80" y="88" textAnchor="middle" fill="white" fontSize="10">• Commit sentiment analysis</text>
      </g>
      
      {/* Cerebras to Llama connection */}
      <path d="M530 270 L530 320" stroke="#667eea" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" strokeDasharray="5,5">
        <animate attributeName="stroke-dashoffset" values="0;-10;0" dur="1.5s" repeatCount="indefinite" />
      </path>
      
      {/* Output Processing */}
      <g transform="translate(750, 80)">
        <circle cx="60" cy="60" r="50" fill="#ff4757" filter="url(#glow)" />
        <text x="60" y="45" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">🚨 Stress</text>
        <text x="60" y="60" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Detection</text>
        <text x="60" y="80" textAnchor="middle" fill="white" fontSize="9">93.4% accuracy</text>
      </g>
      
      <g transform="translate(750, 200)">
        <circle cx="60" cy="60" r="50" fill="#ffa502" filter="url(#glow)" />
        <text x="60" y="45" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">🔥 Burnout</text>
        <text x="60" y="60" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Prediction</text>
        <text x="60" y="80" textAnchor="middle" fill="white" fontSize="9">87.2% accuracy</text>
      </g>
      
      <g transform="translate(750, 320)">
        <circle cx="60" cy="60" r="50" fill="#2ed573" filter="url(#glow)" />
        <text x="60" y="45" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">🌊 Flow</text>
        <text x="60" y="60" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">State</text>
        <text x="60" y="80" textAnchor="middle" fill="white" fontSize="9">91.8% accuracy</text>
      </g>
      
      {/* AI to Output flows */}
      <path d="M610 180 Q680 140 750 140" stroke="#ff4757" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
      <path d="M610 210 L750 260" stroke="#ffa502" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
      <path d="M610 370 Q680 370 750 380" stroke="#2ed573" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
      
      {/* Final Recommendations */}
      <g transform="translate(950, 200)">
        <rect width="140" height="100" rx="15" fill="#5352ed" filter="url(#glow)" />
        <text x="70" y="25" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">⚡ Action Engine</text>
        <text x="70" y="45" textAnchor="middle" fill="white" fontSize="10">Intelligent Interventions</text>
        <text x="70" y="62" textAnchor="middle" fill="white" fontSize="9">• Break reminders</text>
        <text x="70" y="75" textAnchor="middle" fill="white" fontSize="9">• Code review suggestions</text>
        <text x="70" y="88" textAnchor="middle" fill="white" fontSize="9">• Workload balancing</text>
      </g>
      
      {/* Output to Recommendations */}
      <path d="M810 140 Q880 170 950 220" stroke="#667eea" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
      <path d="M810 260 L950 250" stroke="#667eea" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
      <path d="M810 380 Q880 330 950 280" stroke="#667eea" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
      
      {/* Performance metrics */}
      <text x="50" y="40" fill="rgba(255,255,255,0.9)" fontSize="11">🔥 Processing Speed: 10K inferences/sec</text>
      <text x="300" y="40" fill="rgba(255,255,255,0.9)" fontSize="11">⚡ Model Latency: &lt; 1ms (Cerebras)</text>
      <text x="600" y="40" fill="rgba(255,255,255,0.9)" fontSize="11">🎯 Combined Accuracy: 94.2%</text>
      <text x="850" y="40" fill="rgba(255,255,255,0.9)" fontSize="11">📊 Real-time Insights</text>
    </svg>
  );

  const renderMonitoringFlow = () => (
    <svg width="100%" height="500" viewBox="0 0 1200 500">
      <defs>
        <linearGradient id="monitorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="100%" stopColor="#764ba2" />
        </linearGradient>
        <radialGradient id="alertGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff4757" stopOpacity="1" />
          <stop offset="100%" stopColor="#ff4757" stopOpacity="0.3" />
        </radialGradient>
      </defs>
      
      {/* System Components Monitoring */}
      <g transform="translate(50, 50)">
        <rect width="200" height="80" rx="15" fill="url(#monitorGradient)" />
        <text x="100" y="30" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">🖥️ System Health Monitor</text>
        <text x="100" y="50" textAnchor="middle" fill="white" fontSize="10">CPU: 78% | RAM: 65% | Disk: 45%</text>
        <text x="100" y="65" textAnchor="middle" fill="white" fontSize="10">Uptime: 99.97% | Load: 2.3</text>
      </g>
      
      <g transform="translate(50, 160)">
        <rect width="200" height="80" rx="15" fill="#3742fa" />
        <text x="100" y="30" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">🐳 Container Health</text>
        <text x="100" y="50" textAnchor="middle" fill="white" fontSize="10">Active: 15/15 | Failed: 0</text>
        <text x="100" y="65" textAnchor="middle" fill="white" fontSize="10">Memory: 78GB/128GB</text>
      </g>
      
      <g transform="translate(50, 270)">
        <rect width="200" height="80" rx="15" fill="#2ed573" />
        <text x="100" y="30" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">📊 Database Performance</text>
        <text x="100" y="50" textAnchor="middle" fill="white" fontSize="10">Queries/sec: 1,234 | Avg: 12ms</text>
        <text x="100" y="65" textAnchor="middle" fill="white" fontSize="10">Connections: 45/100</text>
      </g>
      
      <g transform="translate(50, 380)">
        <rect width="200" height="80" rx="15" fill="#ff6b6b" />
        <text x="100" y="30" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">🧠 AI Model Status</text>
        <text x="100" y="50" textAnchor="middle" fill="white" fontSize="10">Cerebras: Online | Llama: Online</text>
        <text x="100" y="65" textAnchor="middle" fill="white" fontSize="10">Inference Rate: 8.5K/sec</text>
      </g>
      
      {/* Central Monitoring Hub */}
      <g transform="translate(400, 200)">
        <circle cx="80" cy="80" r="70" fill="url(#monitorGradient)" stroke="#fff" strokeWidth="3" />
        <text x="80" y="70" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">👁️ Monitoring</text>
        <text x="80" y="90" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Central Hub</text>
        <text x="80" y="110" textAnchor="middle" fill="white" fontSize="10">Real-time Analytics</text>
      </g>
      
      {/* Data flows to central hub */}
      <path d="M250 90 Q325 145 400 240" stroke="#667eea" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" strokeDasharray="5,5">
        <animate attributeName="stroke-dashoffset" values="0;-10;0" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M250 200 L400 260" stroke="#3742fa" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" strokeDasharray="5,5">
        <animate attributeName="stroke-dashoffset" values="0;-10;0" dur="2s" begin="0.5s" repeatCount="indefinite" />
      </path>
      <path d="M250 310 L400 300" stroke="#2ed573" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" strokeDasharray="5,5">
        <animate attributeName="stroke-dashoffset" values="0;-10;0" dur="2s" begin="1s" repeatCount="indefinite" />
      </path>
      <path d="M250 420 Q325 355 400 320" stroke="#ff6b6b" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" strokeDasharray="5,5">
        <animate attributeName="stroke-dashoffset" values="0;-10;0" dur="2s" begin="1.5s" repeatCount="indefinite" />
      </path>
      
      {/* Alert Processing */}
      <g transform="translate(650, 100)">
        <polygon points="80,30 120,60 80,90 40,60" fill="url(#alertGlow)" />
        <text x="80" y="55" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">🚨 Alert</text>
        <text x="80" y="70" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Engine</text>
        <circle cx="80" cy="60" r="35" fill="none" stroke="#fff" strokeWidth="2" opacity="0.8">
          <animate attributeName="r" values="35;45;35" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>
      
      <g transform="translate(650, 230)">
        <rect width="160" height="70" rx="15" fill="#ffa502" />
        <text x="80" y="25" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">⚙️ Auto-Remediation</text>
        <text x="80" y="45" textAnchor="middle" fill="white" fontSize="10">Scale containers</text>
        <text x="80" y="58" textAnchor="middle" fill="white" fontSize="10">Restart failed services</text>
      </g>
      
      <g transform="translate(650, 330)">
        <rect width="160" height="70" rx="15" fill="#5352ed" />
        <text x="80" y="25" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">📈 Trend Analysis</text>
        <text x="80" y="45" textAnchor="middle" fill="white" fontSize="10">Predictive analytics</text>
        <text x="80" y="58" textAnchor="middle" fill="white" fontSize="10">Capacity planning</text>
      </g>
      
      {/* Hub to Processing flows */}
      <path d="M550 240 L650 150" stroke="#ff4757" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
      <path d="M550 280 L650 265" stroke="#ffa502" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
      <path d="M550 320 L650 365" stroke="#5352ed" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
      
      {/* Notification Channels */}
      <g transform="translate(900, 80)">
        <rect width="120" height="60" rx="10" fill="#2ed573" />
        <text x="60" y="30" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">💬 Slack</text>
        <text x="60" y="45" textAnchor="middle" fill="white" fontSize="9">#dev-alerts channel</text>
      </g>
      
      <g transform="translate(900, 160)">
        <rect width="120" height="60" rx="10" fill="#3742fa" />
        <text x="60" y="30" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">📧 Email</text>
        <text x="60" y="45" textAnchor="middle" fill="white" fontSize="9">dev-team@company.com</text>
      </g>
      
      <g transform="translate(900, 240)">
        <rect width="120" height="60" rx="10" fill="#ff4757" />
        <text x="60" y="30" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">📱 PagerDuty</text>
        <text x="60" y="45" textAnchor="middle" fill="white" fontSize="9">Critical alerts only</text>
      </g>
      
      <g transform="translate(900, 320)">
        <rect width="120" height="60" rx="10" fill="#ffa502" />
        <text x="60" y="30" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">📊 Dashboard</text>
        <text x="60" y="45" textAnchor="middle" fill="white" fontSize="9">Real-time metrics</text>
      </g>
      
      {/* Alert to Notification flows */}
      <path d="M730 135 Q815 110 900 110" stroke="#2ed573" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
      <path d="M730 150 Q815 155 900 190" stroke="#3742fa" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
      <path d="M730 165 Q815 200 900 270" stroke="#ff4757" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
      
      {/* Remediation to Dashboard */}
      <path d="M810 265 L900 350" stroke="#ffa502" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" strokeDasharray="3,3" />
      
      {/* SLA Metrics */}
      <text x="50" y="30" fill="rgba(255,255,255,0.9)" fontSize="11">🎯 SLA: 99.9% uptime target</text>
      <text x="300" y="30" fill="rgba(255,255,255,0.9)" fontSize="11">⚡ Alert Response: &lt; 30s</text>
      <text x="550" y="30" fill="rgba(255,255,255,0.9)" fontSize="11">🔄 Auto-recovery: 85% success</text>
      <text x="800" y="30" fill="rgba(255,255,255,0.9)" fontSize="11">📈 MTTR: 4.2 minutes</text>
    </svg>
  );

  const workflows = {
    'user-journey': {
      title: '👤 User Journey Flow',
      description: 'Complete user interaction flow from login to insights with decision points and interventions.',
      component: renderUserJourneyFlow
    },
    'data-pipeline': {
      title: '🔄 Data Processing Pipeline',
      description: 'End-to-end data flow from multiple sources through AI processing to actionable insights.',
      component: renderDataProcessingPipeline
    },
    'ai-inference': {
      title: '🧠 AI/ML Inference Flow',
      description: 'Detailed visualization of Cerebras CS-2 and Llama 3.1 processing with real-time metrics.',
      component: renderAIMLInferenceFlow
    },
    'monitoring': {
      title: '👁️ Real-time Monitoring',
      description: 'System health monitoring with automated alerting and remediation workflows.',
      component: renderMonitoringFlow
    }
  };

  return (
    <WorkflowsContainer>
      <Title>Interactive System Workflows</Title>
      
      <Description>
        Comprehensive workflow diagrams showing system interactions, data flow, and real-time processing capabilities with performance metrics.
      </Description>
      
      <WorkflowSelector>
        {Object.keys(workflows).map(key => (
          <WorkflowButton
            key={key}
            active={activeWorkflow === key}
            onClick={() => setActiveWorkflow(key)}
          >
            {workflows[key].title}
          </WorkflowButton>
        ))}
      </WorkflowSelector>
      
      <WorkflowDiagram>
        <WorkflowTitle>{workflows[activeWorkflow].title}</WorkflowTitle>
        <Description>{workflows[activeWorkflow].description}</Description>
        {workflows[activeWorkflow].component()}
      </WorkflowDiagram>
    </WorkflowsContainer>
  );
};

export default InteractiveWorkflows;