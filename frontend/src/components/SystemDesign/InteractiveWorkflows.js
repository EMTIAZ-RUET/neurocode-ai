import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const flowAnimation = keyframes`
  0% { stroke-dashoffset: 1000; }
  100% { stroke-dashoffset: 0; }
`;

const pulseGlow = keyframes`
  0% { box-shadow: 0 0 5px rgba(100, 255, 218, 0.5); }
  50% { box-shadow: 0 0 20px rgba(100, 255, 218, 0.8), 0 0 30px rgba(100, 255, 218, 0.6); }
  100% { box-shadow: 0 0 5px rgba(100, 255, 218, 0.5); }
`;

const Container = styled.div`
  padding: 2rem;
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
  min-height: 100vh;
  color: white;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(45deg, #64ffda, #00bcd4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(100, 255, 218, 0.5);
`;

const WorkflowSection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 255, 218, 0.2);
  
  &:hover {
    border-color: rgba(100, 255, 218, 0.4);
    animation: ${pulseGlow} 2s ease-in-out infinite;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #64ffda;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const InteractiveCanvas = styled.div`
  width: 100%;
  height: 600px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  margin: 20px 0;
`;

const WorkflowNode = styled(motion.div)`
  position: absolute;
  width: ${props => props.size || '140px'};
  height: ${props => props.size || '90px'};
  background: ${props => props.color || '#3498db'};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  cursor: pointer;
  left: ${props => props.left};
  top: ${props => props.top};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  border: 2px solid transparent;
  
  &:hover {
    border-color: #64ffda;
    transform: scale(1.05);
  }
  
  ${props => props.active && `
    border-color: #64ffda;
    box-shadow: 0 0 20px rgba(100, 255, 218, 0.6);
  `}
`;

const DecisionPoint = styled(WorkflowNode)`
  transform: rotate(45deg);
  border-radius: 0;
  
  > div {
    transform: rotate(-45deg);
  }
`;

const FlowLine = styled.path`
  stroke: ${props => props.color || '#64ffda'};
  stroke-width: 3;
  fill: none;
  stroke-dasharray: 10, 5;
  animation: ${flowAnimation} 2s ease-in-out infinite;
  opacity: ${props => props.active ? 1 : 0.3};
`;

const StepIndicator = styled(motion.div)`
  position: absolute;
  right: 20px;
  top: 20px;
  background: rgba(100, 255, 218, 0.2);
  padding: 10px 15px;
  border-radius: 20px;
  font-size: 14px;
  border: 1px solid rgba(100, 255, 218, 0.4);
`;

const ControlPanel = styled.div`
  display: flex;
  gap: 15px;
  margin: 20px 0;
  flex-wrap: wrap;
`;

const ControlButton = styled(motion.button)`
  background: ${props => props.active ? '#64ffda' : 'rgba(100, 255, 218, 0.2)'};
  color: ${props => props.active ? '#000' : '#64ffda'};
  border: 1px solid #64ffda;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  
  &:hover {
    background: #64ffda;
    color: #000;
  }
`;

const InfoPanel = styled(motion.div)`
  background: rgba(100, 255, 218, 0.1);
  border: 1px solid rgba(100, 255, 218, 0.3);
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
`;

const InteractiveWorkflows = () => {
  const [activeWorkflow, setActiveWorkflow] = useState('stress-detection');
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStep(prev => {
          const maxSteps = workflows[activeWorkflow].steps.length - 1;
          return prev >= maxSteps ? 0 : prev + 1;
        });
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeWorkflow]);

  const workflows = {
    'stress-detection': {
      title: 'Stress Detection & Intervention Pipeline',
      steps: [
        { id: 'detect', label: 'Detect Stress Signals', description: 'Monitor code complexity, commit patterns, and sentiment analysis' },
        { id: 'analyze', label: 'Analyze Severity', description: 'Machine learning models assess stress level and urgency' },
        { id: 'decide', label: 'Decision Point', description: 'Determine appropriate intervention based on stress level' },
        { id: 'intervene', label: 'Execute Intervention', description: 'Deploy personalized wellness recommendation' }
      ],
      nodes: [
        { id: 'detect', x: '10%', y: '20%', color: '#3498db' },
        { id: 'analyze', x: '40%', y: '20%', color: '#e74c3c' },
        { id: 'decide', x: '70%', y: '20%', color: '#f39c12', type: 'decision' },
        { id: 'intervene', x: '70%', y: '60%', color: '#27ae60' },
        { id: 'monitor', x: '40%', y: '60%', color: '#9b59b6' }
      ]
    },
    'performance-analysis': {
      title: 'Real-time Performance Analysis Workflow',
      steps: [
        { id: 'collect', label: 'Data Collection', description: 'Gather keystroke patterns, code metrics, and timing data' },
        { id: 'process', label: 'Feature Extraction', description: 'Extract psychological and productivity indicators' },
        { id: 'predict', label: 'Predict Outcomes', description: 'Forecast productivity and well-being trends' },
        { id: 'recommend', label: 'Generate Recommendations', description: 'Provide personalized optimization suggestions' }
      ],
      nodes: [
        { id: 'collect', x: '15%', y: '30%', color: '#3498db' },
        { id: 'process', x: '45%', y: '30%', color: '#e74c3c' },
        { id: 'predict', x: '75%', y: '30%', color: '#f39c12' },
        { id: 'recommend', x: '45%', y: '70%', color: '#27ae60' }
      ]
    },
    'intervention-system': {
      title: 'Intelligent Intervention Decision Tree',
      steps: [
        { id: 'trigger', label: 'Trigger Event', description: 'Psychological state change detected' },
        { id: 'assess', label: 'Risk Assessment', description: 'Evaluate urgency and intervention priority' },
        { id: 'select', label: 'Strategy Selection', description: 'Choose evidence-based intervention approach' },
        { id: 'execute', label: 'Execute & Monitor', description: 'Deploy intervention and track effectiveness' }
      ],
      nodes: [
        { id: 'trigger', x: '50%', y: '10%', color: '#e74c3c' },
        { id: 'assess', x: '20%', y: '40%', color: '#f39c12', type: 'decision' },
        { id: 'select', x: '80%', y: '40%', color: '#f39c12', type: 'decision' },
        { id: 'break', x: '10%', y: '70%', color: '#27ae60' },
        { id: 'breathe', x: '35%', y: '70%', color: '#27ae60' },
        { id: 'focus', x: '65%', y: '70%', color: '#27ae60' },
        { id: 'support', x: '90%', y: '70%', color: '#27ae60' }
      ]
    }
  };

  const currentWorkflow = workflows[activeWorkflow];
  const activeStep = currentWorkflow.steps[currentStep];

  return (
    <Container>
      <Title>Interactive System Workflows</Title>
      
      <ControlPanel>
        {Object.keys(workflows).map(key => (
          <ControlButton
            key={key}
            active={activeWorkflow === key}
            onClick={() => {
              setActiveWorkflow(key);
              setCurrentStep(0);
              setIsPlaying(false);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {workflows[key].title.split(' ')[0]} {workflows[key].title.split(' ')[1]}
          </ControlButton>
        ))}
        <ControlButton
          active={isPlaying}
          onClick={() => setIsPlaying(!isPlaying)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isPlaying ? '⏸️ Pause' : '▶️ Play'} Animation
        </ControlButton>
      </ControlPanel>
      
      <WorkflowSection
        key={activeWorkflow}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle>🔄 {currentWorkflow.title}</SectionTitle>
        
        <StepIndicator
          key={currentStep}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          Step {currentStep + 1}/{currentWorkflow.steps.length}: {activeStep.label}
        </StepIndicator>
        
        <InteractiveCanvas>
          <svg width="100%" height="100%" style={{position: 'absolute', top: 0, left: 0}}>
            <defs>
              <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#64ffda" />
                <stop offset="100%" stopColor="#00bcd4" />
              </linearGradient>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#64ffda" />
              </marker>
            </defs>
            
            {/* Draw connections between nodes */}
            {activeWorkflow === 'stress-detection' && (
              <>
                <FlowLine 
                  d="M 130 80 L 320 80" 
                  active={currentStep >= 1}
                  markerEnd="url(#arrowhead)"
                />
                <FlowLine 
                  d="M 460 80 L 600 80" 
                  active={currentStep >= 2}
                  markerEnd="url(#arrowhead)"
                />
                <FlowLine 
                  d="M 670 140 L 670 300" 
                  active={currentStep >= 3}
                  markerEnd="url(#arrowhead)"
                />
                <FlowLine 
                  d="M 600 360 L 460 360" 
                  active={currentStep >= 3}
                  markerEnd="url(#arrowhead)"
                />
              </>
            )}
            
            {activeWorkflow === 'performance-analysis' && (
              <>
                <FlowLine 
                  d="M 170 180 L 330 180" 
                  active={currentStep >= 1}
                  markerEnd="url(#arrowhead)"
                />
                <FlowLine 
                  d="M 480 180 L 630 180" 
                  active={currentStep >= 2}
                  markerEnd="url(#arrowhead)"
                />
                <FlowLine 
                  d="M 670 230 L 520 380" 
                  active={currentStep >= 3}
                  markerEnd="url(#arrowhead)"
                />
              </>
            )}
          </svg>
          
          {/* Render workflow nodes */}
          {currentWorkflow.nodes.map((node, index) => (
            node.type === 'decision' ? (
              <DecisionPoint
                key={node.id}
                left={node.x}
                top={node.y}
                color={node.color}
                size="80px"
                active={currentStep === index || (isPlaying && currentStep >= index)}
                whileHover={{ scale: 1.1 }}
                animate={{
                  scale: currentStep === index ? [1, 1.1, 1] : 1,
                  transition: { duration: 0.5, repeat: currentStep === index ? Infinity : 0 }
                }}
              >
                <div style={{fontSize: '24px'}}>🤔</div>
              </DecisionPoint>
            ) : (
              <WorkflowNode
                key={node.id}
                left={node.x}
                top={node.y}
                color={node.color}
                active={currentStep === index || (isPlaying && currentStep >= index)}
                whileHover={{ scale: 1.05 }}
                animate={{
                  scale: currentStep === index ? [1, 1.1, 1] : 1,
                  transition: { duration: 0.5, repeat: currentStep === index ? Infinity : 0 }
                }}
                onClick={() => setCurrentStep(index)}
              >
                <div style={{fontSize: '12px', textAlign: 'center'}}>
                  {node.id === 'detect' && '🔍'}
                  {node.id === 'analyze' && '🧮'}
                  {node.id === 'intervene' && '💡'}
                  {node.id === 'monitor' && '📊'}
                  {node.id === 'collect' && '📥'}
                  {node.id === 'process' && '⚙️'}
                  {node.id === 'predict' && '🔮'}
                  {node.id === 'recommend' && '💡'}
                  {node.id === 'trigger' && '🚨'}
                  {node.id === 'assess' && '⚖️'}
                  {node.id === 'select' && '🎯'}
                  {node.id === 'break' && '☕'}
                  {node.id === 'breathe' && '🫁'}
                  {node.id === 'focus' && '🎯'}
                  {node.id === 'support' && '🤝'}
                </div>
                <div style={{fontSize: '9px', textAlign: 'center', marginTop: '5px'}}>
                  {currentWorkflow.steps.find(s => s.id === node.id)?.label || node.id}
                </div>
              </WorkflowNode>
            )
          ))}
        </InteractiveCanvas>
        
        <AnimatePresence mode="wait">
          <InfoPanel
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 style={{color: '#64ffda', marginBottom: '10px'}}>
              {activeStep.label}
            </h3>
            <p style={{margin: 0, opacity: 0.9}}>
              {activeStep.description}
            </p>
          </InfoPanel>
        </AnimatePresence>
      </WorkflowSection>
      
      <WorkflowSection
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <SectionTitle>📈 Real-time Metrics & Effectiveness</SectionTitle>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px'}}>
          <motion.div 
            style={{
              background: 'rgba(39, 174, 96, 0.2)', 
              padding: '20px', 
              borderRadius: '10px',
              textAlign: 'center',
              border: '1px solid rgba(39, 174, 96, 0.4)'
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#27ae60'}}>43%</div>
            <div style={{fontSize: '0.9rem', opacity: 0.8}}>Burnout Prevention</div>
          </motion.div>
          
          <motion.div 
            style={{
              background: 'rgba(52, 152, 219, 0.2)', 
              padding: '20px', 
              borderRadius: '10px',
              textAlign: 'center',
              border: '1px solid rgba(52, 152, 219, 0.4)'
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#3498db'}}>23ms</div>
            <div style={{fontSize: '0.9rem', opacity: 0.8}}>Response Time</div>
          </motion.div>
          
          <motion.div 
            style={{
              background: 'rgba(243, 156, 18, 0.2)', 
              padding: '20px', 
              borderRadius: '10px',
              textAlign: 'center',
              border: '1px solid rgba(243, 156, 18, 0.4)'
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#f39c12'}}>89%</div>
            <div style={{fontSize: '0.9rem', opacity: 0.8}}>User Acceptance</div>
          </motion.div>
        </div>
      </WorkflowSection>
    </Container>
  );
};

export default InteractiveWorkflows;
