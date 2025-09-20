import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const RoadmapContainer = styled.section`
  padding: ${props => props.theme?.spacing?.['2xl'] || '2rem'} 0;
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
`;

const RoadmapContent = styled.div`
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

const TimelineControls = styled.div`
  display: flex;
  gap: ${props => props.theme?.spacing?.md || '1rem'};
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const PhaseButton = styled.button`
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

const RoadmapGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${props => props.theme?.spacing?.xl || '2rem'};
  margin: ${props => props.theme?.spacing?.xl || '2rem'} 0;
`;

const RoadmapCard = styled.div`
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

const ProgressStatus = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme?.spacing?.sm || '0.5rem'};
  font-size: ${props => props.theme?.fontSizes?.sm || '0.875rem'};
  color: ${props => props.theme?.colors?.success || '#27ae60'};
  
  .progress-bar {
    width: 60px;
    height: 8px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    overflow: hidden;
    
    .progress-fill {
      height: 100%;
      background: ${props => props.theme?.colors?.success || '#27ae60'};
      width: ${props => props.progress || 0}%;
      transition: width 0.3s ease;
    }
  }
`;

const SVGContainer = styled.div`
  width: 100%;
  height: 500px;
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
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
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

const ImplementationRoadmapSD = () => {
  const [activePhase, setActivePhase] = useState('overview');
  const [progress, setProgress] = useState(0);

  const phases = [
    { key: 'overview', label: 'Timeline Overview', icon: 'fas fa-map', progress: 100 },
    { key: 'foundation', label: 'Foundation Phase', icon: 'fas fa-building', progress: 100 },
    { key: 'development', label: 'Development Phase', icon: 'fas fa-code', progress: 65 },
    { key: 'testing', label: 'Testing Phase', icon: 'fas fa-vial', progress: 25 },
    { key: 'deployment', label: 'Deployment Phase', icon: 'fas fa-rocket', progress: 0 }
  ];

  const renderTimelineOverviewSVG = () => (
    <svg viewBox="0 0 1200 500" className="timeline-overview">
      <defs>
        <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3498db" />
          <stop offset="25%" stopColor="#2ecc71" />
          <stop offset="50%" stopColor="#f39c12" />
          <stop offset="75%" stopColor="#e74c3c" />
          <stop offset="100%" stopColor="#9b59b6" />
        </linearGradient>
        <marker id="timelineArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#3498db" />
        </marker>
      </defs>
      
      <text x="600" y="40" textAnchor="middle" fill="#3498db" fontSize="20" fontWeight="700">12-Month Implementation Timeline</text>
      
      {/* Main Timeline */}
      <line x1="100" y1="250" x2="1100" y2="250" stroke="url(#timelineGradient)" strokeWidth="6" markerEnd="url(#timelineArrow)" />
      
      {/* Phase 1: Foundation (Months 1-3) */}
      <circle cx="200" cy="250" r="15" fill="#3498db" />
      <rect x="150" y="120" width="100" height="100" rx="12" fill="rgba(52, 152, 219, 0.1)" stroke="#3498db" strokeWidth="2" />
      <text x="200" y="145" textAnchor="middle" fill="#3498db" fontSize="14" fontWeight="600">Phase 1</text>
      <text x="200" y="165" textAnchor="middle" fill="#3498db" fontSize="12">Foundation</text>
      <text x="200" y="180" textAnchor="middle" fill="#3498db" fontSize="11">Months 1-3</text>
      <text x="200" y="195" textAnchor="middle" fill="#3498db" fontSize="11">$650K Budget</text>
      <text x="200" y="290" textAnchor="middle" fill="#3498db" fontSize="12" fontWeight="700">✓ Complete</text>
      
      {/* Phase 2: Core Development (Months 4-7) */}
      <circle cx="400" cy="250" r="15" fill="#2ecc71" />
      <rect x="350" y="120" width="100" height="100" rx="12" fill="rgba(46, 204, 113, 0.1)" stroke="#2ecc71" strokeWidth="2" />
      <text x="400" y="145" textAnchor="middle" fill="#2ecc71" fontSize="14" fontWeight="600">Phase 2</text>
      <text x="400" y="165" textAnchor="middle" fill="#2ecc71" fontSize="12">Development</text>
      <text x="400" y="180" textAnchor="middle" fill="#2ecc71" fontSize="11">Months 4-7</text>
      <text x="400" y="195" textAnchor="middle" fill="#2ecc71" fontSize="11">$950K Budget</text>
      <text x="400" y="290" textAnchor="middle" fill="#2ecc71" fontSize="12" fontWeight="700">⏳ 65% Complete</text>
      
      {/* Phase 3: Testing & QA (Months 8-9) */}
      <circle cx="600" cy="250" r="15" fill="#f39c12" />
      <rect x="550" y="120" width="100" height="100" rx="12" fill="rgba(243, 156, 18, 0.1)" stroke="#f39c12" strokeWidth="2" />
      <text x="600" y="145" textAnchor="middle" fill="#f39c12" fontSize="14" fontWeight="600">Phase 3</text>
      <text x="600" y="165" textAnchor="middle" fill="#f39c12" fontSize="12">Testing</text>
      <text x="600" y="180" textAnchor="middle" fill="#f39c12" fontSize="11">Months 8-9</text>
      <text x="600" y="195" textAnchor="middle" fill="#f39c12" fontSize="11">$400K Budget</text>
      <text x="600" y="290" textAnchor="middle" fill="#f39c12" fontSize="12" fontWeight="700">🔄 25% Complete</text>
      
      {/* Phase 4: Beta Launch (Month 10) */}
      <circle cx="800" cy="250" r="15" fill="#e74c3c" />
      <rect x="750" y="120" width="100" height="100" rx="12" fill="rgba(231, 76, 60, 0.1)" stroke="#e74c3c" strokeWidth="2" />
      <text x="800" y="145" textAnchor="middle" fill="#e74c3c" fontSize="14" fontWeight="600">Phase 4</text>
      <text x="800" y="165" textAnchor="middle" fill="#e74c3c" fontSize="12">Beta Launch</text>
      <text x="800" y="180" textAnchor="middle" fill="#e74c3c" fontSize="11">Month 10</text>
      <text x="800" y="195" textAnchor="middle" fill="#e74c3c" fontSize="11">$250K Budget</text>
      <text x="800" y="290" textAnchor="middle" fill="#e74c3c" fontSize="12" fontWeight="700">📋 Planned</text>
      
      {/* Phase 5: Production (Months 11-12) */}
      <circle cx="1000" cy="250" r="15" fill="#9b59b6" />
      <rect x="950" y="120" width="100" height="100" rx="12" fill="rgba(155, 89, 182, 0.1)" stroke="#9b59b6" strokeWidth="2" />
      <text x="1000" y="145" textAnchor="middle" fill="#9b59b6" fontSize="14" fontWeight="600">Phase 5</text>
      <text x="1000" y="165" textAnchor="middle" fill="#9b59b6" fontSize="12">Production</text>
      <text x="1000" y="180" textAnchor="middle" fill="#9b59b6" fontSize="11">Months 11-12</text>
      <text x="1000" y="195" textAnchor="middle" fill="#9b59b6" fontSize="11">$250K Budget</text>
      <text x="1000" y="290" textAnchor="middle" fill="#9b59b6" fontSize="12" fontWeight="700">🚀 Ready</text>
      
      {/* Phase Connection Lines */}
      <line x1="215" y1="250" x2="385" y2="250" stroke="#2ecc71" strokeWidth="4" opacity="0.8" />
      <line x1="415" y1="250" x2="585" y2="250" stroke="#f39c12" strokeWidth="4" opacity="0.6" />
      <line x1="615" y1="250" x2="785" y2="250" stroke="#e74c3c" strokeWidth="4" opacity="0.4" />
      <line x1="815" y1="250" x2="985" y2="250" stroke="#9b59b6" strokeWidth="4" opacity="0.2" />
      
      {/* Progress Indicators */}
      <rect x="100" y="350" width="1000" height="80" rx="15" fill="rgba(52, 73, 94, 0.05)" stroke="rgba(52, 73, 94, 0.2)" strokeWidth="1" />
      <text x="600" y="375" textAnchor="middle" fill="#34495e" fontSize="16" fontWeight="600">Overall Progress & Key Metrics</text>
      
      <text x="200" y="405" textAnchor="middle" fill="#3498db" fontSize="14">Team Size</text>
      <text x="200" y="420" textAnchor="middle" fill="#3498db" fontSize="16" fontWeight="700">24 people</text>
      
      <text x="400" y="405" textAnchor="middle" fill="#2ecc71" fontSize="14">Budget Used</text>
      <text x="400" y="420" textAnchor="middle" fill="#2ecc71" fontSize="16" fontWeight="700">$1.6M / $2.5M</text>
      
      <text x="600" y="405" textAnchor="middle" fill="#f39c12" fontSize="14">Timeline</text>
      <text x="600" y="420" textAnchor="middle" fill="#f39c12" fontSize="16" fontWeight="700">Month 7 of 12</text>
      
      <text x="800" y="405" textAnchor="middle" fill="#e74c3c" fontSize="14">Risk Level</text>
      <text x="800" y="420" textAnchor="middle" fill="#e74c3c" fontSize="16" fontWeight="700">Low</text>
      
      <text x="1000" y="405" textAnchor="middle" fill="#9b59b6" fontSize="14">Quality Score</text>
      <text x="1000" y="420" textAnchor="middle" fill="#9b59b6" fontSize="16" fontWeight="700">92%</text>
    </svg>
  );

  return (
    <RoadmapContainer>
      <RoadmapContent>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader>
            <Title>
              <i className="fas fa-road"></i>
              Implementation Roadmap
            </Title>
            <ProgressStatus progress={64}>
              <span>64% Complete</span>
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
            </ProgressStatus>
          </SectionHeader>
        </motion.div>
        
        <TimelineControls>
          {phases.map((phase, index) => (
            <motion.div
              key={phase.key}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PhaseButton
                active={activePhase === phase.key}
                onClick={() => setActivePhase(phase.key)}
              >
                <i className={phase.icon}></i>
                {phase.label}
              </PhaseButton>
            </motion.div>
          ))}
        </TimelineControls>
        
        <RoadmapGrid>
          <RoadmapCard className="full-width">
            <CardHeader>
              <CardTitle>
                <i className="fas fa-timeline"></i>
                Interactive Implementation Timeline
              </CardTitle>
            </CardHeader>
            
            <SVGContainer>
              {renderTimelineOverviewSVG()}
            </SVGContainer>
            
            <MetricsGrid>
              <Metric>
                <div className="metric-value">$2.5M</div>
                <div className="metric-label">Total Budget</div>
              </Metric>
              <Metric>
                <div className="metric-value">12</div>
                <div className="metric-label">Months Timeline</div>
              </Metric>
              <Metric>
                <div className="metric-value">24</div>
                <div className="metric-label">Team Members</div>
              </Metric>
              <Metric>
                <div className="metric-value">5</div>
                <div className="metric-label">Major Phases</div>
              </Metric>
              <Metric>
                <div className="metric-value">92%</div>
                <div className="metric-label">Quality Score</div>
              </Metric>
              <Metric>
                <div className="metric-value">Low</div>
                <div className="metric-label">Risk Level</div>
              </Metric>
            </MetricsGrid>
          </RoadmapCard>
        </RoadmapGrid>
      </RoadmapContent>
    </RoadmapContainer>
  );
};

export default ImplementationRoadmapSD;