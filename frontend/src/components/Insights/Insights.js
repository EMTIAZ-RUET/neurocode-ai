import React, { useState } from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title as ChartTitle, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ChartTitle, Tooltip, Legend, ArcElement);

const InsightsContainer = styled.section`
  padding: 2rem 0;
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
`;

const InsightsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${props => props.theme.colors.primary};
  
  i {
    color: ${props => props.theme.colors.accent};
  }
`;

const InsightsFilter = styled.div`
  select {
    padding: 0.75rem 1rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.1);
    color: ${props => props.theme.colors.text};
    border-radius: 8px;
    backdrop-filter: blur(10px);
    font-size: 0.9rem;
    cursor: pointer;
    
    &:focus {
      outline: none;
      border-color: ${props => props.theme.colors.primary};
    }
  }
`;

const InsightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
`;

const InsightCard = styled.div`
  background: ${props => props.theme.colors.cardBackground};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &.wellness {
    border-left: 4px solid #e74c3c;
  }
  
  &.productivity {
    border-left: 4px solid #3498db;
  }
  
  &.quality {
    border-left: 4px solid #f39c12;
  }
  
  &.team {
    border-left: 4px solid #2ecc71;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
`;

const InsightHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const InsightIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.accent});
  color: white;
`;

const InsightMeta = styled.div`
  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0 0 0.25rem 0;
    color: ${props => props.theme.colors.text};
  }
  
  .insight-time {
    font-size: 0.85rem;
    color: ${props => props.theme.colors.textSecondary};
  }
`;

const InsightContent = styled.div`
  p {
    color: ${props => props.theme.colors.textSecondary};
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const InsightMetrics = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const Metric = styled.div`
  display: flex;
  flex-direction: column;
  
  .metric-label {
    font-size: 0.85rem;
    color: ${props => props.theme.colors.textSecondary};
    margin-bottom: 0.25rem;
  }
  
  .metric-value {
    font-size: 1.1rem;
    font-weight: 600;
    color: ${props => props.theme.colors.primary};
  }
`;

const InsightAction = styled.button`
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.colors.primaryDark};
    transform: translateY(-1px);
  }
`;

const ChartContainer = styled.div`
  height: 150px;
  margin: 1rem 0;
`;

const QualityBreakdown = styled.div`
  margin: 1rem 0;
`;

const QualityItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
  
  .quality-count {
    background: ${props => props.theme.colors.danger};
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 600;
  }
`;

const TeamMetrics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
`;

const TeamMember = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  .member-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
  }
  
  .member-info {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .member-name {
      color: ${props => props.theme.colors.text};
      font-weight: 500;
    }
  }
  
  .stress-indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    
    &.high {
      background: ${props => props.theme.colors.danger};
    }
    
    &.medium {
      background: ${props => props.theme.colors.warning};
    }
    
    &.low {
      background: ${props => props.theme.colors.success};
    }
  }
