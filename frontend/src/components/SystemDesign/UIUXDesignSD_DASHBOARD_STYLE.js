import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const DesignContainer = styled.section`
  padding: ${props => props.theme?.spacing?.['2xl'] || '2rem'} 0;
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
`;

const DesignContent = styled.div`
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

const DesignControls = styled.div`
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

const DesignGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${props => props.theme?.spacing?.xl || '2rem'};
  margin: ${props => props.theme?.spacing?.xl || '2rem'} 0;
`;

const DesignCard = styled.div`
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

const UIUXDesignSD = () => {
  const [activeView, setActiveView] = useState('design-process');

  const designViews = [
    { key: 'design-process', label: 'Design Process', icon: 'fas fa-project-diagram' },
    { key: 'user-journey', label: 'User Journey', icon: 'fas fa-route' },
    { key: 'component-architecture', label: 'Component Architecture', icon: 'fas fa-sitemap' },
    { key: 'interaction-patterns', label: 'Interaction Patterns', icon: 'fas fa-mouse-pointer' }
  ];

  const renderDesignProcessSVG = () => (
    <svg viewBox="0 0 1400 600" className="design-process">
      <defs>
        <linearGradient id="designGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e74c3c" />
          <stop offset="20%" stopColor="#f39c12" />
          <stop offset="40%" stopColor="#2ecc71" />
          <stop offset="60%" stopColor="#3498db" />
          <stop offset="80%" stopColor="#9b59b6" />
          <stop offset="100%" stopColor="#e67e22" />
        </linearGradient>
        <marker id="designArrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#3498db" />
        </marker>
        <filter id="designGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <text x="700" y="40" textAnchor="middle" fill="#e74c3c" fontSize="24" fontWeight="700">UI/UX Design Process Flow</text>
      
      {/* Main Process Flow Line */}
      <line x1="50" y1="300" x2="1350" y2="300" stroke="url(#designGradient)" strokeWidth="8" markerEnd="url(#designArrow)" filter="url(#designGlow)" />
      
      {/* Phase 1: Research */}
      <g transform="translate(120, 150)">
        <rect width="140" height="100" rx="15" fill="rgba(231, 76, 60, 0.1)" stroke="#e74c3c" strokeWidth="3" />
        <circle cx="70" cy="30" r="15" fill="rgba(231, 76, 60, 0.3)">
          <animate attributeName="r" values="12;18;12" dur="3s" repeatCount="indefinite" />
        </circle>
        <text x="70" y="35" textAnchor="middle" fill="#e74c3c" fontSize="10" fontWeight="600">🔍</text>
        <text x="70" y="55" textAnchor="middle" fill="#e74c3c" fontSize="14" fontWeight="600">Research</text>
        <text x="70" y="75" textAnchor="middle" fill="#e74c3c" fontSize="11">User Interviews</text>
        <text x="70" y="90" textAnchor="middle" fill="#e74c3c" fontSize="11">Data Analysis</text>
        <circle cx="70" cy="120" r="8" fill="#e74c3c" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>
      
      {/* Phase 2: Ideation */}
      <g transform="translate(320, 150)">
        <rect width="140" height="100" rx="15" fill="rgba(243, 156, 18, 0.1)" stroke="#f39c12" strokeWidth="3" />
        <circle cx="70" cy="30" r="15" fill="rgba(243, 156, 18, 0.3)">
          <animate attributeName="r" values="12;18;12" dur="3s" begin="0.5s" repeatCount="indefinite" />
        </circle>
        <text x="70" y="35" textAnchor="middle" fill="#f39c12" fontSize="10" fontWeight="600">💡</text>
        <text x="70" y="55" textAnchor="middle" fill="#f39c12" fontSize="14" fontWeight="600">Ideation</text>
        <text x="70" y="75" textAnchor="middle" fill="#f39c12" fontSize="11">Brainstorming</text>
        <text x="70" y="90" textAnchor="middle" fill="#f39c12" fontSize="11">Concept Sketches</text>
        <circle cx="70" cy="120" r="8" fill="#f39c12" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" begin="0.5s" repeatCount="indefinite" />
        </circle>
      </g>
      
      {/* Phase 3: Design */}
      <g transform="translate(520, 150)">
        <rect width="140" height="100" rx="15" fill="rgba(46, 204, 113, 0.1)" stroke="#2ecc71" strokeWidth="3" />
        <circle cx="70" cy="30" r="15" fill="rgba(46, 204, 113, 0.3)">
          <animate attributeName="r" values="12;18;12" dur="3s" begin="1s" repeatCount="indefinite" />
        </circle>
        <text x="70" y="35" textAnchor="middle" fill="#2ecc71" fontSize="10" fontWeight="600">🎨</text>
        <text x="70" y="55" textAnchor="middle" fill="#2ecc71" fontSize="14" fontWeight="600">Design</text>
        <text x="70" y="75" textAnchor="middle" fill="#2ecc71" fontSize="11">Wireframes</text>
        <text x="70" y="90" textAnchor="middle" fill="#2ecc71" fontSize="11">Visual Design</text>
        <circle cx="70" cy="120" r="8" fill="#2ecc71" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" begin="1s" repeatCount="indefinite" />
        </circle>
      </g>
      
      {/* Phase 4: Prototype */}
      <g transform="translate(720, 150)">
        <rect width="140" height="100" rx="15" fill="rgba(52, 152, 219, 0.1)" stroke="#3498db" strokeWidth="3" />
        <circle cx="70" cy="30" r="15" fill="rgba(52, 152, 219, 0.3)">
          <animate attributeName="r" values="12;18;12" dur="3s" begin="1.5s" repeatCount="indefinite" />
        </circle>
        <text x="70" y="35" textAnchor="middle" fill="#3498db" fontSize="10" fontWeight="600">🔧</text>
        <text x="70" y="55" textAnchor="middle" fill="#3498db" fontSize="14" fontWeight="600">Prototype</text>
        <text x="70" y="75" textAnchor="middle" fill="#3498db" fontSize="11">Interactive</text>
        <text x="70" y="90" textAnchor="middle" fill="#3498db" fontSize="11">Clickable</text>
        <circle cx="70" cy="120" r="8" fill="#3498db" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" begin="1.5s" repeatCount="indefinite" />
        </circle>
      </g>
      
      {/* Phase 5: Testing */}
      <g transform="translate(920, 150)">
        <rect width="140" height="100" rx="15" fill="rgba(155, 89, 182, 0.1)" stroke="#9b59b6" strokeWidth="3" />
        <circle cx="70" cy="30" r="15" fill="rgba(155, 89, 182, 0.3)">
          <animate attributeName="r" values="12;18;12" dur="3s" begin="2s" repeatCount="indefinite" />
        </circle>
        <text x="70" y="35" textAnchor="middle" fill="#9b59b6" fontSize="10" fontWeight="600">🧪</text>
        <text x="70" y="55" textAnchor="middle" fill="#9b59b6" fontSize="14" fontWeight="600">Testing</text>
        <text x="70" y="75" textAnchor="middle" fill="#9b59b6" fontSize="11">User Testing</text>
        <text x="70" y="90" textAnchor="middle" fill="#9b59b6" fontSize="11">A/B Testing</text>
        <circle cx="70" cy="120" r="8" fill="#9b59b6" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" begin="2s" repeatCount="indefinite" />
        </circle>
      </g>
      
      {/* Phase 6: Iterate */}
      <g transform="translate(1120, 150)">
        <rect width="140" height="100" rx="15" fill="rgba(230, 126, 34, 0.1)" stroke="#e67e22" strokeWidth="3" />
        <circle cx="70" cy="30" r="15" fill="rgba(230, 126, 34, 0.3)">
          <animate attributeName="r" values="12;18;12" dur="3s" begin="2.5s" repeatCount="indefinite" />
        </circle>
        <text x="70" y="35" textAnchor="middle" fill="#e67e22" fontSize="10" fontWeight="600">🔄</text>
        <text x="70" y="55" textAnchor="middle" fill="#e67e22" fontSize="14" fontWeight="600">Iterate</text>
        <text x="70" y="75" textAnchor="middle" fill="#e67e22" fontSize="11">Feedback Loop</text>
        <text x="70" y="90" textAnchor="middle" fill="#e67e22" fontSize="11">Refinement</text>
        <circle cx="70" cy="120" r="8" fill="#e67e22" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" begin="2.5s" repeatCount="indefinite" />
        </circle>
      </g>
      
      {/* Flow Connection Arrows */}
      <path d="M260 200 Q290 180 320 200" stroke="#e74c3c" strokeWidth="3" fill="none" markerEnd="url(#designArrow)" />
      <path d="M460 200 Q490 180 520 200" stroke="#f39c12" strokeWidth="3" fill="none" markerEnd="url(#designArrow)" />
      <path d="M660 200 Q690 180 720 200" stroke="#2ecc71" strokeWidth="3" fill="none" markerEnd="url(#designArrow)" />
      <path d="M860 200 Q890 180 920 200" stroke="#3498db" strokeWidth="3" fill="none" markerEnd="url(#designArrow)" />
      <path d="M1060 200 Q1090 180 1120 200" stroke="#9b59b6" strokeWidth="3" fill="none" markerEnd="url(#designArrow)" />
      
      {/* Feedback Loop */}
      <path d="M1190 250 Q1300 350 700 400 Q100 350 190 250" stroke="#e67e22" strokeWidth="2" strokeDasharray="5,5" fill="none" markerEnd="url(#designArrow)" opacity="0.6" />
      <text x="700" y="425" textAnchor="middle" fill="#e67e22" fontSize="12" fontWeight="600">Continuous Improvement Feedback Loop</text>
      
      {/* Process Metrics */}
      <rect x="100" y="480" width="1200" height="100" rx="15" fill="rgba(52, 73, 94, 0.05)" stroke="rgba(52, 73, 94, 0.2)" strokeWidth="1" />
      <text x="700" y="510" textAnchor="middle" fill="#34495e" fontSize="18" fontWeight="600">Design Process Performance Metrics</text>
      
      <text x="200" y="540" textAnchor="middle" fill="#e74c3c" fontSize="14">🔍 Research: 15 user interviews</text>
      <text x="400" y="540" textAnchor="middle" fill="#f39c12" fontSize="14">💡 Ideas: 47 concepts generated</text>
      <text x="600" y="540" textAnchor="middle" fill="#2ecc71" fontSize="14">🎨 Designs: 12 iterations</text>
      <text x="800" y="540" textAnchor="middle" fill="#3498db" fontSize="14">🔧 Prototypes: 5 versions</text>
      <text x="1000" y="540" textAnchor="middle" fill="#9b59b6" fontSize="14">🧪 Tests: 89% satisfaction</text>
      <text x="1200" y="540" textAnchor="middle" fill="#e67e22" fontSize="14">🔄 Cycles: 3.2 avg</text>
      
      <text x="350" y="565" textAnchor="middle" fill="#7f8c8d" fontSize="12">Average design cycle: 6 weeks</text>
      <text x="700" y="565" textAnchor="middle" fill="#7f8c8d" fontSize="12">User satisfaction improvement: +34%</text>
      <text x="1050" y="565" textAnchor="middle" fill="#7f8c8d" fontSize="12">Design system adherence: 95%</text>
    </svg>
  );

  const renderUserJourneySVG = () => (
    <svg viewBox="0 0 1400 600" className="user-journey">
      <defs>
        <linearGradient id="journeyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3498db" />
          <stop offset="33%" stopColor="#2ecc71" />
          <stop offset="66%" stopColor="#f39c12" />
          <stop offset="100%" stopColor="#e74c3c" />
        </linearGradient>
      </defs>
      
      <text x="700" y="40" textAnchor="middle" fill="#3498db" fontSize="24" fontWeight="700">Developer User Journey Map</text>
      
      {/* User Journey Stages */}
      <g transform="translate(100, 100)">
        <rect width="200" height="120" rx="15" fill="rgba(52, 152, 219, 0.1)" stroke="#3498db" strokeWidth="3" />
        <text x="100" y="30" textAnchor="middle" fill="#3498db" fontSize="16" fontWeight="600">Discovery</text>
        <text x="100" y="55" textAnchor="middle" fill="#3498db" fontSize="12">• Hears about NeuroCode</text>
        <text x="100" y="75" textAnchor="middle" fill="#3498db" fontSize="12">• Browses landing page</text>
        <text x="100" y="95" textAnchor="middle" fill="#3498db" fontSize="12">• Watches demo video</text>
        
        <circle cx="100" cy="150" r="12" fill="#3498db">
          <animate attributeName="r" values="8;16;8" dur="2s" repeatCount="indefinite" />
        </circle>
        <text x="100" y="155" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">😊</text>
        <text x="100" y="180" textAnchor="middle" fill="#3498db" fontSize="12" fontWeight="600">Curiosity</text>
      </g>
      
      <g transform="translate(350, 100)">
        <rect width="200" height="120" rx="15" fill="rgba(46, 204, 113, 0.1)" stroke="#2ecc71" strokeWidth="3" />
        <text x="100" y="30" textAnchor="middle" fill="#2ecc71" fontSize="16" fontWeight="600">Onboarding</text>
        <text x="100" y="55" textAnchor="middle" fill="#2ecc71" fontSize="12">• Creates account</text>
        <text x="100" y="75" textAnchor="middle" fill="#2ecc71" fontSize="12">• Installs IDE extension</text>
        <text x="100" y="95" textAnchor="middle" fill="#2ecc71" fontSize="12">• Completes setup</text>
        
        <circle cx="100" cy="150" r="12" fill="#2ecc71">
          <animate attributeName="r" values="8;16;8" dur="2s" begin="0.5s" repeatCount="indefinite" />
        </circle>
        <text x="100" y="155" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">🚀</text>
        <text x="100" y="180" textAnchor="middle" fill="#2ecc71" fontSize="12" fontWeight="600">Excitement</text>
      </g>
      
      <g transform="translate(600, 100)">
        <rect width="200" height="120" rx="15" fill="rgba(243, 156, 18, 0.1)" stroke="#f39c12" strokeWidth="3" />
        <text x="100" y="30" textAnchor="middle" fill="#f39c12" fontSize="16" fontWeight="600">First Use</text>
        <text x="100" y="55" textAnchor="middle" fill="#f39c12" fontSize="12">• Receives first insights</text>
        <text x="100" y="75" textAnchor="middle" fill="#f39c12" fontSize="12">• Explores dashboard</text>
        <text x="100" y="95" textAnchor="middle" fill="#f39c12" fontSize="12">• Adjusts preferences</text>
        
        <circle cx="100" cy="150" r="12" fill="#f39c12">
          <animate attributeName="r" values="8;16;8" dur="2s" begin="1s" repeatCount="indefinite" />
        </circle>
        <text x="100" y="155" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">🤔</text>
        <text x="100" y="180" textAnchor="middle" fill="#f39c12" fontSize="12" fontWeight="600">Learning</text>
      </g>
      
      <g transform="translate(850, 100)">
        <rect width="200" height="120" rx="15" fill="rgba(231, 76, 60, 0.1)" stroke="#e74c3c" strokeWidth="3" />
        <text x="100" y="30" textAnchor="middle" fill="#e74c3c" fontSize="16" fontWeight="600">Regular Use</text>
        <text x="100" y="55" textAnchor="middle" fill="#e74c3c" fontSize="12">• Daily insights</text>
        <text x="100" y="75" textAnchor="middle" fill="#e74c3c" fontSize="12">• Habit formation</text>
        <text x="100" y="95" textAnchor="middle" fill="#e74c3c" fontSize="12">• Team sharing</text>
        
        <circle cx="100" cy="150" r="12" fill="#e74c3c">
          <animate attributeName="r" values="8;16;8" dur="2s" begin="1.5s" repeatCount="indefinite" />
        </circle>
        <text x="100" y="155" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">❤️</text>
        <text x="100" y="180" textAnchor="middle" fill="#e74c3c" fontSize="12" fontWeight="600">Love</text>
      </g>
      
      <g transform="translate(1100, 100)">
        <rect width="200" height="120" rx="15" fill="rgba(155, 89, 182, 0.1)" stroke="#9b59b6" strokeWidth="3" />
        <text x="100" y="30" textAnchor="middle" fill="#9b59b6" fontSize="16" fontWeight="600">Advocacy</text>
        <text x="100" y="55" textAnchor="middle" fill="#9b59b6" fontSize="12">• Recommends to peers</text>
        <text x="100" y="75" textAnchor="middle" fill="#9b59b6" fontSize="12">• Provides feedback</text>
        <text x="100" y="95" textAnchor="middle" fill="#9b59b6" fontSize="12">• Becomes champion</text>
        
        <circle cx="100" cy="150" r="12" fill="#9b59b6">
          <animate attributeName="r" values="8;16;8" dur="2s" begin="2s" repeatCount="indefinite" />
        </circle>
        <text x="100" y="155" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">🎯</text>
        <text x="100" y="180" textAnchor="middle" fill="#9b59b6" fontSize="12" fontWeight="600">Champion</text>
      </g>
      
      {/* Journey Timeline */}
      <line x1="200" y1="300" x2="1200" y2="300" stroke="url(#journeyGradient)" strokeWidth="6" />
      
      {/* Touch Points */}
      <rect x="150" y="350" width="1100" height="180" rx="15" fill="rgba(52, 73, 94, 0.05)" stroke="rgba(52, 73, 94, 0.2)" strokeWidth="1" />
      <text x="700" y="380" textAnchor="middle" fill="#34495e" fontSize="18" fontWeight="600">Key Touchpoints & Pain Points</text>
      
      <g transform="translate(200, 400)">
        <text x="0" y="20" fill="#3498db" fontSize="14" fontWeight="600">Website Experience</text>
        <text x="0" y="40" fill="#27ae60" fontSize="12">✓ Clear value proposition</text>
        <text x="0" y="55" fill="#e74c3c" fontSize="12">✗ Video load time: 8s</text>
        <text x="0" y="80" fill="#3498db" fontSize="14" fontWeight="600">IDE Integration</text>
        <text x="0" y="100" fill="#27ae60" fontSize="12">✓ Easy installation</text>
        <text x="0" y="115" fill="#e74c3c" fontSize="12">✗ Performance impact</text>
      </g>
      
      <g transform="translate(500, 400)">
        <text x="0" y="20" fill="#2ecc71" fontSize="14" fontWeight="600">First Time Setup</text>
        <text x="0" y="40" fill="#27ae60" fontSize="12">✓ Guided walkthrough</text>
        <text x="0" y="55" fill="#e74c3c" fontSize="12">✗ Too many permissions</text>
        <text x="0" y="80" fill="#f39c12" fontSize="14" fontWeight="600">Learning Curve</text>
        <text x="0" y="100" fill="#27ae60" fontSize="12">✓ Interactive tutorials</text>
        <text x="0" y="115" fill="#e74c3c" fontSize="12">✗ Complex dashboard</text>
      </g>
      
      <g transform="translate(800, 400)">
        <text x="0" y="20" fill="#e74c3c" fontSize="14" fontWeight="600">Daily Usage</text>
        <text x="0" y="40" fill="#27ae60" fontSize="12">✓ Actionable insights</text>
        <text x="0" y="55" fill="#27ae60" fontSize="12">✓ Non-intrusive alerts</text>
        <text x="0" y="80" fill="#9b59b6" fontSize="14" fontWeight="600">Team Features</text>
        <text x="0" y="100" fill="#27ae60" fontSize="12">✓ Easy sharing</text>
        <text x="0" y="115" fill="#f39c12" fontSize="12">⚠ Privacy concerns</text>
      </g>
    </svg>
  );

  const renderComponentArchitectureSVG = () => (
    <svg viewBox="0 0 1400 600" className="component-architecture">
      <defs>
        <linearGradient id="componentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3498db" />
          <stop offset="50%" stopColor="#9b59b6" />
          <stop offset="100%" stopColor="#e74c3c" />
        </linearGradient>
      </defs>
      
      <text x="700" y="40" textAnchor="middle" fill="#3498db" fontSize="24" fontWeight="700">UI Component Architecture</text>
      
      {/* Top Level - App Shell */}
      <rect x="500" y="80" width="400" height="60" rx="10" fill="rgba(52, 152, 219, 0.1)" stroke="#3498db" strokeWidth="3" />
      <text x="700" y="110" textAnchor="middle" fill="#3498db" fontSize="16" fontWeight="600">App Shell</text>
      <text x="700" y="125" textAnchor="middle" fill="#3498db" fontSize="12">Navigation, Layout, Theme Provider</text>
      
      {/* Second Level - Main Containers */}
      <rect x="200" y="180" width="180" height="80" rx="8" fill="rgba(46, 204, 113, 0.1)" stroke="#2ecc71" strokeWidth="2" />
      <text x="290" y="210" textAnchor="middle" fill="#2ecc71" fontSize="14" fontWeight="600">Dashboard</text>
      <text x="290" y="230" textAnchor="middle" fill="#2ecc71" fontSize="11">Real-time Metrics</text>
      <text x="290" y="245" textAnchor="middle" fill="#2ecc71" fontSize="11">Live Updates</text>
      
      <rect x="420" y="180" width="180" height="80" rx="8" fill="rgba(243, 156, 18, 0.1)" stroke="#f39c12" strokeWidth="2" />
      <text x="510" y="210" textAnchor="middle" fill="#f39c12" fontSize="14" fontWeight="600">Analysis</text>
      <text x="510" y="230" textAnchor="middle" fill="#f39c12" fontSize="11">Data Visualization</text>
      <text x="510" y="245" textAnchor="middle" fill="#f39c12" fontSize="11">Chart Components</text>
      
      <rect x="640" y="180" width="180" height="80" rx="8" fill="rgba(155, 89, 182, 0.1)" stroke="#9b59b6" strokeWidth="2" />
      <text x="730" y="210" textAnchor="middle" fill="#9b59b6" fontSize="14" fontWeight="600">Insights</text>
      <text x="730" y="230" textAnchor="middle" fill="#9b59b6" fontSize="11">AI Recommendations</text>
      <text x="730" y="245" textAnchor="middle" fill="#9b59b6" fontSize="11">Smart Cards</text>
      
      <rect x="860" y="180" width="180" height="80" rx="8" fill="rgba(231, 76, 60, 0.1)" stroke="#e74c3c" strokeWidth="2" />
      <text x="950" y="210" textAnchor="middle" fill="#e74c3c" fontSize="14" fontWeight="600">Settings</text>
      <text x="950" y="230" textAnchor="middle" fill="#e74c3c" fontSize="11">Configuration</text>
      <text x="950" y="245" textAnchor="middle" fill="#e74c3c" fontSize="11">User Preferences</text>
      
      {/* Third Level - Shared Components */}
      <rect x="100" y="320" width="120" height="60" rx="6" fill="rgba(26, 188, 156, 0.1)" stroke="#1abc9c" strokeWidth="2" />
      <text x="160" y="345" textAnchor="middle" fill="#1abc9c" fontSize="12" fontWeight="600">Metric Cards</text>
      <text x="160" y="365" textAnchor="middle" fill="#1abc9c" fontSize="10">Reusable UI</text>
      
      <rect x="240" y="320" width="120" height="60" rx="6" fill="rgba(26, 188, 156, 0.1)" stroke="#1abc9c" strokeWidth="2" />
      <text x="300" y="345" textAnchor="middle" fill="#1abc9c" fontSize="12" fontWeight="600">Charts</text>
      <text x="300" y="365" textAnchor="middle" fill="#1abc9c" fontSize="10">React Charts</text>
      
      <rect x="380" y="320" width="120" height="60" rx="6" fill="rgba(26, 188, 156, 0.1)" stroke="#1abc9c" strokeWidth="2" />
      <text x="440" y="345" textAnchor="middle" fill="#1abc9c" fontSize="12" fontWeight="600">Forms</text>
      <text x="440" y="365" textAnchor="middle" fill="#1abc9c" fontSize="10">Input Controls</text>
      
      <rect x="520" y="320" width="120" height="60" rx="6" fill="rgba(26, 188, 156, 0.1)" stroke="#1abc9c" strokeWidth="2" />
      <text x="580" y="345" textAnchor="middle" fill="#1abc9c" fontSize="12" fontWeight="600">Modals</text>
      <text x="580" y="365" textAnchor="middle" fill="#1abc9c" fontSize="10">Overlays</text>
      
      <rect x="660" y="320" width="120" height="60" rx="6" fill="rgba(26, 188, 156, 0.1)" stroke="#1abc9c" strokeWidth="2" />
      <text x="720" y="345" textAnchor="middle" fill="#1abc9c" fontSize="12" fontWeight="600">Notifications</text>
      <text x="720" y="365" textAnchor="middle" fill="#1abc9c" fontSize="10">Toast System</text>
      
      <rect x="800" y="320" width="120" height="60" rx="6" fill="rgba(26, 188, 156, 0.1)" stroke="#1abc9c" strokeWidth="2" />
      <text x="860" y="345" textAnchor="middle" fill="#1abc9c" fontSize="12" fontWeight="600">Buttons</text>
      <text x="860" y="365" textAnchor="middle" fill="#1abc9c" fontSize="10">Interactive</text>
      
      {/* Fourth Level - Base Components */}
      <rect x="200" y="420" width="1000" height="100" rx="15" fill="rgba(44, 62, 80, 0.05)" stroke="rgba(44, 62, 80, 0.2)" strokeWidth="1" />
      <text x="700" y="445" textAnchor="middle" fill="#34495e" fontSize="16" fontWeight="600">Design System Foundation</text>
      
      <g transform="translate(250, 460)">
        <rect width="80" height="40" rx="4" fill="rgba(52, 152, 219, 0.2)" />
        <text x="40" y="25" textAnchor="middle" fill="#3498db" fontSize="11" fontWeight="600">Typography</text>
      </g>
      
      <g transform="translate(350, 460)">
        <rect width="80" height="40" rx="4" fill="rgba(46, 204, 113, 0.2)" />
        <text x="40" y="25" textAnchor="middle" fill="#2ecc71" fontSize="11" fontWeight="600">Colors</text>
      </g>
      
      <g transform="translate(450, 460)">
        <rect width="80" height="40" rx="4" fill="rgba(243, 156, 18, 0.2)" />
        <text x="40" y="25" textAnchor="middle" fill="#f39c12" fontSize="11" fontWeight="600">Spacing</text>
      </g>
      
      <g transform="translate(550, 460)">
        <rect width="80" height="40" rx="4" fill="rgba(231, 76, 60, 0.2)" />
        <text x="40" y="25" textAnchor="middle" fill="#e74c3c" fontSize="11" fontWeight="600">Animations</text>
      </g>
      
      <g transform="translate(650, 460)">
        <rect width="80" height="40" rx="4" fill="rgba(155, 89, 182, 0.2)" />
        <text x="40" y="25" textAnchor="middle" fill="#9b59b6" fontSize="11" fontWeight="600">Icons</text>
      </g>
      
      <g transform="translate(750, 460)">
        <rect width="80" height="40" rx="4" fill="rgba(26, 188, 156, 0.2)" />
        <text x="40" y="25" textAnchor="middle" fill="#1abc9c" fontSize="11" fontWeight="600">Shadows</text>
      </g>
      
      <g transform="translate(850, 460)">
        <rect width="80" height="40" rx="4" fill="rgba(230, 126, 34, 0.2)" />
        <text x="40" y="25" textAnchor="middle" fill="#e67e22" fontSize="11" fontWeight="600">Borders</text>
      </g>
      
      <g transform="translate(950, 460)">
        <rect width="80" height="40" rx="4" fill="rgba(52, 73, 94, 0.2)" />
        <text x="40" y="25" textAnchor="middle" fill="#34495e" fontSize="11" fontWeight="600">Breakpoints</text>
      </g>
      
      {/* Connection Lines */}
      <line x1="700" y1="140" x2="290" y2="180" stroke="#3498db" strokeWidth="2" opacity="0.6" />
      <line x1="700" y1="140" x2="510" y2="180" stroke="#3498db" strokeWidth="2" opacity="0.6" />
      <line x1="700" y1="140" x2="730" y2="180" stroke="#3498db" strokeWidth="2" opacity="0.6" />
      <line x1="700" y1="140" x2="950" y2="180" stroke="#3498db" strokeWidth="2" opacity="0.6" />
      
      <line x1="290" y1="260" x2="160" y2="320" stroke="#2ecc71" strokeWidth="2" opacity="0.4" />
      <line x1="510" y1="260" x2="300" y2="320" stroke="#f39c12" strokeWidth="2" opacity="0.4" />
      <line x1="730" y1="260" x2="720" y2="320" stroke="#9b59b6" strokeWidth="2" opacity="0.4" />
      <line x1="950" y1="260" x2="860" y2="320" stroke="#e74c3c" strokeWidth="2" opacity="0.4" />
    </svg>
  );

  const renderInteractionPatternsSVG = () => (
    <svg viewBox="0 0 1400 600" className="interaction-patterns">
      <defs>
        <linearGradient id="interactionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9b59b6" />
          <stop offset="50%" stopColor="#3498db" />
          <stop offset="100%" stopColor="#2ecc71" />
        </linearGradient>
      </defs>
      
      <text x="700" y="40" textAnchor="middle" fill="#9b59b6" fontSize="24" fontWeight="700">UI Interaction Patterns</text>
      
      {/* Navigation Pattern */}
      <g transform="translate(100, 100)">
        <rect width="250" height="120" rx="15" fill="rgba(155, 89, 182, 0.1)" stroke="#9b59b6" strokeWidth="3" />
        <text x="125" y="30" textAnchor="middle" fill="#9b59b6" fontSize="16" fontWeight="600">Navigation</text>
        <rect x="20" y="40" width="60" height="20" rx="4" fill="rgba(155, 89, 182, 0.3)" />
        <text x="50" y="55" textAnchor="middle" fill="#9b59b6" fontSize="10">Dashboard</text>
        <rect x="90" y="40" width="60" height="20" rx="4" fill="rgba(155, 89, 182, 0.5)" />
        <text x="120" y="55" textAnchor="middle" fill="white" fontSize="10">Analysis</text>
        <rect x="160" y="40" width="60" height="20" rx="4" fill="rgba(155, 89, 182, 0.3)" />
        <text x="190" y="55" textAnchor="middle" fill="#9b59b6" fontSize="10">Insights</text>
        <text x="125" y="85" textAnchor="middle" fill="#9b59b6" fontSize="12">Tab-based Navigation</text>
        <text x="125" y="105" textAnchor="middle" fill="#9b59b6" fontSize="11">Active State Highlighting</text>
      </g>
      
      {/* Data Loading Pattern */}
      <g transform="translate(400, 100)">
        <rect width="250" height="120" rx="15" fill="rgba(52, 152, 219, 0.1)" stroke="#3498db" strokeWidth="3" />
        <text x="125" y="30" textAnchor="middle" fill="#3498db" fontSize="16" fontWeight="600">Data Loading</text>
        <rect x="30" y="45" width="190" height="8" rx="4" fill="#ecf0f1" />
        <rect x="30" y="45" width="95" height="8" rx="4" fill="#3498db">
          <animate attributeName="width" values="0;190;0" dur="3s" repeatCount="indefinite" />
        </rect>
        <circle cx="125" cy="75" r="12" fill="none" stroke="#3498db" strokeWidth="2">
          <animate attributeName="transform" values="rotate(0 125 75);rotate(360 125 75)" dur="1s" repeatCount="indefinite" />
        </circle>
        <text x="125" y="100" textAnchor="middle" fill="#3498db" fontSize="12">Progressive Loading</text>
        <text x="125" y="115" textAnchor="middle" fill="#3498db" fontSize="11">Skeleton Screens</text>
      </g>
      
      {/* Feedback Pattern */}
      <g transform="translate(700, 100)">
        <rect width="250" height="120" rx="15" fill="rgba(46, 204, 113, 0.1)" stroke="#2ecc71" strokeWidth="3" />
        <text x="125" y="30" textAnchor="middle" fill="#2ecc71" fontSize="16" fontWeight="600">User Feedback</text>
        <rect x="30" y="40" width="190" height="30" rx="6" fill="rgba(46, 204, 113, 0.2)" stroke="#2ecc71" strokeWidth="1">
          <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
        </rect>
        <text x="125" y="60" textAnchor="middle" fill="#2ecc71" fontSize="12" fontWeight="600">✓ Data saved successfully!</text>
        <text x="125" y="90" textAnchor="middle" fill="#2ecc71" fontSize="12">Toast Notifications</text>
        <text x="125" y="105" textAnchor="middle" fill="#2ecc71" fontSize="11">Success/Error States</text>
      </g>
      
      {/* Input Validation Pattern */}
      <g transform="translate(1000, 100)">
        <rect width="250" height="120" rx="15" fill="rgba(231, 76, 60, 0.1)" stroke="#e74c3c" strokeWidth="3" />
        <text x="125" y="30" textAnchor="middle" fill="#e74c3c" fontSize="16" fontWeight="600">Input Validation</text>
        <rect x="30" y="40" width="190" height="25" rx="4" fill="white" stroke="#e74c3c" strokeWidth="2" />
        <text x="40" y="58" fill="#999" fontSize="12">Enter email address</text>
        <text x="40" y="85" fill="#e74c3c" fontSize="11">⚠ Please enter a valid email</text>
        <text x="125" y="105" textAnchor="middle" fill="#e74c3c" fontSize="11">Real-time Validation</text>
      </g>
      
      {/* Hover States */}
      <g transform="translate(200, 270)">
        <rect width="300" height="100" rx="12" fill="rgba(52, 152, 219, 0.05)" stroke="#3498db" strokeWidth="2" />
        <text x="150" y="25" textAnchor="middle" fill="#3498db" fontSize="16" fontWeight="600">Hover & Focus States</text>
        <rect x="30" y="40" width="80" height="35" rx="6" fill="#3498db">
          <animate attributeName="fill" values="#3498db;#2980b9;#3498db" dur="2s" repeatCount="indefinite" />
        </rect>
        <text x="70" y="62" textAnchor="middle" fill="white" fontSize="12">Primary</text>
        <rect x="130" y="40" width="80" height="35" rx="6" fill="transparent" stroke="#3498db" strokeWidth="2">
          <animate attributeName="fill" values="transparent;rgba(52,152,219,0.1);transparent" dur="2s" begin="0.5s" repeatCount="indefinite" />
        </rect>
        <text x="170" y="62" textAnchor="middle" fill="#3498db" fontSize="12">Secondary</text>
      </g>
      
      {/* Micro-interactions */}
      <g transform="translate(600, 270)">
        <rect width="300" height="100" rx="12" fill="rgba(243, 156, 18, 0.05)" stroke="#f39c12" strokeWidth="2" />
        <text x="150" y="25" textAnchor="middle" fill="#f39c12" fontSize="16" fontWeight="600">Micro-interactions</text>
        <circle cx="80" cy="60" r="20" fill="#f39c12">
          <animate attributeName="r" values="20;25;20" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <text x="80" y="66" textAnchor="middle" fill="white" fontSize="12">❤️</text>
        <text x="150" y="50" fill="#f39c12" fontSize="12">Button Press</text>
        <text x="150" y="68" fill="#f39c12" fontSize="12">Scale Animation</text>
        <text x="220" y="60" fill="#f39c12" fontSize="14">+1</text>
      </g>
      
      {/* Accessibility Features */}
      <rect x="150" y="420" width="1100" height="120" rx="15" fill="rgba(44, 62, 80, 0.05)" stroke="rgba(44, 62, 80, 0.2)" strokeWidth="1" />
      <text x="700" y="450" textAnchor="middle" fill="#34495e" fontSize="18" fontWeight="600">Accessibility & Inclusive Design</text>
      
      <g transform="translate(200, 470)">
        <rect width="120" height="50" rx="8" fill="rgba(52, 152, 219, 0.1)" stroke="#3498db" strokeWidth="1" />
        <text x="60" y="25" textAnchor="middle" fill="#3498db" fontSize="12" fontWeight="600">Keyboard</text>
        <text x="60" y="40" textAnchor="middle" fill="#3498db" fontSize="11">Navigation</text>
      </g>
      
      <g transform="translate(340, 470)">
        <rect width="120" height="50" rx="8" fill="rgba(46, 204, 113, 0.1)" stroke="#2ecc71" strokeWidth="1" />
        <text x="60" y="25" textAnchor="middle" fill="#2ecc71" fontSize="12" fontWeight="600">Screen Reader</text>
        <text x="60" y="40" textAnchor="middle" fill="#2ecc71" fontSize="11">Support</text>
      </g>
      
      <g transform="translate(480, 470)">
        <rect width="120" height="50" rx="8" fill="rgba(243, 156, 18, 0.1)" stroke="#f39c12" strokeWidth="1" />
        <text x="60" y="25" textAnchor="middle" fill="#f39c12" fontSize="12" fontWeight="600">Color</text>
        <text x="60" y="40" textAnchor="middle" fill="#f39c12" fontSize="11">Contrast</text>
      </g>
      
      <g transform="translate(620, 470)">
        <rect width="120" height="50" rx="8" fill="rgba(231, 76, 60, 0.1)" stroke="#e74c3c" strokeWidth="1" />
        <text x="60" y="25" textAnchor="middle" fill="#e74c3c" fontSize="12" fontWeight="600">Focus</text>
        <text x="60" y="40" textAnchor="middle" fill="#e74c3c" fontSize="11">Indicators</text>
      </g>
      
      <g transform="translate(760, 470)">
        <rect width="120" height="50" rx="8" fill="rgba(155, 89, 182, 0.1)" stroke="#9b59b6" strokeWidth="1" />
        <text x="60" y="25" textAnchor="middle" fill="#9b59b6" fontSize="12" fontWeight="600">Text</text>
        <text x="60" y="40" textAnchor="middle" fill="#9b59b6" fontSize="11">Scaling</text>
      </g>
      
      <g transform="translate(900, 470)">
        <rect width="120" height="50" rx="8" fill="rgba(26, 188, 156, 0.1)" stroke="#1abc9c" strokeWidth="1" />
        <text x="60" y="25" textAnchor="middle" fill="#1abc9c" fontSize="12" fontWeight="600">Motion</text>
        <text x="60" y="40" textAnchor="middle" fill="#1abc9c" fontSize="11">Preferences</text>
      </g>
    </svg>
  );

  return (
    <DesignContainer>
      <DesignContent>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader>
            <Title>
              <i className="fas fa-palette"></i>
              UI/UX Design System
            </Title>
          </SectionHeader>
        </motion.div>
        
        <DesignControls>
          {designViews.map((view, index) => (
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
        </DesignControls>
        
        <DesignGrid>
          <DesignCard className="full-width">
            <CardHeader>
              <CardTitle>
                <i className="fas fa-drafting-compass"></i>
                Interactive Design Workflow Visualization
              </CardTitle>
            </CardHeader>
            
            <SVGContainer>
              {activeView === 'design-process' && renderDesignProcessSVG()}
              {activeView === 'user-journey' && renderUserJourneySVG()}
              {activeView === 'component-architecture' && renderComponentArchitectureSVG()}
              {activeView === 'interaction-patterns' && renderInteractionPatternsSVG()}
            </SVGContainer>
            
            <MetricsGrid>
              <Metric>
                <div className="metric-value">89%</div>
                <div className="metric-label">User Satisfaction</div>
              </Metric>
              <Metric>
                <div className="metric-value">4.7s</div>
                <div className="metric-label">Avg Time to Value</div>
              </Metric>
              <Metric>
                <div className="metric-value">95%</div>
                <div className="metric-label">Accessibility Score</div>
              </Metric>
              <Metric>
                <div className="metric-value">42</div>
                <div className="metric-label">Components</div>
              </Metric>
              <Metric>
                <div className="metric-value">6</div>
                <div className="metric-label">Design Iterations</div>
              </Metric>
              <Metric>
                <div className="metric-value">98%</div>
                <div className="metric-label">Design System</div>
              </Metric>
            </MetricsGrid>
          </DesignCard>
        </DesignGrid>
      </DesignContent>
    </DesignContainer>
  );
};

export default UIUXDesignSD;