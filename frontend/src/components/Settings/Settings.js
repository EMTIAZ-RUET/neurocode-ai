import React, { useState } from 'react';
import styled from 'styled-components';

const SettingsContainer = styled.section`
  padding: 2rem 0;
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
`;

const SettingsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionHeader = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${props => props.theme.colors.primary};
  
  i {
    color: ${props => props.theme.colors.accent};
  }
`;

const SettingsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
`;

const SettingsCard = styled.div`
  background: ${props => props.theme.colors.cardBackground};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: ${props => props.theme.colors.text};
    margin: 0;
  }
  
  i {
    color: ${props => props.theme.colors.primary};
    font-size: 1.3rem;
  }
`;

const SettingItem = styled.div`
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  label {
    display: block;
    font-weight: 500;
    color: ${props => props.theme.colors.text};
    margin-bottom: 0.5rem;
  }
  
  select {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.1);
    color: ${props => props.theme.colors.text};
    border-radius: 8px;
    backdrop-filter: blur(10px);
    font-size: 0.9rem;
    
    &:focus {
      outline: none;
      border-color: ${props => props.theme.colors.primary};
    }
  }
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  input[type="range"] {
    flex: 1;
    -webkit-appearance: none;
    height: 6px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
    
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 20px;
      height: 20px;
      background: ${props => props.theme.colors.primary};
      border-radius: 50%;
      cursor: pointer;
    }
    
    &::-moz-range-thumb {
      width: 20px;
      height: 20px;
      background: ${props => props.theme.colors.primary};
      border-radius: 50%;
      cursor: pointer;
      border: none;
    }
  }
  
  .slider-value {
    font-weight: 600;
    color: ${props => props.theme.colors.primary};
    min-width: 30px;
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  
  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    accent-color: ${props => props.theme.colors.primary};
  }
  
  span {
    color: ${props => props.theme.colors.text};
  }
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  
  input[type="radio"] {
    width: 18px;
    height: 18px;
    accent-color: ${props => props.theme.colors.primary};
  }
  
  span {
    color: ${props => props.theme.colors.text};
  }
`;

const IntegrationItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const IntegrationInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  i {
    font-size: 1.5rem;
    color: ${props => props.theme.colors.primary};
  }
  
  span {
    font-weight: 500;
    color: ${props => props.theme.colors.text};
  }
`;

const IntegrationStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  span {
    font-size: 0.9rem;
    color: ${props => props.theme.colors.textSecondary};
  }
  
  &.connected span {
    color: ${props => props.theme.colors.success};
  }
  
  &.disconnected span {
    color: ${props => props.theme.colors.textSecondary};
  }
`;

const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  
  &.btn-connect {
    background: ${props => props.theme.colors.primary};
    color: white;
    
    &:hover {
      background: ${props => props.theme.colors.primaryDark};
    }
  }
  
  &.btn-disconnect {
    background: ${props => props.theme.colors.danger};
    color: white;
    
    &:hover {
      background: #c0392b;
    }
  }
