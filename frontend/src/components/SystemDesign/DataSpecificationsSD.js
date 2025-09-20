import React, { useState } from 'react';
import styled from 'styled-components';

const SpecContainer = styled.div`
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

const InfoBox = styled.div`
  background: #d1ecf1;
  border: 2px solid #17a2b8;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
  
  h3 {
    color: #0c5460;
    margin-top: 0;
  }
`;

const DataCategory = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 30px 0;
`;

const CategoryCard = styled.div`
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 25px;
  border-radius: 12px;
  border-left: 5px solid #3498db;
`;

const CategoryTitle = styled.div`
  color: #2c3e50;
  font-size: 1.3em;
  font-weight: bold;
  margin-bottom: 15px;
`;

const DataPoint = styled.div`
  background: white;
  padding: 10px;
  margin: 8px 0;
  border-radius: 6px;
  border-left: 3px solid #17a2b8;
  font-size: 0.9em;
`;

const FrequencyBadge = styled.span`
  display: inline-block;
  background: #17a2b8;
  color: white;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 0.7em;
  margin-left: 10px;
`;

const APIEndpoint = styled.div`
  background: #2c3e50;
  color: #ecf0f1;
  padding: 15px;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  margin: 20px 0;
  position: relative;
  border-left: 4px solid #3498db;
`;

const DataStructure = styled.pre`
  background: #2c3e50;
  color: #ecf0f1;
  padding: 20px;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  margin: 20px 0;
  overflow-x: auto;
  position: relative;
  border-left: 4px solid #27ae60;
  font-size: 12px;
  line-height: 1.4;
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

const MetricCard = styled.div`
  background: #f8f9fa;
  border: 2px solid #dee2e6;
  border-radius: 12px;
  padding: 20px;
  margin: 20px 0;
`;

const MetricHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const MetricTitle = styled.span`
  font-size: 1.3em;
  font-weight: bold;
  color: #2c3e50;
`;

const MetricType = styled.span`
  background: #3498db;
  color: white;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.8em;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  
  th {
    background: #3498db;
    color: white;
    padding: 12px;
    text-align: left;
    font-weight: bold;
  }
  
  td {
    padding: 10px 12px;
    border-bottom: 1px solid #ecf0f1;
  }
  
  tr:nth-child(even) {
    background: #f8f9fa;
  }
  
  tr:hover {
    background: #e3f2fd;
  }
`;

const TabContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  border-bottom: 2px solid #dee2e6;
`;

const Tab = styled.button`
  background: ${props => props.active ? '#3498db' : 'transparent'};
  color: ${props => props.active ? 'white' : '#666'};
  border: none;
  padding: 10px 20px;
  border-radius: 8px 8px 0 0;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.active ? '#3498db' : '#f8f9fa'};
  }
`;

