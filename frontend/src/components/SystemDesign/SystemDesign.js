import React, { useState } from 'react';
import styled from 'styled-components';
import ExecutiveOverview from './ExecutiveOverview';
import ResearchFoundation from './ResearchFoundation';
import SystemArchitecture from './SystemArchitecture';
import CoreComponents from './CoreComponents';
import InteractiveWorkflows from './InteractiveWorkflows';
import AIIntegration from './AIIntegration';
import Implementation from './Implementation';
import Performance from './Performance';
import MasterSystemDesign from './MasterSystemDesign';

const SystemDesignContainer = styled.div`
  min-height: calc(100vh - 200px);
  padding: 2rem 0;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 2rem 0;
`;

const DesignControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const DesignBtn = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  background: ${props => props.active ? 
    'linear-gradient(135deg, #667eea, #764ba2)' : 
    'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.8)'};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  &:hover {
    background: ${props => props.active ? 
      'linear-gradient(135deg, #667eea, #764ba2)' : 
      'rgba(255, 255, 255, 0.2)'};
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

const DesignContent = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  min-height: 600px;
`;

const SystemDesign = () => {
  const [activeView, setActiveView] = useState('master');

  const views = [
    { key: 'master', label: 'Master System Design', component: MasterSystemDesign },
    { key: 'overview', label: 'Executive Overview', component: ExecutiveOverview },
    { key: 'research', label: 'Research Foundation', component: ResearchFoundation },
    { key: 'architecture', label: 'System Architecture', component: SystemArchitecture },
    { key: 'components', label: 'Core Components', component: CoreComponents },
    { key: 'workflows', label: 'Interactive Workflows', component: InteractiveWorkflows },
    { key: 'ai-integration', label: 'AI Integration', component: AIIntegration },
    { key: 'implementation', label: 'Implementation', component: Implementation },
    { key: 'performance', label: 'Performance & Scaling', component: Performance }
  ];

  const ActiveComponent = views.find(view => view.key === activeView)?.component || MasterSystemDesign;

  return (
    <SystemDesignContainer>
      <div className="container">
        <SectionHeader>
          <Title><i className="fas fa-cogs"></i> NeuroCode: Master System Design</Title>
          <Subtitle>
            AI-Powered Code Psychology Platform - Complete Technical Architecture & Interactive Workflows
          </Subtitle>
          <DesignControls>
            {views.map(view => (
              <DesignBtn
                key={view.key}
                active={activeView === view.key}
                onClick={() => setActiveView(view.key)}
              >
                {view.label}
              </DesignBtn>
            ))}
          </DesignControls>
        </SectionHeader>
        <DesignContent>
          <ActiveComponent />
        </DesignContent>
      </div>
    </SystemDesignContainer>
  );
};

export default SystemDesign;