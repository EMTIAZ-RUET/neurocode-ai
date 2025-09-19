import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const dataFlow = keyframes`
  0% { stroke-dashoffset: 1000; }
  100% { stroke-dashoffset: 0; }
`;

const Container = styled.div`
  padding: 2rem;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  min-height: 100vh;
  color: white;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  animation: ${fadeIn} 1s ease-out;
`;

const InteractiveSection = styled(motion.div)`
  margin-bottom: 3rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #64ffda;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const InteractiveDiagram = styled.div`
  width: 100%;
  height: 500px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  overflow: hidden;
  position: relative;
`;

const ProcessingNode = styled.div`
  width: ${props => props.size || '120px'};
  height: ${props => props.size || '80px'};
  background: ${props => props.color || '#3498db'};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: absolute;
  left: ${props => props.left};
  top: ${props => props.top};
  
  &:hover {
    animation: ${pulse} 1s infinite;
    box-shadow: 0 0 20px ${props => props.color || '#3498db'};
  }
`;

const MetricCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
  flex: 1;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }
`;

const MetricValue = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.color || '#64ffda'};
  margin-bottom: 5px;
`;

const MetricLabel = styled.div`
  font-size: 0.9rem;
  opacity: 0.8;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const CoreComponents = () => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [animatedMetrics, setAnimatedMetrics] = useState({
    accuracy: 0,
    latency: 0,
    throughput: 0
  });

  useEffect(() => {
    // Animate metrics on component mount
    const animateMetrics = () => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 1;
        setAnimatedMetrics({
          accuracy: Math.min(94.1 * (progress / 100), 94.1),
          latency: Math.min(23 * (progress / 100), 23),
          throughput: Math.min(10000 * (progress / 100), 10000)
        });
        
        if (progress >= 100) {
          clearInterval(interval);
        }
      }, 30);
    };
    
    const timer = setTimeout(animateMetrics, 500);
    return () => clearTimeout(timer);
  }, []);

  const nodeDetails = {
    'code-analysis': {
      title: 'Code Analysis Engine',
      description: 'Real-time parsing of code metrics including cyclomatic complexity, maintainability index, and cognitive load indicators.',
      metrics: ['512-dimensional vectors', '< 5ms processing time', '99.7% accuracy']
    },
    'pattern-recognition': {
      title: 'Behavioral Pattern Recognition',
      description: 'ML models trained on 10M+ developer interactions to identify stress, burnout, and productivity patterns.',
      metrics: ['92.3% detection accuracy', 'LSTM + Transformer architecture', 'Real-time inference']
    },
    'intervention-system': {
      title: 'Intelligent Intervention',
      description: 'Evidence-based intervention recommendations with 43% burnout prevention success rate.',
      metrics: ['15 intervention types', '< 100ms response time', '89% user acceptance']
    }
  };

  return (
    <Container>
      <Title>Core System Components</Title>
      
      <InteractiveSection
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <SectionTitle>🏗️ System Architecture Overview</SectionTitle>
        <p>Interactive visualization of the NeuroCode core processing pipeline with real-time psychological state detection capabilities.</p>
        
        <InteractiveDiagram>
          {/* SVG Animation for Data Flow */}
          <svg width="100%" height="100%" style={{position: 'absolute', top: 0, left: 0}}>
            <defs>
              <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#64ffda" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#00bcd4" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            
            {/* Animated data flow lines */}
            <path 
              d="M 150 250 Q 300 200 450 250 Q 600 300 750 250" 
              fill="none" 
              stroke="url(#flowGradient)" 
              strokeWidth="3"
              strokeDasharray="10,5"
              style={{
                animation: `${dataFlow} 3s ease-in-out infinite`
              }}
            />
            
            {/* Processing indicators */}
            <circle cx="300" cy="200" r="5" fill="#64ffda" opacity="0.8">
              <animate attributeName="r" values="5;10;5" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="600" cy="300" r="5" fill="#00bcd4" opacity="0.8">
              <animate attributeName="r" values="5;10;5" dur="2s" begin="1s" repeatCount="indefinite" />
            </circle>
          </svg>
          
          {/* Interactive Processing Nodes */}
          <ProcessingNode
            left="50px"
            top="200px"
            color="#3498db"
            onClick={() => setSelectedNode('code-analysis')}
          >
            <div style={{fontSize: '12px'}}>📊</div>
            <div style={{fontSize: '10px'}}>Code Analysis</div>
          </ProcessingNode>
          
          <ProcessingNode
            left="350px"
            top="150px"
            color="#e74c3c"
            onClick={() => setSelectedNode('pattern-recognition')}
          >
            <div style={{fontSize: '12px'}}>🧠</div>
            <div style={{fontSize: '10px'}}>Pattern Recognition</div>
          </ProcessingNode>
          
          <ProcessingNode
            left="650px"
            top="200px"
            color="#27ae60"
            onClick={() => setSelectedNode('intervention-system')}
          >
            <div style={{fontSize: '12px'}}>⚡</div>
            <div style={{fontSize: '10px'}}>Intervention</div>
          </ProcessingNode>
          
          {/* Cerebras Processing Unit */}
          <ProcessingNode
            left="300px"
            top="300px"
            size="200px"
            color="#9b59b6"
            onClick={() => setSelectedNode('cerebras')}
          >
            <div style={{fontSize: '16px'}}>🚀</div>
            <div style={{fontSize: '14px'}}>Cerebras CS-2</div>
            <div style={{fontSize: '10px'}}>850K AI Cores</div>
          </ProcessingNode>
        </InteractiveDiagram>
        
        {selectedNode && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '20px',
              borderRadius: '10px',
              marginTop: '20px',
              border: '1px solid rgba(100, 255, 218, 0.3)'
            }}
          >
            <h3 style={{color: '#64ffda', marginBottom: '10px'}}>
              {nodeDetails[selectedNode]?.title || 'System Component'}
            </h3>
            <p style={{marginBottom: '15px'}}>
              {nodeDetails[selectedNode]?.description || 'Component description'}
            </p>
            <div style={{display: 'flex', gap: '15px', flexWrap: 'wrap'}}>
              {nodeDetails[selectedNode]?.metrics?.map((metric, index) => (
                <span key={index} style={{
                  background: 'rgba(100, 255, 218, 0.2)',
                  padding: '5px 10px',
                  borderRadius: '15px',
                  fontSize: '12px'
                }}>
                  {metric}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </InteractiveSection>
      
      <InteractiveSection
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <SectionTitle>📊 Real-time Performance Metrics</SectionTitle>
        <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
          <MetricCard
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MetricValue color="#27ae60">
              {animatedMetrics.accuracy.toFixed(1)}%
            </MetricValue>
            <MetricLabel>Model Accuracy</MetricLabel>
          </MetricCard>
          
          <MetricCard
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MetricValue color="#3498db">
              {animatedMetrics.latency.toFixed(0)}ms
            </MetricValue>
            <MetricLabel>Response Latency</MetricLabel>
          </MetricCard>
          
          <MetricCard
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MetricValue color="#f39c12">
              {Math.floor(animatedMetrics.throughput).toLocaleString()}
            </MetricValue>
            <MetricLabel>Events/Second</MetricLabel>
          </MetricCard>
        </div>
      </InteractiveSection>
      
      <InteractiveSection
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <SectionTitle>🔬 Psychological Detection Parameters</SectionTitle>
        <FeatureGrid>
          <motion.div whileHover={{ scale: 1.02 }}>
            <h4 style={{color: '#64ffda', marginBottom: '10px'}}>🧠 Cognitive Load Detection</h4>
            <ul style={{paddingLeft: '20px', opacity: 0.9}}>
              <li>Cyclomatic complexity increase &gt;30% from baseline</li>
              <li>Nested depth exceeding 5 levels consistently</li>
              <li>Method length &gt;50 lines (cognitive overload threshold)</li>
            </ul>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.02 }}>
            <h4 style={{color: '#64ffda', marginBottom: '10px'}}>⚡ Stress Markers</h4>
            <ul style={{paddingLeft: '20px', opacity: 0.9}}>
              <li>Commit message sentiment analysis via Llama</li>
              <li>Bug introduction rate &gt;2x normal</li>
              <li>Increased code duplication (&gt;15% threshold)</li>
            </ul>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.02 }}>
            <h4 style={{color: '#64ffda', marginBottom: '10px'}}>🔥 Burnout Signals</h4>
            <ul style={{paddingLeft: '20px', opacity: 0.9}}>
              <li>Code velocity decrease &gt;40% over 2 weeks</li>
              <li>Documentation quality decline</li>
              <li>Irregular commit patterns with high variance</li>
            </ul>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.02 }}>
            <h4 style={{color: '#64ffda', marginBottom: '10px'}}>🌊 Flow State Recognition</h4>
            <ul style={{paddingLeft: '20px', opacity: 0.9}}>
              <li>Consistent commit intervals (σ &lt; 15 minutes)</li>
              <li>High code quality metrics maintained</li>
              <li>Deep work sessions &gt;90 minutes</li>
            </ul>
          </motion.div>
        </FeatureGrid>
      </InteractiveSection>
    </Container>
  );
};

export default CoreComponents;
