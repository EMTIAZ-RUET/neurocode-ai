import React from 'react';
import styled from 'styled-components';

const ImplementationContainer = styled.div`
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

const Implementation = () => {
  return (
    <ImplementationContainer>
      <Description>
        Technical implementation details and deployment strategies.
      </Description>
      
      <FeatureGrid>
        <FeatureCard>
          <FeatureTitle><i className="fas fa-code"></i> Frontend Implementation</FeatureTitle>
          <FeatureDescription>
            React-based frontend with Canvas API visualizations and PWA capabilities.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureTitle><i className="fas fa-server"></i> Backend Services</FeatureTitle>
          <FeatureDescription>
            Microservices architecture with real-time data processing and analysis.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureTitle><i className="fas fa-cloud"></i> Deployment Strategy</FeatureTitle>
          <FeatureDescription>
            GitHub Pages deployment with CI/CD pipeline and monitoring integration.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureTitle><i className="fas fa-shield-alt"></i> Security & Privacy</FeatureTitle>
          <FeatureDescription>
            End-to-end encryption, privacy-by-design, and compliance with data protection regulations.
          </FeatureDescription>
        </FeatureCard>
      </FeatureGrid>
    </ImplementationContainer>
  );
};

export default Implementation;