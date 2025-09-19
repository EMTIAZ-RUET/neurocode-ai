import React from 'react';
import styled from 'styled-components';

const SettingsContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
  text-align: center;
`;

const ComingSoon = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  backdrop-filter: blur(10px);
`;

const ComingSoonText = styled.h3`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #888;
  line-height: 1.6;
`;

const Settings = () => {
  return (
    <SettingsContainer>
      <Title>Settings & Configuration</Title>
      <ComingSoon>
        <ComingSoonText>Coming Soon</ComingSoonText>
        <Description>
          Personalization settings, privacy controls, notification preferences, 
          and AI model configuration options will be available here.
        </Description>
      </ComingSoon>
    </SettingsContainer>
  );
};

export default Settings;