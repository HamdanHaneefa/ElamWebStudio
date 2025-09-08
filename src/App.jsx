
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import HeroSection from './components/Hero';
import SplashCursor from './components/SplashCursor';

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
      {/* <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 overflow-x-hidden max-w-full"> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* Add more routes here as needed */}
        </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;
