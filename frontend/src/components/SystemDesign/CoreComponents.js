import React from 'react';
import styled from 'styled-components';

const ComponentsContainer = styled.div`
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

const CoreComponents = () => {
  return (
    <ComponentsContainer>
      <Description>
        Detailed analysis of the system's core components and their interactions.
      </Description>
      
      <FeatureGrid>
        <FeatureCard>
          <FeatureTitle><i className="fas fa-keyboard"></i> Keystroke Analyzer</FeatureTitle>
          <FeatureDescription>
            Real-time analysis of typing patterns to detect stress, fatigue, and flow states.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureTitle><i className="fas fa-code-branch"></i> Code Pattern Engine</FeatureTitle>
          <FeatureDescription>
            Analyzes code complexity, structure, and quality metrics in real-time.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureTitle><i className="fas fa-heart"></i> Wellness Monitor</FeatureTitle>
          <FeatureDescription>
            Tracks psychological indicators and provides wellness recommendations.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureTitle><i className="fas fa-chart-line"></i> Analytics Dashboard</FeatureTitle>
          <FeatureDescription>
            Interactive visualizations for comprehensive system insights and metrics.
          </FeatureDescription>
        </FeatureCard>
      </FeatureGrid>
    </ComponentsContainer>
  );
};

export default CoreComponents;