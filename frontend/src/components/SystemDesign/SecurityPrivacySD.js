import React from 'react';
import styled from 'styled-components';

const SecurityContainer = styled.div`
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

const SecurityCard = styled.div`
  background: linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%);
  border: 2px solid #f44336;
  border-radius: 12px;
  padding: 25px;
  margin: 20px 0;
`;

const CardTitle = styled.h3`
  color: #c62828;
  margin-bottom: 15px;
`;

const OverviewSection = styled.div`
  background: #f3e5f5;
  border: 2px solid #9c27b0;
  padding: 25px;
  border-radius: 15px;
  margin: 30px 0;
  
  h3 {
    margin-top: 0;
    color: #6a1b9a;
  }
  
  p {
    color: #4a148c;
  }
`;

const SecurityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
`;

const SecurityPrivacySD = () => {
  return (
    <SecurityContainer>
      <Title>🔒 NeuroCode Security & Privacy Framework</Title>
      
      <OverviewSection>
        <h3>🛡️ Privacy-First Architecture</h3>
        <p>
          NeuroCode is built with privacy-by-design principles, ensuring that sensitive developer 
          data is protected while providing valuable wellness insights. We implement industry-leading 
          security measures and comply with global privacy regulations.
        </p>
      </OverviewSection>

      <SectionTitle>1. Data Protection & Privacy</SectionTitle>
      
      <SecurityGrid>
        <SecurityCard>
          <CardTitle>🔐 Data Encryption</CardTitle>
          <ul>
            <li>AES-256 encryption for data at rest</li>
            <li>TLS 1.3 for data in transit</li>
            <li>End-to-end encryption for sensitive data</li>
            <li>Hardware security modules (HSM)</li>
            <li>Key rotation and management</li>
          </ul>
        </SecurityCard>

        <SecurityCard>
          <CardTitle>🕵️ Data Anonymization</CardTitle>
          <ul>
            <li>No source code content is stored</li>
            <li>Personal identifiers are hashed</li>
            <li>Behavioral patterns only (not content)</li>
            <li>Differential privacy techniques</li>
            <li>Data retention policies</li>
          </ul>
        </SecurityCard>

        <SecurityCard>
          <CardTitle>⚖️ Regulatory Compliance</CardTitle>
          <ul>
            <li>GDPR compliance for EU users</li>
            <li>CCPA compliance for California residents</li>
            <li>SOC 2 Type II certification</li>
            <li>ISO 27001 information security</li>
            <li>HIPAA-ready architecture</li>
          </ul>
        </SecurityCard>
      </SecurityGrid>

      <SectionTitle>2. Access Control & Authentication</SectionTitle>
      
      <SecurityGrid>
        <SecurityCard>
          <CardTitle>🔑 Multi-Factor Authentication</CardTitle>
          <ul>
            <li>OAuth 2.0 integration</li>
            <li>SAML single sign-on</li>
            <li>Time-based one-time passwords (TOTP)</li>
            <li>Biometric authentication support</li>
            <li>Hardware security keys</li>
          </ul>
        </SecurityCard>

        <SecurityCard>
          <CardTitle>👥 Role-Based Access Control</CardTitle>
          <ul>
            <li>Principle of least privilege</li>
            <li>Granular permission system</li>
            <li>Team and organization hierarchies</li>
            <li>Audit trails for all access</li>
            <li>Regular access reviews</li>
          </ul>
        </SecurityCard>

        <SecurityCard>
          <CardTitle>🌐 Network Security</CardTitle>
          <ul>
            <li>VPC isolation and segmentation</li>
            <li>Web Application Firewall (WAF)</li>
            <li>DDoS protection</li>
            <li>IP allowlisting capabilities</li>
            <li>VPN and private connectivity</li>
          </ul>
        </SecurityCard>
      </SecurityGrid>

      <SectionTitle>3. Privacy Controls for Users</SectionTitle>
      
      <SecurityCard>
        <CardTitle>⚙️ Granular Privacy Settings</CardTitle>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <h4>Data Collection Controls:</h4>
            <ul>
              <li>Opt-in for all tracking features</li>
              <li>Selective metric enabling/disabling</li>
              <li>Temporary privacy mode</li>
              <li>Team vs. individual data sharing</li>
              <li>Data export and portability</li>
            </ul>
          </div>
          <div>
            <h4>Transparency Features:</h4>
            <ul>
              <li>Real-time privacy dashboard</li>
              <li>Data usage explanations</li>
              <li>AI decision transparency</li>
              <li>Data sharing notifications</li>
              <li>Right to be forgotten</li>
            </ul>
          </div>
        </div>
      </SecurityCard>

      <SectionTitle>4. Security Monitoring & Incident Response</SectionTitle>
      
      <SecurityGrid>
        <SecurityCard>
          <CardTitle>👀 24/7 Security Monitoring</CardTitle>
          <ul>
            <li>Security Information Event Management (SIEM)</li>
            <li>Intrusion detection systems</li>
            <li>Behavioral anomaly detection</li>
            <li>Threat intelligence integration</li>
            <li>Automated security alerts</li>
          </ul>
        </SecurityCard>

        <SecurityCard>
          <CardTitle>🚨 Incident Response Plan</CardTitle>
          <ul>
            <li>24/7 security operations center</li>
            <li>Automated containment procedures</li>
            <li>Customer notification protocols</li>
            <li>Forensic analysis capabilities</li>
            <li>Recovery and business continuity</li>
          </ul>
        </SecurityCard>

        <SecurityCard>
          <CardTitle>🔍 Security Auditing</CardTitle>
          <ul>
            <li>Regular penetration testing</li>
            <li>Third-party security assessments</li>
            <li>Code security reviews</li>
            <li>Vulnerability management program</li>
            <li>Bug bounty program</li>
          </ul>
        </SecurityCard>
      </SecurityGrid>

      <OverviewSection>
        <h3>🏆 Security Certifications</h3>
        <p>
          NeuroCode maintains industry-leading security certifications and undergoes regular 
          third-party audits to ensure the highest standards of security and privacy protection. 
          Our commitment to security is backed by comprehensive insurance coverage and transparent 
          security practices.
        </p>
      </OverviewSection>
    </SecurityContainer>
  );
};

export default SecurityPrivacySD;