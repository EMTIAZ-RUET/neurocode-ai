import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const DesignContainer = styled.section`
  padding: ${props => props.theme?.spacing?.['2xl'] || '2rem'} 0;
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
`;

const DesignContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme?.spacing?.md || '1rem'};
  color: ${props => props.theme?.colors?.text || '#333'};
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme?.spacing?.xl || '2rem'};
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${props => props.theme?.spacing?.md || '1rem'};
  }
`;

const Title = styled.h2`
  font-size: ${props => props.theme?.fontSizes?.['3xl'] || '2.5rem'};
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: ${props => props.theme?.spacing?.md || '1rem'};
  color: ${props => props.theme?.colors?.primary || '#3498db'};
  
  i {
    color: ${props => props.theme?.colors?.accent || '#9b59b6'};
  }
`;


const DesignGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${props => props.theme?.spacing?.xl || '2rem'};
  margin: ${props => props.theme?.spacing?.xl || '2rem'} 0;
`;

const DesignCard = styled.div`
  background: ${props => props.theme?.colors?.cardBackground || 'rgba(255, 255, 255, 0.1)'};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${props => props.theme?.borderRadius?.lg || '16px'};
  padding: ${props => props.theme?.spacing?.lg || '1.5rem'};
  box-shadow: ${props => props.theme?.shadows?.lg || '0 8px 32px rgba(0, 0, 0, 0.1)'};
  
  &.full-width {
    grid-column: 1 / -1;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme?.spacing?.lg || '1.5rem'};
`;

const CardTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: ${props => props.theme?.spacing?.sm || '0.5rem'};
  font-size: ${props => props.theme?.fontSizes?.lg || '1.25rem'};
  font-weight: 600;
  color: ${props => props.theme?.colors?.text || '#333'};
  
  i {
    color: ${props => props.theme?.colors?.primary || '#3498db'};
  }
`;



const InterfaceMockup = styled.div`
  background: #f8f9fa;
  border: 2px solid #dee2e6;
  border-radius: 15px;
  padding: 30px;
  margin: 30px 0;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
`;

const MockupTitle = styled.div`
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 2px solid #3498db;
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
`;

const Widget = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-left: 4px solid #3498db;
`;

const WidgetHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const WidgetTitle = styled.div`
  font-weight: bold;
  color: #2c3e50;
  font-size: 1.1em;
`;

const WidgetValue = styled.div`
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  margin: 15px 0;
  
  &.status-good { color: #27ae60; }
  &.status-warning { color: #f39c12; }
  &.status-danger { color: #e74c3c; }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 20px;
  background: #ecf0f1;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px 0;
`;

const ProgressFill = styled.div`
  height: 100%;
  border-radius: 10px;
  transition: width 0.3s ease;
  width: ${props => props.width || '0%'};
  
  &.progress-good { 
    background: linear-gradient(90deg, #27ae60, #2ecc71); 
  }
  &.progress-warning { 
    background: linear-gradient(90deg, #f39c12, #f1c40f); 
  }
  &.progress-danger { 
    background: linear-gradient(90deg, #e74c3c, #c0392b); 
  }
`;

const ChartPlaceholder = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #ecf0f1, #bdc3c7);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7f8c8d;
  font-style: italic;
  margin: 15px 0;
`;

const NotificationPanel = styled.div`
  background: #fff3cd;
  border: 2px solid #ffc107;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
`;

const NotificationItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
  background: white;
  border-radius: 8px;
  border-left: 4px solid #ffc107;
`;

const NotificationIcon = styled.div`
  font-size: 1.5em;
  margin-right: 15px;
`;

const IDEMockup = styled.div`
  background: #2c3e50;
  color: #ecf0f1;
  border-radius: 10px;
  padding: 20px;
  font-family: 'Courier New', monospace;
  margin: 20px 0;
`;

const IDEHeader = styled.div`
  background: #34495e;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IDETabs = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
`;

