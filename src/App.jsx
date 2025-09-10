
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import HeroSection from './components/Hero';
import SplashCursor from './components/SplashCursor';
import { initSmoothScrolling } from './utils/smoothScroll';
import usePageTitle from './hooks/usePageTitle';
import { useAnalytics, useScrollTracking } from './hooks/useAnalytics';
import ChatSpeedDial from './components/ChatSpeedDial';

function AppContent() {
  // Initialize page title management
  usePageTitle();
  
  // Initialize analytics tracking
  useAnalytics();
  useScrollTracking();

  useEffect(() => {
    // Initialize smooth scrolling
    initSmoothScrolling();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 overflow-x-hidden max-w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* Add more routes here as needed */}
      </Routes>
  <ChatSpeedDial />
    </div>
  );
}

function App() {
  return (
    <Router>
      <SplashCursor 
        TRANSPARENT={true}
        DENSITY_DISSIPATION={2.5}
        VELOCITY_DISSIPATION={1.5}
        PRESSURE={0.15}
        CURL={20}
        SPLAT_RADIUS={0.15}
        SPLAT_FORCE={4000}
        BACK_COLOR={{ r: 0.1, g: 0.1, b: 0.2 }}
      />
      <AppContent />
    </Router>
  );
}

export default App;
