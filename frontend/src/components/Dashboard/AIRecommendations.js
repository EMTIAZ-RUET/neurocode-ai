import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNeuroCode } from '../../context/NeuroCodeContext';
import { demoDataGenerator } from '../../utils/demoData';

const RecommendationsCard = styled.div`
  background: ${props => props.theme.colors.cardBackground};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.lg};
  box-shadow: ${props => props.theme.shadows.lg};
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const Title = styled.h3`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: bold;
  
  i {
    color: ${props => props.theme.colors.primary};
  }
`;

const AgentStatus = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textLight};
`;

const AgentIndicator = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.theme.colors.success};
  animation: pulse 2s infinite;
`;

const RecommendationsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
`;

const RecommendationItem = styled(motion.div)`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.md};
  background: rgba(255, 255, 255, 0.5);
  border-radius: ${props => props.theme.borderRadius.md};
  border-left: 4px solid ${props => {
    switch (props.priority) {
      case 'high': return props.theme.colors.error;
      case 'medium': return props.theme.colors.warning;
      case 'low': return props.theme.colors.info;
      default: return props.theme.colors.primary;
    }
  }};
`;

const RecIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${props => props.theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => {
    switch (props.priority) {
      case 'high': return props.theme.colors.gradients.error;
      case 'medium': return props.theme.colors.gradients.warning;
      case 'low': return props.theme.colors.gradients.info;
      default: return props.theme.colors.gradients.primary;
    }
  }};
  color: white;
  font-size: ${props => props.theme.fontSizes.lg};
  flex-shrink: 0;
`;

const RecContent = styled.div`
  flex: 1;
`;

const RecTitle = styled.h4`
  font-size: ${props => props.theme.fontSizes.base};
  font-weight: bold;
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const RecMessage = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textLight};
  margin-bottom: ${props => props.theme.spacing.md};
  line-height: 1.4;
`;

const RecActions = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.sm};
`;

const ActionButton = styled.button`
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.md};
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: bold;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.fast};
  
  &.accept {
    background: ${props => props.theme.colors.gradients.success};
    color: white;
    
    &:hover {
      transform: translateY(-1px);
      box-shadow: ${props => props.theme.shadows.md};
    }
  }
  
  &.dismiss {
    background: rgba(0, 0, 0, 0.1);
    color: ${props => props.theme.colors.textLight};
    
    &:hover {
      background: rgba(0, 0, 0, 0.2);
    }
  }
`;

const AIRecommendations = () => {
  const { removeRecommendation } = useNeuroCode();
  const recommendations = demoDataGenerator.generateRecommendations();

  const handleAccept = (id) => {
    console.log('Accepting recommendation:', id);
    removeRecommendation(id);
  };

  const handleDismiss = (id) => {
    console.log('Dismissing recommendation:', id);
    removeRecommendation(id);
  };

  const getIcon = (type) => {
    switch (type) {
      case 'break': return 'fas fa-exclamation-triangle';
      case 'refactor': return 'fas fa-lightbulb';
      case 'collaboration': return 'fas fa-users';
      default: return 'fas fa-info-circle';
    }
  };

  return (
    <RecommendationsCard>
      <CardHeader>
        <Title>
          <i className="fas fa-robot"></i>
          AI Agent Recommendations
        </Title>
        <AgentStatus>
          <AgentIndicator />
          <span>Agent Active</span>
        </AgentStatus>
      </CardHeader>
      
      <RecommendationsList>
        {recommendations.map((rec, index) => (
          <RecommendationItem
            key={rec.id}
            priority={rec.priority}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <RecIcon priority={rec.priority}>
              <i className={getIcon(rec.type)}></i>
            </RecIcon>
            <RecContent>
              <RecTitle>{rec.title}</RecTitle>
              <RecMessage>{rec.message}</RecMessage>
              <RecActions>
                <ActionButton 
                  className="accept"
                  onClick={() => handleAccept(rec.id)}
                >
                  {rec.action}
                </ActionButton>
                <ActionButton 
                  className="dismiss"
                  onClick={() => handleDismiss(rec.id)}
                >
                  Dismiss
                </ActionButton>
              </RecActions>
            </RecContent>
          </RecommendationItem>
        ))}
      </RecommendationsList>
    </RecommendationsCard>
  );
};

export default AIRecommendations;