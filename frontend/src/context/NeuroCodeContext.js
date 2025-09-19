import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { demoDataGenerator } from '../utils/demoData';

const NeuroCodeContext = createContext();

const initialState = {
  isActive: true,
  currentState: {
    stress: 35,
    flow: 78,
    cognitive: 62,
    burnout: 23,
    confidence: 94
  },
  recommendations: [],
  chatHistory: [],
  analysisData: {},
  uploadedFiles: [],
  currentLanguage: 'javascript',
  settings: {
    agentMode: 'reactive',
    interventionLevel: 7,
    notifications: {
      breaks: true,
      quality: true,
      wellness: false,
      team: true
    },
    theme: 'dark',
    language: 'en'
  },
  metrics: {
    complexity: 8.5,
    quality: 92,
    bugs: 3,
    coverage: 87
  },
  activityData: [],
  loading: false,
  error: null
};

function neuroCodeReducer(state, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    case 'UPDATE_PSYCHOLOGICAL_STATE':
      return { ...state, currentState: { ...state.currentState, ...action.payload } };
    case 'ADD_RECOMMENDATION':
      return { ...state, recommendations: [...state.recommendations, action.payload] };
    case 'REMOVE_RECOMMENDATION':
      return { 
        ...state, 
        recommendations: state.recommendations.filter(rec => rec.id !== action.payload) 
      };
    case 'UPDATE_METRICS':
      return { ...state, metrics: { ...state.metrics, ...action.payload } };
    case 'UPDATE_SETTINGS':
      return { ...state, settings: { ...state.settings, ...action.payload } };
    case 'SET_ACTIVITY_DATA':
      return { ...state, activityData: action.payload };
    case 'ADD_CHAT_MESSAGE':
      return { ...state, chatHistory: [...state.chatHistory, action.payload] };
    case 'UPLOAD_FILE':
      return { ...state, uploadedFiles: [...state.uploadedFiles, action.payload] };
    case 'SET_CURRENT_LANGUAGE':
      return { ...state, currentLanguage: action.payload };
    default:
      return state;
  }
}

export const NeuroCodeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(neuroCodeReducer, initialState);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      const newState = demoDataGenerator.generatePsychologicalState();
      dispatch({ type: 'UPDATE_PSYCHOLOGICAL_STATE', payload: newState });
      
      const newMetrics = demoDataGenerator.generateCodeMetrics();
      dispatch({ type: 'UPDATE_METRICS', payload: newMetrics });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Generate initial activity data
  useEffect(() => {
    const activityData = demoDataGenerator.generateActivityTimeline();
    dispatch({ type: 'SET_ACTIVITY_DATA', payload: activityData });
  }, []);

  const value = {
    ...state,
    dispatch,
    // Action creators
    setLoading: (loading) => dispatch({ type: 'SET_LOADING', payload: loading }),
    setError: (error) => dispatch({ type: 'SET_ERROR', payload: error }),
    updatePsychologicalState: (state) => dispatch({ type: 'UPDATE_PSYCHOLOGICAL_STATE', payload: state }),
    addRecommendation: (recommendation) => dispatch({ type: 'ADD_RECOMMENDATION', payload: recommendation }),
    removeRecommendation: (id) => dispatch({ type: 'REMOVE_RECOMMENDATION', payload: id }),
    updateMetrics: (metrics) => dispatch({ type: 'UPDATE_METRICS', payload: metrics }),
    updateSettings: (settings) => dispatch({ type: 'UPDATE_SETTINGS', payload: settings }),
    addChatMessage: (message) => dispatch({ type: 'ADD_CHAT_MESSAGE', payload: message }),
    uploadFile: (file) => dispatch({ type: 'UPLOAD_FILE', payload: file }),
    setCurrentLanguage: (language) => dispatch({ type: 'SET_CURRENT_LANGUAGE', payload: language })
  };

  return (
    <NeuroCodeContext.Provider value={value}>
      {children}
    </NeuroCodeContext.Provider>
  );
};

export const useNeuroCode = () => {
  const context = useContext(NeuroCodeContext);
  if (!context) {
    throw new Error('useNeuroCode must be used within a NeuroCodeProvider');
  }
  return context;
};