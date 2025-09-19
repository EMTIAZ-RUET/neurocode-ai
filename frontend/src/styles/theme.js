const theme = {
  colors: {
    primary: '#667eea',
    primaryDark: '#5a6fd8',
    secondary: '#764ba2',
    accent: '#f093fb',
    success: '#4ade80',
    warning: '#fbbf24',
    error: '#ef4444',
    danger: '#ef4444',
    info: '#3b82f6',
    
    // Backgrounds
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    cardBackground: 'rgba(255, 255, 255, 0.95)',
    darkCardBackground: 'rgba(30, 41, 59, 0.95)',
    
    // Text
    text: '#1e293b',
    textSecondary: '#64748b',
    textLight: '#64748b',
    textDark: '#0f172a',
    textWhite: '#ffffff',
    
    // Borders
    border: '#e2e8f0',
    borderLight: '#f1f5f9',
    
    // States
    stress: '#ef4444',
    flow: '#3b82f6',
    cognitive: '#8b5cf6',
    burnout: '#f59e0b',
    
    // Gradients
    gradients: {
      primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      success: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
      warning: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
      error: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
      info: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'
    }
  },
  
  fonts: {
    primary: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    mono: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace'
  },
  
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem'
  },
  
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem'
  },
  
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px'
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },
  
  transitions: {
    fast: '0.15s ease-in-out',
    normal: '0.3s ease-in-out',
    slow: '0.5s ease-in-out'
  }
};

export default theme;