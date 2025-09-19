import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Layout/Hero';
import Dashboard from './components/Dashboard/Dashboard';
import Analysis from './components/Analysis/Analysis';
import Insights from './components/Insights/Insights';
import Settings from './components/Settings/Settings';
import SystemDesign from './components/SystemDesign/SystemDesign';
import AIChat from './components/Chat/AIChat';
import { NeuroCodeProvider } from './context/NeuroCodeContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NeuroCodeProvider>
        <Router basename={process.env.NODE_ENV === 'production' ? '/neurocode-ai' : ''}>
          <div className="App">
            <Navbar />
            <Hero />
            <main>
              <Routes>
                <Route path="/" element={<SystemDesign />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/analysis" element={<Analysis />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/system-design" element={<SystemDesign />} />
              </Routes>
            </main>
            <AIChat />
          </div>
        </Router>
      </NeuroCodeProvider>
    </ThemeProvider>
  );
}

export default App;