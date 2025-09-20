import React from 'react';
import styled from 'styled-components';

const ToolIntegrationContainer = styled.div`
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

const OverviewSection = styled.div`
  background: #e3f2fd;
  border: 2px solid #2196f3;
  padding: 25px;
  border-radius: 15px;
  margin: 30px 0;
  
  h3 {
    margin-top: 0;
    color: #0d47a1;
  }
  
  p {
    color: #1565c0;
  }
`;

const IntegrationCard = styled.div`
  background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
  border: 2px solid #9c27b0;
  border-radius: 12px;
  padding: 25px;
  margin: 20px 0;
`;

const CardTitle = styled.h3`
  color: #6a1b9a;
  margin-bottom: 15px;
`;

const IntegrationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
`;

const ToolIntegrationSD = () => {
  return (
    <ToolIntegrationContainer>
      <Title>🔧 NeuroCode Tool Integration</Title>
      
      <OverviewSection>
        <h3>🔗 Integration Overview</h3>
        <p>
          NeuroCode seamlessly integrates with popular development tools and platforms to provide 
          comprehensive developer wellness monitoring without disrupting existing workflows.
        </p>
      </OverviewSection>

      <SectionTitle>1. IDE Integrations</SectionTitle>
      
      <IntegrationGrid>
        <IntegrationCard>
          <CardTitle>🔷 Visual Studio Code Extension</CardTitle>
          <ul>
            <li>Real-time keystroke pattern analysis</li>
            <li>File switching behavior monitoring</li>
            <li>Error correction frequency tracking</li>
            <li>Session duration and break detection</li>
            <li>Privacy-first data collection</li>
          </ul>
        </IntegrationCard>

        <IntegrationCard>
          <CardTitle>🟠 IntelliJ IDEA Plugin</CardTitle>
          <ul>
            <li>Code completion usage patterns</li>
            <li>Debugging session analysis</li>
            <li>Refactoring activity tracking</li>
            <li>Build and test result correlation</li>
            <li>Cross-platform compatibility</li>
          </ul>
        </IntegrationCard>

        <IntegrationCard>
          <CardTitle>🌐 Web-based IDEs</CardTitle>
          <ul>
            <li>GitHub Codespaces integration</li>
            <li>GitPod workspace monitoring</li>
            <li>Repl.it collaborative coding tracking</li>
            <li>Cloud IDE performance metrics</li>
            <li>Browser extension support</li>
          </ul>
        </IntegrationCard>
      </IntegrationGrid>

      <SectionTitle>2. Version Control Integration</SectionTitle>
      
      <IntegrationGrid>
        <IntegrationCard>
          <CardTitle>🐙 GitHub Integration</CardTitle>
          <ul>
            <li>Commit message sentiment analysis</li>
            <li>Pull request review patterns</li>
            <li>Issue creation and resolution tracking</li>
            <li>Collaboration frequency monitoring</li>
            <li>Repository activity correlation</li>
          </ul>
        </IntegrationCard>

        <IntegrationCard>
          <CardTitle>🦊 GitLab Integration</CardTitle>
          <ul>
            <li>Merge request workflow analysis</li>
            <li>CI/CD pipeline stress correlation</li>
            <li>Code review participation tracking</li>
            <li>Issue board activity monitoring</li>
            <li>Team collaboration metrics</li>
          </ul>
        </IntegrationCard>

        <IntegrationCard>
          <CardTitle>⚡ Bitbucket Integration</CardTitle>
          <ul>
            <li>Branch management patterns</li>
            <li>Deployment frequency tracking</li>
            <li>Code quality gate metrics</li>
            <li>Team velocity correlation</li>
            <li>Release cycle stress analysis</li>
          </ul>
        </IntegrationCard>
      </IntegrationGrid>

      <SectionTitle>3. Communication & Collaboration Tools</SectionTitle>
      
      <IntegrationGrid>
        <IntegrationCard>
          <CardTitle>💬 Slack Integration</CardTitle>
          <ul>
            <li>Developer channel activity monitoring</li>
            <li>Support request frequency tracking</li>
            <li>Team communication sentiment</li>
            <li>Automated wellness check-ins</li>
            <li>Personalized recommendation delivery</li>
          </ul>
        </IntegrationCard>

        <IntegrationCard>
          <CardTitle>📋 Jira Integration</CardTitle>
          <ul>
            <li>Sprint velocity correlation</li>
            <li>Bug assignment impact analysis</li>
            <li>Story point estimation patterns</li>
            <li>Workload distribution tracking</li>
            <li>Deadline stress identification</li>
          </ul>
        </IntegrationCard>

        <IntegrationCard>
          <CardTitle>📧 Email & Calendar</CardTitle>
          <ul>
            <li>Meeting frequency impact analysis</li>
            <li>Email response time patterns</li>
            <li>Work-life balance indicators</li>
            <li>Focus time block effectiveness</li>
            <li>Schedule optimization suggestions</li>
          </ul>
        </IntegrationCard>
      </IntegrationGrid>

      <SectionTitle>4. CI/CD & DevOps Tools</SectionTitle>
      
      <IntegrationGrid>
        <IntegrationCard>
          <CardTitle>🚀 GitHub Actions</CardTitle>
          <ul>
            <li>Build failure stress correlation</li>
            <li>Deployment frequency tracking</li>
            <li>Pipeline duration analysis</li>
            <li>Test failure pattern recognition</li>
            <li>Infrastructure health monitoring</li>
          </ul>
        </IntegrationCard>

        <IntegrationCard>
          <CardTitle>🔶 Jenkins Integration</CardTitle>
          <ul>
            <li>Job execution pattern analysis</li>
            <li>Build queue stress indicators</li>
            <li>Artifact deployment tracking</li>
            <li>Pipeline bottleneck identification</li>
            <li>DevOps workflow optimization</li>
          </ul>
        </IntegrationCard>

        <IntegrationCard>
          <CardTitle>☁️ Cloud Platform Monitoring</CardTitle>
          <ul>
            <li>AWS/Azure/GCP resource usage</li>
            <li>Container deployment patterns</li>
            <li>Serverless function monitoring</li>
            <li>Infrastructure cost correlation</li>
            <li>Performance impact analysis</li>
          </ul>
        </IntegrationCard>
      </IntegrationGrid>

      <SectionTitle>5. Mobile & Desktop Applications</SectionTitle>
      
      <IntegrationCard>
        <CardTitle>📱 NeuroCode Mobile Companion</CardTitle>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <h4>Features:</h4>
            <ul>
              <li>Daily wellness check-ins</li>
              <li>Break reminders and suggestions</li>
              <li>Productivity insights dashboard</li>
              <li>Team wellness overview</li>
              <li>Goal tracking and achievements</li>
            </ul>
          </div>
          <div>
            <h4>Platforms:</h4>
            <ul>
              <li>iOS (iPhone & iPad)</li>
              <li>Android (Phone & Tablet)</li>
              <li>React Native cross-platform</li>
              <li>Progressive Web App support</li>
              <li>Wearable device integration</li>
            </ul>
          </div>
        </div>
      </IntegrationCard>

      <OverviewSection>
        <h3>🔐 Privacy & Security</h3>
        <p>
          All integrations are designed with privacy-first principles, ensuring that sensitive 
          code content is never transmitted or stored. Only behavioral patterns and metadata 
          are collected to generate wellness insights.
        </p>
      </OverviewSection>
    </ToolIntegrationContainer>
  );
};

export default ToolIntegrationSD;