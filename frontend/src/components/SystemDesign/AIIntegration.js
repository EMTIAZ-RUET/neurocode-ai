import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const processingAnimation = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(300%); }
`;

const dataStream = keyframes`
  0% { stroke-dashoffset: 1000; }
  100% { stroke-dashoffset: 0; }
`;

const neuralPulse = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
`;

const Container = styled.div`
  padding: 2rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  min-height: 100vh;
  color: white;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(45deg, #00d4ff, #ff00d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(0, 212, 255, 0.5);
`;

const AISection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(0, 212, 255, 0.3);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%);
    animation: ${neuralPulse} 3s ease-in-out infinite;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #00d4ff;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;
  z-index: 2;
`;

const ProcessingVisualization = styled.div`
  width: 100%;
  height: 400px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  margin: 20px 0;
  border: 2px solid rgba(0, 212, 255, 0.3);
`;

const ProcessingCore = styled(motion.div)`
  position: absolute;
  width: ${props => props.size || '80px'};
  height: ${props => props.size || '80px'};
  background: ${props => props.color || '#00d4ff'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  left: ${props => props.left};
  top: ${props => props.top};
  box-shadow: 0 0 20px ${props => props.color || '#00d4ff'};
  cursor: pointer;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 30px ${props => props.color || '#00d4ff'};
  }
`;

const DataFlow = styled.div`
  position: absolute;
  width: 6px;
  height: 60px;
  background: linear-gradient(0deg, transparent, #00d4ff, transparent);
  border-radius: 3px;
  animation: ${processingAnimation} 3s linear infinite;
  left: ${props => props.left};
  top: ${props => props.top};
  opacity: ${props => props.active ? 1 : 0.3};
`;

const MetricPanel = styled(motion.div)`
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 15px;
  margin: 10px;
  flex: 1;
  text-align: center;
  border: 1px solid rgba(0, 212, 255, 0.3);
`;

const MetricValue = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${props => props.color || '#00d4ff'};
  margin-bottom: 5px;
`;

const MetricLabel = styled.div`
  font-size: 0.9rem;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ControlInterface = styled.div`
  display: flex;
  gap: 15px;
  margin: 20px 0;
  flex-wrap: wrap;
`;

const AIButton = styled(motion.button)`
  background: ${props => props.active ? '#00d4ff' : 'rgba(0, 212, 255, 0.2)'};
  color: ${props => props.active ? '#000' : '#00d4ff'};
  border: 2px solid #00d4ff;
  padding: 12px 24px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #00d4ff;
    color: #000;
    box-shadow: 0 0 15px rgba(0, 212, 255, 0.5);
  }
`;

const DockerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 20px 0;
`;

const DockerService = styled(motion.div)`
  background: ${props => props.color || 'rgba(0, 212, 255, 0.2)'};
  border: 1px solid ${props => props.borderColor || '#00d4ff'};
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  position: relative;
  
  &::before {
    content: '🐳';
    position: absolute;
    top: 5px;
    right: 10px;
    font-size: 12px;
  }
`;

