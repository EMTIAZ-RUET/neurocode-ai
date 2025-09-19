import React from 'react';
import styled from 'styled-components';

const OverviewContainer = styled.div`
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

const ExecutiveOverview = () => {
  return (
    <OverviewContainer>
      <FeatureGrid>
        <FeatureCard>
          <FeatureTitle><i className="fas fa-brain"></i> AI-Powered Psychology</FeatureTitle>
          <FeatureDescription>
            Real-time psychological analysis using advanced machine learning algorithms to monitor 
            developer wellness and cognitive states.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureTitle><i className="fas fa-code"></i> Code Quality Analysis</FeatureTitle>
          <FeatureDescription>
            Comprehensive code quality metrics including complexity analysis, technical debt tracking, 
            and automated quality scoring.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureTitle><i className="fas fa-chart-bar"></i> Performance Monitoring</FeatureTitle>
          <FeatureDescription>
            Real-time performance tracking with interactive dashboards showing productivity patterns 
            and wellness indicators.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureTitle><i className="fas fa-robot"></i> Intelligent Recommendations</FeatureTitle>
          <FeatureDescription>
            AI-driven recommendations for improving code quality, developer wellness, and team 
            productivity based on behavioral patterns.
          </FeatureDescription>
        </FeatureCard>
      </FeatureGrid>

      <SectionTitle>System Innovation Highlights</SectionTitle>
      <List>
        <ListItem><strong>Psychological Correlation Engine:</strong> Advanced algorithms that correlate coding patterns with psychological states</ListItem>
        <ListItem><strong>Real-time Wellness Monitoring:</strong> Continuous monitoring of developer stress, focus, and burnout indicators</ListItem>
        <ListItem><strong>Predictive Analytics:</strong> Machine learning models that predict potential wellness issues before they occur</ListItem>
        <ListItem><strong>Interactive Visualizations:</strong> Rich, interactive dashboards for comprehensive system understanding</ListItem>
        <ListItem><strong>GitHub Integration:</strong> Seamless integration with existing development workflows</ListItem>
      </List>

      <SectionTitle>Market Impact & Opportunity</SectionTitle>
      <Description>
        The developer wellness crisis affects over 50 million developers worldwide, with studies showing that 
        83% of developers experience burnout. NeuroCode addresses this critical gap by providing the first 
        comprehensive AI-powered solution for real-time psychological analysis in software development environments.
      </Description>

      <FeatureGrid>
        <FeatureCard>
          <FeatureTitle><i className="fas fa-users"></i> Target Market</FeatureTitle>
          <FeatureDescription>
            50M+ developers globally, with focus on enterprise teams and individual developers seeking wellness optimization.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureTitle><i className="fas fa-dollar-sign"></i> ROI Potential</FeatureTitle>
          <FeatureDescription>
            Studies show 25-40% productivity improvement and 60% reduction in burnout-related turnover.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureTitle><i className="fas fa-trophy"></i> Competitive Advantage</FeatureTitle>
          <FeatureDescription>
            First-to-market AI psychology platform with real-time analysis and predictive wellness capabilities.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureTitle><i className="fas fa-rocket"></i> Scalability</FeatureTitle>
          <FeatureDescription>
            Cloud-native architecture supporting millions of concurrent users with real-time processing capabilities.
          </FeatureDescription>
        </FeatureCard>
      </FeatureGrid>
    </OverviewContainer>
  );
};

export default ExecutiveOverview;