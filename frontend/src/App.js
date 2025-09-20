import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
import UIUXDesignSD from './components/SystemDesign/UIUXDesignSD';
import AIChat from './components/Chat/AIChat';
import DocumentationIndex from './components/Documentation/DocumentationIndex';
import SystemOverview from './components/Documentation/SystemOverview';
import { NeuroCodeProvider } from './context/NeuroCodeContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NeuroCodeProvider>
        <Router>
          <div className="App">
            <Navbar />
            <Hero />
            <main>
              <Routes>
                <Route path="/" element={<SystemDesign />} />
                <Route path="/documentation" element={<DocumentationIndex />} />
                <Route path="/system-overview" element={<SystemOverview />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/analysis" element={<Analysis />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/ui-ux-design" element={<UIUXDesignSD />} />
                <Route path="/system-design" element={<SystemDesign />} />
                {/* Placeholder routes for upcoming components */}
                <Route path="/installation-guide" element={<div style={{padding: '2rem', textAlign: 'center', fontSize: '1.5rem'}}>🚧 Installation Guide - Coming Soon</div>} />
                <Route path="/data-specifications" element={<div style={{padding: '2rem', textAlign: 'center', fontSize: '1.5rem'}}>🚧 Data Specifications - Coming Soon</div>} />
                <Route path="/architecture-components" element={<div style={{padding: '2rem', textAlign: 'center', fontSize: '1.5rem'}}>🚧 Architecture Components - Coming Soon</div>} />
                <Route path="/implementation-roadmap" element={<div style={{padding: '2rem', textAlign: 'center', fontSize: '1.5rem'}}>🚧 Implementation Roadmap - Coming Soon</div>} />
                <Route path="/system-flow" element={<div style={{padding: '2rem', textAlign: 'center', fontSize: '1.5rem'}}>🚧 System Flow Analysis - Coming Soon</div>} />
                <Route path="/research-references" element={<div style={{padding: '2rem', textAlign: 'center', fontSize: '1.5rem'}}>🚧 Research References - Coming Soon</div>} />
                <Route path="/tool-integration" element={<div style={{padding: '2rem', textAlign: 'center', fontSize: '1.5rem'}}>🚧 Tool Integration - Coming Soon</div>} />
                <Route path="/edge-cases" element={<div style={{padding: '2rem', textAlign: 'center', fontSize: '1.5rem'}}>🚧 Edge Cases Analysis - Coming Soon</div>} />
                <Route path="/security-privacy" element={<div style={{padding: '2rem', textAlign: 'center', fontSize: '1.5rem'}}>🚧 Security & Privacy - Coming Soon</div>} />
                <Route path="/testing-qa" element={<div style={{padding: '2rem', textAlign: 'center', fontSize: '1.5rem'}}>🚧 Testing & QA - Coming Soon</div>} />
                <Route path="/business-model" element={<div style={{padding: '2rem', textAlign: 'center', fontSize: '1.5rem'}}>🚧 Business Model - Coming Soon</div>} />
                <Route path="/deployment-operations" element={<div style={{padding: '2rem', textAlign: 'center', fontSize: '1.5rem'}}>🚧 Deployment & Operations - Coming Soon</div>} />
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