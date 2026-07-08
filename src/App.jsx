import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import DotField from './DotField';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <div className="App">

      <div style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}>
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
        />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;