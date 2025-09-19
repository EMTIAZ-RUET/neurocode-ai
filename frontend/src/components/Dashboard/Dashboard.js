import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PsychologicalStateMonitor from './PsychologicalStateMonitor';
import CodeQualityMetrics from './CodeQualityMetrics';
import AIRecommendations from './AIRecommendations';
import ActivityTimeline from './ActivityTimeline';

const DashboardContainer = styled.section`
  padding: ${props => props.theme.spacing['2xl']} 0;
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
`;

const DashboardContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing['2xl']};
  color: ${props => props.theme.colors.textWhite};
`;

const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes['3xl']};
  font-weight: bold;
  margin-bottom: ${props => props.theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.md};
  
  i {
    color: ${props => props.theme.colors.accent};
  }
`;

const StatusIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};
  font-size: ${props => props.theme.fontSizes.sm};
  opacity: 0.8;
`;

const StatusDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.theme.colors.success};
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing['2xl']};
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const FullWidthCard = styled.div`
  grid-column: 1 / -1;
`;

const Dashboard = () => {
  return (
    <DashboardContainer id="dashboard">
      <DashboardContent>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader>
            <Title>
              <i className="fas fa-tachometer-alt"></i>
              Real-time Dashboard
            </Title>
            <StatusIndicator>
              <StatusDot />
              <span>System Active</span>
            </StatusIndicator>
          </SectionHeader>
        </motion.div>
        
        <DashboardGrid>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <PsychologicalStateMonitor />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <CodeQualityMetrics />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <AIRecommendations />
          </motion.div>
          
          <FullWidthCard>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <ActivityTimeline />
            </motion.div>
          </FullWidthCard>
        </DashboardGrid>
      </DashboardContent>
    </DashboardContainer>
  );
};

export default Dashboard;