import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Line, Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadialLinearScale,
  Title as ChartTitle,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadialLinearScale,
  ChartTitle,
  Tooltip,
  Legend,
  Filler
);

const AnalysisContainer = styled.section`
  padding: ${props => props.theme.spacing['2xl']} 0;
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
`;

const AnalysisContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.text};
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.xl};
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${props => props.theme.spacing.md};
  }
`;

const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes['3xl']};
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.primary};
  
  i {
    color: ${props => props.theme.colors.accent};
  }
`;

const RunButton = styled.button`
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.md};
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.colors.primaryDark};
    transform: translateY(-2px);
  }
`;

const AnalysisGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const AnalysisCard = styled.div`
  background: ${props => props.theme.colors.cardBackground};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.lg};
  box-shadow: ${props => props.theme.shadows.lg};
  
  &.full-width {
    grid-column: 1 / -1;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const CardTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: 600;
  
  i {
    color: ${props => props.theme.colors.primary};
  }
`;

const ProcessingStatus = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.success};
  
  .spinner {
    width: 12px;
    height: 12px;
    border: 2px solid ${props => props.theme.colors.success};
    border-top: 2px solid transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const AnalysisMetric = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${props => props.theme.spacing.sm} 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  .metric-label {
    color: ${props => props.theme.colors.textSecondary};
  }
  
  .metric-value {
    font-weight: 600;
    color: ${props => props.theme.colors.primary};
  }
`;

const AnalysisResults = styled.div`
  margin-top: ${props => props.theme.spacing.lg};
  
  h4 {
    margin-bottom: ${props => props.theme.spacing.md};
    color: ${props => props.theme.colors.text};
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    padding: ${props => props.theme.spacing.sm} 0;
    color: ${props => props.theme.colors.textSecondary};
    border-left: 3px solid ${props => props.theme.colors.accent};
    padding-left: ${props => props.theme.spacing.md};
    margin-bottom: ${props => props.theme.spacing.sm};
  }
`;

const InsightItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  padding: ${props => props.theme.spacing.sm} 0;
  
  i {
    &.positive { color: ${props => props.theme.colors.success}; }
    &.warning { color: ${props => props.theme.colors.warning}; }
    &.negative { color: ${props => props.theme.colors.danger}; }
  }
`;

const ProfileControls = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.sm};
`;

const ProfileBtn = styled.button`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border: 1px solid ${props => props.active ? props.theme.colors.primary : 'rgba(255, 255, 255, 0.2)'};
  background: ${props => props.active ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.active ? 'white' : props.theme.colors.text};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.fontSizes.sm};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? props.theme.colors.primary : 'rgba(255, 255, 255, 0.1)'};
  }
`;

const ProfileContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.xl};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ChartContainer = styled.div`
  height: 300px;
  position: relative;