`;

const Settings = () => {
  const [agentMode, setAgentMode] = useState('reactive');
  const [interventionLevel, setInterventionLevel] = useState(7);
  const [dataProcessing, setDataProcessing] = useState('local');
  const [dataRetention, setDataRetention] = useState('30d');
  const [anonymizationLevel, setAnonymizationLevel] = useState(3);
  const [notifications, setNotifications] = useState({
    breakReminders: true,
    codeQualityAlerts: true,
    wellnessTips: false,
    teamInsights: true
  });
  
  const [integrations, setIntegrations] = useState({
    vscode: { connected: true },
    github: { connected: true },
    slack: { connected: false },
    jira: { connected: false }
  });
  
  const handleNotificationChange = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  const handleIntegrationToggle = (integration) => {
    setIntegrations(prev => ({
      ...prev,
      [integration]: {
        connected: !prev[integration].connected
      }
    }));
  };
  
  return (
    <SettingsContainer id="settings">
      <SettingsContent>
        <SectionHeader>
          <Title>
            <i className="fas fa-cog"></i>
            Settings & Configuration
          </Title>
        </SectionHeader>
        
        <SettingsGrid>
          {/* AI Agent Configuration */}
          <SettingsCard>
            <CardHeader>
              <i className="fas fa-robot"></i>
              <h3>AI Agent Settings</h3>
            </CardHeader>
            <div>
              <SettingItem>
                <label htmlFor="agentMode">Agent Mode</label>
                <select 
                  id="agentMode" 
                  value={agentMode}
                  onChange={(e) => setAgentMode(e.target.value)}
                >
                  <option value="proactive">Proactive</option>
                  <option value="reactive">Reactive</option>
                  <option value="passive">Passive</option>
                </select>
              </SettingItem>
              
              <SettingItem>
                <label htmlFor="interventionLevel">Intervention Level</label>
                <SliderContainer>
                  <input 
                    type="range" 
                    id="interventionLevel" 
                    min="1" 
                    max="10" 
                    value={interventionLevel}
                    onChange={(e) => setInterventionLevel(e.target.value)}
                  />
                  <span className="slider-value">{interventionLevel}</span>
                </SliderContainer>
              </SettingItem>
              
              <SettingItem>
                <label>Notification Preferences</label>
                <CheckboxGroup>
                  <CheckboxLabel>
                    <input 
                      type="checkbox" 
                      checked={notifications.breakReminders}
                      onChange={() => handleNotificationChange('breakReminders')}
                    />
                    <span>Break Reminders</span>
                  </CheckboxLabel>
                  <CheckboxLabel>
                    <input 
                      type="checkbox" 
                      checked={notifications.codeQualityAlerts}
                      onChange={() => handleNotificationChange('codeQualityAlerts')}
                    />
                    <span>Code Quality Alerts</span>
                  </CheckboxLabel>
                  <CheckboxLabel>
                    <input 
                      type="checkbox" 
                      checked={notifications.wellnessTips}
                      onChange={() => handleNotificationChange('wellnessTips')}
                    />
                    <span>Wellness Tips</span>
                  </CheckboxLabel>
                  <CheckboxLabel>
                    <input 
                      type="checkbox" 
                      checked={notifications.teamInsights}
                      onChange={() => handleNotificationChange('teamInsights')}
                    />
                    <span>Team Insights</span>
                  </CheckboxLabel>
                </CheckboxGroup>
              </SettingItem>
            </div>
          </SettingsCard>
          
          {/* Privacy & Security */}
          <SettingsCard>
            <CardHeader>
              <i className="fas fa-shield-alt"></i>
              <h3>Privacy & Security</h3>
            </CardHeader>
            <div>
              <SettingItem>
                <label>Data Processing</label>
                <RadioGroup>
                  <RadioLabel>
                    <input 
                      type="radio" 
                      name="dataProcessing" 
                      value="local"
                      checked={dataProcessing === 'local'}
                      onChange={(e) => setDataProcessing(e.target.value)}
                    />
                    <span>Local Processing Only</span>
                  </RadioLabel>
                  <RadioLabel>
                    <input 
                      type="radio" 
                      name="dataProcessing" 
                      value="hybrid"
                      checked={dataProcessing === 'hybrid'}
                      onChange={(e) => setDataProcessing(e.target.value)}
                    />
                    <span>Hybrid (Local + Cloud)</span>
                  </RadioLabel>
                  <RadioLabel>
                    <input 
                      type="radio" 
                      name="dataProcessing" 
                      value="cloud"
                      checked={dataProcessing === 'cloud'}
                      onChange={(e) => setDataProcessing(e.target.value)}
                    />
                    <span>Cloud Processing</span>
                  </RadioLabel>
                </RadioGroup>
              </SettingItem>
              
              <SettingItem>
                <label htmlFor="dataRetention">Data Retention Period</label>
                <select 
                  id="dataRetention"
                  value={dataRetention}
                  onChange={(e) => setDataRetention(e.target.value)}
                >
                  <option value="7d">7 Days</option>
                  <option value="30d">30 Days</option>
                  <option value="90d">90 Days</option>
                  <option value="1y">1 Year</option>
                </select>
              </SettingItem>
              
              <SettingItem>
                <label htmlFor="anonymizationLevel">Anonymization Level</label>
                <SliderContainer>
                  <input 
                    type="range" 
                    id="anonymizationLevel" 
                    min="1" 
                    max="5" 
                    value={anonymizationLevel}
                    onChange={(e) => setAnonymizationLevel(e.target.value)}
                  />
                  <span className="slider-value">K={anonymizationLevel}</span>
                </SliderContainer>
              </SettingItem>
            </div>
          </SettingsCard>
          
          {/* Integration Settings */}
          <SettingsCard>
            <CardHeader>
              <i className="fas fa-plug"></i>
              <h3>Integrations</h3>
            </CardHeader>
            <div>
              <IntegrationItem>
                <IntegrationInfo>
                  <i className="fab fa-microsoft"></i>
                  <span>VS Code</span>
                </IntegrationInfo>
                <IntegrationStatus className={integrations.vscode.connected ? 'connected' : 'disconnected'}>
                  <span>{integrations.vscode.connected ? 'Connected' : 'Not Connected'}</span>
                  <ActionButton 
                    className={integrations.vscode.connected ? 'btn-disconnect' : 'btn-connect'}
                    onClick={() => handleIntegrationToggle('vscode')}
                  >
                    {integrations.vscode.connected ? 'Disconnect' : 'Connect'}
                  </ActionButton>
                </IntegrationStatus>
              </IntegrationItem>
              
              <IntegrationItem>
                <IntegrationInfo>
                  <i className="fab fa-git-alt"></i>
                  <span>GitHub</span>
                </IntegrationInfo>
                <IntegrationStatus className={integrations.github.connected ? 'connected' : 'disconnected'}>
                  <span>{integrations.github.connected ? 'Connected' : 'Not Connected'}</span>
                  <ActionButton 
                    className={integrations.github.connected ? 'btn-disconnect' : 'btn-connect'}
                    onClick={() => handleIntegrationToggle('github')}
                  >
                    {integrations.github.connected ? 'Disconnect' : 'Connect'}
                  </ActionButton>
                </IntegrationStatus>
              </IntegrationItem>
              
              <IntegrationItem>
                <IntegrationInfo>
                  <i className="fab fa-slack"></i>
                  <span>Slack</span>
                </IntegrationInfo>
                <IntegrationStatus className={integrations.slack.connected ? 'connected' : 'disconnected'}>
                  <span>{integrations.slack.connected ? 'Connected' : 'Not Connected'}</span>
                  <ActionButton 
                    className={integrations.slack.connected ? 'btn-disconnect' : 'btn-connect'}
                    onClick={() => handleIntegrationToggle('slack')}
                  >
                    {integrations.slack.connected ? 'Disconnect' : 'Connect'}
                  </ActionButton>
                </IntegrationStatus>
              </IntegrationItem>
              
              <IntegrationItem>
                <IntegrationInfo>
                  <i className="fab fa-jira"></i>
                  <span>Jira</span>
                </IntegrationInfo>
                <IntegrationStatus className={integrations.jira.connected ? 'connected' : 'disconnected'}>
                  <span>{integrations.jira.connected ? 'Connected' : 'Not Connected'}</span>
                  <ActionButton 
                    className={integrations.jira.connected ? 'btn-disconnect' : 'btn-connect'}
                    onClick={() => handleIntegrationToggle('jira')}
                  >
                    {integrations.jira.connected ? 'Disconnect' : 'Connect'}
                  </ActionButton>
                </IntegrationStatus>
              </IntegrationItem>
            </div>
          </SettingsCard>
        </SettingsGrid>
      </SettingsContent>
    </SettingsContainer>
  );
};

export default Settings;