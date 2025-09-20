import React, { useState } from 'react';
import styled from 'styled-components';

const GuideContainer = styled.div`
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

const PhaseContainer = styled.div`
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 30px;
  border-radius: 15px;
  margin: 30px 0;
  border-left: 5px solid #3498db;
`;

const StepHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
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

const StepTitle = styled.h3`
  margin: 0;
  color: #2c3e50;
`;

const CommandBlock = styled.div`
  background: #2c3e50;
  color: #ecf0f1;
  padding: 25px;
  border-radius: 10px;
  font-family: 'Courier New', monospace;
  margin: 20px 0;
  overflow-x: auto;
  position: relative;
  border-left: 4px solid #3498db;

  &::before {
    content: "💻 Terminal";
    position: absolute;
    top: -15px;
    left: 20px;
    background: #3498db;
    color: white;
    padding: 5px 15px;
    border-radius: 15px;
    font-size: 12px;
    font-family: 'Segoe UI', sans-serif;
  }
`;

const CommandTitle = styled.div`
  color: #3498db;
  font-weight: bold;
  margin-bottom: 15px;
  font-size: 16px;
  font-family: 'Segoe UI', sans-serif;
`;

const CopyButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #3498db;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    background: #2980b9;
  }
`;

const CommandExplanation = styled.div`
  background: #e8f4f8;
  padding: 15px;
  border-radius: 8px;
  margin: 10px 0;
  font-size: 14px;
  border-left: 3px solid #17a2b8;
`;

const TimeEstimate = styled.div`
  background: #fff3e0;
  color: #e65100;
  padding: 10px 15px;
  border-radius: 20px;
  display: inline-block;
  font-weight: bold;
  margin-bottom: 20px;
`;

const InfoBox = styled.div`
  background: #d1ecf1;
  border: 2px solid #17a2b8;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
`;

const WarningBox = styled.div`
  background: #fff3cd;
  border: 2px solid #ffc107;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
`;

const SuccessBox = styled.div`
  background: #d4edda;
  border: 2px solid #28a745;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
`;

const Checklist = styled.div`
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
`;

const ChecklistItem = styled.label`
  margin-bottom: 10px;
  display: block;
  cursor: pointer;
  display: flex;
  align-items: center;
  
  input[type="checkbox"] {
    margin-right: 10px;
    transform: scale(1.2);
  }
`;

