import React from 'react';
import styled from 'styled-components';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useNeuroCode } from '../../context/NeuroCodeContext';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const TimelineCard = styled.div`
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

const CardTitle = styled.h3`
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

const TimelineControls = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.sm};
`;

const TimelineButton = styled.button`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border: 1px solid ${props => props.isActive ? props.theme.colors.primary : props.theme.colors.border};
  background: ${props => props.isActive ? props.theme.colors.primary : 'white'};
  color: ${props => props.isActive ? 'white' : props.theme.colors.text};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.fontSizes.sm};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.fast};
  
  &:hover {
    background: ${props => props.isActive ? props.theme.colors.primary : props.theme.colors.borderLight};
  }
`;

const ChartContainer = styled.div`
  height: 300px;
  position: relative;
`;

const ActivityTimeline = () => {
  const { activityData } = useNeuroCode();
  const [activeView, setActiveView] = React.useState('today');

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          padding: 20,
        }
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        titleColor: '#1e293b',
        bodyColor: '#64748b',
        borderColor: '#e2e8f0',
        borderWidth: 1,
        cornerRadius: 8,
        padding: 12,
      }
    },
    scales: {
      x: {
        display: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: '#64748b',
        }
      },
      y: {
        display: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: '#64748b',
        },
        min: 0,
        max: 100,
      }
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    },
    elements: {
      point: {
        radius: 4,
        hoverRadius: 6,
      },
      line: {
        tension: 0.4,
      }
    }
  };

  const chartData = {
    labels: activityData.map(item => {
      const date = new Date(item.time);
      return date.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
      });
    }),
    datasets: [
      {
        label: 'Activity Level',
        data: activityData.map(item => item.activity),
        borderColor: '#667eea',
        backgroundColor: 'rgba(102, 126, 234, 0.1)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Stress Level',
        data: activityData.map(item => item.stress),
        borderColor: '#ef4444',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        fill: false,
        tension: 0.4,
      },
      {
        label: 'Flow State',
        data: activityData.map(item => item.flow),
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: false,
        tension: 0.4,
      }
    ]
  };

  const timelineViews = [
    { key: 'today', label: 'Today' },
    { key: 'week', label: 'Week' },
    { key: 'month', label: 'Month' }
  ];

  return (
    <TimelineCard>
      <CardHeader>
        <CardTitle>
          <i className="fas fa-chart-line"></i>
          Activity Timeline
        </CardTitle>
        <TimelineControls>
          {timelineViews.map((view) => (
            <TimelineButton
              key={view.key}
              isActive={activeView === view.key}
              onClick={() => setActiveView(view.key)}
            >
              {view.label}
            </TimelineButton>
          ))}
        </TimelineControls>
      </CardHeader>
      
      <ChartContainer>
        <Line data={chartData} options={chartOptions} />
      </ChartContainer>
    </TimelineCard>
  );
};

export default ActivityTimeline;