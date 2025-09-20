import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FlowAnalysisContainer = styled.section`
  padding: ${props => props.theme?.spacing?.['2xl'] || '2rem'} 0;
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
`;

const FlowContent = styled.div`
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

const FlowControls = styled.div`
  display: flex;
  gap: ${props => props.theme?.spacing?.md || '1rem'};
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const ControlButton = styled.button`
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

const FlowGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${props => props.theme?.spacing?.xl || '2rem'};
  margin: ${props => props.theme?.spacing?.xl || '2rem'} 0;
`;

const FlowCard = styled.div`
  background: ${props => props.theme?.colors?.cardBackground || 'rgba(255, 255, 255, 0.1)'};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${props => props.theme?.borderRadius?.lg || '16px'};
  padding: ${props => props.theme?.spacing?.lg || '1.5rem'};
  box-shadow: ${props => props.theme?.shadows?.lg || '0 8px 32px rgba(0, 0, 0, 0.1)'};
  
  &.full-width {
    grid-column: 1 / -1;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme?.spacing?.lg || '1.5rem'};
`;

const CardTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: ${props => props.theme?.spacing?.sm || '0.5rem'};
  font-size: ${props => props.theme?.fontSizes?.lg || '1.25rem'};
  font-weight: 600;
  color: ${props => props.theme?.colors?.text || '#333'};
  
  i {
    color: ${props => props.theme?.colors?.primary || '#3498db'};
  }
`;

const ProcessingStatus = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme?.spacing?.sm || '0.5rem'};
  font-size: ${props => props.theme?.fontSizes?.sm || '0.875rem'};
  color: ${props => props.theme?.colors?.success || '#27ae60'};
  
  .spinner {
    width: 12px;
    height: 12px;
    border: 2px solid ${props => props.theme?.colors?.success || '#27ae60'};
    border-top: 2px solid transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const SVGContainer = styled.div`
  width: 100%;
  height: 400px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${props => props.theme?.borderRadius?.md || '8px'};
  padding: ${props => props.theme?.spacing?.md || '1rem'};
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: ${props => props.theme?.spacing?.md || '1rem'};
  margin-top: ${props => props.theme?.spacing?.lg || '1.5rem'};
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

