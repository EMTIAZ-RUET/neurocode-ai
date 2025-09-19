import React from 'react';
import styled from 'styled-components';

const AIContainer = styled.div`
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

const AIIntegration = () => {
  return (
    <AIContainer>
      <Description>
        Detailed analysis of AI/ML infrastructure and psychological analysis algorithms.
      </Description>
      
      <FeatureGrid>
        <FeatureCard>
          <FeatureTitle><i className="fas fa-microchip"></i> Cerebras CS-2 Integration</FeatureTitle>
          <FeatureDescription>
            High-performance AI inference for real-time psychological state analysis.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureTitle><i className="fas fa-language"></i> Llama 3.1 NLP</FeatureTitle>
          <FeatureDescription>
            Natural language processing for code comment analysis and communication patterns.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureTitle><i className="fas fa-chart-area"></i> Psychological Algorithms</FeatureTitle>
          <FeatureDescription>
            Advanced algorithms for correlating coding patterns with psychological states.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureTitle><i className="fas fa-lightbulb"></i> Recommendation Engine</FeatureTitle>
          <FeatureDescription>
            AI-powered recommendations for wellness, performance, and code quality improvements.
          </FeatureDescription>
        </FeatureCard>
      </FeatureGrid>
    </AIContainer>
  );
};

export default AIIntegration;