`;

const Analysis = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [activeProfile, setActiveProfile] = useState('current');
  
  const runDeepAnalysis = () => {
    setIsRunning(true);
    setTimeout(() => setIsRunning(false), 3000);
  };
  
  // Sample chart data
  const sentimentData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{
      label: 'Sentiment Score',
      data: [0.7, 0.8, 0.6, 0.9, 0.75],
      borderColor: '#667eea',
      backgroundColor: 'rgba(102, 126, 234, 0.1)',
      fill: true
    }]
  };
  
  const radarData = {
    labels: ['Focus', 'Creativity', 'Problem Solving', 'Code Quality', 'Collaboration', 'Wellness'],
    datasets: [{
      label: 'Current State',
      data: [85, 78, 92, 88, 76, 82],
      backgroundColor: 'rgba(102, 126, 234, 0.2)',
      borderColor: '#667eea',
      pointBackgroundColor: '#667eea'
    }]
  };
  
  return (
    <AnalysisContainer id="analysis">
      <AnalysisContent>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader>
            <Title>
              <i className="fas fa-analytics"></i>
              Deep Analysis
            </Title>
            <RunButton onClick={runDeepAnalysis}>
              <i className="fas fa-play"></i>
              Run Analysis
            </RunButton>
          </SectionHeader>
          
          <AnalysisGrid>
            {/* Cerebras AI Analysis */}
            <AnalysisCard>
              <CardHeader>
                <CardTitle>
                  <i className="fas fa-microchip"></i>
                  Cerebras AI Analysis
                </CardTitle>
                <ProcessingStatus>
                  {isRunning && <div className="spinner"></div>}
                  <span>{isRunning ? 'Processing...' : 'Ready'}</span>
                </ProcessingStatus>
              </CardHeader>
              <div>
                <AnalysisMetric>
                  <span className="metric-label">Processing Speed</span>
                  <span className="metric-value">1,800+ tokens/sec</span>
                </AnalysisMetric>
                <AnalysisMetric>
                  <span className="metric-label">Pattern Recognition</span>
                  <span className="metric-value">94.2% accuracy</span>
                </AnalysisMetric>
                <AnalysisResults>
                  <h4>Key Findings:</h4>
                  <ul>
                    <li>Increased complexity in authentication module</li>
                    <li>Consistent coding rhythm detected (flow state)</li>
                    <li>Minor stress indicators in error handling code</li>
                  </ul>
                </AnalysisResults>
              </div>
            </AnalysisCard>
            
            {/* Llama NLP Analysis */}
            <AnalysisCard>
              <CardHeader>
                <CardTitle>
                  <i className="fas fa-language"></i>
                  Llama NLP Analysis
                </CardTitle>
                <div style={{fontSize: '0.9rem', color: '#666'}}>
                  Llama 3.1 70B
                </div>
              </CardHeader>
              <div>
                <h4 style={{marginBottom: '1rem'}}>Commit Message Sentiment</h4>
                <ChartContainer>
                  <Line data={sentimentData} options={{maintainAspectRatio: false}} />
                </ChartContainer>
                <div style={{marginTop: '1rem'}}>
                  <h4>Code Quality Insights:</h4>
                  <InsightItem>
                    <i className="fas fa-check-circle positive"></i>
                    <span>Well-structured function naming</span>
                  </InsightItem>
                  <InsightItem>
                    <i className="fas fa-exclamation-circle warning"></i>
                    <span>Documentation could be improved</span>
                  </InsightItem>
                  <InsightItem>
                    <i className="fas fa-times-circle negative"></i>
                    <span>Complex nested conditions detected</span>
                  </InsightItem>
                </div>
              </div>
            </AnalysisCard>
            
            {/* Psychological Profile */}
            <AnalysisCard className="full-width">
              <CardHeader>
                <CardTitle>
                  <i className="fas fa-user-md"></i>
                  Psychological Profile
                </CardTitle>
                <ProfileControls>
                  <ProfileBtn 
                    active={activeProfile === 'current'}
                    onClick={() => setActiveProfile('current')}
                  >
                    Current
                  </ProfileBtn>
                  <ProfileBtn 
                    active={activeProfile === 'trend'}
                    onClick={() => setActiveProfile('trend')}
                  >
                    Trend
                  </ProfileBtn>
                  <ProfileBtn 
                    active={activeProfile === 'prediction'}
                    onClick={() => setActiveProfile('prediction')}
                  >
                    Prediction
                  </ProfileBtn>
                </ProfileControls>
              </CardHeader>
              <ProfileContent>
                <ChartContainer>
                  <Radar data={radarData} options={{maintainAspectRatio: false}} />
                </ChartContainer>
                <div>
                  <h4>Cognitive Patterns</h4>
                  <div style={{marginBottom: '1rem'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0.5rem 0'}}>
                      <span>Focus Duration</span>
                      <span>85%</span>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0.5rem 0'}}>
                      <span>Problem Solving</span>
                      <span>92%</span>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0.5rem 0'}}>
                      <span>Code Comprehension</span>
                      <span>78%</span>
                    </div>
                  </div>
                  
                  <h4>Behavioral Indicators</h4>
                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                      <i className="fas fa-clock"></i>
                      <span>Peak Hours: 9-11 AM</span>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                      <i className="fas fa-coffee"></i>
                      <span>Break Pattern: Regular</span>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                      <i className="fas fa-keyboard"></i>
                      <span>Typing Rhythm: Consistent</span>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                      <i className="fas fa-comments"></i>
                      <span>Collaboration: Active</span>
                    </div>
                  </div>
                </div>
              </ProfileContent>
            </AnalysisCard>
          </AnalysisGrid>
        </motion.div>
      </AnalysisContent>
    </AnalysisContainer>
  );
};

export default Analysis;