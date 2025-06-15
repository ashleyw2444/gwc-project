import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Healthcare from './pages/Healthcare';
import Finance from './pages/Finance';
import Travel from './pages/Travel';
import Activity from './pages/Activity';
import MedicalReleaseForm from './pages/MedicalReleaseForm';
import FinancialReleaseForm from './pages/FinancialReleaseForm'; 



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/healthcare" element={<Healthcare />} />  
          <Route path="/finance" element={<Finance />} /> 
          <Route path="/travel" element={<Travel />} /> 
          <Route path="/activity" element={<Activity />} /> 
          <Route path="/medical-release" element={<MedicalReleaseForm />} />
          <Route path="/financial-release" element={<FinancialReleaseForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
