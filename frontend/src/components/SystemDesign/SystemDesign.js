import React, { useState } from 'react';
import styled from 'styled-components';
import ComprehensiveSystemDesign from './ComprehensiveSystemDesign';
import ExecutiveOverview from './ExecutiveOverview';
import ResearchFoundation from './ResearchFoundation';
import SystemArchitecture from './SystemArchitecture';
import CoreComponents from './CoreComponents';
import InteractiveWorkflows from './InteractiveWorkflows';
import AIIntegration from './AIIntegration';
import Implementation from './Implementation';
import Performance from './Performance';
import MasterSystemDesign from './MasterSystemDesign';
// Hakathon Details Documentation Components
import DocumentationIndexSD from './DocumentationIndexSD';
import SystemOverviewSD from '../Documentation/SystemOverview';
import InstallationGuideSD from './InstallationGuideSD';
import UIUXDesignSD from './UIUXDesignSD';
import DataSpecificationsSD from './DataSpecificationsSD';
import BusinessModelSD from './BusinessModelSD';
import ImplementationRoadmapSD from './ImplementationRoadmapSD';
import ArchitectureComponentsSD from './ArchitectureComponentsSD';
import SystemFlowAnalysisSD from './SystemFlowAnalysisSD';
import ResearchReferencesSD from './ResearchReferencesSD';
import EdgeCasesAnalysisSD from './EdgeCasesAnalysisSD';
import ToolIntegrationSD from './ToolIntegrationSD';
import SecurityPrivacySD from './SecurityPrivacySD';
import TestingQASD from './TestingQASD';
import DeploymentOperationsSD from './DeploymentOperationsSD';

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
  const [activeView, setActiveView] = useState('docs-index');

  const views = [
    // === OVERVIEW & FOUNDATION ===
    { key: 'docs-index', label: '📚 00 - Documentation Index', component: DocumentationIndexSD },
    { key: 'system-overview', label: '🌟 01 - System Overview', component: SystemOverviewSD },
    { key: 'business-model', label: '💰 02 - Business Model & Vision', component: BusinessModelSD },
    { key: 'research-foundation', label: '📖 03 - Research Foundation', component: ResearchFoundation },
    
    // === SYSTEM DESIGN ===
    { key: 'architecture', label: '🏗️ 04 - System Architecture', component: ArchitectureComponentsSD },
    { key: 'system-flow', label: '🔄 05 - Data Flow Analysis', component: SystemFlowAnalysisSD },
    { key: 'ai-integration', label: '🧠 06 - AI Integration', component: AIIntegration },
    { key: 'ui-design', label: '🎨 07 - UI/UX Design', component: UIUXDesignSD },
    
    // === TECHNICAL SPECIFICATIONS ===
    { key: 'data-specs', label: '📊 08 - Data Specifications', component: DataSpecificationsSD },
    { key: 'tool-integration', label: '🔧 09 - Tool Integration', component: ToolIntegrationSD },
    { key: 'workflows', label: '⚡ 10 - Interactive Workflows', component: InteractiveWorkflows },
    
    // === QUALITY & SECURITY ===
    { key: 'security', label: '🔒 11 - Security & Privacy', component: SecurityPrivacySD },
    { key: 'testing-qa', label: '🧪 12 - Testing & QA', component: TestingQASD },
    { key: 'edge-cases', label: '⚠️ 13 - Edge Cases Analysis', component: EdgeCasesAnalysisSD },
    
    // === IMPLEMENTATION & OPERATIONS ===
    { key: 'installation-guide', label: '💻 14 - Installation Guide', component: InstallationGuideSD },
    { key: 'roadmap', label: '🗺️ 15 - Implementation Roadmap', component: ImplementationRoadmapSD },
    { key: 'deployment', label: '🚀 16 - Deployment & Operations', component: DeploymentOperationsSD },
    
    // === COMPREHENSIVE REFERENCES ===
    { key: 'research-refs', label: '📚 17 - Research References', component: ResearchReferencesSD },
    { key: 'comprehensive', label: '📋 18 - Complete System Design', component: ComprehensiveSystemDesign }
  ];

  const ActiveComponent = views.find(view => view.key === activeView)?.component || DocumentationIndexSD;

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