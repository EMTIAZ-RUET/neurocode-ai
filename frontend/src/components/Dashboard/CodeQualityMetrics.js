import React from 'react';
import styled from 'styled-components';
import { useNeuroCode } from '../../context/NeuroCodeContext';

const MetricsCard = styled.div`
  background: ${props => props.theme.colors.cardBackground};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.lg};
  box-shadow: ${props => props.theme.shadows.lg};
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const Title = styled.h3`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: bold;
  
  i {
    color: ${props => props.theme.colors.primary};
  }
`;

const TimeSelector = styled.select`
  padding: ${props => props.theme.spacing.sm};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  background: white;
  font-size: ${props => props.theme.fontSizes.sm};
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${props => props.theme.spacing.md};
`;

const MetricItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.md};
  background: rgba(255, 255, 255, 0.5);
  border-radius: ${props => props.theme.borderRadius.md};
  transition: all ${props => props.theme.transitions.fast};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.md};
  }
`;

const MetricIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${props => props.theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => {
    switch (props.type) {
      case 'complexity': return props.theme.colors.gradients.warning;
      case 'quality': return props.theme.colors.gradients.success;
      case 'bugs': return props.theme.colors.gradients.error;
      case 'coverage': return props.theme.colors.gradients.info;
      default: return props.theme.colors.gradients.primary;
    }
  }};
  color: white;
  font-size: ${props => props.theme.fontSizes.lg};
`;

const MetricInfo = styled.div`
  flex: 1;
`;

const MetricValue = styled.div`
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: bold;
  color: ${props => props.theme.colors.text};
`;

const MetricLabel = styled.div`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textLight};
`;

const MetricTrend = styled.div`
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: bold;
  color: ${props => {
    if (props.trend === 'up') return props.theme.colors.success;
    if (props.trend === 'down') return props.theme.colors.error;
    return props.theme.colors.textLight;
  }};
  
  &::before {
    content: '${props => {
      if (props.trend === 'up') return '↗';
      if (props.trend === 'down') return '↘';
      return '→';
    }}';
    margin-right: 2px;
  }
`;

const CodeQualityMetrics = () => {
  const { metrics } = useNeuroCode();

  const metricItems = [
    {
      type: 'complexity',
      icon: 'fas fa-project-diagram',
      value: metrics.complexity.toFixed(1),
      label: 'Complexity',
      trend: 'up',
      trendValue: '+12%'
    },
    {
      type: 'quality',
      icon: 'fas fa-star',
      value: `${Math.round(metrics.quality)}%`,
      label: 'Quality Score',
      trend: 'down',
      trendValue: '-3%'
    },
    {
      type: 'bugs',
      icon: 'fas fa-bug',
      value: metrics.bugs,
      label: 'Bugs/KLOC',
      trend: 'up',
      trendValue: '+25%'
    },
    {
      type: 'coverage',
      icon: 'fas fa-shield-alt',
      value: `${Math.round(metrics.coverage)}%`,
      label: 'Test Coverage',
      trend: 'stable',
      trendValue: '0%'
    }
  ];

  return (
    <MetricsCard>
      <CardHeader>
        <Title>
          <i className="fas fa-code"></i>
          Code Quality Metrics
        </Title>
        <TimeSelector defaultValue="24h">
          <option value="1h">Last Hour</option>
          <option value="24h">Last 24 Hours</option>
          <option value="7d">Last Week</option>
          <option value="30d">Last Month</option>
        </TimeSelector>
      </CardHeader>
      
      <MetricsGrid>
        {metricItems.map((metric) => (
          <MetricItem key={metric.type}>
            <MetricIcon type={metric.type}>
              <i className={metric.icon}></i>
            </MetricIcon>
            <MetricInfo>
              <MetricValue>{metric.value}</MetricValue>
              <MetricLabel>{metric.label}</MetricLabel>
              <MetricTrend trend={metric.trend}>
                {metric.trendValue}
              </MetricTrend>
            </MetricInfo>
          </MetricItem>
        ))}
      </MetricsGrid>
    </MetricsCard>
  );
};

export default CodeQualityMetrics;