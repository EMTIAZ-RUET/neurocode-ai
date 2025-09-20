import React from 'react';
import styled from 'styled-components';

const ModelContainer = styled.div`
  max-width: 100%;
  color: #333;
`;

const Title = styled.h1`
  color: #2c3e50;
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 30px;
  background: linear-gradient(45deg, #3498db, #9b59b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionTitle = styled.h2`
  color: #34495e;
  border-left: 5px solid #3498db;
  padding-left: 20px;
  margin-top: 40px;
  font-size: 1.8em;
`;

const InfoBox = styled.div`
  background: #d1ecf1;
  border: 2px solid #17a2b8;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
  
  h3 {
    color: #0c5460;
    margin-top: 0;
  }
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 30px 0;
`;

const PricingCard = styled.div`
  background: ${props => props.featured ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'white'};
  color: ${props => props.featured ? 'white' : '#333'};
  border: 2px solid ${props => props.featured ? '#667eea' : '#dee2e6'};
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  transform: ${props => props.featured ? 'scale(1.05)' : 'scale(1)'};
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
`;

const PricingTitle = styled.h3`
  margin-top: 0;
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const PricingPrice = styled.div`
  font-size: 3em;
  font-weight: bold;
  margin: 20px 0;
`;

const PricingFeature = styled.li`
  margin: 10px 0;
  list-style: none;
  
  &::before {
    content: '✓';
    color: ${props => props.featured ? '#FFD700' : '#28a745'};
    font-weight: bold;
    margin-right: 10px;
  }
`;

const MetricCard = styled.div`
  background: #f8f9fa;
  border: 2px solid #dee2e6;
  border-radius: 12px;
  padding: 20px;
  margin: 20px 0;
`;

const MetricGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 20px 0;
`;

const MetricItem = styled.div`
  text-align: center;
  padding: 20px;
  background: white;
  border-radius: 10px;
  border: 1px solid #dee2e6;
`;

const MetricValue = styled.div`
  font-size: 2.5em;
  font-weight: bold;
  color: #3498db;
  margin-bottom: 10px;
`;

const MetricLabel = styled.div`
  color: #666;
  font-size: 0.9em;
