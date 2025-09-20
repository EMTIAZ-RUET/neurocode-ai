import React from 'react';
import styled from 'styled-components';

const IndexContainer = styled.div`
  max-width: 100%;
  color: #333;
`;

const Title = styled.h1`
  color: #2c3e50;
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #3498db, #9b59b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  text-align: center;
  color: #7f8c8d;
  font-size: 1.2em;
  margin-bottom: 40px;
  font-style: italic;
`;

const SummaryStats = styled.div`
  background: linear-gradient(135deg, #e8f5e8 0%, #d4edda 100%);
  border: 2px solid #28a745;
  border-radius: 15px;
  padding: 30px;
  margin: 40px 0;
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin: 20px 0;
`;

const StatItem = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #28a745;
`;

const StatNumber = styled.div`
  font-size: 2em;
  font-weight: bold;
  color: #28a745;
  margin-bottom: 5px;
`;

const StatLabel = styled.div`
  color: #155724;
  font-size: 0.9em;
`;

const ReadingOrder = styled.div`
  background: #fff3e0;
  border: 2px solid #ff9800;
  border-radius: 15px;
  padding: 25px;
  margin: 30px 0;
`;

const OrderTitle = styled.div`
  color: #e65100;
  font-size: 1.3em;
  font-weight: bold;
  margin-bottom: 15px;
`;

const OrderList = styled.ol`
  list-style: none;
  padding: 0;
`;

const OrderItem = styled.li`
  background: white;
  padding: 10px 15px;
  margin: 8px 0;
  border-radius: 8px;
  border-left: 4px solid #ff9800;
  display: flex;
  align-items: center;
`;

const OrderNumber = styled.span`
  background: #ff9800;
  color: white;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 15px;
  font-size: 0.9em;
`;

const DocGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
  margin: 40px 0;
`;

const DocCard = styled.div`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border: 2px solid #dee2e6;
  border-radius: 15px;
  padding: 25px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-left: 5px solid #3498db;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(52, 152, 219, 0.2);
  }
`;

const DocHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const DocIcon = styled.div`
  font-size: 2.5em;
  margin-right: 15px;
`;

const DocTitleGroup = styled.div``;

const DocTitle = styled.div`
  font-size: 1.3em;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 5px;
`;

const DocSubtitle = styled.div`
  color: #6c757d;
  font-size: 0.9em;
`;

const DocDescription = styled.div`
  color: #495057;
  margin: 15px 0;
  line-height: 1.6;
`;

const DocMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #dee2e6;
  font-size: 0.9em;
  color: #6c757d;
`;

const DocStatus = styled.span`
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.8em;
  font-weight: bold;
  
  &.complete { 
    background: #d4edda; 
    color: #155724; 
  }
  
  &.verified { 
    background: #cce5ff; 
    color: #004085; 
  }
  
  &.detailed { 
    background: #fff3cd; 
    color: #856404; 
  }
`;

const NavigationHelp = styled.div`
  background: #d1ecf1;
  border: 2px solid #17a2b8;
  border-radius: 15px;
  padding: 25px;
  margin: 30px 0;
`;

const HelpTitle = styled.div`
  color: #0c5460;
  font-size: 1.3em;
  font-weight: bold;
  margin-bottom: 15px;
`;

const CompletionStatus = styled.div`
  background: #d4edda;
  border: 2px solid #28a745;
  padding: 25px;
  border-radius: 15px;
  margin: 30px 0;
  text-align: center;
  
  h3 {
    margin-top: 0;
    color: #155724;
  }
  
  p {
    color: #155724;
    margin-bottom: 0;
  }