const DataSpecificationsSD = () => {
  const [activeTab, setActiveTab] = useState('realtime');

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Copied to clipboard');
    });
  };

  const realtimeAPIResponse = `{
  "user_id": "usr_7f8a9b2c3d4e5f6g",
  "timestamp": "2024-01-15T14:30:45.123Z",
  "wellness_metrics": {
    "overall_score": 78.5,
    "stress_level": 42.3,
    "burnout_risk": 18.7,
    "flow_state": 85.2,
    "cognitive_load": 56.8,
    "confidence_score": 0.92
  },
  "behavioral_indicators": {
    "keystroke_dynamics": {
      "rhythm_consistency": 0.87,
      "typing_speed": 65.4,
      "pressure_variance": 0.23,
      "pause_patterns": "normal"
    },
    "session_metrics": {
      "duration_minutes": 127,
      "file_switches": 23,
      "error_corrections": 8,
      "break_count": 2
    },
    "focus_indicators": {
      "deep_work_duration": 45,
      "distraction_events": 3,
      "context_switches": 12
    }
  },
  "trend_analysis": {
    "stress_trend": "increasing",
    "productivity_trend": "stable",
    "wellness_change_24h": 5.2,
    "pattern_anomalies": []
  },
  "predictions": {
    "burnout_risk_7d": 25.4,
    "optimal_break_time": "2024-01-15T15:00:00Z",
    "productivity_forecast": "high",
    "recommended_session_end": "2024-01-15T16:15:00Z"
  }
}`;

  const codeQualityResponse = `{
  "user_id": "usr_7f8a9b2c3d4e5f6g",
  "timestamp": "2024-01-15T14:30:45.123Z",
  "current_file": {
    "path": "src/components/Dashboard.tsx",
    "language": "typescript",
    "lines_of_code": 245,
    "complexity_metrics": {
      "cyclomatic_complexity": 12,
      "cognitive_complexity": 18,
      "nesting_depth": 4,
      "method_count": 8,
      "class_count": 1
    },
    "quality_scores": {
      "maintainability": 0.78,
      "readability": 0.85,
      "testability": 0.72,
      "overall_quality": 0.78
    }
  },
  "session_aggregates": {
    "files_modified": 7,
    "total_loc_added": 156,
    "total_loc_deleted": 43,
    "average_complexity": 8.4,
    "complexity_trend": "increasing"
  },
  "psychological_correlation": {
    "complexity_stress_correlation": 0.67,
    "quality_flow_correlation": 0.82,
    "refactoring_wellness_impact": 0.45
  },
  "recommendations": [
    {
      "type": "complexity_reduction",
      "priority": "medium", 
      "suggestion": "Consider breaking down the handleSubmit method (complexity: 15)",
      "estimated_impact": "reduce stress by 8%"
    }
  ]
}`;

  const aiInsightsResponse = `{
  "user_id": "usr_7f8a9b2c3d4e5f6g",
  "timestamp": "2024-01-15T14:30:45.123Z",
  "cerebras_analysis": {
    "pattern_recognition": {
      "coding_style_consistency": 0.89,
      "productivity_patterns": ["morning_peak", "post_lunch_dip"],
      "stress_indicators": ["rapid_typing", "frequent_deletions"],
      "flow_state_triggers": ["deep_focus_music", "minimal_notifications"]
    },
    "anomaly_detection": {
      "unusual_patterns": [
        {
          "type": "stress_spike",
          "timestamp": "2024-01-15T13:45:00Z",
          "severity": "medium",
          "likely_cause": "complex_algorithm_implementation"
        }
      ]
    }
  },
  "llama_insights": {
    "natural_language_analysis": {
      "commit_message_sentiment": "positive",
      "code_comment_clarity": 0.78,
      "documentation_quality": "good",
      "team_communication_tone": "collaborative"
    },
    "personalized_recommendations": [
      {
        "category": "wellness",
        "recommendation": "Consider taking a 10-minute walk to reset focus",
        "reasoning": "Stress levels have been elevated for 90 minutes",
        "expected_benefit": "15% stress reduction, improved focus"
      }
    ]
  }
}`;

  return (
    <SpecContainer>
      <Title>📊 NeuroCode Data Output Specifications</Title>
      
      <InfoBox>
        <h3>📋 Overview</h3>
        <p>This document defines all data outputs, API responses, and user-facing information that the NeuroCode system generates. It covers real-time metrics, historical analytics, predictions, and intervention recommendations.</p>
      </InfoBox>

      <SectionTitle>1. Real-time Psychological Metrics</SectionTitle>
      
      <DataCategory>
        <CategoryCard>
          <CategoryTitle>🧠 Core Wellness Metrics</CategoryTitle>
          
          <DataPoint>
            <strong>Wellness Score</strong> <FrequencyBadge>Real-time</FrequencyBadge><br/>
            Range: 0-100 | Type: Float | Update: Every 30 seconds
          </DataPoint>
          
          <DataPoint>
            <strong>Stress Level</strong> <FrequencyBadge>Real-time</FrequencyBadge><br/>
            Range: 0-100 | Type: Float | Update: Every 15 seconds
          </DataPoint>
          
          <DataPoint>
            <strong>Burnout Risk</strong> <FrequencyBadge>Hourly</FrequencyBadge><br/>
            Range: 0-100 | Type: Float | Update: Every hour
          </DataPoint>
          
          <DataPoint>
            <strong>Flow State Indicator</strong> <FrequencyBadge>Real-time</FrequencyBadge><br/>
            Range: 0-100 | Type: Float | Update: Every 60 seconds
          </DataPoint>
          
          <DataPoint>
            <strong>Cognitive Load</strong> <FrequencyBadge>Real-time</FrequencyBadge><br/>
            Range: 0-100 | Type: Float | Update: Every 30 seconds
          </DataPoint>
        </CategoryCard>
        
        <CategoryCard>
          <CategoryTitle>⚡ Behavioral Indicators</CategoryTitle>
          
          <DataPoint>
            <strong>Keystroke Dynamics</strong> <FrequencyBadge>Real-time</FrequencyBadge><br/>
            Type: Object | Includes: rhythm, pressure, timing
          </DataPoint>
          
          <DataPoint>
            <strong>Code Switching Frequency</strong> <FrequencyBadge>Real-time</FrequencyBadge><br/>
            Type: Integer | Unit: switches per minute
          </DataPoint>
          
          <DataPoint>
            <strong>Session Duration</strong> <FrequencyBadge>Continuous</FrequencyBadge><br/>
            Type: Integer | Unit: minutes
          </DataPoint>
          
          <DataPoint>
            <strong>Break Patterns</strong> <FrequencyBadge>Daily</FrequencyBadge><br/>
            Type: Array | Includes: frequency, duration, timing
          </DataPoint>
          
          <DataPoint>
            <strong>Error Rate Trend</strong> <FrequencyBadge>Real-time</FrequencyBadge><br/>
            Type: Float | Unit: errors per hour
          </DataPoint>
        </CategoryCard>
      </DataCategory>

      <TabContainer>
        <Tab active={activeTab === 'realtime'} onClick={() => setActiveTab('realtime')}>
          Real-time API
        </Tab>
        <Tab active={activeTab === 'quality'} onClick={() => setActiveTab('quality')}>
          Code Quality API
        </Tab>
        <Tab active={activeTab === 'insights'} onClick={() => setActiveTab('insights')}>
          AI Insights API
        </Tab>
      </TabContainer>

      {activeTab === 'realtime' && (
        <>
          <APIEndpoint>
            <CopyButton onClick={() => copyToClipboard('GET /api/v1/wellness/realtime/{user_id}')}>Copy</CopyButton>
            GET /api/v1/wellness/realtime/{'{user_id}'}
          </APIEndpoint>
          
          <DataStructure>
            <CopyButton onClick={() => copyToClipboard(realtimeAPIResponse)}>Copy</CopyButton>
            {realtimeAPIResponse}
          </DataStructure>
        </>
      )}

      {activeTab === 'quality' && (
        <>
          <SectionTitle>2. Code Quality & Complexity Metrics</SectionTitle>
          
          <MetricCard>
            <MetricHeader>
              <MetricTitle>📈 Code Complexity Analysis</MetricTitle>
              <MetricType>Real-time</MetricType>
            </MetricHeader>
            
            <Table>
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Description</th>
                  <th>Range</th>
                  <th>Update Frequency</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cyclomatic Complexity</td>
                  <td>McCabe complexity measure</td>
                  <td>1-50+</td>
                  <td>Per file save</td>
                </tr>
                <tr>
                  <td>Cognitive Complexity</td>
                  <td>Human readability measure</td>
                  <td>0-100+</td>
                  <td>Per file save</td>
                </tr>
                <tr>
                  <td>Technical Debt Ratio</td>
                  <td>Maintenance effort indicator</td>
                  <td>0-1</td>
                  <td>Daily</td>
                </tr>
                <tr>
                  <td>Code Duplication</td>
                  <td>Percentage of duplicated code</td>
                  <td>0-100%</td>
                  <td>Per commit</td>
                </tr>
                <tr>
                  <td>Test Coverage</td>
                  <td>Percentage of code covered by tests</td>
                  <td>0-100%</td>
                  <td>Per test run</td>
                </tr>
              </tbody>
            </Table>
          </MetricCard>
          
          <APIEndpoint>
            <CopyButton onClick={() => copyToClipboard('GET /api/v1/code-quality/{user_id}/current')}>Copy</CopyButton>
            GET /api/v1/code-quality/{'{user_id}'}/current
          </APIEndpoint>
          
          <DataStructure>
            <CopyButton onClick={() => copyToClipboard(codeQualityResponse)}>Copy</CopyButton>
            {codeQualityResponse}
          </DataStructure>
        </>
      )}

      {activeTab === 'insights' && (
        <>
          <SectionTitle>3. AI-Generated Insights & Predictions</SectionTitle>
          
          <DataCategory>
            <CategoryCard>
              <CategoryTitle>🤖 Cerebras Pattern Analysis</CategoryTitle>
              
              <DataPoint>
                <strong>Behavioral Pattern Recognition</strong><br/>
                Identifies recurring patterns in coding behavior and correlates with psychological states
              </DataPoint>
              
              <DataPoint>
                <strong>Anomaly Detection</strong><br/>
                Flags unusual deviations from normal coding patterns that may indicate stress or fatigue
              </DataPoint>
              
              <DataPoint>
                <strong>Productivity Optimization</strong><br/>
                Suggests optimal work schedules based on individual performance patterns
              </DataPoint>
            </CategoryCard>
            
            <CategoryCard>
              <CategoryTitle>🦙 Llama NLP Insights</CategoryTitle>
              
              <DataPoint>
                <strong>Commit Message Analysis</strong><br/>
                Analyzes sentiment and clarity of commit messages for emotional state indicators
              </DataPoint>
              
              <DataPoint>
                <strong>Code Comment Quality</strong><br/>
                Evaluates documentation quality and communication patterns
              </DataPoint>
              
              <DataPoint>
                <strong>Personalized Recommendations</strong><br/>
                Generates contextual wellness suggestions based on current state and history
              </DataPoint>
            </CategoryCard>
          </DataCategory>
          
          <APIEndpoint>
            <CopyButton onClick={() => copyToClipboard('GET /api/v1/ai-insights/{user_id}/comprehensive')}>Copy</CopyButton>
            GET /api/v1/ai-insights/{'{user_id}'}/comprehensive
          </APIEndpoint>
          
          <DataStructure>
            <CopyButton onClick={() => copyToClipboard(aiInsightsResponse)}>Copy</CopyButton>
            {aiInsightsResponse}
          </DataStructure>
        </>
      )}

      <SectionTitle>4. Privacy & Data Protection</SectionTitle>
      
      <InfoBox>
        <h3>🔒 Data Protection Measures</h3>
        <ul>
          <li><strong>End-to-End Encryption:</strong> All data transmitted and stored using AES-256 encryption</li>
          <li><strong>Data Anonymization:</strong> Personal identifiers removed from analytics datasets</li>
          <li><strong>Retention Policies:</strong> Raw keystroke data purged after 30 days, aggregated metrics retained for 1 year</li>
          <li><strong>User Control:</strong> Complete data export and deletion capabilities via API</li>
          <li><strong>GDPR Compliance:</strong> Full compliance with EU data protection regulations</li>
          <li><strong>SOC 2 Type II:</strong> Audited security controls and data handling procedures</li>
        </ul>
      </InfoBox>

      <MetricCard>
        <MetricHeader>
          <MetricTitle>📋 Data Retention Schedule</MetricTitle>
        </MetricHeader>
        
        <Table>
          <thead>
            <tr>
              <th>Data Type</th>
              <th>Retention Period</th>
              <th>Purge Method</th>
              <th>User Control</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Raw Keystroke Data</td>
              <td>30 days</td>
              <td>Automated deletion</td>
              <td>Immediate deletion on request</td>
            </tr>
            <tr>
              <td>Wellness Metrics</td>
              <td>1 year</td>
              <td>Aggregated and anonymized</td>
              <td>Export and delete available</td>
            </tr>
            <tr>
              <td>Code Quality Metrics</td>
              <td>2 years</td>
              <td>Statistical aggregation</td>
              <td>Export and delete available</td>
            </tr>
            <tr>
              <td>AI Model Training Data</td>
              <td>Indefinite (anonymized)</td>
              <td>De-identification</td>
              <td>Opt-out available</td>
            </tr>
          </tbody>
        </Table>
      </MetricCard>
    </SpecContainer>
  );
};

export default DataSpecificationsSD;