const InstallationGuideSD = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      // Could add a toast notification here
      console.log('Copied to clipboard');
    });
  };

  return (
    <GuideContainer>
      <Title>🚀 NeuroCode Installation Guide</Title>
      
      <InfoBox>
        <h3 style={{ color: '#0c5460', marginTop: 0 }}>📋 Complete Setup Instructions</h3>
        <p>This comprehensive guide will walk you through setting up the complete NeuroCode AI-powered developer wellness platform. The installation includes infrastructure setup, database configuration, AI service integration, and IDE plugins.</p>
        <p><strong>Prerequisites:</strong> Docker, Node.js 18+, Python 3.9+, Git</p>
      </InfoBox>

      <SectionTitle>Phase 1: Infrastructure Setup</SectionTitle>
      <TimeEstimate>⏱️ Estimated Time: 45-60 minutes</TimeEstimate>
      
      <PhaseContainer>
        <StepHeader>
          <StepNumber>1</StepNumber>
          <StepTitle>Clone Repository & Setup Environment</StepTitle>
        </StepHeader>
        
        <CommandBlock>
          <CommandTitle>Clone NeuroCode Repository</CommandTitle>
          <CopyButton onClick={() => copyToClipboard(`git clone https://github.com/your-org/neurocode.git
cd neurocode
git checkout main`)}>Copy</CopyButton>
          <pre>{`git clone https://github.com/your-org/neurocode.git
cd neurocode
git checkout main`}</pre>
        </CommandBlock>
        
        <CommandExplanation>
          This clones the main NeuroCode repository and switches to the stable main branch for production deployment.
        </CommandExplanation>

        <CommandBlock>
          <CommandTitle>Setup Environment Variables</CommandTitle>
          <CopyButton onClick={() => copyToClipboard(`cp .env.example .env
# Edit .env file with your specific configurations
nano .env`)}>Copy</CopyButton>
          <pre>{`cp .env.example .env
# Edit .env file with your specific configurations
nano .env`}</pre>
        </CommandBlock>
      </PhaseContainer>

      <PhaseContainer>
        <StepHeader>
          <StepNumber>2</StepNumber>
          <StepTitle>Docker Infrastructure</StepTitle>
        </StepHeader>
        
        <CommandBlock>
          <CommandTitle>Start Core Services</CommandTitle>
          <CopyButton onClick={() => copyToClipboard(`# Build and start all services
docker-compose up -d postgres timescaledb redis kafka

# Verify services are running
docker-compose ps`)}>Copy</CopyButton>
          <pre>{`# Build and start all services
docker-compose up -d postgres timescaledb redis kafka

# Verify services are running
docker-compose ps`}</pre>
        </CommandBlock>
        
        <CommandExplanation>
          This starts PostgreSQL (main database), TimescaleDB (time-series data), Redis (caching), and Kafka (event streaming).
        </CommandExplanation>
      </PhaseContainer>

      <SectionTitle>Phase 2: Database Configuration</SectionTitle>
      <TimeEstimate>⏱️ Estimated Time: 20-30 minutes</TimeEstimate>

      <PhaseContainer>
        <StepHeader>
          <StepNumber>3</StepNumber>
          <StepTitle>Database Setup & Migrations</StepTitle>
        </StepHeader>
        
        <CommandBlock>
          <CommandTitle>Initialize Databases</CommandTitle>
          <CopyButton onClick={() => copyToClipboard(`# Create database schemas
docker exec -it neurocode_postgres psql -U postgres -c "CREATE DATABASE neurocode;"
docker exec -it neurocode_postgres psql -U postgres -c "CREATE DATABASE neurocode_test;"

# Run migrations
npm run migrate:up

# Seed initial data
npm run seed:dev`)}>Copy</CopyButton>
          <pre>{`# Create database schemas
docker exec -it neurocode_postgres psql -U postgres -c "CREATE DATABASE neurocode;"
docker exec -it neurocode_postgres psql -U postgres -c "CREATE DATABASE neurocode_test;"

# Run migrations
npm run migrate:up

# Seed initial data
npm run seed:dev`}</pre>
        </CommandBlock>
      </PhaseContainer>

      <SectionTitle>Phase 3: AI Services Integration</SectionTitle>
      <TimeEstimate>⏱️ Estimated Time: 30-45 minutes</TimeEstimate>

      <PhaseContainer>
        <StepHeader>
          <StepNumber>4</StepNumber>
          <StepTitle>Configure AI Services</StepTitle>
        </StepHeader>
        
        <WarningBox>
          <h4 style={{ color: '#856404', marginTop: 0 }}>⚠️ API Key Requirements</h4>
          <p>You'll need valid API keys for:</p>
          <ul>
            <li>Cerebras CS-2 API key</li>
            <li>OpenAI API key (fallback)</li>
            <li>Pinecone Vector Database key</li>
          </ul>
        </WarningBox>

        <CommandBlock>
          <CommandTitle>Setup AI Configuration</CommandTitle>
          <CopyButton onClick={() => copyToClipboard(`# Install AI service dependencies
cd ai-services
pip install -r requirements.txt

# Configure API keys in .env
export CEREBRAS_API_KEY="your_cerebras_key_here"
export OPENAI_API_KEY="your_openai_key_here"
export PINECONE_API_KEY="your_pinecone_key_here"

# Start AI services
python -m uvicorn main:app --host 0.0.0.0 --port 8000`)}>Copy</CopyButton>
          <pre>{`# Install AI service dependencies
cd ai-services
pip install -r requirements.txt

# Configure API keys in .env
export CEREBRAS_API_KEY="your_cerebras_key_here"
export OPENAI_API_KEY="your_openai_key_here"
export PINECONE_API_KEY="your_pinecone_key_here"

# Start AI services
python -m uvicorn main:app --host 0.0.0.0 --port 8000`}</pre>
        </CommandBlock>
      </PhaseContainer>

      <SectionTitle>Phase 4: Frontend & Backend Services</SectionTitle>
      <TimeEstimate>⏱️ Estimated Time: 15-25 minutes</TimeEstimate>

      <PhaseContainer>
        <StepHeader>
          <StepNumber>5</StepNumber>
          <StepTitle>Start Application Services</StepTitle>
        </StepHeader>
        
        <CommandBlock>
          <CommandTitle>Backend Services</CommandTitle>
          <CopyButton onClick={() => copyToClipboard(`# Install backend dependencies
cd backend
npm install

# Start backend server
npm run dev

# In another terminal, start the API gateway
cd ../api-gateway
npm install
npm start`)}>Copy</CopyButton>
          <pre>{`# Install backend dependencies
cd backend
npm install

# Start backend server
npm run dev

# In another terminal, start the API gateway
cd ../api-gateway
npm install
npm start`}</pre>
        </CommandBlock>

        <CommandBlock>
          <CommandTitle>Frontend Application</CommandTitle>
          <CopyButton onClick={() => copyToClipboard(`# Install frontend dependencies
cd ../frontend
npm install

# Start development server
npm start

# Application will be available at http://localhost:3000`)}>Copy</CopyButton>
          <pre>{`# Install frontend dependencies
cd ../frontend
npm install

# Start development server
npm start

# Application will be available at http://localhost:3000`}</pre>
        </CommandBlock>
      </PhaseContainer>

      <SectionTitle>Phase 5: IDE Plugin Installation</SectionTitle>
      <TimeEstimate>⏱️ Estimated Time: 10-15 minutes</TimeEstimate>

      <PhaseContainer>
        <StepHeader>
          <StepNumber>6</StepNumber>
          <StepTitle>Install IDE Extensions</StepTitle>
        </StepHeader>
        
        <CommandBlock>
          <CommandTitle>VS Code Extension</CommandTitle>
          <CopyButton onClick={() => copyToClipboard(`# Install from marketplace
code --install-extension neurocode.neurocode-vscode

# Or install from VSIX
cd ide-plugins/vscode
npm run package
code --install-extension neurocode-*.vsix`)}>Copy</CopyButton>
          <pre>{`# Install from marketplace
code --install-extension neurocode.neurocode-vscode

# Or install from VSIX
cd ide-plugins/vscode
npm run package
code --install-extension neurocode-*.vsix`}</pre>
        </CommandBlock>

        <CommandBlock>
          <CommandTitle>IntelliJ Plugin</CommandTitle>
          <CopyButton onClick={() => copyToClipboard(`# Build and install IntelliJ plugin
cd ide-plugins/intellij
./gradlew buildPlugin
./gradlew runIde`)}>Copy</CopyButton>
          <pre>{`# Build and install IntelliJ plugin
cd ide-plugins/intellij
./gradlew buildPlugin
./gradlew runIde`}</pre>
        </CommandBlock>
      </PhaseContainer>

      <SectionTitle>Verification Checklist</SectionTitle>

      <Checklist>
        <h3 style={{ marginTop: 0 }}>✅ Installation Verification</h3>
        <ChecklistItem>
          <input 
            type="checkbox" 
            id="docker-services"
            checked={checkedItems['docker-services'] || false}
            onChange={() => handleCheckboxChange('docker-services')}
          />
          Docker services running (postgres, timescaledb, redis, kafka)
        </ChecklistItem>
        
        <ChecklistItem>
          <input 
            type="checkbox" 
            id="database-setup"
            checked={checkedItems['database-setup'] || false}
            onChange={() => handleCheckboxChange('database-setup')}
          />
          Database schemas created and migrations applied
        </ChecklistItem>
        
        <ChecklistItem>
          <input 
            type="checkbox" 
            id="ai-services"
            checked={checkedItems['ai-services'] || false}
            onChange={() => handleCheckboxChange('ai-services')}
          />
          AI services responding (Cerebras, Llama, Vector DB)
        </ChecklistItem>
        
        <ChecklistItem>
          <input 
            type="checkbox" 
            id="backend-api"
            checked={checkedItems['backend-api'] || false}
            onChange={() => handleCheckboxChange('backend-api')}
          />
          Backend API accessible at http://localhost:8080/health
        </ChecklistItem>
        
        <ChecklistItem>
          <input 
            type="checkbox" 
            id="frontend-app"
            checked={checkedItems['frontend-app'] || false}
            onChange={() => handleCheckboxChange('frontend-app')}
          />
          Frontend application loading at http://localhost:3000
        </ChecklistItem>
        
        <ChecklistItem>
          <input 
            type="checkbox" 
            id="ide-plugins"
            checked={checkedItems['ide-plugins'] || false}
            onChange={() => handleCheckboxChange('ide-plugins')}
          />
          IDE plugins installed and connecting to services
        </ChecklistItem>
      </Checklist>

      <SuccessBox>
        <h3 style={{ color: '#155724', marginTop: 0 }}>🎉 Installation Complete!</h3>
        <p>Congratulations! NeuroCode is now installed and ready to use. The system will begin analyzing developer behavior patterns and providing AI-powered wellness insights.</p>
        <p><strong>Next Steps:</strong></p>
        <ul>
          <li>Configure your team settings in the dashboard</li>
          <li>Set up notification preferences</li>
          <li>Integrate with your existing tools (Slack, Jira, etc.)</li>
          <li>Review the User Guide for detailed usage instructions</li>
        </ul>
      </SuccessBox>
    </GuideContainer>
  );
};

export default InstallationGuideSD;