`;

const DocumentationIndexSD = () => {
  const documents = [
    // 1. Overview & Foundation
    {
      id: 1,
      icon: '📋',
      title: 'Documentation Index',
      subtitle: 'This overview page',
      description: 'Complete documentation navigation, reading order recommendations, and summary of all available technical resources.',
      category: 'Overview & Foundation',
      status: 'complete'
    },
    {
      id: 2,
      icon: '🌟',
      title: 'System Overview',
      subtitle: 'High-level introduction',
      description: 'Complete system introduction with architecture diagrams, technology stack, key features, and performance metrics. Perfect starting point for understanding NeuroCode.',
      category: 'Overview & Foundation',
      status: 'complete'
    },
    {
      id: 3,
      icon: '💰',
      title: 'Business Model & Vision',
      subtitle: 'Commercial strategy',
      description: 'Complete business strategy, market analysis, pricing tiers, revenue projections, competitive analysis, and go-to-market strategy.',
      category: 'Overview & Foundation',
      status: 'complete'
    },
    {
      id: 4,
      icon: '📚',
      title: 'Research Foundation',
      subtitle: 'Academic foundation',
      description: 'Comprehensive academic and industry references supporting every aspect of NeuroCode with peer-reviewed research and statistical evidence.',
      category: 'Overview & Foundation',
      status: 'verified'
    },
    // 2. System Design Fundamentals
    {
      id: 5,
      icon: '🏗️',
      title: 'System Architecture',
      subtitle: 'Core architecture',
      description: 'Comprehensive architecture breakdown with component relationships, technology stack details, scalability metrics, and deployment patterns.',
      category: 'System Design',
      status: 'complete'
    },
    {
      id: 6,
      icon: '🔄',
      title: 'Data Flow Analysis',
      subtitle: 'Data flow & processing',
      description: 'End-to-end data flow analysis from IDE to user interface, including timing, error handling, and performance metrics.',
      category: 'System Design',
      status: 'detailed'
    },
    {
      id: 7,
      icon: '🤖',
      title: 'AI Integration',
      subtitle: 'Machine learning components',
      description: 'Detailed AI/ML architecture, model specifications, training pipelines, and intelligent feature implementation.',
      category: 'System Design',
      status: 'complete'
    },
    {
      id: 8,
      icon: '🎨',
      title: 'UI/UX Design',
      subtitle: 'Interface specifications',
      description: 'Complete UI/UX design with dashboard mockups, IDE integration examples, mobile app interface, and user experience flows.',
      category: 'System Design',
      status: 'complete'
    },
    // 3. Technical Specifications
    {
      id: 9,
      icon: '📊',
      title: 'Data Specifications',
      subtitle: 'API & data formats',
      description: 'Detailed specifications for all system outputs, API responses, data structures, and integration formats with privacy considerations.',
      category: 'Technical Specifications',
      status: 'detailed'
    },
    {
      id: 10,
      icon: '🔧',
      title: 'Tool Integration',
      subtitle: 'Compatibility testing',
      description: 'Complete verification of all tool integrations, compatibility matrices, configuration examples, and troubleshooting guides.',
      category: 'Technical Specifications',
      status: 'verified'
    },
    {
      id: 11,
      icon: '💻',
      title: 'Interactive Workflows',
      subtitle: 'User interaction flows',
      description: 'Interactive workflow definitions, user journey mapping, and system interaction patterns for optimal developer experience.',
      category: 'Technical Specifications',
      status: 'complete'
    },
    // 4. Quality & Security
    {
      id: 12,
      icon: '🔒',
      title: 'Security & Privacy',
      subtitle: 'Data protection',
      description: 'Comprehensive security architecture, privacy controls, compliance frameworks, and data protection measures for enterprise deployment.',
      category: 'Quality & Security',
      status: 'complete'
    },
    {
      id: 13,
      icon: '🧪',
      title: 'Testing & QA',
      subtitle: 'QA protocols',
      description: 'Comprehensive testing strategies, automated testing pipelines, quality assurance protocols, and performance benchmarks.',
      category: 'Quality & Security',
      status: 'verified'
    },
    {
      id: 14,
      icon: '⚠️',
      title: 'Edge Cases Analysis',
      subtitle: 'Risk mitigation',
      description: 'Comprehensive analysis of edge cases, failure scenarios, and unusual conditions with robust solutions and mitigation strategies.',
      category: 'Quality & Security',
      status: 'complete'
    },
    // 5. Implementation & Operations
    {
      id: 15,
      icon: '💻',
      title: 'Installation Guide',
      subtitle: 'Step-by-step setup',
      description: 'Comprehensive installation guide with copy-paste commands, infrastructure setup, database configuration, and verification checklists.',
      category: 'Implementation & Operations',
      status: 'verified'
    },
    {
      id: 16,
      icon: '🗺️',
      title: 'Implementation Roadmap',
      subtitle: '12-month plan',
      description: 'Detailed 12-month implementation timeline with phases, milestones, team requirements, budget breakdown, and risk assessment.',
      category: 'Implementation & Operations',
      status: 'complete'
    },
    {
      id: 17,
      icon: '🚀',
      title: 'Deployment & Operations',
      subtitle: 'Production guide',
      description: 'Production deployment guide, monitoring setup, scaling procedures, backup strategies, and operational best practices.',
      category: 'Implementation & Operations',
      status: 'complete'
    },
    // 6. Comprehensive References
    {
      id: 18,
      icon: '📚',
      title: 'Research References',
      subtitle: 'Academic citations',
      description: 'Complete academic and industry references with research methodologies, statistical evidence, and impact metrics for all system features.',
      category: 'Comprehensive References',
      status: 'verified'
    },
    {
      id: 19,
      icon: '📘',
      title: 'Complete System Design',
      subtitle: 'Full technical spec',
      description: 'Complete system design document consolidating all technical specifications, architecture decisions, and implementation details.',
      category: 'Comprehensive References',
      status: 'complete'
    }
  ];

  return (
    <IndexContainer>
      <Title>🧠 NeuroCode Documentation</Title>
      <Subtitle>AI-Powered Developer Wellness Platform - Complete Technical Documentation</Subtitle>
      
      <SummaryStats>
        <h3 style={{ color: '#155724', marginTop: 0 }}>📊 Documentation Summary</h3>
        <StatsGrid>
          <StatItem>
            <StatNumber>19</StatNumber>
            <StatLabel>Documentation Sections</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>6</StatNumber>
            <StatLabel>Major Categories</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>47+</StatNumber>
            <StatLabel>Research References</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>100%</StatNumber>
            <StatLabel>Technical Coverage</StatLabel>
          </StatItem>
        </StatsGrid>
      </SummaryStats>
      
      <ReadingOrder>
        <OrderTitle>📖 Recommended Reading Order</OrderTitle>
        <OrderList>
          <OrderItem>
            <OrderNumber>1</OrderNumber>
            <span><strong>System Overview</strong> - Start with the big picture</span>
          </OrderItem>
          <OrderItem>
            <OrderNumber>2</OrderNumber>
            <span><strong>Business Model & Vision</strong> - Understand the commercial strategy</span>
          </OrderItem>
          <OrderItem>
            <OrderNumber>3</OrderNumber>
            <span><strong>System Architecture</strong> - Core technical design</span>
          </OrderItem>
          <OrderItem>
            <OrderNumber>4</OrderNumber>
            <span><strong>Data Flow Analysis</strong> - How information moves through the system</span>
          </OrderItem>
          <OrderItem>
            <OrderNumber>5</OrderNumber>
            <span><strong>Implementation Roadmap</strong> - Development timeline and strategy</span>
          </OrderItem>
          <OrderItem>
            <OrderNumber>6</OrderNumber>
            <span><strong>Research Foundation</strong> - Supporting academic evidence</span>
          </OrderItem>
        </OrderList>
      </ReadingOrder>
      
      <DocGrid>
        {documents.map(doc => (
          <DocCard key={doc.id}>
            <DocHeader>
              <DocIcon>{doc.icon}</DocIcon>
              <DocTitleGroup>
                <DocTitle>{doc.title}</DocTitle>
                <DocSubtitle>{doc.subtitle}</DocSubtitle>
              </DocTitleGroup>
            </DocHeader>
            <DocDescription>{doc.description}</DocDescription>
            <DocMeta>
              <span>{doc.category}</span>
              <DocStatus className={doc.status}>{doc.status}</DocStatus>
            </DocMeta>
          </DocCard>
        ))}
      </DocGrid>
      
      <NavigationHelp>
        <HelpTitle>🧭 Navigation Guide</HelpTitle>
        <ul>
          <li><strong>For Executives:</strong> System Overview → Business Model & Vision → Implementation Roadmap → Research Foundation</li>
          <li><strong>For Developers:</strong> System Architecture → Data Flow Analysis → AI Integration → Installation Guide → Tool Integration</li>
          <li><strong>For Designers:</strong> UI/UX Design → Interactive Workflows → Data Specifications</li>
          <li><strong>For Project Managers:</strong> Implementation Roadmap → Testing & QA → Edge Cases Analysis → Deployment & Operations</li>
          <li><strong>For Security Teams:</strong> Security & Privacy → Edge Cases Analysis → Testing & QA</li>
          <li><strong>For Researchers:</strong> Research Foundation → Research References → Complete System Design</li>
        </ul>
      </NavigationHelp>
      
      <CompletionStatus>
        <h3>✅ Documentation Status: Reorganized & Complete</h3>
        <p>
          All 19 documentation sections are now organized into 6 logical categories for optimal navigation. The NeuroCode system documentation provides a clear, progressive path from overview through implementation, with comprehensive technical details, research validation, and practical guidance.
        </p>
      </CompletionStatus>
    </IndexContainer>
  );
};

export default DocumentationIndexSD;