const AIIntegration = () => {
  const [activeAI, setActiveAI] = useState('cerebras');
  const [processingActive, setProcessingActive] = useState(false);
  const [metrics, setMetrics] = useState({
    cerebras: { cores: 850000, flops: 750, bandwidth: 1.2 },
    llama: { parameters: 405, contextWindow: 128000, throughput: 2500 }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setProcessingActive(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const aiSystems = {
    cerebras: {
      name: 'Cerebras CS-2 Wafer-Scale Engine',
      description: 'World\'s largest AI chip with 850,000 cores for ultra-fast pattern recognition',
      icon: '🧠',
      color: '#ff6b6b',
      features: [
        'Wafer-scale architecture eliminates memory bottlenecks',
        '1.2 TB/s memory bandwidth for real-time processing',
        '750 TFLOPS computational power',
        'Sub-millisecond inference for psychological state detection'
      ]
    },
    llama: {
      name: 'Meta Llama 3.1 405B',
      description: 'Advanced language model for natural language understanding and code analysis',
      icon: '🦙',
      color: '#4ecdc4',
      features: [
        '405 billion parameters for deep understanding',
        '128K token context window for comprehensive code analysis',
        'Fine-tuned on 10M+ developer interactions',
        'Sentiment analysis with 94.2% accuracy on commit messages'
      ]
    },
    docker: {
      name: 'Docker Microservices Orchestration',
      description: 'Scalable containerized architecture with Kubernetes orchestration',
      icon: '🐳',
      color: '#45b7d1',
      features: [
        'Auto-scaling based on workload demands',
        'Service mesh for secure inter-service communication',
        'Multi-region deployment with edge caching',
        'Zero-downtime deployments with health checks'
      ]
    }
  };

  const currentSystem = aiSystems[activeAI];

  return (
    <Container>
      <Title>AI Integration Architecture</Title>
      
      <ControlInterface>
        {Object.keys(aiSystems).map(key => (
          <AIButton
            key={key}
            active={activeAI === key}
            onClick={() => setActiveAI(key)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {aiSystems[key].icon} {aiSystems[key].name.split(' ').slice(0, 2).join(' ')}
          </AIButton>
        ))}
      </ControlInterface>
      
      <AISection
        key={activeAI}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle>
          {currentSystem.icon} {currentSystem.name}
        </SectionTitle>
        
        <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '2rem' }}>
          {currentSystem.description}
        </p>
        
        {activeAI === 'cerebras' && (
          <ProcessingVisualization>
            <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
              <defs>
                <radialGradient id="coreGradient">
                  <stop offset="0%" stopColor="#ff6b6b" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ff6b6b" stopOpacity="0.2" />
                </radialGradient>
              </defs>
              
              {/* Neural network visualization */}
              {Array.from({ length: 20 }).map((_, i) => (
                <circle
                  key={i}
                  cx={50 + (i % 5) * 150}
                  cy={50 + Math.floor(i / 5) * 80}
                  r="8"
                  fill="url(#coreGradient)"
                  opacity={processingActive ? Math.random() * 0.8 + 0.2 : 0.3}
                >
                  <animate
                    attributeName="r"
                    values="8;12;8"
                    dur={`${1 + Math.random() * 2}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              ))}
              
              {/* Data flow lines */}
              <path
                d="M 50 90 Q 200 50 350 90 Q 500 130 650 90"
                stroke="#ff6b6b"
                strokeWidth="3"
                fill="none"
                strokeDasharray="10,5"
                style={{ animation: `${dataStream} 2s linear infinite` }}
              />
            </svg>
            
            <ProcessingCore
              left="20px"
              top="150px"
              size="100px"
              color="#ff6b6b"
              animate={{
                scale: processingActive ? [1, 1.2, 1] : 1,
                rotate: processingActive ? 360 : 0
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '20px' }}>⚡</div>
                <div style={{ fontSize: '10px' }}>850K Cores</div>
              </div>
            </ProcessingCore>
            
            <ProcessingCore
              left="300px"
              top="100px"
              color="#feca57"
              animate={{
                opacity: processingActive ? [0.5, 1, 0.5] : 0.7
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '16px' }}>🔄</div>
                <div style={{ fontSize: '8px' }}>Processing</div>
              </div>
            </ProcessingCore>
            
            <ProcessingCore
              left="500px"
              top="150px"
              color="#48dbfb"
              animate={{
                y: processingActive ? [-5, 5, -5] : 0
              }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '16px' }}>📊</div>
                <div style={{ fontSize: '8px' }}>Output</div>
              </div>
            </ProcessingCore>
            
            {/* Animated data flows */}
            {Array.from({ length: 8 }).map((_, i) => (
              <DataFlow
                key={i}
                left={`${100 + i * 80}px`}
                top={`${200 + (i % 2) * 100}px`}
                active={processingActive}
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </ProcessingVisualization>
        )}
        
        {activeAI === 'llama' && (
          <ProcessingVisualization>
            <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
              <defs>
                <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4ecdc4" />
                  <stop offset="100%" stopColor="#44a08d" />
                </linearGradient>
              </defs>
              
              {/* Text processing visualization */}
              <rect x="50" y="50" width="300" height="40" fill="rgba(78, 205, 196, 0.2)" rx="20" />
              <text x="200" y="75" textAnchor="middle" fill="#4ecdc4" fontSize="14">
                "Fixed critical bug in authentication module..."
              </text>
              
              <rect x="50" y="120" width="400" height="40" fill="rgba(78, 205, 196, 0.3)" rx="20" />
              <text x="250" y="145" textAnchor="middle" fill="#4ecdc4" fontSize="12">
                Sentiment: Positive | Confidence: 94.2% | Stress Level: Low
              </text>
              
              {/* Processing layers */}
              {Array.from({ length: 12 }).map((_, i) => (
                <rect
                  key={i}
                  x={80 + i * 30}
                  y={200}
                  width="20"
                  height={`${60 + Math.sin(i * 0.5) * 20}`}
                  fill={`rgba(78, 205, 196, ${0.3 + (i % 3) * 0.2})`}
                  rx="2"
                >
                  <animate
                    attributeName="height"
                    values={`${60 + Math.sin(i * 0.5) * 20};${80 + Math.sin(i * 0.5) * 20};${60 + Math.sin(i * 0.5) * 20}`}
                    dur="2s"
                    repeatCount="indefinite"
                    begin={`${i * 0.1}s`}
                  />
                </rect>
              ))}
            </svg>
            
            <motion.div
              style={{
                position: 'absolute',
                top: '300px',
                left: '50px',
                right: '50px',
                background: 'rgba(78, 205, 196, 0.1)',
                borderRadius: '10px',
                padding: '15px',
                border: '1px solid rgba(78, 205, 196, 0.3)'
              }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <h4 style={{ color: '#4ecdc4', margin: '0 0 10px 0' }}>Real-time Analysis Output:</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', fontSize: '12px' }}>
                <div>🎯 Intent: Bug Fix</div>
                <div>😊 Mood: Confident</div>
                <div>⚡ Urgency: Medium</div>
              </div>
            </motion.div>
          </ProcessingVisualization>
        )}
        
        {activeAI === 'docker' && (
          <DockerContainer>
            <DockerService
              color="rgba(52, 152, 219, 0.2)"
              borderColor="#3498db"
              whileHover={{ scale: 1.02 }}
            >
              <h4 style={{ color: '#3498db', margin: '0 0 10px 0' }}>Code Ingestion</h4>
              <p style={{ fontSize: '12px', margin: 0 }}>3 replicas | 2GB RAM | Auto-scaling</p>
            </DockerService>
            
            <DockerService
              color="rgba(231, 76, 60, 0.2)"
              borderColor="#e74c3c"
              whileHover={{ scale: 1.02 }}
            >
              <h4 style={{ color: '#e74c3c', margin: '0 0 10px 0' }}>Cerebras API</h4>
              <p style={{ fontSize: '12px', margin: 0 }}>1 replica | 4GB RAM | GPU-optimized</p>
            </DockerService>
            
            <DockerService
              color="rgba(39, 174, 96, 0.2)"
              borderColor="#27ae60"
              whileHover={{ scale: 1.02 }}
            >
              <h4 style={{ color: '#27ae60', margin: '0 0 10px 0' }}>Llama Service</h4>
              <p style={{ fontSize: '12px', margin: 0 }}>2 replicas | 32GB RAM | Model serving</p>
            </DockerService>
            
            <DockerService
              color="rgba(243, 156, 18, 0.2)"
              borderColor="#f39c12"
              whileHover={{ scale: 1.02 }}
            >
              <h4 style={{ color: '#f39c12', margin: '0 0 10px 0' }}>Analytics Engine</h4>
              <p style={{ fontSize: '12px', margin: 0 }}>5 replicas | 8GB RAM | Time-series DB</p>
            </DockerService>
            
            <DockerService
              color="rgba(155, 89, 182, 0.2)"
              borderColor="#9b59b6"
              whileHover={{ scale: 1.02 }}
            >
              <h4 style={{ color: '#9b59b6', margin: '0 0 10px 0' }}>API Gateway</h4>
              <p style={{ fontSize: '12px', margin: 0 }}>2 replicas | 4GB RAM | Load balancer</p>
            </DockerService>
            
            <DockerService
              color="rgba(149, 165, 166, 0.2)"
              borderColor="#95a5a6"
              whileHover={{ scale: 1.02 }}
            >
              <h4 style={{ color: '#95a5a6', margin: '0 0 10px 0' }}>Storage Layer</h4>
              <p style={{ fontSize: '12px', margin: 0 }}>PostgreSQL | Redis | S3 | TimescaleDB</p>
            </DockerService>
          </DockerContainer>
        )}
        
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '2rem' }}>
          {activeAI === 'cerebras' && (
            <>
              <MetricPanel whileHover={{ scale: 1.05 }}>
                <MetricValue color="#ff6b6b">850K</MetricValue>
                <MetricLabel>AI Cores</MetricLabel>
              </MetricPanel>
              <MetricPanel whileHover={{ scale: 1.05 }}>
                <MetricValue color="#feca57">750</MetricValue>
                <MetricLabel>TFLOPS</MetricLabel>
              </MetricPanel>
              <MetricPanel whileHover={{ scale: 1.05 }}>
                <MetricValue color="#48dbfb">1.2TB/s</MetricValue>
                <MetricLabel>Bandwidth</MetricLabel>
              </MetricPanel>
            </>
          )}
          
          {activeAI === 'llama' && (
            <>
              <MetricPanel whileHover={{ scale: 1.05 }}>
                <MetricValue color="#4ecdc4">405B</MetricValue>
                <MetricLabel>Parameters</MetricLabel>
              </MetricPanel>
              <MetricPanel whileHover={{ scale: 1.05 }}>
                <MetricValue color="#44a08d">128K</MetricValue>
                <MetricLabel>Context Window</MetricLabel>
              </MetricPanel>
              <MetricPanel whileHover={{ scale: 1.05 }}>
                <MetricValue color="#6c5ce7">2.5K</MetricValue>
                <MetricLabel>Tokens/sec</MetricLabel>
              </MetricPanel>
            </>
          )}
          
          {activeAI === 'docker' && (
            <>
              <MetricPanel whileHover={{ scale: 1.05 }}>
                <MetricValue color="#45b7d1">99.9%</MetricValue>
                <MetricLabel>Uptime</MetricLabel>
              </MetricPanel>
              <MetricPanel whileHover={{ scale: 1.05 }}>
                <MetricValue color="#26de81">15</MetricValue>
                <MetricLabel>Services</MetricLabel>
              </MetricPanel>
              <MetricPanel whileHover={{ scale: 1.05 }}>
                <MetricValue color="#fc5c65">&lt; 50ms</MetricValue>
                <MetricLabel>Response Time</MetricLabel>
              </MetricPanel>
            </>
          )}
        </div>
        
        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ color: '#00d4ff', marginBottom: '1rem' }}>Key Features:</h3>
          <ul style={{ paddingLeft: '20px' }}>
            {currentSystem.features.map((feature, index) => (
              <motion.li
                key={index}
                style={{ marginBottom: '8px', opacity: 0.9 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>
      </AISection>
    </Container>
  );
};

export default AIIntegration;
