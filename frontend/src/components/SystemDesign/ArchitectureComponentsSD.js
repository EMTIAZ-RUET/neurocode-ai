import React, { useState } from 'react';
import styled from 'styled-components';

const ArchitectureContainer = styled.div`
  max-width: 100%;
  color: #333;
`;

const Title = styled.h1`
  color: #2c3e50;
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 30px;
  background: linear-gradient(45deg, #3498db, #9b59b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionTitle = styled.h2`
  color: #34495e;
  border-left: 5px solid #3498db;
  padding-left: 20px;
  margin-top: 40px;
  font-size: 1.8em;
`;

const ArchitectureDiagram = styled.div`
  background: #f8f9fa;
  border: 2px solid #dee2e6;
  border-radius: 15px;
  padding: 30px;
  margin: 30px 0;
  text-align: center;
  
  svg {
    max-width: 100%;
    height: auto;
  }
`;

const ComponentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
  margin: 30px 0;
`;

const ComponentCard = styled.div`
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border: 2px solid #3498db;
  border-radius: 12px;
  padding: 25px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(52, 152, 219, 0.2);
  }
`;

const ComponentHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ComponentIcon = styled.span`
  font-size: 2em;
  margin-right: 15px;
`;

const ComponentTitle = styled.div`
  font-size: 1.3em;
  font-weight: bold;
  color: #2c3e50;
`;

const ComponentTech = styled.span`
  background: #3498db;
  color: white;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.8em;
  margin-left: auto;
`;

const ComponentDescription = styled.div`
  color: #34495e;
  margin-bottom: 15px;
  line-height: 1.6;
`;

const ComponentFeatures = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    background: white;
    padding: 8px 12px;
    margin: 5px 0;
    border-radius: 6px;
    border-left: 3px solid #3498db;
    font-size: 0.9em;
    
    &::before {
      content: "✓";
      color: #27ae60;
      font-weight: bold;
      margin-right: 8px;
    }
  }
`;

const DataFlow = styled.div`
  background: #2c3e50;
  color: #ecf0f1;
  padding: 25px;
  border-radius: 10px;
  margin: 20px 0;
  font-family: 'Courier New', monospace;
`;

const FlowStep = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
  padding: 10px;
  background: rgba(52, 152, 219, 0.1);
  border-radius: 8px;
`;

const StepNumber = styled.div`
  background: #3498db;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 15px;
  flex-shrink: 0;
`;

const StepDescription = styled.div`
  flex: 1;
`;

const TechStackTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  
  th {
    background: #3498db;
    color: white;
    padding: 15px;
    text-align: left;
    font-weight: bold;
  }
  
  td {
    padding: 12px 15px;
    border-bottom: 1px solid #ecf0f1;
  }
  
  tr:nth-child(even) {
    background: #f8f9fa;
  }
  
  tr:hover {
    background: #e3f2fd;
  }
`;

const ScalabilityMetrics = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 30px 0;
`;

const MetricBox = styled.div`
  background: white;
  border: 2px solid #3498db;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
`;

const MetricValue = styled.div`
  font-size: 2em;
  font-weight: bold;
  color: #3498db;
  margin-bottom: 10px;
`;

const MetricLabel = styled.div`
  color: #7f8c8d;
  font-size: 0.9em;
`;

const IntegrationFlow = styled.div`
  background: linear-gradient(135deg, #e8f5e8 0%, #d4edda 100%);
  border: 2px solid #27ae60;
  border-radius: 15px;
  padding: 25px;
  margin: 25px 0;
`;

const SecurityLayer = styled.div`
  background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
  border: 2px solid #ff9800;
  border-radius: 15px;
  padding: 25px;
  margin: 25px 0;
`;

const DeploymentPipeline = styled.div`
  background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
  border: 2px solid #9c27b0;
  border-radius: 15px;
  padding: 25px;
  margin: 25px 0;
`;

