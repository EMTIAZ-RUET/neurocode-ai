import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const DeploymentContainer = styled.section`
  padding: ${props => props.theme?.spacing?.['2xl'] || '2rem'} 0;
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
`;

const DeploymentContent = styled.div`
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

const SectionTitle = styled.h2`
  color: #34495e;
  border-left: 5px solid #3498db;
  padding-left: 20px;
  margin-top: 40px;
  font-size: 1.8em;
`;

const DeploymentCard = styled.div`
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  border: 2px solid #2196f3;
  border-radius: 12px;
  padding: 25px;
  margin: 20px 0;
`;

const CardTitle = styled.h3`
  color: #0d47a1;
  margin-bottom: 15px;
`;

const OverviewSection = styled.div`
  background: #f3e5f5;
  border: 2px solid #9c27b0;
  padding: 25px;
  border-radius: 15px;
  margin: 30px 0;
  
  h3 {
    margin-top: 0;
    color: #6a1b9a;
  }
  
  p {
    color: #4a148c;
  }
`;

const DeploymentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
`;

const PipelineStep = styled.div`
  background: white;
  border-left: 4px solid #2196f3;
  padding: 15px;
  margin: 10px 0;
  border-radius: 0 8px 8px 0;
`;

const DeploymentControls = styled.div`
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

const StepNumber = styled.span`
  background: #2196f3;
  color: white;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9em;
  font-weight: bold;
  margin-right: 10px;
