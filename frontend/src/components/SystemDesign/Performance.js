import React from 'react';
import styled from 'styled-components';

const PerformanceContainer = styled.div`
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

const Performance = () => {
  return (
    <PerformanceContainer>
      <Description>
        Performance optimization strategies and scaling approaches for global deployment.
      </Description>
      
      <FeatureGrid>
        <FeatureCard>
          <FeatureTitle><i className="fas fa-rocket"></i> Performance Optimization</FeatureTitle>
          <FeatureDescription>
            Optimized algorithms, caching strategies, and resource management for minimal latency.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureTitle><i className="fas fa-expand-arrows-alt"></i> Horizontal Scaling</FeatureTitle>
          <FeatureDescription>
            Microservices architecture supporting millions of concurrent users with auto-scaling.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureTitle><i className="fas fa-balance-scale"></i> Load Balancing</FeatureTitle>
          <FeatureDescription>
            Intelligent load distribution and resource optimization for global availability.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureTitle><i className="fas fa-chart-line"></i> Monitoring & Analytics</FeatureTitle>
          <FeatureDescription>
            Real-time performance monitoring with predictive scaling and optimization recommendations.
          </FeatureDescription>
        </FeatureCard>
      </FeatureGrid>
    </PerformanceContainer>
  );
};

export default Performance;