const SystemFlowAnalysisSD = () => {
  const [activeView, setActiveView] = useState('overview');
  const [isProcessing, setIsProcessing] = useState(false);

  const flowViews = [
    { key: 'overview', label: 'Flow Overview', icon: 'fas fa-stream' },
    { key: 'realtime', label: 'Real-time Flow', icon: 'fas fa-bolt' },
    { key: 'processing', label: 'Data Processing', icon: 'fas fa-cogs' },
    { key: 'ai-analysis', label: 'AI Analysis', icon: 'fas fa-brain' },
    { key: 'output', label: 'Output Delivery', icon: 'fas fa-paper-plane' }
  ];

  const renderFlowOverviewSVG = () => (
    <svg viewBox="0 0 1200 600" className="flow-diagram">
      <defs>
        <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="50%" stopColor="#764ba2" />
          <stop offset="100%" stopColor="#f093fb" />
        </linearGradient>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#667eea" />
        </marker>
      </defs>
      
      {/* IDE Input Stage */}
      <rect x="50" y="100" width="200" height="80" rx="10" fill="rgba(102, 126, 234, 0.1)" stroke="#667eea" strokeWidth="2" />
      <text x="150" y="130" textAnchor="middle" fill="#667eea" fontSize="14" fontWeight="600">IDE Collection</text>
      <text x="150" y="150" textAnchor="middle" fill="#667eea" fontSize="12">VS Code • IntelliJ</text>
      <text x="150" y="165" textAnchor="middle" fill="#667eea" fontSize="12">Git • Browser</text>
      
      {/* API Gateway */}
      <rect x="300" y="100" width="150" height="80" rx="10" fill="rgba(118, 75, 162, 0.1)" stroke="#764ba2" strokeWidth="2" />
      <text x="375" y="130" textAnchor="middle" fill="#764ba2" fontSize="14" fontWeight="600">API Gateway</text>
      <text x="375" y="150" textAnchor="middle" fill="#764ba2" fontSize="12">Kong • Auth</text>
      <text x="375" y="165" textAnchor="middle" fill="#764ba2" fontSize="12">Rate Limiting</text>
      
      {/* Stream Processing */}
      <rect x="500" y="100" width="150" height="80" rx="10" fill="rgba(240, 147, 251, 0.1)" stroke="#f093fb" strokeWidth="2" />
      <text x="575" y="130" textAnchor="middle" fill="#f093fb" fontSize="14" fontWeight="600">Stream Process</text>
      <text x="575" y="150" textAnchor="middle" fill="#f093fb" fontSize="12">Kafka • Flink</text>
      <text x="575" y="165" textAnchor="middle" fill="#f093fb" fontSize="12">Real-time</text>
      
      {/* AI Analysis */}
      <rect x="200" y="250" width="200" height="80" rx="10" fill="rgba(102, 126, 234, 0.1)" stroke="#667eea" strokeWidth="2" />
      <text x="300" y="280" textAnchor="middle" fill="#667eea" fontSize="14" fontWeight="600">AI Analysis</text>
      <text x="300" y="300" textAnchor="middle" fill="#667eea" fontSize="12">Cerebras • Llama</text>
      <text x="300" y="315" textAnchor="middle" fill="#667eea" fontSize="12">Pattern Recognition</text>
      
      {/* Data Storage */}
      <rect x="450" y="250" width="200" height="80" rx="10" fill="rgba(118, 75, 162, 0.1)" stroke="#764ba2" strokeWidth="2" />
      <text x="550" y="280" textAnchor="middle" fill="#764ba2" fontSize="14" fontWeight="600">Data Storage</text>
      <text x="550" y="300" textAnchor="middle" fill="#764ba2" fontSize="12">TimescaleDB</text>
      <text x="550" y="315" textAnchor="middle" fill="#764ba2" fontSize="12">Redis Cache</text>
      
      {/* Output Delivery */}
      <rect x="700" y="175" width="200" height="80" rx="10" fill="rgba(240, 147, 251, 0.1)" stroke="#f093fb" strokeWidth="2" />
      <text x="800" y="205" textAnchor="middle" fill="#f093fb" fontSize="14" fontWeight="600">Output Delivery</text>
      <text x="800" y="225" textAnchor="middle" fill="#f093fb" fontSize="12">Dashboard • Mobile</text>
      <text x="800" y="240" textAnchor="middle" fill="#f093fb" fontSize="12">Notifications</text>
      
      {/* Flow Arrows */}
      <line x1="250" y1="140" x2="300" y2="140" stroke="url(#flowGradient)" strokeWidth="3" markerEnd="url(#arrowhead)" />
      <line x1="450" y1="140" x2="500" y2="140" stroke="url(#flowGradient)" strokeWidth="3" markerEnd="url(#arrowhead)" />
      <line x1="575" y1="180" x2="300" y2="250" stroke="url(#flowGradient)" strokeWidth="2" markerEnd="url(#arrowhead)" />
      <line x1="400" y1="290" x2="450" y2="290" stroke="url(#flowGradient)" strokeWidth="2" markerEnd="url(#arrowhead)" />
      <line x1="575" y1="180" x2="800" y2="175" stroke="url(#flowGradient)" strokeWidth="3" markerEnd="url(#arrowhead)" />
      <line x1="550" y1="250" x2="750" y2="175" stroke="url(#flowGradient)" strokeWidth="2" markerEnd="url(#arrowhead)" />
      
      {/* Performance Metrics */}
      <text x="600" y="50" textAnchor="middle" fill="#667eea" fontSize="18" fontWeight="700">NeuroCode System Flow</text>
      <text x="150" y="400" fill="#667eea" fontSize="12">⚡ 10K+ events/sec</text>
      <text x="375" y="400" fill="#764ba2" fontSize="12">🔒 {'<'}50ms latency</text>
      <text x="575" y="400" fill="#f093fb" fontSize="12">🧠 AI-powered</text>
      <text x="800" y="400" fill="#f093fb" fontSize="12">📱 Multi-channel</text>
    </svg>
  );

  const renderRealTimeFlowSVG = () => (
    <svg viewBox="0 0 1200 500" className="realtime-flow">
      <defs>
        <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff6b6b" />
          <stop offset="50%" stopColor="#4ecdc4" />
          <stop offset="100%" stopColor="#45b7d1" />
        </linearGradient>
        <animate attributeName="x1" values="0%;100%;0%" dur="3s" repeatCount="indefinite" />
      </defs>
      
      {/* Real-time Data Streams */}
      <circle cx="150" cy="100" r="30" fill="rgba(255, 107, 107, 0.2)" stroke="#ff6b6b" strokeWidth="2">
        <animate attributeName="r" values="25;35;25" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="150" y="105" textAnchor="middle" fill="#ff6b6b" fontSize="14" fontWeight="600">Live Code</text>
      
      <circle cx="400" cy="100" r="30" fill="rgba(78, 205, 196, 0.2)" stroke="#4ecdc4" strokeWidth="2">
        <animate attributeName="r" values="30;40;30" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <text x="400" y="105" textAnchor="middle" fill="#4ecdc4" fontSize="14" fontWeight="600">Process</text>
      
      <circle cx="650" cy="100" r="30" fill="rgba(69, 183, 209, 0.2)" stroke="#45b7d1" strokeWidth="2">
        <animate attributeName="r" values="28;38;28" dur="2.2s" repeatCount="indefinite" />
      </circle>
      <text x="650" y="105" textAnchor="middle" fill="#45b7d1" fontSize="14" fontWeight="600">Analyze</text>
      
      <circle cx="900" cy="100" r="30" fill="rgba(255, 107, 107, 0.2)" stroke="#ff6b6b" strokeWidth="2">
        <animate attributeName="r" values="26;36;26" dur="1.9s" repeatCount="indefinite" />
      </circle>
      <text x="900" y="105" textAnchor="middle" fill="#ff6b6b" fontSize="14" fontWeight="600">Output</text>
      
      {/* Animated Flow Lines */}
      <line x1="180" y1="100" x2="370" y2="100" stroke="url(#pulseGradient)" strokeWidth="4" opacity="0.7">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
      </line>
      <line x1="430" y1="100" x2="620" y2="100" stroke="url(#pulseGradient)" strokeWidth="4" opacity="0.7">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.7s" repeatCount="indefinite" />
      </line>
      <line x1="680" y1="100" x2="870" y2="100" stroke="url(#pulseGradient)" strokeWidth="4" opacity="0.7">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.3s" repeatCount="indefinite" />
      </line>
      
      {/* Performance Indicators */}
      <rect x="50" y="250" width="1100" height="150" rx="15" fill="rgba(102, 126, 234, 0.05)" stroke="rgba(102, 126, 234, 0.2)" strokeWidth="1" />
      <text x="600" y="280" textAnchor="middle" fill="#667eea" fontSize="16" fontWeight="600">Real-time Performance Metrics</text>
      
      <text x="200" y="320" textAnchor="middle" fill="#ff6b6b" fontSize="14">Data Ingestion</text>
      <text x="200" y="340" textAnchor="middle" fill="#ff6b6b" fontSize="20" fontWeight="700">10.5K/s</text>
      
      <text x="400" y="320" textAnchor="middle" fill="#4ecdc4" fontSize="14">Processing Rate</text>
      <text x="400" y="340" textAnchor="middle" fill="#4ecdc4" fontSize="20" fontWeight="700">8.2K/s</text>
      
      <text x="600" y="320" textAnchor="middle" fill="#45b7d1" fontSize="14">AI Analysis</text>
      <text x="600" y="340" textAnchor="middle" fill="#45b7d1" fontSize="20" fontWeight="700">1.8K/s</text>
      
      <text x="800" y="320" textAnchor="middle" fill="#ff6b6b" fontSize="14">Notifications</text>
      <text x="800" y="340" textAnchor="middle" fill="#ff6b6b" fontSize="20" fontWeight="700">945/s</text>
    </svg>
  );

  const renderDataProcessingSVG = () => (
    <svg viewBox="0 0 1200 600" className="data-processing">
      <defs>
        <linearGradient id="processingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2ecc71" />
          <stop offset="50%" stopColor="#27ae60" />
          <stop offset="100%" stopColor="#16a085" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <text x="600" y="40" textAnchor="middle" fill="#2ecc71" fontSize="20" fontWeight="700">Data Processing Pipeline</text>
      
      {/* Kafka Ingestion */}
      <rect x="80" y="80" width="180" height="100" rx="15" fill="rgba(46, 204, 113, 0.1)" stroke="#2ecc71" strokeWidth="2"/>
      <text x="170" y="110" textAnchor="middle" fill="#2ecc71" fontSize="16" fontWeight="600">Apache Kafka</text>
      <text x="170" y="130" textAnchor="middle" fill="#2ecc71" fontSize="12">Message Ingestion</text>
      <text x="170" y="150" textAnchor="middle" fill="#2ecc71" fontSize="11">12 Partitions</text>
      <text x="170" y="165" textAnchor="middle" fill="#2ecc71" fontSize="11">3 Replicas</text>
      
      {/* Stream Processing */}
      <rect x="320" y="80" width="180" height="100" rx="15" fill="rgba(39, 174, 96, 0.1)" stroke="#27ae60" strokeWidth="2"/>
      <text x="410" y="110" textAnchor="middle" fill="#27ae60" fontSize="16" fontWeight="600">Apache Flink</text>
      <text x="410" y="130" textAnchor="middle" fill="#27ae60" fontSize="12">Stream Processing</text>
      <text x="410" y="150" textAnchor="middle" fill="#27ae60" fontSize="11">Windowed Aggregation</text>
      <text x="410" y="165" textAnchor="middle" fill="#27ae60" fontSize="11">5-min Windows</text>
      
      {/* Event Classification */}
      <rect x="560" y="80" width="180" height="100" rx="15" fill="rgba(22, 160, 133, 0.1)" stroke="#16a085" strokeWidth="2"/>
      <text x="650" y="110" textAnchor="middle" fill="#16a085" fontSize="16" fontWeight="600">Event Router</text>
      <text x="650" y="130" textAnchor="middle" fill="#16a085" fontSize="12">Classification</text>
      <text x="650" y="150" textAnchor="middle" fill="#16a085" fontSize="11">Route by Type</text>
      <text x="650" y="165" textAnchor="middle" fill="#16a085" fontSize="11">Priority Queues</text>
      
      {/* Processing Queues */}
      <rect x="80" y="230" width="140" height="80" rx="10" fill="rgba(52, 152, 219, 0.1)" stroke="#3498db" strokeWidth="2"/>
      <text x="150" y="260" textAnchor="middle" fill="#3498db" fontSize="14" fontWeight="600">Code Queue</text>
      <text x="150" y="280" textAnchor="middle" fill="#3498db" fontSize="11">Complexity Analysis</text>
      <text x="150" y="295" textAnchor="middle" fill="#3498db" fontSize="11">Quality Metrics</text>
      
      <rect x="250" y="230" width="140" height="80" rx="10" fill="rgba(155, 89, 182, 0.1)" stroke="#9b59b6" strokeWidth="2"/>
      <text x="320" y="260" textAnchor="middle" fill="#9b59b6" fontSize="14" fontWeight="600">Behavior Queue</text>
      <text x="320" y="280" textAnchor="middle" fill="#9b59b6" fontSize="11">Pattern Analysis</text>
      <text x="320" y="295" textAnchor="middle" fill="#9b59b6" fontSize="11">Anomaly Detection</text>
      
      <rect x="420" y="230" width="140" height="80" rx="10" fill="rgba(230, 126, 34, 0.1)" stroke="#e67e22" strokeWidth="2"/>
      <text x="490" y="260" textAnchor="middle" fill="#e67e22" fontSize="14" fontWeight="600">NLP Queue</text>
      <text x="490" y="280" textAnchor="middle" fill="#e67e22" fontSize="11">Sentiment Analysis</text>
      <text x="490" y="295" textAnchor="middle" fill="#e67e22" fontSize="11">Intent Classification</text>
      
      <rect x="590" y="230" width="140" height="80" rx="10" fill="rgba(231, 76, 60, 0.1)" stroke="#e74c3c" strokeWidth="2"/>
      <text x="660" y="260" textAnchor="middle" fill="#e74c3c" fontSize="14" fontWeight="600">System Queue</text>
      <text x="660" y="280" textAnchor="middle" fill="#e74c3c" fontSize="11">Infrastructure</text>
      <text x="660" y="295" textAnchor="middle" fill="#e74c3c" fontSize="11">Monitoring</text>
      
      {/* Data Validation & Enrichment */}
      <rect x="780" y="130" width="160" height="120" rx="12" fill="rgba(142, 68, 173, 0.1)" stroke="#8e44ad" strokeWidth="2"/>
      <text x="860" y="160" textAnchor="middle" fill="#8e44ad" fontSize="15" fontWeight="600">Data Enrichment</text>
      <text x="860" y="180" textAnchor="middle" fill="#8e44ad" fontSize="11">• Context Lookup</text>
      <text x="860" y="195" textAnchor="middle" fill="#8e44ad" fontSize="11">• User Profiling</text>
      <text x="860" y="210" textAnchor="middle" fill="#8e44ad" fontSize="11">• Historical Patterns</text>
      <text x="860" y="225" textAnchor="middle" fill="#8e44ad" fontSize="11">• Metadata Addition</text>
      <text x="860" y="240" textAnchor="middle" fill="#8e44ad" fontSize="11">• Timezone Norm</text>
      
      {/* Processing Metrics */}
      <rect x="80" y="350" width="860" height="180" rx="15" fill="rgba(52, 73, 94, 0.05)" stroke="rgba(52, 73, 94, 0.2)" strokeWidth="1"/>
      <text x="510" y="380" textAnchor="middle" fill="#34495e" fontSize="18" fontWeight="600">Processing Performance Metrics</text>
      
      <text x="180" y="420" textAnchor="middle" fill="#2ecc71" fontSize="14">Kafka Throughput</text>
      <text x="180" y="440" textAnchor="middle" fill="#2ecc71" fontSize="18" fontWeight="700">10.5K msg/s</text>
      <text x="180" y="460" textAnchor="middle" fill="#2ecc71" fontSize="12">Avg Latency: 2ms</text>
      
      <text x="350" y="420" textAnchor="middle" fill="#27ae60" fontSize="14">Flink Processing</text>
      <text x="350" y="440" textAnchor="middle" fill="#27ae60" fontSize="18" fontWeight="700">8.8K events/s</text>
      <text x="350" y="460" textAnchor="middle" fill="#27ae60" fontSize="12">Window: 5min</text>
      
      <text x="520" y="420" textAnchor="middle" fill="#16a085" fontSize="14">Event Classification</text>
      <text x="520" y="440" textAnchor="middle" fill="#16a085" fontSize="18" fontWeight="700">95.2% Accuracy</text>
      <text x="520" y="460" textAnchor="middle" fill="#16a085" fontSize="12">Multi-class ML</text>
      
      <text x="690" y="420" textAnchor="middle" fill="#8e44ad" fontSize="14">Data Enrichment</text>
      <text x="690" y="440" textAnchor="middle" fill="#8e44ad" fontSize="18" fontWeight="700">85ms Avg</text>
      <text x="690" y="460" textAnchor="middle" fill="#8e44ad" fontSize="12">Context Addition</text>
      
      <text x="860" y="420" textAnchor="middle" fill="#e74c3c" fontSize="14">Error Rate</text>
      <text x="860" y="440" textAnchor="middle" fill="#e74c3c" fontSize="18" fontWeight="700">0.03%</text>
      <text x="860" y="460" textAnchor="middle" fill="#e74c3c" fontSize="12">Auto Recovery</text>
      
      {/* Flow Arrows */}
      <defs>
        <marker id="procArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <polygon points="0 0, 8 4, 0 8" fill="#2ecc71"/>
        </marker>
      </defs>
      
      <line x1="260" y1="130" x2="320" y2="130" stroke="#2ecc71" strokeWidth="3" markerEnd="url(#procArrow)"/>
      <line x1="500" y1="130" x2="560" y2="130" stroke="#27ae60" strokeWidth="3" markerEnd="url(#procArrow)"/>
      <line x1="740" y1="130" x2="780" y2="130" stroke="#16a085" strokeWidth="3" markerEnd="url(#procArrow)"/>
      
      <line x1="620" y1="180" x2="150" y2="230" stroke="#3498db" strokeWidth="2" markerEnd="url(#procArrow)"/>
      <line x1="630" y1="180" x2="320" y2="230" stroke="#9b59b6" strokeWidth="2" markerEnd="url(#procArrow)"/>
      <line x1="640" y1="180" x2="490" y2="230" stroke="#e67e22" strokeWidth="2" markerEnd="url(#procArrow)"/>
      <line x1="650" y1="180" x2="660" y2="230" stroke="#e74c3c" strokeWidth="2" markerEnd="url(#procArrow)"/>
    </svg>
  );

  const renderAIAnalysisSVG = () => (
    <svg viewBox="0 0 1200 600" className="ai-analysis">
      <defs>
        <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e74c3c" />
          <stop offset="50%" stopColor="#8e44ad" />
          <stop offset="100%" stopColor="#3498db" />
        </linearGradient>
        <radialGradient id="brainGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff6b6b" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#4ecdc4" stopOpacity="0.3" />
        </radialGradient>
      </defs>
      
      <text x="600" y="40" textAnchor="middle" fill="url(#aiGradient)" fontSize="20" fontWeight="700">AI Analysis Pipeline</text>
      
      {/* Cerebras AI Engine */}
      <rect x="80" y="80" width="200" height="120" rx="15" fill="rgba(231, 76, 60, 0.1)" stroke="#e74c3c" strokeWidth="3"/>
      <circle cx="180" cy="120" r="25" fill="url(#brainGradient)">
        <animate attributeName="r" values="20;30;20" dur="3s" repeatCount="indefinite"/>
      </circle>
      <text x="180" y="160" textAnchor="middle" fill="#e74c3c" fontSize="16" fontWeight="600">Cerebras CS-2</text>
      <text x="180" y="180" textAnchor="middle" fill="#e74c3c" fontSize="12">850K AI Cores</text>
      <text x="180" y="195" textAnchor="middle" fill="#e74c3c" fontSize="11">0.8ms Inference</text>
      
      {/* Llama NLP */}
      <rect x="320" y="80" width="200" height="120" rx="15" fill="rgba(142, 68, 173, 0.1)" stroke="#8e44ad" strokeWidth="3"/>
      <circle cx="420" cy="120" r="25" fill="rgba(142, 68, 173, 0.3)">
        <animate attributeName="r" values="22;28;22" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <text x="420" y="160" textAnchor="middle" fill="#8e44ad" fontSize="16" fontWeight="600">Llama 3.1</text>
      <text x="420" y="180" textAnchor="middle" fill="#8e44ad" fontSize="12">405B Parameters</text>
      <text x="420" y="195" textAnchor="middle" fill="#8e44ad" fontSize="11">128K Context</text>
      
      {/* Ensemble ML */}
      <rect x="560" y="80" width="200" height="120" rx="15" fill="rgba(52, 152, 219, 0.1)" stroke="#3498db" strokeWidth="3"/>
      <circle cx="660" cy="120" r="25" fill="rgba(52, 152, 219, 0.3)">
        <animate attributeName="r" values="25;32;25" dur="2s" repeatCount="indefinite"/>
      </circle>
      <text x="660" y="160" textAnchor="middle" fill="#3498db" fontSize="16" fontWeight="600">Ensemble ML</text>
      <text x="660" y="180" textAnchor="middle" fill="#3498db" fontSize="12">Multi-Model</text>
      <text x="660" y="195" textAnchor="middle" fill="#3498db" fontSize="11">Weighted Fusion</text>
      
      {/* Feature Extraction */}
      <rect x="800" y="80" width="180" height="120" rx="15" fill="rgba(46, 204, 113, 0.1)" stroke="#2ecc71" strokeWidth="3"/>
      <text x="890" y="110" textAnchor="middle" fill="#2ecc71" fontSize="15" fontWeight="600">Feature Vector</text>
      <text x="890" y="130" textAnchor="middle" fill="#2ecc71" fontSize="11">• Pattern Features (8D)</text>
      <text x="890" y="145" textAnchor="middle" fill="#2ecc71" fontSize="11">• Sentiment Scores (5D)</text>
      <text x="890" y="160" textAnchor="middle" fill="#2ecc71" fontSize="11">• Code Metrics (12D)</text>
      <text x="890" y="175" textAnchor="middle" fill="#2ecc71" fontSize="11">• Temporal Patterns (24D)</text>
      <text x="890" y="190" textAnchor="middle" fill="#2ecc71" fontSize="11">Total: 65 Dimensions</text>
      
      {/* Analysis Results */}
      <rect x="80" y="250" width="140" height="100" rx="12" fill="rgba(255, 193, 7, 0.1)" stroke="#ffc107" strokeWidth="2"/>
      <text x="150" y="280" textAnchor="middle" fill="#ffc107" fontSize="14" fontWeight="600">Stress Level</text>
      <circle cx="150" cy="310" r="20" fill="none" stroke="#ffc107" strokeWidth="4">
        <circle cx="150" cy="310" r="15" fill="#ffc107" opacity="0.3"/>
      </circle>
      <text x="150" y="315" textAnchor="middle" fill="#ffc107" fontSize="12" fontWeight="700">42%</text>
      
      <rect x="250" y="250" width="140" height="100" rx="12" fill="rgba(231, 76, 60, 0.1)" stroke="#e74c3c" strokeWidth="2"/>
      <text x="320" y="280" textAnchor="middle" fill="#e74c3c" fontSize="14" fontWeight="600">Burnout Risk</text>
      <circle cx="320" cy="310" r="20" fill="none" stroke="#e74c3c" strokeWidth="4">
        <circle cx="320" cy="310" r="8" fill="#e74c3c" opacity="0.3"/>
      </circle>
      <text x="320" y="315" textAnchor="middle" fill="#e74c3c" fontSize="12" fontWeight="700">18%</text>
      
      <rect x="420" y="250" width="140" height="100" rx="12" fill="rgba(52, 152, 219, 0.1)" stroke="#3498db" strokeWidth="2"/>
      <text x="490" y="280" textAnchor="middle" fill="#3498db" fontSize="14" fontWeight="600">Flow State</text>
      <circle cx="490" cy="310" r="20" fill="none" stroke="#3498db" strokeWidth="4">
        <circle cx="490" cy="310" r="17" fill="#3498db" opacity="0.3"/>
      </circle>
      <text x="490" y="315" textAnchor="middle" fill="#3498db" fontSize="12" fontWeight="700">85%</text>
      
      <rect x="590" y="250" width="140" height="100" rx="12" fill="rgba(46, 204, 113, 0.1)" stroke="#2ecc71" strokeWidth="2"/>
      <text x="660" y="280" textAnchor="middle" fill="#2ecc71" fontSize="14" fontWeight="600">Wellness</text>
      <circle cx="660" cy="310" r="20" fill="none" stroke="#2ecc71" strokeWidth="4">
        <circle cx="660" cy="310" r="16" fill="#2ecc71" opacity="0.3"/>
      </circle>
      <text x="660" y="315" textAnchor="middle" fill="#2ecc71" fontSize="12" fontWeight="700">78%</text>
      
      <rect x="760" y="250" width="140" height="100" rx="12" fill="rgba(155, 89, 182, 0.1)" stroke="#9b59b6" strokeWidth="2"/>
      <text x="830" y="280" textAnchor="middle" fill="#9b59b6" fontSize="14" fontWeight="600">Cognitive Load</text>
      <circle cx="830" cy="310" r="20" fill="none" stroke="#9b59b6" strokeWidth="4">
        <circle cx="830" cy="310" r="11" fill="#9b59b6" opacity="0.3"/>
      </circle>
      <text x="830" y="315" textAnchor="middle" fill="#9b59b6" fontSize="12" fontWeight="700">57%</text>
      
      {/* Model Performance */}
      <rect x="80" y="380" width="820" height="160" rx="15" fill="rgba(44, 62, 80, 0.05)" stroke="rgba(44, 62, 80, 0.2)" strokeWidth="1"/>
      <text x="490" y="410" textAnchor="middle" fill="#2c3e50" fontSize="18" fontWeight="600">AI Model Performance</text>
      
      <text x="180" y="450" textAnchor="middle" fill="#e74c3c" fontSize="14">Cerebras Processing</text>
      <text x="180" y="470" textAnchor="middle" fill="#e74c3c" fontSize="18" fontWeight="700">850K cores</text>
      <text x="180" y="490" textAnchor="middle" fill="#e74c3c" fontSize="12">0.8ms inference</text>
      <text x="180" y="505" textAnchor="middle" fill="#e74c3c" fontSize="12">97.3% accuracy</text>
      
      <text x="350" y="450" textAnchor="middle" fill="#8e44ad" fontSize="14">Llama NLP</text>
      <text x="350" y="470" textAnchor="middle" fill="#8e44ad" fontSize="18" fontWeight="700">405B params</text>
      <text x="350" y="490" textAnchor="middle" fill="#8e44ad" fontSize="12">15ms inference</text>
      <text x="350" y="505" textAnchor="middle" fill="#8e44ad" fontSize="12">94.8% accuracy</text>
      
      <text x="520" y="450" textAnchor="middle" fill="#3498db" fontSize="14">Ensemble ML</text>
      <text x="520" y="470" textAnchor="middle" fill="#3498db" fontSize="18" fontWeight="700">4 models</text>
      <text x="520" y="490" textAnchor="middle" fill="#3498db" fontSize="12">200ms total</text>
      <text x="520" y="505" textAnchor="middle" fill="#3498db" fontSize="12">96.7% precision</text>
      
      <text x="690" y="450" textAnchor="middle" fill="#2ecc71" fontSize="14">Feature Fusion</text>
      <text x="690" y="470" textAnchor="middle" fill="#2ecc71" fontSize="18" fontWeight="700">65D vector</text>
      <text x="690" y="490" textAnchor="middle" fill="#2ecc71" fontSize="12">50ms fusion</text>
      <text x="690" y="505" textAnchor="middle" fill="#2ecc71" fontSize="12">Real-time</text>
      
      {/* Processing Flow */}
      <defs>
        <marker id="aiArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="url(#aiGradient)"/>
        </marker>
      </defs>
      
      <line x1="280" y1="140" x2="320" y2="140" stroke="url(#aiGradient)" strokeWidth="3" markerEnd="url(#aiArrow)"/>
      <line x1="520" y1="140" x2="560" y2="140" stroke="url(#aiGradient)" strokeWidth="3" markerEnd="url(#aiArrow)"/>
      <line x1="760" y1="140" x2="800" y2="140" stroke="url(#aiGradient)" strokeWidth="3" markerEnd="url(#aiArrow)"/>
      
      <line x1="180" y1="200" x2="150" y2="250" stroke="#ffc107" strokeWidth="2" markerEnd="url(#aiArrow)"/>
      <line x1="420" y1="200" x2="320" y2="250" stroke="#e74c3c" strokeWidth="2" markerEnd="url(#aiArrow)"/>
      <line x1="660" y1="200" x2="490" y2="250" stroke="#3498db" strokeWidth="2" markerEnd="url(#aiArrow)"/>
      <line x1="890" y1="200" x2="660" y2="250" stroke="#2ecc71" strokeWidth="2" markerEnd="url(#aiArrow)"/>
      <line x1="890" y1="200" x2="830" y2="250" stroke="#9b59b6" strokeWidth="2" markerEnd="url(#aiArrow)"/>
    </svg>
  );

  const renderOutputDeliverySVG = () => (
    <svg viewBox="0 0 1200 600" className="output-delivery">
      <defs>
        <linearGradient id="outputGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9b59b6" />
          <stop offset="50%" stopColor="#e67e22" />
          <stop offset="100%" stopColor="#e74c3c" />
        </linearGradient>
        <radialGradient id="notificationGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f39c12" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#e67e22" stopOpacity="0.2" />
        </radialGradient>
      </defs>
      
      <text x="600" y="40" textAnchor="middle" fill="url(#outputGradient)" fontSize="20" fontWeight="700">Output Delivery System</text>
      
      {/* Central Notification Hub */}
      <rect x="450" y="80" width="200" height="100" rx="15" fill="rgba(243, 156, 18, 0.1)" stroke="#f39c12" strokeWidth="3"/>
      <circle cx="550" cy="130" r="30" fill="url(#notificationGlow)">
        <animate attributeName="r" values="25;35;25" dur="2s" repeatCount="indefinite"/>
      </circle>
      <text x="550" y="135" textAnchor="middle" fill="#f39c12" fontSize="16" fontWeight="700">Notification Hub</text>
      
      {/* Web Dashboard */}
      <rect x="100" y="220" width="180" height="120" rx="12" fill="rgba(52, 152, 219, 0.1)" stroke="#3498db" strokeWidth="2"/>
      <rect x="120" y="240" width="140" height="80" rx="5" fill="#3498db" opacity="0.1"/>
      <text x="190" y="270" textAnchor="middle" fill="#3498db" fontSize="15" fontWeight="600">Web Dashboard</text>
      <text x="190" y="290" textAnchor="middle" fill="#3498db" fontSize="11">• Real-time Charts</text>
      <text x="190" y="305" textAnchor="middle" fill="#3498db" fontSize="11">• Wellness Metrics</text>
      <text x="190" y="320" textAnchor="middle" fill="#3498db" fontSize="11">• Historical Trends</text>
      
      {/* Mobile App */}
      <rect x="320" y="220" width="140" height="120" rx="20" fill="rgba(46, 204, 113, 0.1)" stroke="#2ecc71" strokeWidth="2"/>
      <rect x="335" y="235" width="110" height="90" rx="8" fill="#2ecc71" opacity="0.1"/>
      <text x="390" y="265" textAnchor="middle" fill="#2ecc71" fontSize="15" fontWeight="600">Mobile App</text>
      <text x="390" y="285" textAnchor="middle" fill="#2ecc71" fontSize="11">• Push Notifications</text>
      <text x="390" y="300" textAnchor="middle" fill="#2ecc71" fontSize="11">• Quick Check-ins</text>
      <text x="390" y="315" textAnchor="middle" fill="#2ecc71" fontSize="11">• Daily Summaries</text>
      
      {/* IDE Extensions */}
      <rect x="500" y="220" width="180" height="120" rx="12" fill="rgba(155, 89, 182, 0.1)" stroke="#9b59b6" strokeWidth="2"/>
      <rect x="520" y="240" width="140" height="30" rx="3" fill="#9b59b6" opacity="0.1"/>
      <text x="590" y="285" textAnchor="middle" fill="#9b59b6" fontSize="15" fontWeight="600">IDE Extensions</text>
      <text x="590" y="305" textAnchor="middle" fill="#9b59b6" fontSize="11">• VS Code Plugin</text>
      <text x="590" y="320" textAnchor="middle" fill="#9b59b6" fontSize="11">• IntelliJ Plugin</text>
      
      {/* Team Integrations */}
      <rect x="720" y="220" width="180" height="120" rx="12" fill="rgba(230, 126, 34, 0.1)" stroke="#e67e22" strokeWidth="2"/>
      <circle cx="810" cy="250" r="15" fill="#e67e22" opacity="0.2"/>
      <text x="810" y="285" textAnchor="middle" fill="#e67e22" fontSize="15" fontWeight="600">Team Tools</text>
      <text x="810" y="305" textAnchor="middle" fill="#e67e22" fontSize="11">• Slack Integration</text>
      <text x="810" y="320" textAnchor="middle" fill="#e67e22" fontSize="11">• Jira Notifications</text>
      
      {/* Manager Dashboard */}
      <rect x="950" y="220" width="180" height="120" rx="12" fill="rgba(231, 76, 60, 0.1)" stroke="#e74c3c" strokeWidth="2"/>
      <rect x="970" y="240" width="140" height="80" rx="5" fill="#e74c3c" opacity="0.1"/>
      <text x="1040" y="270" textAnchor="middle" fill="#e74c3c" fontSize="15" fontWeight="600">Manager View</text>
      <text x="1040" y="290" textAnchor="middle" fill="#e74c3c" fontSize="11">• Team Wellness</text>
      <text x="1040" y="305" textAnchor="middle" fill="#e74c3c" fontSize="11">• Alert Escalation</text>
      <text x="1040" y="320" textAnchor="middle" fill="#e74c3c" fontSize="11">• Reports</text>
      
      {/* Delivery Metrics */}
      <rect x="100" y="380" width="1030" height="160" rx="15" fill="rgba(52, 73, 94, 0.05)" stroke="rgba(52, 73, 94, 0.2)" strokeWidth="1"/>
      <text x="615" y="410" textAnchor="middle" fill="#34495e" fontSize="18" fontWeight="600">Delivery Performance & User Engagement</text>
      
      <text x="200" y="450" textAnchor="middle" fill="#3498db" fontSize="14">Web Dashboard</text>
      <text x="200" y="470" textAnchor="middle" fill="#3498db" fontSize="18" fontWeight="700">2.3K users</text>
      <text x="200" y="490" textAnchor="middle" fill="#3498db" fontSize="12">85% daily active</text>
      <text x="200" y="505" textAnchor="middle" fill="#3498db" fontSize="12">4.2min avg session</text>
      
      <text x="350" y="450" textAnchor="middle" fill="#2ecc71" fontSize="14">Mobile App</text>
      <text x="350" y="470" textAnchor="middle" fill="#2ecc71" fontSize="18" fontWeight="700">1.8K users</text>
      <text x="350" y="490" textAnchor="middle" fill="#2ecc71" fontSize="12">92% push open rate</text>
      <text x="350" y="505" textAnchor="middle" fill="#2ecc71" fontSize="12">3.7 checks/day</text>
      
      <text x="500" y="450" textAnchor="middle" fill="#9b59b6" fontSize="14">IDE Extensions</text>
      <text x="500" y="470" textAnchor="middle" fill="#9b59b6" fontSize="18" fontWeight="700">5.1K users</text>
      <text x="500" y="490" textAnchor="middle" fill="#9b59b6" fontSize="12">78% active coding</text>
      <text x="500" y="505" textAnchor="middle" fill="#9b59b6" fontSize="12">12ms response</text>
      
      <text x="650" y="450" textAnchor="middle" fill="#e67e22" fontSize="14">Team Tools</text>
      <text x="650" y="470" textAnchor="middle" fill="#e67e22" fontSize="18" fontWeight="700">840 teams</text>
      <text x="650" y="490" textAnchor="middle" fill="#e67e22" fontSize="12">Slack: 95% delivery</text>
      <text x="650" y="505" textAnchor="middle" fill="#e67e22" fontSize="12">Jira: 87% delivery</text>
      
      <text x="800" y="450" textAnchor="middle" fill="#e74c3c" fontSize="14">Manager Views</text>
      <text x="800" y="470" textAnchor="middle" fill="#e74c3c" fontSize="18" fontWeight="700">420 managers</text>
      <text x="800" y="490" textAnchor="middle" fill="#e74c3c" fontSize="12">Weekly reports</text>
      <text x="800" y="505" textAnchor="middle" fill="#e74c3c" fontSize="12">73% engagement</text>
      
      <text x="950" y="450" textAnchor="middle" fill="#f39c12" fontSize="14">Notifications</text>
      <text x="950" y="470" textAnchor="middle" fill="#f39c12" fontSize="18" fontWeight="700">945/sec</text>
      <text x="950" y="490" textAnchor="middle" fill="#f39c12" fontSize="12">Multi-channel</text>
      <text x="950" y="505" textAnchor="middle" fill="#f39c12" fontSize="12">Context-aware</text>
      
      <text x="1100" y="450" textAnchor="middle" fill="#16a085" fontSize="14">Response Time</text>
      <text x="1100" y="470" textAnchor="middle" fill="#16a085" fontSize="18" fontWeight="700">15ms avg</text>
      <text x="1100" y="490" textAnchor="middle" fill="#16a085" fontSize="12">99.7% uptime</text>
      <text x="1100" y="505" textAnchor="middle" fill="#16a085" fontSize="12">Global CDN</text>
      
      {/* Delivery Flow */}
      <defs>
        <marker id="deliveryArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="url(#outputGradient)"/>
        </marker>
      </defs>
      
      <line x1="500" y1="180" x2="190" y2="220" stroke="url(#outputGradient)" strokeWidth="3" markerEnd="url(#deliveryArrow)"/>
      <line x1="520" y1="180" x2="390" y2="220" stroke="url(#outputGradient)" strokeWidth="3" markerEnd="url(#deliveryArrow)"/>
      <line x1="580" y1="180" x2="590" y2="220" stroke="url(#outputGradient)" strokeWidth="3" markerEnd="url(#deliveryArrow)"/>
      <line x1="600" y1="180" x2="810" y2="220" stroke="url(#outputGradient)" strokeWidth="3" markerEnd="url(#deliveryArrow)"/>
      <line x1="620" y1="180" x2="1040" y2="220" stroke="url(#outputGradient)" strokeWidth="3" markerEnd="url(#deliveryArrow)"/>
    </svg>
  );

  return (
    <FlowAnalysisContainer>
      <FlowContent>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader>
            <Title>
              <i className="fas fa-stream"></i>
              System Flow Analysis
            </Title>
            <ProcessingStatus>
              {isProcessing && <div className="spinner" />}
              <span>{isProcessing ? 'Processing...' : 'Live System'}</span>
            </ProcessingStatus>
          </SectionHeader>
        </motion.div>
        
        <FlowControls>
          {flowViews.map((view, index) => (
            <motion.div
              key={view.key}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ControlButton
                active={activeView === view.key}
                onClick={() => {
                  setActiveView(view.key);
                  setIsProcessing(true);
                  setTimeout(() => setIsProcessing(false), 1500);
                }}
              >
                <i className={view.icon}></i>
                {view.label}
              </ControlButton>
            </motion.div>
          ))}
        </FlowControls>
        
        <FlowGrid>
          <FlowCard className="full-width">
            <CardHeader>
              <CardTitle>
                <i className="fas fa-project-diagram"></i>
                Interactive System Flow Visualization
              </CardTitle>
            </CardHeader>
            
            <SVGContainer>
              {activeView === 'overview' && renderFlowOverviewSVG()}
              {activeView === 'realtime' && renderRealTimeFlowSVG()}
              {activeView === 'processing' && renderDataProcessingSVG()}
              {activeView === 'ai-analysis' && renderAIAnalysisSVG()}
              {activeView === 'output' && renderOutputDeliverySVG()}
            </SVGContainer>
            
            <MetricsGrid>
              <Metric>
                <div className="metric-value">{'<'} 2s</div>
                <div className="metric-label">End-to-End Latency</div>
              </Metric>
              <Metric>
                <div className="metric-value">10K+</div>
                <div className="metric-label">Events/Second</div>
              </Metric>
              <Metric>
                <div className="metric-value">99.9%</div>
                <div className="metric-label">System Uptime</div>
              </Metric>
              <Metric>
                <div className="metric-value">{'<'} 50ms</div>
                <div className="metric-label">API Response</div>
              </Metric>
              <Metric>
                <div className="metric-value">8</div>
                <div className="metric-label">Processing Stages</div>
              </Metric>
            </MetricsGrid>
          </FlowCard>
        </FlowGrid>
      </FlowContent>
    </FlowAnalysisContainer>
  );
};

export default SystemFlowAnalysisSD;