`;

const DeploymentOperationsSD = () => {
  const [activeView, setActiveView] = useState('pipeline');

  const views = [
    { key: 'pipeline', label: 'CI/CD Pipeline', icon: 'fas fa-code-branch' },
    { key: 'infrastructure', label: 'Infrastructure', icon: 'fas fa-server' },
    { key: 'monitoring', label: 'Monitoring', icon: 'fas fa-chart-line' },
    { key: 'security', label: 'Security', icon: 'fas fa-shield-alt' }
  ];

  const renderPipelineSVG = () => (
    <svg viewBox="0 0 1400 600" className="pipeline-diagram">
      <defs>
        <linearGradient id="pipelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3498db" />
          <stop offset="25%" stopColor="#2ecc71" />
          <stop offset="50%" stopColor="#f39c12" />
          <stop offset="75%" stopColor="#e74c3c" />
          <stop offset="100%" stopColor="#9b59b6" />
        </linearGradient>
        <marker id="pipelineArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#3498db" />
        </marker>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <text x="700" y="40" textAnchor="middle" fill="#3498db" fontSize="24" fontWeight="700">CI/CD Pipeline Flow</text>
      
      {/* Main Pipeline Flow */}
      <line x1="50" y1="300" x2="1350" y2="300" stroke="url(#pipelineGradient)" strokeWidth="8" markerEnd="url(#pipelineArrow)" filter="url(#glow)" />
      
      {/* Stage 1: Source Control */}
      <g transform="translate(100, 200)">
        <rect width="120" height="80" rx="15" fill="rgba(52, 152, 219, 0.1)" stroke="#3498db" strokeWidth="3" />
        <text x="60" y="25" textAnchor="middle" fill="#3498db" fontSize="12" fontWeight="600">Source Control</text>
        <text x="60" y="45" textAnchor="middle" fill="#3498db" fontSize="10">Git Push</text>
        <text x="60" y="60" textAnchor="middle" fill="#3498db" fontSize="10">GitHub Actions</text>
        <circle cx="60" cy="100" r="8" fill="#3498db" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>
      
      {/* Stage 2: Code Quality */}
      <g transform="translate(280, 200)">
        <rect width="120" height="80" rx="15" fill="rgba(46, 204, 113, 0.1)" stroke="#2ecc71" strokeWidth="3" />
        <text x="60" y="25" textAnchor="middle" fill="#2ecc71" fontSize="12" fontWeight="600">Code Quality</text>
        <text x="60" y="45" textAnchor="middle" fill="#2ecc71" fontSize="10">ESLint</text>
        <text x="60" y="60" textAnchor="middle" fill="#2ecc71" fontSize="10">SonarQube</text>
        <circle cx="60" cy="100" r="8" fill="#2ecc71" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" begin="0.5s" repeatCount="indefinite" />
        </circle>
      </g>
      
      {/* Stage 3: Testing */}
      <g transform="translate(460, 200)">
        <rect width="120" height="80" rx="15" fill="rgba(243, 156, 18, 0.1)" stroke="#f39c12" strokeWidth="3" />
        <text x="60" y="25" textAnchor="middle" fill="#f39c12" fontSize="12" fontWeight="600">Testing</text>
        <text x="60" y="45" textAnchor="middle" fill="#f39c12" fontSize="10">Unit Tests</text>
        <text x="60" y="60" textAnchor="middle" fill="#f39c12" fontSize="10">Integration</text>
        <circle cx="60" cy="100" r="8" fill="#f39c12" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" begin="1s" repeatCount="indefinite" />
        </circle>
      </g>
      
      {/* Stage 4: Build */}
      <g transform="translate(640, 200)">
        <rect width="120" height="80" rx="15" fill="rgba(231, 76, 60, 0.1)" stroke="#e74c3c" strokeWidth="3" />
        <text x="60" y="25" textAnchor="middle" fill="#e74c3c" fontSize="12" fontWeight="600">Build</text>
        <text x="60" y="45" textAnchor="middle" fill="#e74c3c" fontSize="10">Docker Images</text>
        <text x="60" y="60" textAnchor="middle" fill="#e74c3c" fontSize="10">Dependencies</text>
        <circle cx="60" cy="100" r="8" fill="#e74c3c" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" begin="1.5s" repeatCount="indefinite" />
        </circle>
      </g>
      
      {/* Stage 5: Security */}
      <g transform="translate(820, 200)">
        <rect width="120" height="80" rx="15" fill="rgba(155, 89, 182, 0.1)" stroke="#9b59b6" strokeWidth="3" />
        <text x="60" y="25" textAnchor="middle" fill="#9b59b6" fontSize="12" fontWeight="600">Security</text>
        <text x="60" y="45" textAnchor="middle" fill="#9b59b6" fontSize="10">Vulnerability</text>
        <text x="60" y="60" textAnchor="middle" fill="#9b59b6" fontSize="10">Scanning</text>
        <circle cx="60" cy="100" r="8" fill="#9b59b6" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" begin="2s" repeatCount="indefinite" />
        </circle>
      </g>
      
      {/* Stage 6: Staging */}
      <g transform="translate(1000, 120)">
        <rect width="100" height="60" rx="12" fill="rgba(26, 188, 156, 0.1)" stroke="#1abc9c" strokeWidth="2" />
        <text x="50" y="20" textAnchor="middle" fill="#1abc9c" fontSize="11" fontWeight="600">Staging</text>
        <text x="50" y="35" textAnchor="middle" fill="#1abc9c" fontSize="9">Environment</text>
        <text x="50" y="50" textAnchor="middle" fill="#1abc9c" fontSize="9">Testing</text>
      </g>
      
      {/* Stage 7: Production */}
      <g transform="translate(1180, 120)">
        <rect width="100" height="60" rx="12" fill="rgba(231, 76, 60, 0.1)" stroke="#e74c3c" strokeWidth="2" />
        <text x="50" y="20" textAnchor="middle" fill="#e74c3c" fontSize="11" fontWeight="600">Production</text>
        <text x="50" y="35" textAnchor="middle" fill="#e74c3c" fontSize="9">Blue-Green</text>
        <text x="50" y="50" textAnchor="middle" fill="#e74c3c" fontSize="9">Deployment</text>
      </g>
      
      {/* Pipeline Flow Arrows */}
      <path d="M220 240 Q250 220 280 240" stroke="#3498db" strokeWidth="3" fill="none" markerEnd="url(#pipelineArrow)" />
      <path d="M400 240 Q430 220 460 240" stroke="#2ecc71" strokeWidth="3" fill="none" markerEnd="url(#pipelineArrow)" />
      <path d="M580 240 Q610 220 640 240" stroke="#f39c12" strokeWidth="3" fill="none" markerEnd="url(#pipelineArrow)" />
      <path d="M760 240 Q790 220 820 240" stroke="#e74c3c" strokeWidth="3" fill="none" markerEnd="url(#pipelineArrow)" />
      <path d="M940 240 Q970 200 1000 180" stroke="#9b59b6" strokeWidth="3" fill="none" markerEnd="url(#pipelineArrow)" />
      <path d="M1100 150 Q1140 140 1180 150" stroke="#1abc9c" strokeWidth="3" fill="none" markerEnd="url(#pipelineArrow)" />
      
      {/* Status Indicators */}
      <g transform="translate(100, 400)">
        <rect width="1200" height="100" rx="15" fill="rgba(52, 73, 94, 0.05)" stroke="rgba(52, 73, 94, 0.2)" strokeWidth="1" />
        <text x="600" y="30" textAnchor="middle" fill="#34495e" fontSize="18" fontWeight="600">Pipeline Status &amp; Metrics</text>
        
        <text x="150" y="60" textAnchor="middle" fill="#27ae60" fontSize="14" fontWeight="600">✓ Build: 8min 32s</text>
        <text x="350" y="60" textAnchor="middle" fill="#3498db" fontSize="14" fontWeight="600">⏳ Tests: 2min 15s</text>
        <text x="550" y="60" textAnchor="middle" fill="#f39c12" fontSize="14" fontWeight="600">📊 Coverage: 94%</text>
        <text x="750" y="60" textAnchor="middle" fill="#e74c3c" fontSize="14" fontWeight="600">🔒 Security: Pass</text>
        <text x="950" y="60" textAnchor="middle" fill="#9b59b6" fontSize="14" fontWeight="600">🚀 Deploy: Ready</text>
        <text x="1150" y="60" textAnchor="middle" fill="#1abc9c" fontSize="14" fontWeight="600">📈 Success: 98.7%</text>
        
        <text x="300" y="85" textAnchor="middle" fill="#7f8c8d" fontSize="12">Last Deploy: 2 hours ago</text>
        <text x="600" y="85" textAnchor="middle" fill="#7f8c8d" fontSize="12">Average Pipeline Time: 12 minutes</text>
        <text x="900" y="85" textAnchor="middle" fill="#7f8c8d" fontSize="12">Next Deployment: Scheduled for 18:00</text>
      </g>
    </svg>
  );

  const renderInfrastructureSVG = () => (
    <svg viewBox="0 0 1400 600" className="infrastructure-diagram">
      <defs>
        <linearGradient id="infraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3498db" />
          <stop offset="50%" stopColor="#2ecc71" />
          <stop offset="100%" stopColor="#f39c12" />
        </linearGradient>
        <marker id="infraArrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#3498db" />
        </marker>
      </defs>
      
      <text x="700" y="40" textAnchor="middle" fill="#3498db" fontSize="24" fontWeight="700">Infrastructure Architecture</text>
      
      {/* Cloud Infrastructure */}
      <rect x="100" y="80" width="300" height="180" rx="15" fill="rgba(52, 152, 219, 0.1)" stroke="#3498db" strokeWidth="3" />
      <text x="250" y="110" textAnchor="middle" fill="#3498db" fontSize="18" fontWeight="600">AWS Cloud Platform</text>
      <rect x="120" y="130" width="260" height="40" rx="8" fill="rgba(52, 152, 219, 0.2)" />
      <text x="250" y="155" textAnchor="middle" fill="#3498db" fontSize="14">EKS Kubernetes Clusters</text>
      <rect x="120" y="180" width="120" height="30" rx="5" fill="rgba(52, 152, 219, 0.15)" />
      <text x="180" y="200" textAnchor="middle" fill="#3498db" fontSize="12">ALB</text>
      <rect x="260" y="180" width="120" height="30" rx="5" fill="rgba(52, 152, 219, 0.15)" />
      <text x="320" y="200" textAnchor="middle" fill="#3498db" fontSize="12">Auto Scaling</text>
      <rect x="120" y="220" width="80" height="30" rx="5" fill="rgba(52, 152, 219, 0.15)" />
      <text x="160" y="240" textAnchor="middle" fill="#3498db" fontSize="11">CloudFront</text>
      <rect x="220" y="220" width="80" height="30" rx="5" fill="rgba(52, 152, 219, 0.15)" />
      <text x="260" y="240" textAnchor="middle" fill="#3498db" fontSize="11">Route53</text>
      <rect x="320" y="220" width="60" height="30" rx="5" fill="rgba(52, 152, 219, 0.15)" />
      <text x="350" y="240" textAnchor="middle" fill="#3498db" fontSize="11">VPC</text>
      
      {/* Microservices Layer */}
      <rect x="500" y="80" width="350" height="180" rx="15" fill="rgba(46, 204, 113, 0.1)" stroke="#2ecc71" strokeWidth="3" />
      <text x="675" y="110" textAnchor="middle" fill="#2ecc71" fontSize="18" fontWeight="600">Microservices Architecture</text>
      <rect x="520" y="130" width="100" height="50" rx="8" fill="rgba(46, 204, 113, 0.2)" />
      <text x="570" y="150" textAnchor="middle" fill="#2ecc71" fontSize="12" fontWeight="600">API Gateway</text>
      <text x="570" y="165" textAnchor="middle" fill="#2ecc71" fontSize="10">Kong/Istio</text>
      
      <rect x="640" y="130" width="80" height="50" rx="8" fill="rgba(46, 204, 113, 0.2)" />
      <text x="680" y="150" textAnchor="middle" fill="#2ecc71" fontSize="12" fontWeight="600">Auth Service</text>
      <text x="680" y="165" textAnchor="middle" fill="#2ecc71" fontSize="10">JWT/OAuth</text>
      
      <rect x="740" y="130" width="90" height="50" rx="8" fill="rgba(46, 204, 113, 0.2)" />
      <text x="785" y="150" textAnchor="middle" fill="#2ecc71" fontSize="12" fontWeight="600">AI Service</text>
      <text x="785" y="165" textAnchor="middle" fill="#2ecc71" fontSize="10">ML Pipeline</text>
      
      <rect x="520" y="190" width="90" height="50" rx="8" fill="rgba(46, 204, 113, 0.2)" />
      <text x="565" y="210" textAnchor="middle" fill="#2ecc71" fontSize="12" fontWeight="600">Data Service</text>
      <text x="565" y="225" textAnchor="middle" fill="#2ecc71" fontSize="10">Processing</text>
      
      <rect x="630" y="190" width="90" height="50" rx="8" fill="rgba(46, 204, 113, 0.2)" />
      <text x="675" y="210" textAnchor="middle" fill="#2ecc71" fontSize="12" fontWeight="600">Notification</text>
      <text x="675" y="225" textAnchor="middle" fill="#2ecc71" fontSize="10">Real-time</text>
      
      <rect x="740" y="190" width="90" height="50" rx="8" fill="rgba(46, 204, 113, 0.2)" />
      <text x="785" y="210" textAnchor="middle" fill="#2ecc71" fontSize="12" fontWeight="600">Analytics</text>
      <text x="785" y="225" textAnchor="middle" fill="#2ecc71" fontSize="10">Metrics</text>
      
      {/* Data & Storage Layer */}
      <rect x="950" y="80" width="300" height="180" rx="15" fill="rgba(243, 156, 18, 0.1)" stroke="#f39c12" strokeWidth="3" />
      <text x="1100" y="110" textAnchor="middle" fill="#f39c12" fontSize="18" fontWeight="600">Data & Storage</text>
      <rect x="970" y="130" width="120" height="50" rx="8" fill="rgba(243, 156, 18, 0.2)" />
      <text x="1030" y="150" textAnchor="middle" fill="#f39c12" fontSize="12" fontWeight="600">TimescaleDB</text>
      <text x="1030" y="165" textAnchor="middle" fill="#f39c12" fontSize="10">Time Series</text>
      
      <rect x="1110" y="130" width="120" height="50" rx="8" fill="rgba(243, 156, 18, 0.2)" />
      <text x="1170" y="150" textAnchor="middle" fill="#f39c12" fontSize="12" fontWeight="600">Redis Cluster</text>
      <text x="1170" y="165" textAnchor="middle" fill="#f39c12" fontSize="10">Caching</text>
      
      <rect x="970" y="190" width="120" height="50" rx="8" fill="rgba(243, 156, 18, 0.2)" />
      <text x="1030" y="210" textAnchor="middle" fill="#f39c12" fontSize="12" fontWeight="600">S3 Storage</text>
      <text x="1030" y="225" textAnchor="middle" fill="#f39c12" fontSize="10">Object Store</text>
      
      <rect x="1110" y="190" width="120" height="50" rx="8" fill="rgba(243, 156, 18, 0.2)" />
      <text x="1170" y="210" textAnchor="middle" fill="#f39c12" fontSize="12" fontWeight="600">Kafka</text>
      <text x="1170" y="225" textAnchor="middle" fill="#f39c12" fontSize="10">Streaming</text>
      
      {/* Monitoring & Security Layer */}
      <rect x="200" y="320" width="900" height="120" rx="15" fill="rgba(155, 89, 182, 0.1)" stroke="#9b59b6" strokeWidth="2" />
      <text x="650" y="350" textAnchor="middle" fill="#9b59b6" fontSize="18" fontWeight="600">Monitoring & Security</text>
      
      <rect x="220" y="370" width="140" height="50" rx="8" fill="rgba(155, 89, 182, 0.2)" />
      <text x="290" y="390" textAnchor="middle" fill="#9b59b6" fontSize="12" fontWeight="600">Prometheus</text>
      <text x="290" y="405" textAnchor="middle" fill="#9b59b6" fontSize="10">Metrics</text>
      
      <rect x="380" y="370" width="140" height="50" rx="8" fill="rgba(155, 89, 182, 0.2)" />
      <text x="450" y="390" textAnchor="middle" fill="#9b59b6" fontSize="12" fontWeight="600">Grafana</text>
      <text x="450" y="405" textAnchor="middle" fill="#9b59b6" fontSize="10">Dashboards</text>
      
      <rect x="540" y="370" width="140" height="50" rx="8" fill="rgba(155, 89, 182, 0.2)" />
      <text x="610" y="390" textAnchor="middle" fill="#9b59b6" fontSize="12" fontWeight="600">Jaeger</text>
      <text x="610" y="405" textAnchor="middle" fill="#9b59b6" fontSize="10">Tracing</text>
      
      <rect x="700" y="370" width="140" height="50" rx="8" fill="rgba(155, 89, 182, 0.2)" />
      <text x="770" y="390" textAnchor="middle" fill="#9b59b6" fontSize="12" fontWeight="600">Falco</text>
      <text x="770" y="405" textAnchor="middle" fill="#9b59b6" fontSize="10">Security</text>
      
      <rect x="860" y="370" width="140" height="50" rx="8" fill="rgba(155, 89, 182, 0.2)" />
      <text x="930" y="390" textAnchor="middle" fill="#9b59b6" fontSize="12" fontWeight="600">Vault</text>
      <text x="930" y="405" textAnchor="middle" fill="#9b59b6" fontSize="10">Secrets</text>
      
      {/* Flow Arrows */}
      <line x1="400" y1="170" x2="500" y2="170" stroke="url(#infraGradient)" strokeWidth="3" markerEnd="url(#infraArrow)" />
      <line x1="850" y1="170" x2="950" y2="170" stroke="url(#infraGradient)" strokeWidth="3" markerEnd="url(#infraArrow)" />
      
      {/* Connections to monitoring */}
      <line x1="250" y1="260" x2="300" y2="320" stroke="#9b59b6" strokeWidth="2" markerEnd="url(#infraArrow)" opacity="0.6" />
      <line x1="675" y1="260" x2="650" y2="320" stroke="#9b59b6" strokeWidth="2" markerEnd="url(#infraArrow)" opacity="0.6" />
      <line x1="1100" y1="260" x2="1000" y2="320" stroke="#9b59b6" strokeWidth="2" markerEnd="url(#infraArrow)" opacity="0.6" />
      
      {/* Performance Stats */}
      <rect x="100" y="480" width="1200" height="80" rx="10" fill="rgba(52, 73, 94, 0.05)" stroke="rgba(52, 73, 94, 0.2)" strokeWidth="1" />
      <text x="700" y="510" textAnchor="middle" fill="#34495e" fontSize="16" fontWeight="600">Infrastructure Performance Metrics</text>
      
      <text x="200" y="535" textAnchor="middle" fill="#3498db" fontSize="14">🌩️ Cloud: 99.99% SLA</text>
      <text x="400" y="535" textAnchor="middle" fill="#2ecc71" fontSize="14">⚙️ Services: {'<'} 10ms</text>
      <text x="600" y="535" textAnchor="middle" fill="#f39c12" fontSize="14">💾 Storage: 50TB</text>
      <text x="800" y="535" textAnchor="middle" fill="#9b59b6" fontSize="14">📊 Monitoring: 24/7</text>
      <text x="1000" y="535" textAnchor="middle" fill="#e74c3c" fontSize="14">🔒 Security: Multi-layer</text>
      <text x="1200" y="535" textAnchor="middle" fill="#34495e" fontSize="14">🚀 Auto-scaling</text>
    </svg>
  );
  
  const renderMonitoringSVG = () => (
    <svg viewBox="0 0 1400 600" className="monitoring-diagram">
      <defs>
        <linearGradient id="monitoringGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e74c3c" />
          <stop offset="33%" stopColor="#f39c12" />
          <stop offset="66%" stopColor="#2ecc71" />
          <stop offset="100%" stopColor="#3498db" />
        </linearGradient>
      </defs>
      
      <text x="700" y="40" textAnchor="middle" fill="#e74c3c" fontSize="24" fontWeight="700">Monitoring & Observability</text>
      
      {/* Metrics Collection */}
      <rect x="100" y="100" width="250" height="120" rx="15" fill="rgba(231, 76, 60, 0.1)" stroke="#e74c3c" strokeWidth="3" />
      <text x="225" y="130" textAnchor="middle" fill="#e74c3c" fontSize="16" fontWeight="600">Metrics Collection</text>
      <text x="225" y="155" textAnchor="middle" fill="#e74c3c" fontSize="12">• Prometheus Scraping</text>
      <text x="225" y="175" textAnchor="middle" fill="#e74c3c" fontSize="12">• Custom Metrics</text>
      <text x="225" y="195" textAnchor="middle" fill="#e74c3c" fontSize="12">• Business KPIs</text>
      
      {/* Alerting System */}
      <rect x="400" y="100" width="250" height="120" rx="15" fill="rgba(243, 156, 18, 0.1)" stroke="#f39c12" strokeWidth="3" />
      <text x="525" y="130" textAnchor="middle" fill="#f39c12" fontSize="16" fontWeight="600">Alerting System</text>
      <text x="525" y="155" textAnchor="middle" fill="#f39c12" fontSize="12">• AlertManager</text>
      <text x="525" y="175" textAnchor="middle" fill="#f39c12" fontSize="12">• PagerDuty Integration</text>
      <text x="525" y="195" textAnchor="middle" fill="#f39c12" fontSize="12">• Slack Notifications</text>
      
      {/* Health Checks */}
      <rect x="700" y="100" width="250" height="120" rx="15" fill="rgba(46, 204, 113, 0.1)" stroke="#2ecc71" strokeWidth="3" />
      <text x="825" y="130" textAnchor="middle" fill="#2ecc71" fontSize="16" fontWeight="600">Health Checks</text>
      <text x="825" y="155" textAnchor="middle" fill="#2ecc71" fontSize="12">• Kubernetes Probes</text>
      <text x="825" y="175" textAnchor="middle" fill="#2ecc71" fontSize="12">• Service Health</text>
      <text x="825" y="195" textAnchor="middle" fill="#2ecc71" fontSize="12">• Dependency Status</text>
      
      {/* Distributed Tracing */}
      <rect x="1000" y="100" width="250" height="120" rx="15" fill="rgba(52, 152, 219, 0.1)" stroke="#3498db" strokeWidth="3" />
      <text x="1125" y="130" textAnchor="middle" fill="#3498db" fontSize="16" fontWeight="600">Distributed Tracing</text>
      <text x="1125" y="155" textAnchor="middle" fill="#3498db" fontSize="12">• Jaeger Traces</text>
      <text x="1125" y="175" textAnchor="middle" fill="#3498db" fontSize="12">• Request Tracing</text>
      <text x="1125" y="195" textAnchor="middle" fill="#3498db" fontSize="12">• Performance Analysis</text>
      
      {/* Dashboards */}
      <rect x="300" y="300" width="700" height="150" rx="15" fill="rgba(155, 89, 182, 0.1)" stroke="#9b59b6" strokeWidth="3" />
      <text x="650" y="330" textAnchor="middle" fill="#9b59b6" fontSize="18" fontWeight="600">Monitoring Dashboards</text>
      
      <rect x="330" y="350" width="150" height="80" rx="8" fill="rgba(155, 89, 182, 0.2)" />
      <text x="405" y="375" textAnchor="middle" fill="#9b59b6" fontSize="14" fontWeight="600">System Health</text>
      <text x="405" y="395" textAnchor="middle" fill="#9b59b6" fontSize="11">CPU, Memory</text>
      <text x="405" y="410" textAnchor="middle" fill="#9b59b6" fontSize="11">Disk, Network</text>
      
      <rect x="510" y="350" width="150" height="80" rx="8" fill="rgba(155, 89, 182, 0.2)" />
      <text x="585" y="375" textAnchor="middle" fill="#9b59b6" fontSize="14" fontWeight="600">Application</text>
      <text x="585" y="395" textAnchor="middle" fill="#9b59b6" fontSize="11">Response Time</text>
      <text x="585" y="410" textAnchor="middle" fill="#9b59b6" fontSize="11">Error Rates</text>
      
      <rect x="690" y="350" width="150" height="80" rx="8" fill="rgba(155, 89, 182, 0.2)" />
      <text x="765" y="375" textAnchor="middle" fill="#9b59b6" fontSize="14" fontWeight="600">Business KPIs</text>
      <text x="765" y="395" textAnchor="middle" fill="#9b59b6" fontSize="11">User Activity</text>
      <text x="765" y="410" textAnchor="middle" fill="#9b59b6" fontSize="11">Revenue Impact</text>
      
      <rect x="870" y="350" width="150" height="80" rx="8" fill="rgba(155, 89, 182, 0.2)" />
      <text x="945" y="375" textAnchor="middle" fill="#9b59b6" fontSize="14" fontWeight="600">Security</text>
      <text x="945" y="395" textAnchor="middle" fill="#9b59b6" fontSize="11">Intrusion Det.</text>
      <text x="945" y="410" textAnchor="middle" fill="#9b59b6" fontSize="11">Vulnerabilities</text>
    </svg>
  );
  
  const renderSecuritySVG = () => (
    <svg viewBox="0 0 1400 600" className="security-diagram">
      <defs>
        <linearGradient id="securityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e74c3c" />
          <stop offset="50%" stopColor="#8e44ad" />
          <stop offset="100%" stopColor="#2c3e50" />
        </linearGradient>
      </defs>
      
      <text x="700" y="40" textAnchor="middle" fill="#e74c3c" fontSize="24" fontWeight="700">Security Architecture</text>
      
      {/* Network Security */}
      <rect x="100" y="100" width="200" height="150" rx="15" fill="rgba(231, 76, 60, 0.1)" stroke="#e74c3c" strokeWidth="3" />
      <text x="200" y="130" textAnchor="middle" fill="#e74c3c" fontSize="16" fontWeight="600">Network Security</text>
      <text x="200" y="155" textAnchor="middle" fill="#e74c3c" fontSize="12">• WAF Protection</text>
      <text x="200" y="175" textAnchor="middle" fill="#e74c3c" fontSize="12">• DDoS Mitigation</text>
      <text x="200" y="195" textAnchor="middle" fill="#e74c3c" fontSize="12">• VPC Security Groups</text>
      <text x="200" y="215" textAnchor="middle" fill="#e74c3c" fontSize="12">• TLS Encryption</text>
      
      {/* Application Security */}
      <rect x="350" y="100" width="200" height="150" rx="15" fill="rgba(142, 68, 173, 0.1)" stroke="#8e44ad" strokeWidth="3" />
      <text x="450" y="130" textAnchor="middle" fill="#8e44ad" fontSize="16" fontWeight="600">Application Security</text>
      <text x="450" y="155" textAnchor="middle" fill="#8e44ad" fontSize="12">• OAuth 2.0 / JWT</text>
      <text x="450" y="175" textAnchor="middle" fill="#8e44ad" fontSize="12">• RBAC System</text>
      <text x="450" y="195" textAnchor="middle" fill="#8e44ad" fontSize="12">• API Rate Limiting</text>
      <text x="450" y="215" textAnchor="middle" fill="#8e44ad" fontSize="12">• Input Validation</text>
      
      {/* Data Security */}
      <rect x="600" y="100" width="200" height="150" rx="15" fill="rgba(44, 62, 80, 0.1)" stroke="#2c3e50" strokeWidth="3" />
      <text x="700" y="130" textAnchor="middle" fill="#2c3e50" fontSize="16" fontWeight="600">Data Security</text>
      <text x="700" y="155" textAnchor="middle" fill="#2c3e50" fontSize="12">• Encryption at Rest</text>
      <text x="700" y="175" textAnchor="middle" fill="#2c3e50" fontSize="12">• Encryption in Transit</text>
      <text x="700" y="195" textAnchor="middle" fill="#2c3e50" fontSize="12">• Data Masking</text>
      <text x="700" y="215" textAnchor="middle" fill="#2c3e50" fontSize="12">• Backup Security</text>
      
      {/* Compliance & Monitoring */}
      <rect x="850" y="100" width="200" height="150" rx="15" fill="rgba(230, 126, 34, 0.1)" stroke="#e67e22" strokeWidth="3" />
      <text x="950" y="130" textAnchor="middle" fill="#e67e22" fontSize="16" fontWeight="600">Compliance</text>
      <text x="950" y="155" textAnchor="middle" fill="#e67e22" fontSize="12">• GDPR Compliance</text>
      <text x="950" y="175" textAnchor="middle" fill="#e67e22" fontSize="12">• SOC 2 Type II</text>
      <text x="950" y="195" textAnchor="middle" fill="#e67e22" fontSize="12">• Audit Logging</text>
      <text x="950" y="215" textAnchor="middle" fill="#e67e22" fontSize="12">• Incident Response</text>
      
      {/* Security Monitoring */}
      <rect x="300" y="350" width="600" height="120" rx="15" fill="rgba(192, 57, 43, 0.1)" stroke="#c0392b" strokeWidth="3" />
      <text x="600" y="380" textAnchor="middle" fill="#c0392b" fontSize="18" fontWeight="600">Security Monitoring & Response</text>
      
      <rect x="330" y="400" width="150" height="50" rx="8" fill="rgba(192, 57, 43, 0.2)" />
      <text x="405" y="420" textAnchor="middle" fill="#c0392b" fontSize="12" fontWeight="600">SIEM System</text>
      <text x="405" y="435" textAnchor="middle" fill="#c0392b" fontSize="10">Real-time Analysis</text>
      
      <rect x="510" y="400" width="150" height="50" rx="8" fill="rgba(192, 57, 43, 0.2)" />
      <text x="585" y="420" textAnchor="middle" fill="#c0392b" fontSize="12" fontWeight="600">Vulnerability Scanning</text>
      <text x="585" y="435" textAnchor="middle" fill="#c0392b" fontSize="10">Automated Scans</text>
      
      <rect x="690" y="400" width="150" height="50" rx="8" fill="rgba(192, 57, 43, 0.2)" />
      <text x="765" y="420" textAnchor="middle" fill="#c0392b" fontSize="12" fontWeight="600">Threat Intelligence</text>
      <text x="765" y="435" textAnchor="middle" fill="#c0392b" fontSize="10">AI-powered Detection</text>
    </svg>
  );

  return (
    <DeploymentContainer>
      <DeploymentContent>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader>
            <Title>
              <i className="fas fa-rocket"></i>
              Deployment & Operations
            </Title>
          </SectionHeader>
        </motion.div>
        
        <DeploymentControls>
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
        </DeploymentControls>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <SVGContainer>
            {activeView === 'pipeline' && renderPipelineSVG()}
            {activeView === 'infrastructure' && renderInfrastructureSVG()}
            {activeView === 'monitoring' && renderMonitoringSVG()}
            {activeView === 'security' && renderSecuritySVG()}
          </SVGContainer>
          
          <MetricsGrid>
            <Metric>
              <div className="metric-value">98.7%</div>
              <div className="metric-label">Deployment Success</div>
            </Metric>
            <Metric>
              <div className="metric-value">12min</div>
              <div className="metric-label">Avg Pipeline Time</div>
            </Metric>
            <Metric>
              <div className="metric-value">24/7</div>
              <div className="metric-label">Uptime</div>
            </Metric>
            <Metric>
              <div className="metric-value">5</div>
              <div className="metric-label">Daily Deployments</div>
            </Metric>
            <Metric>
              <div className="metric-value">99.9%</div>
              <div className="metric-label">Service Availability</div>
            </Metric>
            <Metric>
              <div className="metric-value">Low</div>
              <div className="metric-label">Risk Level</div>
            </Metric>
          </MetricsGrid>
        </motion.div>
      </DeploymentContent>
    </DeploymentContainer>
  );
};

export default DeploymentOperationsSD;