const BenefitsSection = styled.div`
  background: #d1ecf1;
  border: 2px solid #17a2b8;
  padding: 25px;
  border-radius: 15px;
  margin: 30px 0;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const ArchitectureComponentsSD = () => {
  const [activeView, setActiveView] = useState('overview');

  return (
    <ArchitectureContainer>
      <Title>🏗️ NeuroCode Architecture Components</Title>
      
      <SectionTitle>1. System Architecture Overview</SectionTitle>
      
      <ArchitectureDiagram>
        <svg width="1400" height="1000" viewBox="0 0 1400 1000">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#3498db"/>
            </marker>
            <linearGradient id="layerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:'#3498db', stopOpacity:0.1}} />
              <stop offset="100%" style={{stopColor:'#9b59b6', stopOpacity:0.1}} />
            </linearGradient>
            <linearGradient id="serviceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:'#27ae60', stopOpacity:0.1}} />
              <stop offset="100%" style={{stopColor:'#2ecc71', stopOpacity:0.1}} />
            </linearGradient>
            <linearGradient id="dataGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:'#e74c3c', stopOpacity:0.1}} />
              <stop offset="100%" style={{stopColor:'#c0392b', stopOpacity:0.1}} />
            </linearGradient>
          </defs>
          
          {/* Title */}
          <text x="700" y="30" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#2c3e50">
            NeuroCode Complete System Architecture
          </text>
          
          {/* Client Layer */}
          <rect fill="url(#layerGrad)" stroke="#3498db" strokeWidth="1" strokeDasharray="5,5" x="50" y="60" width="1300" height="120" rx="10"/>
          <text x="700" y="85" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#2c3e50">
            Client Layer
          </text>
          
          {/* Client Components */}
          <rect fill="#f8f9fa" stroke="#3498db" strokeWidth="2" rx="8" x="80" y="100" width="120" height="60"/>
          <text x="140" y="125" textAnchor="middle" fontSize="11" fill="#2c3e50">VS Code</text>
          <text x="140" y="140" textAnchor="middle" fontSize="11" fill="#2c3e50">Extension</text>
          
          <rect fill="#f8f9fa" stroke="#3498db" strokeWidth="2" rx="8" x="220" y="100" width="120" height="60"/>
          <text x="280" y="125" textAnchor="middle" fontSize="11" fill="#2c3e50">IntelliJ</text>
          <text x="280" y="140" textAnchor="middle" fontSize="11" fill="#2c3e50">Plugin</text>
          
          <rect fill="#f8f9fa" stroke="#3498db" strokeWidth="2" rx="8" x="360" y="100" width="120" height="60"/>
          <text x="420" y="125" textAnchor="middle" fontSize="11" fill="#2c3e50">Web</text>
          <text x="420" y="140" textAnchor="middle" fontSize="11" fill="#2c3e50">Dashboard</text>
          
          <rect fill="#f8f9fa" stroke="#3498db" strokeWidth="2" rx="8" x="500" y="100" width="120" height="60"/>
          <text x="560" y="125" textAnchor="middle" fontSize="11" fill="#2c3e50">Mobile</text>
          <text x="560" y="140" textAnchor="middle" fontSize="11" fill="#2c3e50">App</text>
          
          <rect fill="#f8f9fa" stroke="#3498db" strokeWidth="2" rx="8" x="640" y="100" width="120" height="60"/>
          <text x="700" y="125" textAnchor="middle" fontSize="11" fill="#2c3e50">Git</text>
          <text x="700" y="140" textAnchor="middle" fontSize="11" fill="#2c3e50">Hooks</text>
          
          <rect fill="#f8f9fa" stroke="#3498db" strokeWidth="2" rx="8" x="780" y="100" width="120" height="60"/>
          <text x="840" y="125" textAnchor="middle" fontSize="11" fill="#2c3e50">CI/CD</text>
          <text x="840" y="140" textAnchor="middle" fontSize="11" fill="#2c3e50">Pipeline</text>
          
          <rect fill="#f8f9fa" stroke="#3498db" strokeWidth="2" rx="8" x="920" y="100" width="120" height="60"/>
          <text x="980" y="125" textAnchor="middle" fontSize="11" fill="#2c3e50">Browser</text>
          <text x="980" y="140" textAnchor="middle" fontSize="11" fill="#2c3e50">Extension</text>
          
          <rect fill="#f8f9fa" stroke="#3498db" strokeWidth="2" rx="8" x="1060" y="100" width="120" height="60"/>
          <text x="1120" y="125" textAnchor="middle" fontSize="11" fill="#2c3e50">Slack/Jira</text>
          <text x="1120" y="140" textAnchor="middle" fontSize="11" fill="#2c3e50">Integration</text>
          
          <rect fill="#f8f9fa" stroke="#3498db" strokeWidth="2" rx="8" x="1200" y="100" width="120" height="60"/>
          <text x="1260" y="125" textAnchor="middle" fontSize="11" fill="#2c3e50">Terminal</text>
          <text x="1260" y="140" textAnchor="middle" fontSize="11" fill="#2c3e50">Monitoring</text>
          
          {/* API Gateway Layer */}
          <rect fill="url(#layerGrad)" stroke="#3498db" strokeWidth="1" strokeDasharray="5,5" x="50" y="200" width="1300" height="80" rx="10"/>
          <text x="700" y="225" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#2c3e50">
            API Gateway & Load Balancing
          </text>
          
          <rect fill="#f8f9fa" stroke="#3498db" strokeWidth="2" rx="8" x="300" y="240" width="200" height="30"/>
          <text x="400" y="260" textAnchor="middle" fontSize="11" fill="#2c3e50">Kong API Gateway</text>
          
          <rect fill="#f8f9fa" stroke="#3498db" strokeWidth="2" rx="8" x="520" y="240" width="200" height="30"/>
          <text x="620" y="260" textAnchor="middle" fontSize="11" fill="#2c3e50">Rate Limiting & Auth</text>
          
          <rect fill="#f8f9fa" stroke="#3498db" strokeWidth="2" rx="8" x="740" y="240" width="200" height="30"/>
          <text x="840" y="260" textAnchor="middle" fontSize="11" fill="#2c3e50">Load Balancer</text>
          
          {/* Services Layer */}
          <rect fill="url(#serviceGrad)" stroke="#27ae60" strokeWidth="1" strokeDasharray="5,5" x="50" y="300" width="1300" height="150" rx="10"/>
          <text x="700" y="325" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#2c3e50">
            Microservices Layer
          </text>
          
          {/* Service Components */}
          <rect fill="#f8f9fa" stroke="#27ae60" strokeWidth="2" rx="8" x="80" y="340" width="140" height="50"/>
          <text x="150" y="360" textAnchor="middle" fontSize="10" fill="#2c3e50">Code Ingestion</text>
          <text x="150" y="375" textAnchor="middle" fontSize="10" fill="#2c3e50">Service</text>
          
          <rect fill="#f8f9fa" stroke="#27ae60" strokeWidth="2" rx="8" x="240" y="340" width="140" height="50"/>
          <text x="310" y="360" textAnchor="middle" fontSize="10" fill="#2c3e50">Metrics</text>
          <text x="310" y="375" textAnchor="middle" fontSize="10" fill="#2c3e50">Extraction</text>
          
          <rect fill="#f8f9fa" stroke="#27ae60" strokeWidth="2" rx="8" x="400" y="340" width="140" height="50"/>
          <text x="470" y="360" textAnchor="middle" fontSize="10" fill="#2c3e50">Prediction</text>
          <text x="470" y="375" textAnchor="middle" fontSize="10" fill="#2c3e50">Engine</text>
          
          <rect fill="#f8f9fa" stroke="#27ae60" strokeWidth="2" rx="8" x="560" y="340" width="140" height="50"/>
          <text x="630" y="360" textAnchor="middle" fontSize="10" fill="#2c3e50">Notification</text>
          <text x="630" y="375" textAnchor="middle" fontSize="10" fill="#2c3e50">Service</text>
          
          <rect fill="#f8f9fa" stroke="#27ae60" strokeWidth="2" rx="8" x="720" y="340" width="140" height="50"/>
          <text x="790" y="360" textAnchor="middle" fontSize="10" fill="#2c3e50">Analytics</text>
          <text x="790" y="375" textAnchor="middle" fontSize="10" fill="#2c3e50">Service</text>
          
          <rect fill="#f8f9fa" stroke="#27ae60" strokeWidth="2" rx="8" x="880" y="340" width="140" height="50"/>
          <text x="950" y="360" textAnchor="middle" fontSize="10" fill="#2c3e50">Privacy</text>
          <text x="950" y="375" textAnchor="middle" fontSize="10" fill="#2c3e50">Service</text>
          
          <rect fill="#f8f9fa" stroke="#27ae60" strokeWidth="2" rx="8" x="1040" y="340" width="140" height="50"/>
          <text x="1110" y="360" textAnchor="middle" fontSize="10" fill="#2c3e50">Stream</text>
          <text x="1110" y="375" textAnchor="middle" fontSize="10" fill="#2c3e50">Processing</text>
          
          <rect fill="#f8f9fa" stroke="#27ae60" strokeWidth="2" rx="8" x="1200" y="340" width="140" height="50"/>
          <text x="1270" y="360" textAnchor="middle" fontSize="10" fill="#2c3e50">User</text>
          <text x="1270" y="375" textAnchor="middle" fontSize="10" fill="#2c3e50">Management</text>
          
          {/* AI/ML Services */}
          <rect fill="#e8f5e8" stroke="#27ae60" strokeWidth="2" rx="8" x="200" y="400" width="140" height="40"/>
          <text x="270" y="417" textAnchor="middle" fontSize="10" fill="#2c3e50">Cerebras AI</text>
          <text x="270" y="430" textAnchor="middle" fontSize="10" fill="#2c3e50">Engine</text>
          
          <rect fill="#e8f5e8" stroke="#27ae60" strokeWidth="2" rx="8" x="360" y="400" width="140" height="40"/>
          <text x="430" y="417" textAnchor="middle" fontSize="10" fill="#2c3e50">Llama NLP</text>
          <text x="430" y="430" textAnchor="middle" fontSize="10" fill="#2c3e50">Service</text>
          
          <rect fill="#e8f5e8" stroke="#27ae60" strokeWidth="2" rx="8" x="520" y="400" width="140" height="40"/>
          <text x="590" y="417" textAnchor="middle" fontSize="10" fill="#2c3e50">Pattern</text>
          <text x="590" y="430" textAnchor="middle" fontSize="10" fill="#2c3e50">Analysis</text>
          
          {/* Message Queue */}
          <rect fill="url(#serviceGrad)" stroke="#f39c12" strokeWidth="1" strokeDasharray="5,5" x="50" y="470" width="1300" height="80" rx="10"/>
          <text x="700" y="495" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#2c3e50">
            Message Queue & Stream Processing
          </text>
          
          <rect fill="#f8f9fa" stroke="#f39c12" strokeWidth="2" rx="8" x="200" y="510" width="150" height="30"/>
          <text x="275" y="530" textAnchor="middle" fontSize="11" fill="#2c3e50">Apache Kafka</text>
          
          <rect fill="#f8f9fa" stroke="#f39c12" strokeWidth="2" rx="8" x="370" y="510" width="150" height="30"/>
          <text x="445" y="530" textAnchor="middle" fontSize="11" fill="#2c3e50">Apache Flink</text>
          
          <rect fill="#f8f9fa" stroke="#f39c12" strokeWidth="2" rx="8" x="540" y="510" width="150" height="30"/>
          <text x="615" y="530" textAnchor="middle" fontSize="11" fill="#2c3e50">Event Processing</text>
          
          <rect fill="#f8f9fa" stroke="#f39c12" strokeWidth="2" rx="8" x="710" y="510" width="150" height="30"/>
          <text x="785" y="530" textAnchor="middle" fontSize="11" fill="#2c3e50">Redis Streams</text>
          
          <rect fill="#f8f9fa" stroke="#f39c12" strokeWidth="2" rx="8" x="880" y="510" width="150" height="30"/>
          <text x="955" y="530" textAnchor="middle" fontSize="11" fill="#2c3e50">WebSocket Hub</text>
          
          {/* Data Layer */}
          <rect fill="url(#dataGrad)" stroke="#e74c3c" strokeWidth="1" strokeDasharray="5,5" x="50" y="570" width="1300" height="120" rx="10"/>
          <text x="700" y="595" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#2c3e50">
            Data Storage & Processing Layer
          </text>
          
          {/* Database Components */}
          <rect fill="#f8f9fa" stroke="#e74c3c" strokeWidth="2" rx="8" x="80" y="610" width="130" height="40"/>
          <text x="145" y="627" textAnchor="middle" fontSize="10" fill="#2c3e50">PostgreSQL</text>
          <text x="145" y="640" textAnchor="middle" fontSize="10" fill="#2c3e50">Main DB</text>
          
          <rect fill="#f8f9fa" stroke="#e74c3c" strokeWidth="2" rx="8" x="230" y="610" width="130" height="40"/>
          <text x="295" y="627" textAnchor="middle" fontSize="10" fill="#2c3e50">TimescaleDB</text>
          <text x="295" y="640" textAnchor="middle" fontSize="10" fill="#2c3e50">Time Series</text>
          
          <rect fill="#f8f9fa" stroke="#e74c3c" strokeWidth="2" rx="8" x="380" y="610" width="130" height="40"/>
          <text x="445" y="627" textAnchor="middle" fontSize="10" fill="#2c3e50">Redis</text>
          <text x="445" y="640" textAnchor="middle" fontSize="10" fill="#2c3e50">Cache</text>
          
          <rect fill="#f8f9fa" stroke="#e74c3c" strokeWidth="2" rx="8" x="530" y="610" width="130" height="40"/>
          <text x="595" y="627" textAnchor="middle" fontSize="10" fill="#2c3e50">Pinecone</text>
          <text x="595" y="640" textAnchor="middle" fontSize="10" fill="#2c3e50">Vector DB</text>
          
          <rect fill="#f8f9fa" stroke="#e74c3c" strokeWidth="2" rx="8" x="680" y="610" width="130" height="40"/>
          <text x="745" y="627" textAnchor="middle" fontSize="10" fill="#2c3e50">Elasticsearch</text>
          <text x="745" y="640" textAnchor="middle" fontSize="10" fill="#2c3e50">Search</text>
          
          <rect fill="#f8f9fa" stroke="#e74c3c" strokeWidth="2" rx="8" x="830" y="610" width="130" height="40"/>
          <text x="895" y="627" textAnchor="middle" fontSize="10" fill="#2c3e50">InfluxDB</text>
          <text x="895" y="640" textAnchor="middle" fontSize="10" fill="#2c3e50">Metrics</text>
          
          <rect fill="#f8f9fa" stroke="#e74c3c" strokeWidth="2" rx="8" x="980" y="610" width="130" height="40"/>
          <text x="1045" y="627" textAnchor="middle" fontSize="10" fill="#2c3e50">S3/MinIO</text>
          <text x="1045" y="640" textAnchor="middle" fontSize="10" fill="#2c3e50">Object Store</text>
          
          <rect fill="#f8f9fa" stroke="#e74c3c" strokeWidth="2" rx="8" x="1130" y="610" width="130" height="40"/>
          <text x="1195" y="627" textAnchor="middle" fontSize="10" fill="#2c3e50">MongoDB</text>
          <text x="1195" y="640" textAnchor="middle" fontSize="10" fill="#2c3e50">Document</text>
          
          {/* Data Processing */}
          <rect fill="#ffe8e8" stroke="#e74c3c" strokeWidth="2" rx="8" x="300" y="660" width="140" height="25"/>
          <text x="370" y="677" textAnchor="middle" fontSize="10" fill="#2c3e50">ETL Pipelines</text>
          
          <rect fill="#ffe8e8" stroke="#e74c3c" strokeWidth="2" rx="8" x="460" y="660" width="140" height="25"/>
          <text x="530" y="677" textAnchor="middle" fontSize="10" fill="#2c3e50">Data Warehouse</text>
          
          <rect fill="#ffe8e8" stroke="#e74c3c" strokeWidth="2" rx="8" x="620" y="660" width="140" height="25"/>
          <text x="690" y="677" textAnchor="middle" fontSize="10" fill="#2c3e50">Analytics Engine</text>
          
          <rect fill="#ffe8e8" stroke="#e74c3c" strokeWidth="2" rx="8" x="780" y="660" width="140" height="25"/>
          <text x="850" y="677" textAnchor="middle" fontSize="10" fill="#2c3e50">Backup Systems</text>
          
          {/* Infrastructure Layer */}
          <rect fill="#f8f9fa" stroke="#95a5a6" strokeWidth="1" strokeDasharray="5,5" x="50" y="710" width="1300" height="100" rx="10"/>
          <text x="700" y="735" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#2c3e50">
            Infrastructure & Operations Layer
          </text>
          
          <rect fill="#ecf0f1" stroke="#95a5a6" strokeWidth="2" rx="8" x="100" y="750" width="120" height="35"/>
          <text x="160" y="765" textAnchor="middle" fontSize="10" fill="#2c3e50">Kubernetes</text>
          <text x="160" y="778" textAnchor="middle" fontSize="10" fill="#2c3e50">Cluster</text>
          
          <rect fill="#ecf0f1" stroke="#95a5a6" strokeWidth="2" rx="8" x="240" y="750" width="120" height="35"/>
          <text x="300" y="765" textAnchor="middle" fontSize="10" fill="#2c3e50">Docker</text>
          <text x="300" y="778" textAnchor="middle" fontSize="10" fill="#2c3e50">Containers</text>
          
          <rect fill="#ecf0f1" stroke="#95a5a6" strokeWidth="2" rx="8" x="380" y="750" width="120" height="35"/>
          <text x="440" y="765" textAnchor="middle" fontSize="10" fill="#2c3e50">Prometheus</text>
          <text x="440" y="778" textAnchor="middle" fontSize="10" fill="#2c3e50">Monitoring</text>
          
          <rect fill="#ecf0f1" stroke="#95a5a6" strokeWidth="2" rx="8" x="520" y="750" width="120" height="35"/>
          <text x="580" y="765" textAnchor="middle" fontSize="10" fill="#2c3e50">Grafana</text>
          <text x="580" y="778" textAnchor="middle" fontSize="10" fill="#2c3e50">Dashboards</text>
          
          <rect fill="#ecf0f1" stroke="#95a5a6" strokeWidth="2" rx="8" x="660" y="750" width="120" height="35"/>
          <text x="720" y="765" textAnchor="middle" fontSize="10" fill="#2c3e50">ELK Stack</text>
          <text x="720" y="778" textAnchor="middle" fontSize="10" fill="#2c3e50">Logging</text>
          
          <rect fill="#ecf0f1" stroke="#95a5a6" strokeWidth="2" rx="8" x="800" y="750" width="120" height="35"/>
          <text x="860" y="765" textAnchor="middle" fontSize="10" fill="#2c3e50">Jaeger</text>
          <text x="860" y="778" textAnchor="middle" fontSize="10" fill="#2c3e50">Tracing</text>
          
          <rect fill="#ecf0f1" stroke="#95a5a6" strokeWidth="2" rx="8" x="940" y="750" width="120" height="35"/>
          <text x="1000" y="765" textAnchor="middle" fontSize="10" fill="#2c3e50">Terraform</text>
          <text x="1000" y="778" textAnchor="middle" fontSize="10" fill="#2c3e50">IaC</text>
          
          <rect fill="#ecf0f1" stroke="#95a5a6" strokeWidth="2" rx="8" x="1080" y="750" width="120" height="35"/>
          <text x="1140" y="765" textAnchor="middle" fontSize="10" fill="#2c3e50">ArgoCD</text>
          <text x="1140" y="778" textAnchor="middle" fontSize="10" fill="#2c3e50">GitOps</text>
          
          {/* Security Layer */}
          <rect fill="#fff3e0" stroke="#ff9800" strokeWidth="1" strokeDasharray="3,3" x="50" y="830" width="1300" height="80" rx="10"/>
          <text x="700" y="855" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#2c3e50">
            Security & Compliance Layer
          </text>
          
          <rect fill="#fff8e1" stroke="#ff9800" strokeWidth="2" rx="8" x="150" y="870" width="120" height="30"/>
          <text x="210" y="890" textAnchor="middle" fontSize="10" fill="#2c3e50">OAuth 2.0 / JWT</text>
          
          <rect fill="#fff8e1" stroke="#ff9800" strokeWidth="2" rx="8" x="290" y="870" width="120" height="30"/>
          <text x="350" y="890" textAnchor="middle" fontSize="10" fill="#2c3e50">TLS/SSL</text>
          
          <rect fill="#fff8e1" stroke="#ff9800" strokeWidth="2" rx="8" x="430" y="870" width="120" height="30"/>
          <text x="490" y="890" textAnchor="middle" fontSize="10" fill="#2c3e50">Data Encryption</text>
          
          <rect fill="#fff8e1" stroke="#ff9800" strokeWidth="2" rx="8" x="570" y="870" width="120" height="30"/>
          <text x="630" y="890" textAnchor="middle" fontSize="10" fill="#2c3e50">RBAC</text>
          
          <rect fill="#fff8e1" stroke="#ff9800" strokeWidth="2" rx="8" x="710" y="870" width="120" height="30"/>
          <text x="770" y="890" textAnchor="middle" fontSize="10" fill="#2c3e50">Privacy Controls</text>
          
          <rect fill="#fff8e1" stroke="#ff9800" strokeWidth="2" rx="8" x="850" y="870" width="120" height="30"/>
          <text x="910" y="890" textAnchor="middle" fontSize="10" fill="#2c3e50">Audit Logging</text>
          
          <rect fill="#fff8e1" stroke="#ff9800" strokeWidth="2" rx="8" x="990" y="870" width="120" height="30"/>
          <text x="1050" y="890" textAnchor="middle" fontSize="10" fill="#2c3e50">Compliance</text>
          
          {/* Connection Lines */}
          <line stroke="#3498db" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" x1="700" y1="180" x2="700" y2="200"/>
          <line stroke="#3498db" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" x1="700" y1="280" x2="700" y2="300"/>
          <line stroke="#27ae60" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" x1="700" y1="450" x2="700" y2="470"/>
          <line stroke="#f39c12" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" x1="700" y1="550" x2="700" y2="570"/>
          <line stroke="#e74c3c" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" x1="700" y1="690" x2="700" y2="710"/>
          <line stroke="#95a5a6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" x1="700" y1="810" x2="700" y2="830"/>
          
          {/* Data Flow Arrows */}
          <line stroke="#3498db" strokeWidth="1" fill="none" markerEnd="url(#arrowhead)" x1="140" y1="180" x2="150" y2="340"/>
          <line stroke="#3498db" strokeWidth="1" fill="none" markerEnd="url(#arrowhead)" x1="280" y1="180" x2="310" y2="340"/>
          <line stroke="#3498db" strokeWidth="1" fill="none" markerEnd="url(#arrowhead)" x1="420" y1="180" x2="470" y2="340"/>
          <line stroke="#3498db" strokeWidth="1" fill="none" markerEnd="url(#arrowhead)" x1="560" y1="180" x2="630" y2="340"/>
          
        </svg>
      </ArchitectureDiagram>

      <SectionTitle>2. Core Components Breakdown</SectionTitle>
      
      <ComponentGrid>
        <ComponentCard>
          <ComponentHeader>
            <ComponentIcon>🔌</ComponentIcon>
            <div>
              <ComponentTitle>IDE Plugins</ComponentTitle>
            </div>
            <ComponentTech>TypeScript/Java</ComponentTech>
          </ComponentHeader>
          <ComponentDescription>
            Real-time code monitoring extensions for popular IDEs that capture developer behavior patterns without storing sensitive code content.
          </ComponentDescription>
          <ComponentFeatures>
            <li>Keystroke dynamics analysis</li>
            <li>File switching pattern tracking</li>
            <li>Error correction monitoring</li>
            <li>Session duration tracking</li>
            <li>Break pattern detection</li>
            <li>Privacy-first data collection</li>
          </ComponentFeatures>
        </ComponentCard>
        
        <ComponentCard>
          <ComponentHeader>
            <ComponentIcon>🚪</ComponentIcon>
            <div>
              <ComponentTitle>API Gateway</ComponentTitle>
            </div>
            <ComponentTech>Kong</ComponentTech>
          </ComponentHeader>
          <ComponentDescription>
            Centralized entry point for all client requests with authentication, rate limiting, and load balancing capabilities.
          </ComponentDescription>
          <ComponentFeatures>
            <li>OAuth 2.0 authentication</li>
            <li>Rate limiting (1000 req/min)</li>
            <li>Request/response transformation</li>
            <li>API versioning support</li>
            <li>Circuit breaker pattern</li>
            <li>Comprehensive logging</li>
          </ComponentFeatures>
        </ComponentCard>
        
        <ComponentCard>
          <ComponentHeader>
            <ComponentIcon>📊</ComponentIcon>
            <div>
              <ComponentTitle>Code Ingestion Service</ComponentTitle>
            </div>
            <ComponentTech>Node.js</ComponentTech>
          </ComponentHeader>
          <ComponentDescription>
            High-throughput service for receiving and processing real-time code events from multiple IDE plugins and development tools.
          </ComponentDescription>
          <ComponentFeatures>
            <li>10K+ events per second capacity</li>
            <li>Event validation and sanitization</li>
            <li>Kafka producer integration</li>
            <li>Horizontal scaling support</li>
            <li>Health check endpoints</li>
            <li>Metrics collection</li>
          </ComponentFeatures>
        </ComponentCard>
        
        <ComponentCard>
          <ComponentHeader>
            <ComponentIcon>🔍</ComponentIcon>
            <div>
              <ComponentTitle>Metrics Extraction</ComponentTitle>
            </div>
            <ComponentTech>Python</ComponentTech>
          </ComponentHeader>
          <ComponentDescription>
            Advanced code analysis engine that computes complexity metrics, quality scores, and behavioral indicators from code changes.
          </ComponentDescription>
          <ComponentFeatures>
            <li>Cyclomatic complexity calculation</li>
            <li>Cognitive complexity analysis</li>
            <li>Technical debt assessment</li>
            <li>Code duplication detection</li>
            <li>Multi-language support</li>
            <li>Real-time processing</li>
          </ComponentFeatures>
        </ComponentCard>
        
        <ComponentCard>
          <ComponentHeader>
            <ComponentIcon>🧠</ComponentIcon>
            <div>
              <ComponentTitle>Cerebras AI Engine</ComponentTitle>
            </div>
            <ComponentTech>Python API</ComponentTech>
          </ComponentHeader>
          <ComponentDescription>
            Ultra-fast pattern recognition system using Cerebras CS-2 for real-time behavioral analysis and anomaly detection.
          </ComponentDescription>
          <ComponentFeatures>
            <li>850K AI cores processing</li>
            <li>Sub-millisecond inference</li>
            <li>Pattern recognition algorithms</li>
            <li>Anomaly detection models</li>
            <li>Time series analysis</li>
            <li>Predictive modeling</li>
          </ComponentFeatures>
        </ComponentCard>
        
        <ComponentCard>
          <ComponentHeader>
            <ComponentIcon>💬</ComponentIcon>
            <div>
              <ComponentTitle>Llama NLP Service</ComponentTitle>
            </div>
            <ComponentTech>Python</ComponentTech>
          </ComponentHeader>
          <ComponentDescription>
            Natural language processing service using Meta's Llama 3.1 for analyzing commit messages, comments, and documentation.
          </ComponentDescription>
          <ComponentFeatures>
            <li>405B parameter model</li>
            <li>Sentiment analysis</li>
            <li>Intent classification</li>
            <li>Code quality assessment</li>
            <li>128K token context window</li>
            <li>Multi-language support</li>
          </ComponentFeatures>
        </ComponentCard>
        
        <ComponentCard>
          <ComponentHeader>
            <ComponentIcon>🔮</ComponentIcon>
            <div>
              <ComponentTitle>Prediction Engine</ComponentTitle>
            </div>
            <ComponentTech>Python</ComponentTech>
          </ComponentHeader>
          <ComponentDescription>
            Machine learning pipeline for predicting burnout risk, stress levels, and optimal intervention timing using ensemble models.
          </ComponentDescription>
          <ComponentFeatures>
            <li>Ensemble ML models</li>
            <li>Burnout risk prediction</li>
            <li>Stress level forecasting</li>
            <li>Productivity optimization</li>
            <li>Intervention timing</li>
            <li>Model drift detection</li>
          </ComponentFeatures>
        </ComponentCard>
        
        <ComponentCard>
          <ComponentHeader>
            <ComponentIcon>🔔</ComponentIcon>
            <div>
              <ComponentTitle>Notification Service</ComponentTitle>
            </div>
            <ComponentTech>Go</ComponentTech>
          </ComponentHeader>
          <ComponentDescription>
            Real-time notification system for delivering personalized wellness alerts and intervention recommendations across multiple channels.
          </ComponentDescription>
          <ComponentFeatures>
            <li>Multi-channel delivery</li>
            <li>Context-aware timing</li>
            <li>Personalized messaging</li>
            <li>Delivery confirmation</li>
            <li>A/B testing support</li>
            <li>Rate limiting per user</li>
          </ComponentFeatures>
        </ComponentCard>
      </ComponentGrid>

      <SectionTitle>3. Data Flow Architecture</SectionTitle>
      
      <ArchitectureDiagram>
        <svg width="1400" height="700" viewBox="0 0 1400 700">
          <defs>
            <marker id="flowArrow" markerWidth="12" markerHeight="12" refX="11" refY="6" orient="auto">
              <polygon points="0 0, 12 6, 0 12" fill="#3498db"/>
            </marker>
            <marker id="processArrow" markerWidth="12" markerHeight="12" refX="11" refY="6" orient="auto">
              <polygon points="0 0, 12 6, 0 12" fill="#27ae60"/>
            </marker>
            <marker id="dataArrow" markerWidth="12" markerHeight="12" refX="11" refY="6" orient="auto">
              <polygon points="0 0, 12 6, 0 12" fill="#e74c3c"/>
            </marker>
            <linearGradient id="inputGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:'#3498db', stopOpacity:0.2}} />
              <stop offset="100%" style={{stopColor:'#2980b9', stopOpacity:0.2}} />
            </linearGradient>
            <linearGradient id="processGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:'#27ae60', stopOpacity:0.2}} />
              <stop offset="100%" style={{stopColor:'#229954', stopOpacity:0.2}} />
            </linearGradient>
            <linearGradient id="outputGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:'#e74c3c', stopOpacity:0.2}} />
              <stop offset="100%" style={{stopColor:'#c0392b', stopOpacity:0.2}} />
            </linearGradient>
          </defs>
          
          {/* Title */}
          <text x="700" y="30" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#2c3e50">
            NeuroCode Real-time Data Flow Architecture
          </text>
          
          {/* Step 1: Data Collection */}
          <rect fill="url(#inputGrad)" stroke="#3498db" strokeWidth="2" rx="10" x="50" y="60" width="180" height="80"/>
          <text x="140" y="85" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2c3e50">1. Data Collection</text>
          <text x="140" y="100" textAnchor="middle" fontSize="10" fill="#2c3e50">IDE Plugins</text>
          <text x="140" y="115" textAnchor="middle" fontSize="10" fill="#2c3e50">• Keystrokes</text>
          <text x="140" y="128" textAnchor="middle" fontSize="10" fill="#2c3e50">• File Changes</text>
          
          {/* Step 2: API Gateway */}
          <rect fill="url(#inputGrad)" stroke="#3498db" strokeWidth="2" rx="10" x="280" y="60" width="180" height="80"/>
          <text x="370" y="85" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2c3e50">2. API Gateway</text>
          <text x="370" y="100" textAnchor="middle" fontSize="10" fill="#2c3e50">Kong Gateway</text>
          <text x="370" y="115" textAnchor="middle" fontSize="10" fill="#2c3e50">• Authentication</text>
          <text x="370" y="128" textAnchor="middle" fontSize="10" fill="#2c3e50">• Rate Limiting</text>
          
          {/* Step 3: Code Ingestion */}
          <rect fill="url(#processGrad)" stroke="#27ae60" strokeWidth="2" rx="10" x="510" y="60" width="180" height="80"/>
          <text x="600" y="85" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2c3e50">3. Code Ingestion</text>
          <text x="600" y="100" textAnchor="middle" fontSize="10" fill="#2c3e50">Node.js Service</text>
          <text x="600" y="115" textAnchor="middle" fontSize="10" fill="#2c3e50">• Validation</text>
          <text x="600" y="128" textAnchor="middle" fontSize="10" fill="#2c3e50">• Sanitization</text>
          
          {/* Step 4: Kafka Message Queue */}
          <rect fill="url(#processGrad)" stroke="#f39c12" strokeWidth="2" rx="10" x="280" y="180" width="380" height="60"/>
          <text x="470" y="205" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2c3e50">4. Message Queue & Stream Processing</text>
          <text x="350" y="225" textAnchor="middle" fontSize="10" fill="#2c3e50">Apache Kafka</text>
          <text x="470" y="225" textAnchor="middle" fontSize="10" fill="#2c3e50">Apache Flink</text>
          <text x="590" y="225" textAnchor="middle" fontSize="10" fill="#2c3e50">Event Processing</text>
          
          {/* Step 5: Parallel Analysis Services */}
          <rect fill="url(#processGrad)" stroke="#9b59b6" strokeWidth="2" rx="10" x="50" y="280" width="170" height="90"/>
          <text x="135" y="305" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#2c3e50">5a. Metrics</text>
          <text x="135" y="320" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#2c3e50">Extraction</text>
          <text x="135" y="335" textAnchor="middle" fontSize="9" fill="#2c3e50">• Complexity Analysis</text>
          <text x="135" y="348" textAnchor="middle" fontSize="9" fill="#2c3e50">• Quality Metrics</text>
          <text x="135" y="361" textAnchor="middle" fontSize="9" fill="#2c3e50">• Technical Debt</text>
          
          <rect fill="url(#processGrad)" stroke="#9b59b6" strokeWidth="2" rx="10" x="250" y="280" width="170" height="90"/>
          <text x="335" y="305" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#2c3e50">5b. Cerebras AI</text>
          <text x="335" y="320" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#2c3e50">Engine</text>
          <text x="335" y="335" textAnchor="middle" fontSize="9" fill="#2c3e50">• Pattern Recognition</text>
          <text x="335" y="348" textAnchor="middle" fontSize="9" fill="#2c3e50">• Anomaly Detection</text>
          <text x="335" y="361" textAnchor="middle" fontSize="9" fill="#2c3e50">• Behavioral Analysis</text>
          
          <rect fill="url(#processGrad)" stroke="#9b59b6" strokeWidth="2" rx="10" x="450" y="280" width="170" height="90"/>
          <text x="535" y="305" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#2c3e50">5c. Llama NLP</text>
          <text x="535" y="320" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#2c3e50">Service</text>
          <text x="535" y="335" textAnchor="middle" fontSize="9" fill="#2c3e50">• Sentiment Analysis</text>
          <text x="535" y="348" textAnchor="middle" fontSize="9" fill="#2c3e50">• Intent Classification</text>
          <text x="535" y="361" textAnchor="middle" fontSize="9" fill="#2c3e50">• Code Quality</text>
          
          {/* Step 6: Feature Fusion */}
          <rect fill="url(#processGrad)" stroke="#e67e22" strokeWidth="2" rx="10" x="700" y="280" width="200" height="90"/>
          <text x="800" y="305" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2c3e50">6. Feature Fusion</text>
          <text x="800" y="320" textAnchor="middle" fontSize="11" fill="#2c3e50">Prediction Engine</text>
          <text x="800" y="335" textAnchor="middle" fontSize="10" fill="#2c3e50">• ML Model Inference</text>
          <text x="800" y="348" textAnchor="middle" fontSize="10" fill="#2c3e50">• Burnout Prediction</text>
          <text x="800" y="361" textAnchor="middle" fontSize="10" fill="#2c3e50">• Stress Detection</text>
          
          {/* Step 7: Storage & Caching */}
          <rect fill="url(#outputGrad)" stroke="#e74c3c" strokeWidth="2" rx="10" x="50" y="400" width="150" height="80"/>
          <text x="125" y="425" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#2c3e50">7a. TimescaleDB</text>
          <text x="125" y="440" textAnchor="middle" fontSize="9" fill="#2c3e50">Historical Data</text>
          <text x="125" y="453" textAnchor="middle" fontSize="9" fill="#2c3e50">Analytics</text>
          <text x="125" y="466" textAnchor="middle" fontSize="9" fill="#2c3e50">Time Series</text>
          
          <rect fill="url(#outputGrad)" stroke="#e74c3c" strokeWidth="2" rx="10" x="230" y="400" width="150" height="80"/>
          <text x="305" y="425" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#2c3e50">7b. Redis Cache</text>
          <text x="305" y="440" textAnchor="middle" fontSize="9" fill="#2c3e50">Real-time Data</text>
          <text x="305" y="453" textAnchor="middle" fontSize="9" fill="#2c3e50">Session Storage</text>
          <text x="305" y="466" textAnchor="middle" fontSize="9" fill="#2c3e50">Fast Access</text>
          
          <rect fill="url(#outputGrad)" stroke="#e74c3c" strokeWidth="2" rx="10" x="410" y="400" width="150" height="80"/>
          <text x="485" y="425" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#2c3e50">7c. Vector DB</text>
          <text x="485" y="440" textAnchor="middle" fontSize="9" fill="#2c3e50">ML Embeddings</text>
          <text x="485" y="453" textAnchor="middle" fontSize="9" fill="#2c3e50">Similarity Search</text>
          <text x="485" y="466" textAnchor="middle" fontSize="9" fill="#2c3e50">Pinecone</text>
          
          {/* Step 8: Notification & Output */}
          <rect fill="url(#outputGrad)" stroke="#8e44ad" strokeWidth="2" rx="10" x="620" y="400" width="180" height="80"/>
          <text x="710" y="425" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2c3e50">8. Notification</text>
          <text x="710" y="440" textAnchor="middle" fontSize="11" fill="#2c3e50">Service</text>
          <text x="710" y="455" textAnchor="middle" fontSize="10" fill="#2c3e50">• Multi-channel</text>
          <text x="710" y="468" textAnchor="middle" fontSize="10" fill="#2c3e50">• Real-time Alerts</text>
          
          {/* Step 9: Client Outputs */}
          <rect fill="url(#outputGrad)" stroke="#2c3e50" strokeWidth="2" rx="10" x="850" y="400" width="120" height="50"/>
          <text x="910" y="420" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#2c3e50">9a. Dashboard</text>
          <text x="910" y="435" textAnchor="middle" fontSize="9" fill="#2c3e50">Web Interface</text>
          
          <rect fill="url(#outputGrad)" stroke="#2c3e50" strokeWidth="2" rx="10" x="850" y="460" width="120" height="50"/>
          <text x="910" y="480" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#2c3e50">9b. Mobile App</text>
          <text x="910" y="495" textAnchor="middle" fontSize="9" fill="#2c3e50">Push Notifications</text>
          
          <rect fill="url(#outputGrad)" stroke="#2c3e50" strokeWidth="2" rx="10" x="990" y="400" width="120" height="50"/>
          <text x="1050" y="420" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#2c3e50">9c. IDE Extensions</text>
          <text x="1050" y="435" textAnchor="middle" fontSize="9" fill="#2c3e50">In-editor Alerts</text>
          
          <rect fill="url(#outputGrad)" stroke="#2c3e50" strokeWidth="2" rx="10" x="990" y="460" width="120" height="50"/>
          <text x="1050" y="480" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#2c3e50">9d. Integrations</text>
          <text x="1050" y="495" textAnchor="middle" fontSize="9" fill="#2c3e50">Slack, Teams, Jira</text>
          
          {/* Data Flow Arrows - Horizontal Flow */}
          <line stroke="#3498db" strokeWidth="3" fill="none" markerEnd="url(#flowArrow)" x1="230" y1="100" x2="280" y2="100"/>
          <line stroke="#3498db" strokeWidth="3" fill="none" markerEnd="url(#flowArrow)" x1="460" y1="100" x2="510" y2="100"/>
          
          {/* From Code Ingestion to Kafka */}
          <line stroke="#27ae60" strokeWidth="3" fill="none" markerEnd="url(#processArrow)" x1="600" y1="140" x2="600" y2="180" transform="rotate(0)"/>
          <line stroke="#27ae60" strokeWidth="3" fill="none" markerEnd="url(#processArrow)" x1="600" y1="180" x2="470" y2="180"/>
          
          {/* From Kafka to Parallel Services */}
          <line stroke="#9b59b6" strokeWidth="2" fill="none" markerEnd="url(#processArrow)" x1="350" y1="240" x2="135" y2="280"/>
          <line stroke="#9b59b6" strokeWidth="2" fill="none" markerEnd="url(#processArrow)" x1="470" y1="240" x2="335" y2="280"/>
          <line stroke="#9b59b6" strokeWidth="2" fill="none" markerEnd="url(#processArrow)" x1="590" y1="240" x2="535" y2="280"/>
          
          {/* From Parallel Services to Feature Fusion */}
          <line stroke="#e67e22" strokeWidth="2" fill="none" markerEnd="url(#processArrow)" x1="220" y1="325" x2="700" y2="325"/>
          <line stroke="#e67e22" strokeWidth="2" fill="none" markerEnd="url(#processArrow)" x1="420" y1="325" x2="700" y2="325"/>
          <line stroke="#e67e22" strokeWidth="2" fill="none" markerEnd="url(#processArrow)" x1="620" y1="325" x2="700" y2="325"/>
          
          {/* From Feature Fusion to Storage */}
          <line stroke="#e74c3c" strokeWidth="2" fill="none" markerEnd="url(#dataArrow)" x1="750" y1="370" x2="125" y2="400"/>
          <line stroke="#e74c3c" strokeWidth="2" fill="none" markerEnd="url(#dataArrow)" x1="780" y1="370" x2="305" y2="400"/>
          <line stroke="#e74c3c" strokeWidth="2" fill="none" markerEnd="url(#dataArrow)" x1="820" y1="370" x2="485" y2="400"/>
          
          {/* From Feature Fusion to Notification */}
          <line stroke="#8e44ad" strokeWidth="3" fill="none" markerEnd="url(#dataArrow)" x1="800" y1="370" x2="710" y2="400"/>
          
          {/* From Notification to Client Outputs */}
          <line stroke="#2c3e50" strokeWidth="2" fill="none" markerEnd="url(#dataArrow)" x1="800" y1="440" x2="850" y2="425"/>
          <line stroke="#2c3e50" strokeWidth="2" fill="none" markerEnd="url(#dataArrow)" x1="800" y1="450" x2="850" y2="485"/>
          <line stroke="#2c3e50" strokeWidth="2" fill="none" markerEnd="url(#dataArrow)" x1="770" y1="430" x2="990" y2="425"/>
          <line stroke="#2c3e50" strokeWidth="2" fill="none" markerEnd="url(#dataArrow)" x1="770" y1="470" x2="990" y2="485"/>
          
          {/* Performance Metrics */}
          <rect fill="#fff3cd" stroke="#856404" strokeWidth="1" strokeDasharray="3,3" x="50" y="520" width="1100" height="80" rx="8"/>
          <text x="600" y="540" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#856404">
            Performance Metrics & Timing
          </text>
          
          <text x="150" y="560" textAnchor="middle" fontSize="10" fill="#856404">Data Collection</text>
          <text x="150" y="575" textAnchor="middle" fontSize="10" fill="#856404">&lt; 10ms latency</text>
          
          <text x="300" y="560" textAnchor="middle" fontSize="10" fill="#856404">API Processing</text>
          <text x="300" y="575" textAnchor="middle" fontSize="10" fill="#856404">&lt; 50ms response</text>
          
          <text x="450" y="560" textAnchor="middle" fontSize="10" fill="#856404">Stream Processing</text>
          <text x="450" y="575" textAnchor="middle" fontSize="10" fill="#856404">&lt; 100ms windows</text>
          
          <text x="600" y="560" textAnchor="middle" fontSize="10" fill="#856404">AI Analysis</text>
          <text x="600" y="575" textAnchor="middle" fontSize="10" fill="#856404">&lt; 500ms inference</text>
          
          <text x="750" y="560" textAnchor="middle" fontSize="10" fill="#856404">Feature Fusion</text>
          <text x="750" y="575" textAnchor="middle" fontSize="10" fill="#856404">&lt; 200ms combine</text>
          
          <text x="900" y="560" textAnchor="middle" fontSize="10" fill="#856404">Storage Write</text>
          <text x="900" y="575" textAnchor="middle" fontSize="10" fill="#856404">&lt; 10ms persist</text>
          
          <text x="1050" y="560" textAnchor="middle" fontSize="10" fill="#856404">End-to-End</text>
          <text x="1050" y="575" textAnchor="middle" fontSize="10" fill="#856404">&lt; 2 seconds total</text>
          
          {/* Throughput Information */}
          <text x="150" y="590" textAnchor="middle" fontSize="9" fill="#856404">10K+ events/sec</text>
          <text x="300" y="590" textAnchor="middle" fontSize="9" fill="#856404">1K+ requests/sec</text>
          <text x="450" y="590" textAnchor="middle" fontSize="9" fill="#856404">Infinite scale</text>
          <text x="600" y="590" textAnchor="middle" fontSize="9" fill="#856404">850K AI cores</text>
          <text x="750" y="590" textAnchor="middle" fontSize="9" fill="#856404">Multi-model</text>
          <text x="900" y="590" textAnchor="middle" fontSize="9" fill="#856404">100TB+ capacity</text>
          <text x="1050" y="590" textAnchor="middle" fontSize="9" fill="#856404">99.9% uptime</text>
          
        </svg>
      </ArchitectureDiagram>
      
      <DataFlow>
        <h3 style={{ color: '#3498db', marginTop: 0 }}>Real-time Data Processing Pipeline</h3>
        
        <FlowStep>
          <StepNumber>1</StepNumber>
          <StepDescription>
            <strong>Data Collection:</strong> IDE plugins capture coding events (keystrokes, file changes, errors) and send to Code Ingestion Service via HTTPS
          </StepDescription>
        </FlowStep>
        
        <FlowStep>
          <StepNumber>2</StepNumber>
          <StepDescription>
            <strong>Event Processing:</strong> Code Ingestion Service validates, sanitizes, and publishes events to Kafka topics with partitioning by user_id
          </StepDescription>
        </FlowStep>
        
        <FlowStep>
          <StepNumber>3</StepNumber>
          <StepDescription>
            <strong>Stream Processing:</strong> Apache Flink consumes Kafka streams, performs windowed aggregations, and triggers downstream services
          </StepDescription>
        </FlowStep>
        
        <FlowStep>
          <StepNumber>4</StepNumber>
          <StepDescription>
            <strong>Parallel Analysis:</strong> Metrics Extraction, Cerebras AI, and Llama NLP services process events simultaneously for different insights
          </StepDescription>
        </FlowStep>
        
        <FlowStep>
          <StepNumber>5</StepNumber>
          <StepDescription>
            <strong>Feature Fusion:</strong> Prediction Engine combines outputs from all analysis services to generate comprehensive psychological insights
          </StepDescription>
        </FlowStep>
        
        <FlowStep>
          <StepNumber>6</StepNumber>
          <StepDescription>
            <strong>Storage & Caching:</strong> Results stored in TimescaleDB for historical analysis and Redis for real-time dashboard updates
          </StepDescription>
        </FlowStep>
        
        <FlowStep>
          <StepNumber>7</StepNumber>
          <StepDescription>
            <strong>Intervention Logic:</strong> Notification Service evaluates thresholds and triggers personalized recommendations via multiple channels
          </StepDescription>
        </FlowStep>
      </DataFlow>

      <SectionTitle>4. Technology Stack Details</SectionTitle>
      
      <TechStackTable>
        <thead>
          <tr>
            <th>Layer</th>
            <th>Component</th>
            <th>Technology</th>
            <th>Purpose</th>
            <th>Scalability</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan="4">Frontend</td>
            <td>Web Dashboard</td>
            <td>React 18 + TypeScript</td>
            <td>Developer wellness dashboard</td>
            <td>CDN + Edge caching</td>
          </tr>
          <tr>
            <td>Mobile App</td>
            <td>React Native</td>
            <td>Cross-platform mobile access</td>
            <td>App store distribution</td>
          </tr>
          <tr>
            <td>VS Code Extension</td>
            <td>TypeScript + VS Code API</td>
            <td>Real-time IDE monitoring</td>
            <td>Marketplace distribution</td>
          </tr>
          <tr>
            <td>IntelliJ Plugin</td>
            <td>Java/Kotlin + Platform SDK</td>
            <td>JetBrains IDE integration</td>
            <td>Plugin repository</td>
          </tr>
          <tr>
            <td rowSpan="8">Services</td>
            <td>Code Ingestion</td>
            <td>Node.js + Express</td>
            <td>High-throughput event intake</td>
            <td>3-10 replicas</td>
          </tr>
          <tr>
            <td>Metrics Extraction</td>
            <td>Python + FastAPI</td>
            <td>Code complexity analysis</td>
            <td>5-15 replicas</td>
          </tr>
          <tr>
            <td>Pattern Analysis</td>
            <td>Python + Cerebras API</td>
            <td>AI-powered pattern recognition</td>
            <td>GPU scaling</td>
          </tr>
          <tr>
            <td>NLP Service</td>
            <td>Python + Transformers</td>
            <td>Natural language processing</td>
            <td>2-8 replicas</td>
          </tr>
          <tr>
            <td>Prediction Engine</td>
            <td>Python + Scikit-learn</td>
            <td>ML model inference</td>
            <td>3-12 replicas</td>
          </tr>
          <tr>
            <td>Notification Service</td>
            <td>Go + Gin framework</td>
            <td>Real-time alerts</td>
            <td>2-6 replicas</td>
          </tr>
          <tr>
            <td>Analytics Service</td>
            <td>Python + Django</td>
            <td>Dashboard & reporting</td>
            <td>2-8 replicas</td>
          </tr>
          <tr>
            <td>Privacy Service</td>
            <td>Java + Spring Boot</td>
            <td>Data anonymization</td>
            <td>2-4 replicas</td>
          </tr>
          <tr>
            <td rowSpan="7">Storage</td>
            <td>Main Database</td>
            <td>PostgreSQL 15</td>
            <td>Relational data storage</td>
            <td>Read replicas</td>
          </tr>
          <tr>
            <td>Time Series DB</td>
            <td>TimescaleDB</td>
            <td>Metrics & analytics</td>
            <td>Hypertable partitioning</td>
          </tr>
          <tr>
            <td>Cache Layer</td>
            <td>Redis Cluster</td>
            <td>Session & data caching</td>
            <td>Cluster scaling</td>
          </tr>
          <tr>
            <td>Vector Database</td>
            <td>Pinecone</td>
            <td>ML embeddings storage</td>
            <td>Managed scaling</td>
          </tr>
          <tr>
            <td>Search Engine</td>
            <td>Elasticsearch</td>
            <td>Full-text search</td>
            <td>Shard distribution</td>
          </tr>
          <tr>
            <td>Object Storage</td>
            <td>S3/MinIO</td>
            <td>File & backup storage</td>
            <td>Unlimited capacity</td>
          </tr>
          <tr>
            <td>Metrics Store</td>
            <td>InfluxDB</td>
            <td>System metrics</td>
            <td>Retention policies</td>
          </tr>
        </tbody>
      </TechStackTable>

      <SectionTitle>5. Scalability & Performance Metrics</SectionTitle>
      
      <ScalabilityMetrics>
        <MetricBox>
          <MetricValue>10K+</MetricValue>
          <MetricLabel>Events per Second</MetricLabel>
        </MetricBox>
        
        <MetricBox>
          <MetricValue>&lt;50ms</MetricValue>
          <MetricLabel>API Response Time</MetricLabel>
        </MetricBox>
        
        <MetricBox>
          <MetricValue>99.9%</MetricValue>
          <MetricLabel>System Uptime</MetricLabel>
        </MetricBox>
        
        <MetricBox>
          <MetricValue>100K+</MetricValue>
          <MetricLabel>Concurrent Users</MetricLabel>
        </MetricBox>
        
        <MetricBox>
          <MetricValue>1TB+</MetricValue>
          <MetricLabel>Daily Data Processing</MetricLabel>
        </MetricBox>
        
        <MetricBox>
          <MetricValue>5 sec</MetricValue>
          <MetricLabel>End-to-End Latency</MetricLabel>
        </MetricBox>
      </ScalabilityMetrics>

      <SectionTitle>6. Integration Patterns</SectionTitle>
      
      <IntegrationFlow>
        <h3 style={{ color: '#0c5460', marginTop: 0 }}>🔗 External System Integration</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <div style={{ background: 'white', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #27ae60' }}>
            <h4 style={{ marginTop: 0, color: '#0c5460' }}>Git Integration</h4>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li>Pre-commit hooks</li>
              <li>Post-commit analysis</li>
              <li>Branch pattern tracking</li>
              <li>Merge conflict detection</li>
            </ul>
          </div>
          
          <div style={{ background: 'white', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #27ae60' }}>
            <h4 style={{ marginTop: 0, color: '#0c5460' }}>CI/CD Integration</h4>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li>Build pipeline monitoring</li>
              <li>Test failure correlation</li>
              <li>Deployment stress tracking</li>
              <li>Release cycle analysis</li>
            </ul>
          </div>
          
          <div style={{ background: 'white', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #27ae60' }}>
            <h4 style={{ marginTop: 0, color: '#0c5460' }}>Communication Tools</h4>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li>Slack notifications</li>
              <li>Jira ticket correlation</li>
              <li>Teams integration</li>
              <li>Email summaries</li>
            </ul>
          </div>
          
          <div style={{ background: 'white', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #27ae60' }}>
            <h4 style={{ marginTop: 0, color: '#0c5460' }}>Calendar Systems</h4>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li>Meeting impact analysis</li>
              <li>Focus time blocking</li>
              <li>Break scheduling</li>
              <li>Workload planning</li>
            </ul>
          </div>
        </div>
      </IntegrationFlow>

      <SectionTitle>7. Security Architecture</SectionTitle>
      
      <SecurityLayer>
        <h3 style={{ color: '#e65100', marginTop: 0 }}>🔒 Multi-Layer Security Model</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          <div>
            <h4 style={{ color: '#e65100' }}>Authentication & Authorization</h4>
            <ul>
              <li><strong>OAuth 2.0:</strong> Industry-standard authentication</li>
              <li><strong>JWT Tokens:</strong> Stateless session management</li>
              <li><strong>RBAC:</strong> Role-based access control</li>
              <li><strong>API Keys:</strong> Service-to-service authentication</li>
              <li><strong>MFA:</strong> Multi-factor authentication support</li>
            </ul>
            
            <h4 style={{ color: '#e65100' }}>Data Protection</h4>
            <ul>
              <li><strong>AES-256:</strong> Data encryption at rest</li>
              <li><strong>TLS 1.3:</strong> Data encryption in transit</li>
              <li><strong>Key Vault:</strong> Centralized key management</li>
              <li><strong>Tokenization:</strong> Sensitive data replacement</li>
              <li><strong>Anonymization:</strong> PII removal</li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ color: '#e65100' }}>Network Security</h4>
            <ul>
              <li><strong>VPC Isolation:</strong> Network segmentation</li>
              <li><strong>Private Subnets:</strong> Internal service protection</li>
              <li><strong>WAF:</strong> Web application firewall</li>
              <li><strong>DDoS Protection:</strong> Attack mitigation</li>
              <li><strong>Rate Limiting:</strong> Abuse prevention</li>
            </ul>
            
            <h4 style={{ color: '#e65100' }}>Compliance</h4>
            <ul>
              <li><strong>GDPR:</strong> European data protection</li>
              <li><strong>CCPA:</strong> California privacy compliance</li>
              <li><strong>SOC 2:</strong> Security controls audit</li>
              <li><strong>ISO 27001:</strong> Information security standard</li>
              <li><strong>HIPAA:</strong> Healthcare data protection</li>
            </ul>
          </div>
        </div>
      </SecurityLayer>

      <SectionTitle>8. Deployment Pipeline</SectionTitle>
      
      <DeploymentPipeline>
        <h3 style={{ color: '#6a1b9a', marginTop: 0 }}>🚀 CI/CD Pipeline Architecture</h3>
        
        <DataFlow style={{ background: 'rgba(156, 39, 176, 0.1)', color: '#2c3e50' }}>
          <FlowStep>
            <StepNumber style={{ background: '#9c27b0' }}>1</StepNumber>
            <StepDescription>
              <strong>Source Control:</strong> Git push triggers GitHub Actions workflow with automated testing and security scanning
            </StepDescription>
          </FlowStep>
          
          <FlowStep>
            <StepNumber style={{ background: '#9c27b0' }}>2</StepNumber>
            <StepDescription>
              <strong>Build & Test:</strong> Docker images built, unit tests run, integration tests executed, security vulnerabilities scanned
            </StepDescription>
          </FlowStep>
          
          <FlowStep>
            <StepNumber style={{ background: '#9c27b0' }}>3</StepNumber>
            <StepDescription>
              <strong>Staging Deployment:</strong> Images deployed to staging environment, end-to-end tests run, performance benchmarks executed
            </StepDescription>
          </FlowStep>
          
          <FlowStep>
            <StepNumber style={{ background: '#9c27b0' }}>4</StepNumber>
            <StepDescription>
              <strong>Production Deployment:</strong> Blue-green deployment to production, health checks verified, rollback capability maintained
            </StepDescription>
          </FlowStep>
          
          <FlowStep>
            <StepNumber style={{ background: '#9c27b0' }}>5</StepNumber>
            <StepDescription>
              <strong>Monitoring:</strong> Application metrics collected, alerts configured, performance dashboards updated
            </StepDescription>
          </FlowStep>
        </DataFlow>
      </DeploymentPipeline>
      
      <BenefitsSection>
        <h3 style={{ marginTop: 0, color: '#0c5460' }}>🎯 Architecture Benefits</h3>
        <BenefitsGrid>
          <div>
            <h4 style={{ color: '#0c5460' }}>Scalability</h4>
            <ul style={{ color: '#0c5460' }}>
              <li>Horizontal scaling for all services</li>
              <li>Auto-scaling based on demand</li>
              <li>Load balancing across instances</li>
              <li>Database read replicas</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#0c5460' }}>Reliability</h4>
            <ul style={{ color: '#0c5460' }}>
              <li>99.9% uptime SLA</li>
              <li>Circuit breaker patterns</li>
              <li>Graceful degradation</li>
              <li>Automated failover</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#0c5460' }}>Performance</h4>
            <ul style={{ color: '#0c5460' }}>
              <li>Sub-50ms API responses</li>
              <li>Real-time data processing</li>
              <li>Efficient caching strategies</li>
              <li>Optimized database queries</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#0c5460' }}>Security</h4>
            <ul style={{ color: '#0c5460' }}>
              <li>Zero-trust architecture</li>
              <li>End-to-end encryption</li>
              <li>Privacy by design</li>
              <li>Compliance ready</li>
            </ul>
          </div>
        </BenefitsGrid>
      </BenefitsSection>
    </ArchitectureContainer>
  );
};

export default ArchitectureComponentsSD;