`;

const BusinessModelSD = () => {
  return (
    <ModelContainer>
      <Title>💰 NeuroCode Business Model & Pricing</Title>
      
      <InfoBox>
        <h3>📋 Market Overview</h3>
        <p>The developer wellness market is estimated at $2.5B globally, with 83% of developers experiencing burnout. NeuroCode addresses this critical gap by providing AI-powered real-time wellness monitoring and intervention.</p>
      </InfoBox>

      <SectionTitle>💼 Market Analysis</SectionTitle>
      
      <MetricCard>
        <h3 style={{ marginTop: 0 }}>📊 Target Market Size</h3>
        <MetricGrid>
          <MetricItem>
            <MetricValue>28M</MetricValue>
            <MetricLabel>Global Developers</MetricLabel>
          </MetricItem>
          <MetricItem>
            <MetricValue>$2.5B</MetricValue>
            <MetricLabel>Wellness Market</MetricLabel>
          </MetricItem>
          <MetricItem>
            <MetricValue>83%</MetricValue>
            <MetricLabel>Experience Burnout</MetricLabel>
          </MetricItem>
          <MetricItem>
            <MetricValue>$75B</MetricValue>
            <MetricLabel>Annual Productivity Loss</MetricLabel>
          </MetricItem>
        </MetricGrid>
      </MetricCard>

      <SectionTitle>💎 Pricing Strategy</SectionTitle>
      
      <PricingGrid>
        <PricingCard>
          <PricingTitle>🌱 Starter</PricingTitle>
          <PricingPrice>$9<span style={{ fontSize: '0.3em' }}>/user/month</span></PricingPrice>
          <ul style={{ padding: 0, textAlign: 'left' }}>
            <PricingFeature>Basic wellness monitoring</PricingFeature>
            <PricingFeature>IDE integration (VS Code)</PricingFeature>
            <PricingFeature>Daily wellness reports</PricingFeature>
            <PricingFeature>Email notifications</PricingFeature>
            <PricingFeature>7-day data retention</PricingFeature>
          </ul>
        </PricingCard>
        
        <PricingCard featured>
          <PricingTitle>⚡ Professional</PricingTitle>
          <PricingPrice>$29<span style={{ fontSize: '0.3em' }}>/user/month</span></PricingPrice>
          <ul style={{ padding: 0, textAlign: 'left' }}>
            <PricingFeature featured>Advanced AI analysis</PricingFeature>
            <PricingFeature featured>All IDE integrations</PricingFeature>
            <PricingFeature featured>Real-time interventions</PricingFeature>
            <PricingFeature featured>Team analytics</PricingFeature>
            <PricingFeature featured>Slack/Jira integration</PricingFeature>
            <PricingFeature featured>30-day data retention</PricingFeature>
            <PricingFeature featured>Priority support</PricingFeature>
          </ul>
        </PricingCard>
        
        <PricingCard>
          <PricingTitle>🏢 Enterprise</PricingTitle>
          <PricingPrice>$99<span style={{ fontSize: '0.3em' }}>/user/month</span></PricingPrice>
          <ul style={{ padding: 0, textAlign: 'left' }}>
            <PricingFeature>Everything in Professional</PricingFeature>
            <PricingFeature>Custom AI model training</PricingFeature>
            <PricingFeature>Advanced security controls</PricingFeature>
            <PricingFeature>Unlimited data retention</PricingFeature>
            <PricingFeature>White-label options</PricingFeature>
            <PricingFeature>Dedicated success manager</PricingFeature>
            <PricingFeature>99.9% SLA guarantee</PricingFeature>
          </ul>
        </PricingCard>
      </PricingGrid>

      <SectionTitle>📈 Revenue Projections</SectionTitle>
      
      <MetricCard>
        <h3 style={{ marginTop: 0 }}>💵 5-Year Revenue Forecast</h3>
        <MetricGrid>
          <MetricItem>
            <MetricValue>$2M</MetricValue>
            <MetricLabel>Year 1 Revenue</MetricLabel>
          </MetricItem>
          <MetricItem>
            <MetricValue>$8M</MetricValue>
            <MetricLabel>Year 2 Revenue</MetricLabel>
          </MetricItem>
          <MetricItem>
            <MetricValue>$25M</MetricValue>
            <MetricLabel>Year 3 Revenue</MetricLabel>
          </MetricItem>
          <MetricItem>
            <MetricValue>$65M</MetricValue>
            <MetricLabel>Year 5 Revenue</MetricLabel>
          </MetricItem>
        </MetricGrid>
      </MetricCard>

      <SectionTitle>🎯 Go-to-Market Strategy</SectionTitle>
      
      <MetricCard>
        <h3 style={{ marginTop: 0 }}>🚀 Customer Acquisition Plan</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
          <div style={{ background: '#e8f4f8', padding: '20px', borderRadius: '10px' }}>
            <h4 style={{ margin: '0 0 10px 0', color: '#0c5460' }}>🔍 Phase 1: Early Adopters</h4>
            <p>Target individual developers and small teams through developer communities, hackathons, and open-source partnerships.</p>
            <strong>Target: 1,000 users by Month 6</strong>
          </div>
          
          <div style={{ background: '#fff3e0', padding: '20px', borderRadius: '10px' }}>
            <h4 style={{ margin: '0 0 10px 0', color: '#e65100' }}>📊 Phase 2: SMB Expansion</h4>
            <p>Scale to small-medium businesses through B2B sales, partner integrations, and content marketing.</p>
            <strong>Target: 10,000 users by Month 18</strong>
          </div>
          
          <div style={{ background: '#e8f5e8', padding: '20px', borderRadius: '10px' }}>
            <h4 style={{ margin: '0 0 10px 0', color: '#155724' }}>🏢 Phase 3: Enterprise</h4>
            <p>Target large enterprises with dedicated sales team, custom implementations, and strategic partnerships.</p>
            <strong>Target: 100,000 users by Month 36</strong>
          </div>
        </div>
      </MetricCard>

      <SectionTitle>💡 Competitive Advantage</SectionTitle>
      
      <InfoBox>
        <h3>🏆 Unique Value Propositions</h3>
        <ul>
          <li><strong>Real-time AI Analysis:</strong> Only platform using Cerebras CS-2 for sub-second wellness insights</li>
          <li><strong>Comprehensive Integration:</strong> Seamless workflow integration across all major development tools</li>
          <li><strong>Predictive Interventions:</strong> 3-week early warning system for burnout prevention</li>
          <li><strong>Privacy-First Approach:</strong> Complete data control and GDPR compliance built-in</li>
          <li><strong>Scientific Foundation:</strong> Based on 47+ peer-reviewed studies on developer psychology</li>
        </ul>
      </InfoBox>

      <MetricCard>
        <h3 style={{ marginTop: 0 }}>📊 Key Performance Indicators</h3>
        <MetricGrid>
          <MetricItem>
            <MetricValue>15%</MetricValue>
            <MetricLabel>Monthly Churn Rate</MetricLabel>
          </MetricItem>
          <MetricItem>
            <MetricValue>$180</MetricValue>
            <MetricLabel>Customer Acquisition Cost</MetricLabel>
          </MetricItem>
          <MetricItem>
            <MetricValue>$2,400</MetricValue>
            <MetricLabel>Lifetime Value</MetricLabel>
          </MetricItem>
          <MetricItem>
            <MetricValue>13.3x</MetricValue>
            <MetricLabel>LTV:CAC Ratio</MetricLabel>
          </MetricItem>
        </MetricGrid>
      </MetricCard>

      <SectionTitle>💼 Investment Requirements</SectionTitle>
      
      <MetricCard>
        <h3 style={{ marginTop: 0 }}>💸 Funding Breakdown</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '20px' }}>
          <div>
            <h4>Series A: $2.5M</h4>
            <ul>
              <li>Product development: $1.2M (48%)</li>
              <li>Sales & marketing: $800K (32%)</li>
              <li>Operations & compliance: $300K (12%)</li>
              <li>Working capital: $200K (8%)</li>
            </ul>
          </div>
          
          <div>
            <h4>Series B: $8M (Projected Month 18)</h4>
            <ul>
              <li>International expansion: $3.2M (40%)</li>
              <li>Enterprise sales team: $2.4M (30%)</li>
              <li>R&D and AI advancement: $1.6M (20%)</li>
              <li>Strategic partnerships: $800K (10%)</li>
            </ul>
          </div>
        </div>
      </MetricCard>
    </ModelContainer>
  );
};

export default BusinessModelSD;