const IDETab = styled.div`
  background: ${props => props.active ? '#3498db' : '#34495e'};
  padding: 8px 15px;
  border-radius: 5px;
  font-size: 12px;
  cursor: pointer;
`;

const CodeEditor = styled.div`
  background: #2c3e50;
  padding: 15px;
  border-radius: 5px;
  font-size: 14px;
  line-height: 1.4;
  min-height: 200px;
`;

const MobileInterface = styled.div`
  width: 300px;
  margin: 20px auto;
  background: #34495e;
  border-radius: 25px;
  padding: 20px;
  color: white;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
`;

const MobileScreen = styled.div`
  background: white;
  color: #333;
  border-radius: 15px;
  padding: 20px;
  min-height: 500px;
`;

const DesignPrinciples = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 30px 0;
`;

const PrincipleCard = styled.div`
  background: linear-gradient(135deg, #e8f4f8 0%, #d1ecf1 100%);
  padding: 25px;
  border-radius: 12px;
  border-left: 4px solid #17a2b8;
  
  h4 {
    color: #0c5460;
    margin-top: 0;
  }
`;

const UIUXDesignSD = () => {
  const [activeTab, setActiveTab] = useState('main.js');

  return (
    <DesignContainer>
      <DesignContent>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader>
            <Title>
              <i className="fas fa-palette"></i>
              UI/UX Design System
            </Title>
          </SectionHeader>
        </motion.div>
        
        <DesignGrid>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <DesignCard className="full-width">
              <CardHeader>
                <CardTitle>
                  <i className="fas fa-desktop"></i>
                  Dashboard Interface
                </CardTitle>
              </CardHeader>
            
      <InterfaceMockup>
        <MockupTitle>🖥️ Main Dashboard - Real-time Developer Wellness</MockupTitle>
        <DashboardGrid>
          <Widget>
            <WidgetHeader>
              <WidgetTitle>🧠 Mental Health Score</WidgetTitle>
              <span>Today</span>
            </WidgetHeader>
            <WidgetValue className="status-good">87</WidgetValue>
            <ProgressBar>
              <ProgressFill className="progress-good" width="87%" />
            </ProgressBar>
            <small>Excellent - Maintain current pace</small>
          </Widget>
          
          <Widget>
            <WidgetHeader>
              <WidgetTitle>⚡ Stress Level</WidgetTitle>
              <span>Last 4 hours</span>
            </WidgetHeader>
            <WidgetValue className="status-warning">42</WidgetValue>
            <ProgressBar>
              <ProgressFill className="progress-warning" width="42%" />
            </ProgressBar>
            <small>Moderate - Consider a short break</small>
          </Widget>
          
          <Widget>
            <WidgetHeader>
              <WidgetTitle>🔥 Burnout Risk</WidgetTitle>
              <span>This week</span>
            </WidgetHeader>
            <WidgetValue className="status-good">18</WidgetValue>
            <ProgressBar>
              <ProgressFill className="progress-good" width="18%" />
            </ProgressBar>
            <small>Low - Good work-life balance</small>
          </Widget>
          
          <Widget>
            <WidgetHeader>
              <WidgetTitle>🌊 Flow State</WidgetTitle>
              <span>Today</span>
            </WidgetHeader>
            <WidgetValue className="status-good">73</WidgetValue>
            <ProgressBar>
              <ProgressFill className="progress-good" width="73%" />
            </ProgressBar>
            <small>High productivity zone</small>
          </Widget>
          
          <Widget style={{ gridColumn: 'span 2' }}>
            <WidgetHeader>
              <WidgetTitle>📈 Productivity Trends</WidgetTitle>
              <span>Last 7 days</span>
            </WidgetHeader>
            <ChartPlaceholder>
              Interactive Chart: Productivity vs Mental Health
            </ChartPlaceholder>
          </Widget>
        </DashboardGrid>
      </InterfaceMockup>
            </DesignCard>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <DesignCard className="full-width">
              <CardHeader>
                <CardTitle>
                  <i className="fas fa-code"></i>
                  IDE Integration Interface
                </CardTitle>
              </CardHeader>
            
      <InterfaceMockup>
        <MockupTitle>💻 VS Code Extension - Live Wellness Monitoring</MockupTitle>
        <IDEMockup>
          <IDEHeader>
            <div>📂 neurocode-project</div>
            <div>🧠 NeuroCode Active</div>
          </IDEHeader>
          
          <IDETabs>
            <IDETab 
              active={activeTab === 'main.js'} 
              onClick={() => setActiveTab('main.js')}
            >
              main.js
            </IDETab>
            <IDETab 
              active={activeTab === 'utils.js'} 
              onClick={() => setActiveTab('utils.js')}
            >
              utils.js
            </IDETab>
            <IDETab 
              active={activeTab === 'config.json'} 
              onClick={() => setActiveTab('config.json')}
            >
              config.json
            </IDETab>
          </IDETabs>
          
          <CodeEditor>
{activeTab === 'main.js' && `// NeuroCode Analysis: Complexity Score: 7/10
import { analyzeCode } from './utils';
import config from './config.json';

// 🟢 Good practices detected
function processUserData(userData) {
  if (!userData) {
    throw new Error('User data required');
  }
  
  // ⚠️ Consider breaking this function down
  return userData.map(user => {
    const processed = analyzeCode(user);
    return {
      ...user,
      analysis: processed,
      timestamp: Date.now()
    };
  });
}`}

{activeTab === 'utils.js' && `// NeuroCode Analysis: Clean code detected ✨
export function analyzeCode(input) {
  // 🟢 Well-documented function
  return {
    complexity: calculateComplexity(input),
    maintainability: assessMaintainability(input)
  };
}`}

{activeTab === 'config.json' && `{
  "neurocode": {
    "enabled": true,
    "realTimeAnalysis": true,
    "notifications": true
  },
  "thresholds": {
    "stress": 70,
    "complexity": 8
  }
}`}
          </CodeEditor>
          
          <NotificationPanel>
            <h4 style={{ marginTop: 0, color: '#856404' }}>🔔 Live Recommendations</h4>
            <NotificationItem>
              <NotificationIcon>💡</NotificationIcon>
              <div>
                <strong>Code Simplification:</strong> Consider extracting the map function into a separate utility
              </div>
            </NotificationItem>
            <NotificationItem>
              <NotificationIcon>⏰</NotificationIcon>
              <div>
                <strong>Break Reminder:</strong> You've been coding for 2 hours. Take a 10-minute break!
              </div>
            </NotificationItem>
            <NotificationItem>
              <NotificationIcon>🧠</NotificationIcon>
              <div>
                <strong>Mental State:</strong> Stress levels rising. Current task complexity: High
              </div>
            </NotificationItem>
          </NotificationPanel>
        </IDEMockup>
      </InterfaceMockup>
            </DesignCard>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <DesignCard className="full-width">
              <CardHeader>
                <CardTitle>
                  <i className="fas fa-mobile-alt"></i>
                  Mobile Application Interface
                </CardTitle>
              </CardHeader>
            
      <InterfaceMockup>
        <MockupTitle>📱 NeuroCode Mobile - Wellness on the Go</MockupTitle>
        <MobileInterface>
          <MobileScreen>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0' }}>🧠 NeuroCode</h3>
              <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>Developer Wellness Companion</p>
            </div>
            
            <div style={{ background: '#e8f4f8', padding: '15px', borderRadius: '10px', marginBottom: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>🌊 Flow State</span>
                <span style={{ fontWeight: 'bold', color: '#27ae60' }}>Active</span>
              </div>
              <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
                In the zone for 47 minutes
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '15px' }}>
              <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#3498db' }}>73</div>
                <div style={{ fontSize: '12px', color: '#666' }}>Wellness Score</div>
              </div>
              <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#f39c12' }}>28</div>
                <div style={{ fontSize: '12px', color: '#666' }}>Stress Level</div>
              </div>
            </div>
            
            <div style={{ background: '#fff3cd', padding: '15px', borderRadius: '10px', border: '1px solid #ffc107' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ marginRight: '10px' }}>💡</span>
                <strong>Smart Recommendation</strong>
              </div>
              <p style={{ margin: 0, fontSize: '14px' }}>
                Take a 5-minute walk. Your stress indicators suggest a brief break would boost productivity.
              </p>
            </div>
            
            <div style={{ marginTop: '20px' }}>
              <h4 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>📊 Today's Summary</h4>
              <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
                <div>⏰ Active coding: 4h 23m</div>
                <div>🔥 Productivity peaks: 3</div>
                <div>😌 Break compliance: 85%</div>
                <div>🎯 Goals achieved: 7/9</div>
              </div>
            </div>
          </MobileScreen>
        </MobileInterface>
      </InterfaceMockup>
            </DesignCard>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <DesignCard className="full-width">
              <CardHeader>
                <CardTitle>
                  <i className="fas fa-lightbulb"></i>
                  Design Principles & User Experience
                </CardTitle>
              </CardHeader>
            
      <DesignPrinciples>
        <PrincipleCard>
          <h4>🎯 Clarity First</h4>
          <p>Every interface element serves a clear purpose. Wellness metrics are presented in immediately understandable formats with color-coded indicators.</p>
        </PrincipleCard>
        
        <PrincipleCard>
          <h4>🔄 Real-time Feedback</h4>
          <p>Live updates and instant notifications ensure developers get timely wellness insights without disrupting their workflow.</p>
        </PrincipleCard>
        
        <PrincipleCard>
          <h4>🎨 Minimal Cognitive Load</h4>
          <p>Clean, distraction-free interfaces that integrate seamlessly into existing development tools and workflows.</p>
        </PrincipleCard>
        
        <PrincipleCard>
          <h4>📱 Cross-platform Consistency</h4>
          <p>Unified experience across desktop IDEs, web dashboards, and mobile applications with adaptive layouts.</p>
        </PrincipleCard>
        
        <PrincipleCard>
          <h4>🔒 Privacy-centric Design</h4>
          <p>All personal wellness data visualization includes clear privacy indicators and user control options.</p>
        </PrincipleCard>
        
        <PrincipleCard>
          <h4>⚡ Performance Optimized</h4>
          <p>Lightweight interfaces that don't impact IDE performance or development environment responsiveness.</p>
        </PrincipleCard>
      </DesignPrinciples>
            </DesignCard>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <DesignCard className="full-width">
              <CardHeader>
                <CardTitle>
                  <i className="fas fa-bell"></i>
                  Notification System Design
                </CardTitle>
              </CardHeader>
            
      <InterfaceMockup>
        <MockupTitle>🔔 Notification System Design</MockupTitle>
        <div style={{ background: 'white', padding: '20px', borderRadius: '10px' }}>
          <h4>Smart Notification Priorities</h4>
          <div style={{ marginBottom: '15px' }}>
            <div style={{ background: '#ff4757', color: 'white', padding: '10px', borderRadius: '5px', marginBottom: '5px' }}>
              🚨 <strong>Critical:</strong> Severe burnout indicators detected - Immediate intervention recommended
            </div>
            <div style={{ background: '#ffa502', color: 'white', padding: '10px', borderRadius: '5px', marginBottom: '5px' }}>
              ⚠️ <strong>Warning:</strong> Stress levels elevated for 3+ hours - Consider taking a break
            </div>
            <div style={{ background: '#3498db', color: 'white', padding: '10px', borderRadius: '5px', marginBottom: '5px' }}>
              💡 <strong>Suggestion:</strong> Code complexity high - Review for refactoring opportunities
            </div>
            <div style={{ background: '#2ed573', color: 'white', padding: '10px', borderRadius: '5px' }}>
              ✅ <strong>Success:</strong> Great job! You've maintained excellent work-life balance today
            </div>
          </div>
        </div>
      </InterfaceMockup>
            </DesignCard>
          </motion.div>
        </DesignGrid>
      </DesignContent>
    </DesignContainer>
  );
};

export default UIUXDesignSD;