`;

const Insights = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const productivityData = {
    labels: ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM'],
    datasets: [{
      label: 'Productivity Score',
      data: [65, 85, 90, 70, 75, 80, 85],
      borderColor: '#3498db',
      backgroundColor: 'rgba(52, 152, 219, 0.1)',
      fill: true,
      tension: 0.4
    }]
  };
  
  const implementInsight = (type) => {
    console.log(`Implementing insight: ${type}`);
  };
  
  const scheduleOptimalTasks = () => {
    console.log('Scheduling optimal tasks');
  };
  
  const refactorCode = () => {
    console.log('Starting code refactoring');
  };
  
  const planTeamActivity = () => {
    console.log('Planning team activity');
  };
  
  return (
    <InsightsContainer id="insights">
      <InsightsContent>
        <SectionHeader>
          <Title>
            <i className="fas fa-lightbulb"></i>
            AI-Powered Insights
          </Title>
          <InsightsFilter>
            <select 
              id="insightCategory" 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="wellness">Wellness</option>
              <option value="productivity">Productivity</option>
              <option value="quality">Code Quality</option>
              <option value="team">Team Dynamics</option>
            </select>
          </InsightsFilter>
        </SectionHeader>
        
        <InsightsGrid>
          {/* Wellness Insights */}
          <InsightCard className="wellness">
            <InsightHeader>
              <InsightIcon>
                <i className="fas fa-heart"></i>
              </InsightIcon>
              <InsightMeta>
                <h3>Wellness Optimization</h3>
                <span className="insight-time">Updated 5 min ago</span>
              </InsightMeta>
            </InsightHeader>
            <InsightContent>
              <p>Your stress levels have increased by 15% over the past week. Consider implementing the Pomodoro technique to improve focus and reduce cognitive load.</p>
              <InsightMetrics>
                <Metric>
                  <span className="metric-label">Stress Reduction Potential</span>
                  <span className="metric-value">27%</span>
                </Metric>
                <Metric>
                  <span className="metric-label">Implementation Effort</span>
                  <span className="metric-value">Low</span>
                </Metric>
              </InsightMetrics>
              <InsightAction onClick={() => implementInsight('pomodoro')}>
                <i className="fas fa-play"></i> Implement
              </InsightAction>
            </InsightContent>
          </InsightCard>
          
          {/* Productivity Insights */}
          <InsightCard className="productivity">
            <InsightHeader>
              <InsightIcon>
                <i className="fas fa-rocket"></i>
              </InsightIcon>
              <InsightMeta>
                <h3>Productivity Enhancement</h3>
                <span className="insight-time">Updated 12 min ago</span>
              </InsightMeta>
            </InsightHeader>
            <InsightContent>
              <p>Your most productive hours are between 9-11 AM. Schedule complex tasks during this window for optimal performance.</p>
              <ChartContainer>
                <Line data={productivityData} options={{maintainAspectRatio: false, plugins: {legend: {display: false}}}} />
              </ChartContainer>
              <InsightAction onClick={scheduleOptimalTasks}>
                <i className="fas fa-calendar"></i> Schedule Tasks
              </InsightAction>
            </InsightContent>
          </InsightCard>
          
          {/* Code Quality Insights */}
          <InsightCard className="quality">
            <InsightHeader>
              <InsightIcon>
                <i className="fas fa-code"></i>
              </InsightIcon>
              <InsightMeta>
                <h3>Code Quality Alert</h3>
                <span className="insight-time">Updated 18 min ago</span>
              </InsightMeta>
            </InsightHeader>
            <InsightContent>
              <p>Cyclomatic complexity has increased by 32% in the authentication module. This correlates with elevated cognitive load indicators.</p>
              <QualityBreakdown>
                <QualityItem>
                  <span>Functions > 50 lines</span>
                  <span className="quality-count">7</span>
                </QualityItem>
                <QualityItem>
                  <span>Nested depth > 5</span>
                  <span className="quality-count">3</span>
                </QualityItem>
                <QualityItem>
                  <span>Missing documentation</span>
                  <span className="quality-count">12</span>
                </QualityItem>
              </QualityBreakdown>
              <InsightAction onClick={refactorCode}>
                <i className="fas fa-tools"></i> Refactor
              </InsightAction>
            </InsightContent>
          </InsightCard>
          
          {/* Team Insights */}
          <InsightCard className="team">
            <InsightHeader>
              <InsightIcon>
                <i className="fas fa-users"></i>
              </InsightIcon>
              <InsightMeta>
                <h3>Team Collaboration</h3>
                <span className="insight-time">Updated 25 min ago</span>
              </InsightMeta>
            </InsightHeader>
            <InsightContent>
              <p>Team stress levels are 23% above baseline. Consider redistributing workload and scheduling team wellness activities.</p>
              <TeamMetrics>
                <TeamMember>
                  <div className="member-avatar">JS</div>
                  <div className="member-info">
                    <span className="member-name">John Smith</span>
                    <div className="stress-indicator high"></div>
                  </div>
                </TeamMember>
                <TeamMember>
                  <div className="member-avatar">SK</div>
                  <div className="member-info">
                    <span className="member-name">Sarah Kim</span>
                    <div className="stress-indicator medium"></div>
                  </div>
                </TeamMember>
                <TeamMember>
                  <div className="member-avatar">MJ</div>
                  <div className="member-info">
                    <span className="member-name">Mike Johnson</span>
                    <div className="stress-indicator low"></div>
                  </div>
                </TeamMember>
              </TeamMetrics>
              <InsightAction onClick={planTeamActivity}>
                <i className="fas fa-calendar-plus"></i> Plan Activity
              </InsightAction>
            </InsightContent>
          </InsightCard>
        </InsightsGrid>
      </InsightsContent>
    </InsightsContainer>
  );
};

export default Insights;