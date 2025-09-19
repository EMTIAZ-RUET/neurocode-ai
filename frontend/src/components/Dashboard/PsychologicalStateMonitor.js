import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNeuroCode } from '../../context/NeuroCodeContext';

const MonitorCard = styled.div`
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

const ConfidenceScore = styled.div`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textLight};
  
  span {
    font-weight: bold;
    color: ${props => props.theme.colors.success};
  }
`;

const StateContainer = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.lg};
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const MeterContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  flex-shrink: 0;
`;

const MeterLabel = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: bold;
  color: ${props => props.theme.colors.text};
`;

const StateDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
`;

const StateItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StateLabel = styled.span`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.text};
  font-weight: 500;
`;

const StateBar = styled.div`
  flex: 1;
  height: 8px;
  background: ${props => props.theme.colors.borderLight};
  border-radius: ${props => props.theme.borderRadius.full};
  margin: 0 ${props => props.theme.spacing.md};
  overflow: hidden;
`;

const StateFill = styled.div`
  height: 100%;
  width: ${props => props.width}%;
  background: ${props => {
    switch (props.type) {
      case 'stress': return props.theme.colors.error;
      case 'flow': return props.theme.colors.info;
      case 'cognitive': return props.theme.colors.warning;
      case 'burnout': return props.theme.colors.error;
      default: return props.theme.colors.primary;
    }
  }};
  border-radius: ${props => props.theme.borderRadius.full};
  transition: width 0.5s ease-in-out;
`;

const StateValue = styled.span`
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: bold;
  color: ${props => props.theme.colors.text};
  min-width: 40px;
  text-align: right;
`;

const PsychologicalStateMonitor = () => {
  const { currentState, confidence } = useNeuroCode();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 80;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate overall wellness score
    const wellnessScore = (
      (100 - currentState.stress) * 0.3 +
      currentState.flow * 0.4 +
      (100 - currentState.cognitive) * 0.2 +
      (100 - currentState.burnout) * 0.1
    );

    // Draw background circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 8;
    ctx.stroke();

    // Draw progress arc
    const startAngle = -Math.PI / 2;
    const endAngle = startAngle + (wellnessScore / 100) * 2 * Math.PI;
    
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#667eea');
    gradient.addColorStop(1, '#764ba2');

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.stroke();

    // Draw center text
    ctx.fillStyle = '#1e293b';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`${Math.round(wellnessScore)}%`, centerX, centerY - 5);
    
    ctx.fillStyle = '#64748b';
    ctx.font = '12px Arial';
    ctx.fillText('Wellness', centerX, centerY + 15);

  }, [currentState]);

  const stateItems = [
    { key: 'stress', label: 'Stress Level', value: currentState.stress, type: 'stress' },
    { key: 'flow', label: 'Flow State', value: currentState.flow, type: 'flow' },
    { key: 'cognitive', label: 'Cognitive Load', value: currentState.cognitive, type: 'cognitive' },
    { key: 'burnout', label: 'Burnout Risk', value: currentState.burnout, type: 'burnout' }
  ];

  return (
    <MonitorCard>
      <CardHeader>
        <Title>
          <i className="fas fa-brain"></i>
          Psychological State
        </Title>
        <ConfidenceScore>
          Confidence: <span>{confidence}%</span>
        </ConfidenceScore>
      </CardHeader>
      
      <StateContainer>
        <MeterContainer>
          <canvas 
            ref={canvasRef} 
            width={200} 
            height={200}
            style={{ width: '100%', height: '100%' }}
          />
          <MeterLabel>Overall Wellness</MeterLabel>
        </MeterContainer>
        
        <StateDetails>
          {stateItems.map((item) => (
            <StateItem key={item.key}>
              <StateLabel>{item.label}</StateLabel>
              <StateBar>
                <StateFill width={item.value} type={item.type} />
              </StateBar>
              <StateValue>{Math.round(item.value)}%</StateValue>
            </StateItem>
          ))}
        </StateDetails>
      </StateContainer>
    </MonitorCard>
  );
};

export default PsychologicalStateMonitor;