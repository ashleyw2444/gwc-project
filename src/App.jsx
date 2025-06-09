import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Healthcare from './pages/Healthcare';
import Finance from './pages/Finance';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/healthcare" element={<Healthcare />} />  
          <Route path="/finance" element={<Finance />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
