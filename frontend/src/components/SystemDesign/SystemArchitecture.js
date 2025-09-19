import React from 'react';
import styled from 'styled-components';

const ArchitectureContainer = styled.div`
  max-width: 100%;
`;

const DiagramContainer = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border: 1px solid #e9ecef;
`;

const MermaidDiagram = styled.div`
  text-align: center;
  margin: 1rem 0;
  font-family: monospace;
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #ddd;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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

const TechStack = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
`;

const TechCategory = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid #e9ecef;
`;

const TechCategoryTitle = styled.h5`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  i {
    color: #667eea;
  }
`;

const TechList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TechItem = styled.li`
  padding: 0.5rem 0;
  border-bottom: 1px solid #e9ecef;
  color: #666;
  font-size: 0.9rem;

  &:last-child {
    border-bottom: none;
  }
`;

const SectionTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: #555;
  margin: 1.5rem 0 0.75rem 0;
`;

const SystemArchitecture = () => {
  return (
    <ArchitectureContainer>
      <DiagramContainer>
        <SectionTitle>High-Level Architecture</SectionTitle>
        <MermaidDiagram>
          <pre>{`
graph TB
    A[Developer IDE] --> B[Data Collection Layer]
    B --> C[Real-time Processing Engine]
    C --> D[AI/ML Analysis Pipeline]
    D --> E[Psychological Correlation Engine]
    E --> F[Recommendation System]
    F --> G[Interactive Dashboard]
    G --> A
    
    C --> H[Data Storage Layer]
    H --> I[Analytics Database]
    H --> J[Time Series DB]
    
    D --> K[Cerebras CS-2]
    D --> L[Llama 3.1 NLP]
          `}</pre>
        </MermaidDiagram>
      </DiagramContainer>

      <SectionTitle>Core Components</SectionTitle>
      <FeatureGrid>
        <FeatureCard>
          <FeatureTitle><i className="fas fa-layer-group"></i> Data Collection Layer</FeatureTitle>
          <FeatureDescription>
            Captures keystroke patterns, code changes, and behavioral metrics in real-time with minimal performance impact.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureTitle><i className="fas fa-cogs"></i> Processing Engine</FeatureTitle>
          <FeatureDescription>
            High-performance stream processing for real-time analysis of developer behavior and code patterns.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureTitle><i className="fas fa-brain"></i> AI/ML Pipeline</FeatureTitle>
          <FeatureDescription>
            Advanced machine learning models for psychological state inference and predictive analytics.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureTitle><i className="fas fa-chart-bar"></i> Analytics Engine</FeatureTitle>
          <FeatureDescription>
            Comprehensive analytics processing for insights generation and pattern recognition.
          </FeatureDescription>
        </FeatureCard>
      </FeatureGrid>

      <SectionTitle>Technology Stack</SectionTitle>
      <TechStack>
        <TechCategory>
          <TechCategoryTitle><i className="fas fa-desktop"></i> Frontend</TechCategoryTitle>
          <TechList>
            <TechItem>React 18 with Hooks</TechItem>
            <TechItem>TypeScript for type safety</TechItem>
            <TechItem>Canvas API for visualizations</TechItem>
            <TechItem>PWA capabilities</TechItem>
          </TechList>
        </TechCategory>
        
        <TechCategory>
          <TechCategoryTitle><i className="fas fa-server"></i> Backend</TechCategoryTitle>
          <TechList>
            <TechItem>Node.js with Express</TechItem>
            <TechItem>WebSocket for real-time data</TechItem>
            <TechItem>Redis for caching</TechItem>
            <TechItem>PostgreSQL for analytics</TechItem>
          </TechList>
        </TechCategory>
        
        <TechCategory>
          <TechCategoryTitle><i className="fas fa-robot"></i> AI/ML</TechCategoryTitle>
          <TechList>
            <TechItem>Cerebras CS-2 for inference</TechItem>
            <TechItem>Llama 3.1 for NLP</TechItem>
            <TechItem>TensorFlow for models</TechItem>
            <TechItem>Python for ML pipeline</TechItem>
          </TechList>
        </TechCategory>
        
        <TechCategory>
          <TechCategoryTitle><i className="fas fa-cloud"></i> Infrastructure</TechCategoryTitle>
          <TechList>
            <TechItem>GitHub Pages deployment</TechItem>
            <TechItem>CDN for global distribution</TechItem>
            <TechItem>Docker containerization</TechItem>
            <TechItem>Kubernetes orchestration</TechItem>
          </TechList>
        </TechCategory>
      </TechStack>
    </ArchitectureContainer>
  );
};

export default SystemArchitecture;