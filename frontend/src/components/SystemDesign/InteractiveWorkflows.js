import React from 'react';
import styled from 'styled-components';

const WorkflowsContainer = styled.div`
  max-width: 100%;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const FeatureCard = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureTitle = styled.h5`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  i {
    color: #667eea;
  }
`;

const FeatureDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
  margin: 0;
`;

const Description = styled.p`
  line-height: 1.6;
  color: #666;
  margin-bottom: 1rem;
`;

const InteractiveWorkflows = () => {
  return (
    <WorkflowsContainer>
      <Description>
        Comprehensive workflow diagrams showing system interactions and data flow.
      </Description>
      
      <FeatureGrid>
        <FeatureCard>
          <FeatureTitle><i className="fas fa-user"></i> User Journey Flow</FeatureTitle>
          <FeatureDescription>
            Step-by-step user interaction flow with decision points and error handling.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureTitle><i className="fas fa-database"></i> Data Processing Pipeline</FeatureTitle>
          <FeatureDescription>
            End-to-end data flow from input to insights with AI/ML processing stages.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureTitle><i className="fas fa-brain"></i> AI/ML Inference Flow</FeatureTitle>
          <FeatureDescription>
            Visualization of Cerebras CS-2 and Llama 3.1 processing with performance metrics.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureTitle><i className="fas fa-eye"></i> Real-time Monitoring</FeatureTitle>
          <FeatureDescription>
            System health monitoring with alerting and performance optimization workflows.
          </FeatureDescription>
        </FeatureCard>
      </FeatureGrid>
    </WorkflowsContainer>
  );
};

export default InteractiveWorkflows;