import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AnalysisContainer = styled.section`
  padding: ${props => props.theme.spacing['2xl']} 0;
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
`;

const AnalysisContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
  text-align: center;
  color: ${props => props.theme.colors.textWhite};
`;

const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes['3xl']};
  font-weight: bold;
  margin-bottom: ${props => props.theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.md};
  
  i {
    color: ${props => props.theme.colors.accent};
  }
`;

const ComingSoon = styled.div`
  background: ${props => props.theme.colors.cardBackground};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing['2xl']};
  box-shadow: ${props => props.theme.shadows.lg};
  color: ${props => props.theme.colors.text};
`;

const Analysis = () => {
  return (
    <AnalysisContainer id="analysis">
      <AnalysisContent>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title>
            <i className="fas fa-chart-bar"></i>
            Deep Analysis
          </Title>
          
          <ComingSoon>
            <h3>Coming Soon</h3>
            <p>Advanced AI-powered code analysis features are being developed.</p>
          </ComingSoon>
        </motion.div>
      </AnalysisContent>
    </AnalysisContainer>
  );
};

export default Analysis;