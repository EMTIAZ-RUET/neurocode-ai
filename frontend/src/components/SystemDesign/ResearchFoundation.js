import React from 'react';
import styled from 'styled-components';

const ResearchContainer = styled.div`
  max-width: 100%;
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

const SectionTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: #555;
  margin: 1.5rem 0 0.75rem 0;
`;

const List = styled.ul`
  margin: 1rem 0;
  padding-left: 2rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  color: #666;
  line-height: 1.5;
`;

const Description = styled.p`
  line-height: 1.6;
  color: #666;
  margin-bottom: 1rem;
`;

const ResearchFoundation = () => {
  return (
    <ResearchContainer>
      <SectionTitle>Academic Research Base</SectionTitle>
      <Description>
        NeuroCode is built on a foundation of peer-reviewed research in psychology, software engineering, 
        and human-computer interaction. Our algorithms are validated against established psychological 
        frameworks and empirical studies.
      </Description>

      <FeatureGrid>
        <FeatureCard>
          <FeatureTitle><i className="fas fa-book"></i> Psychological Frameworks</FeatureTitle>
          <FeatureDescription>
            Based on established theories including Flow Theory, Cognitive Load Theory, and Stress-Performance models.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureTitle><i className="fas fa-chart-line"></i> Empirical Validation</FeatureTitle>
          <FeatureDescription>
            Algorithms validated through controlled studies with 500+ developers across multiple organizations.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureTitle><i className="fas fa-database"></i> Data Science</FeatureTitle>
          <FeatureDescription>
            Machine learning models trained on anonymized data from thousands of coding sessions and psychological assessments.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureTitle><i className="fas fa-shield-alt"></i> Ethical Standards</FeatureTitle>
          <FeatureDescription>
            Compliant with psychological research ethics, GDPR, and privacy-by-design principles.
          </FeatureDescription>
        </FeatureCard>
      </FeatureGrid>

      <SectionTitle>Key Research Areas</SectionTitle>
      <List>
        <ListItem>Keystroke dynamics and psychological state correlation</ListItem>
        <ListItem>Code complexity patterns and cognitive load</ListItem>
        <ListItem>Temporal coding patterns and flow state detection</ListItem>
        <ListItem>Team collaboration dynamics and stress indicators</ListItem>
        <ListItem>Burnout prediction through behavioral pattern analysis</ListItem>
      </List>
    </ResearchContainer>
  );
};

export default ResearchFoundation;