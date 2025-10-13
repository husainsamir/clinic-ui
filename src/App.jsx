import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './component/Dashboard';
 
import DoctorDashboard from './component/dashboard/DoctorDashboard';
 import PatientCard  from './component/PatientCard'
import DoctorLogin from './component/login/DoctorLogin';
import Register from './component/register/register';
import PatientRegister from './component/register/PatientRegister';
import PatientRegisterStep2 from './component/register/PatientRegisterStep2 ';
import PatientRegister3 from './component/register/PatientRegister3';
import PatientDashboard from './component/dashboard/PatientDashboard';

import SoloPractice from './component/register/soloPractice/SoloPractice';
import SoloDoctorDashboard from './component/dashboard/soloDoc/SoloDoctorDashboard';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DoctorLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/patientRegister" element={<PatientRegister />} />
         <Route path="/patientRegister2" element={<PatientRegisterStep2 />} />
          <Route path="/patientRegister3" element={<PatientRegister3 />} />
          <Route path="/patientDash" element={<PatientDashboard />} />
         <Route path="/docDash" element={<DoctorDashboard />} />

           {/* here start routing solo pratice doctor */}
           <Route path="/soloPractice" element={<SoloPractice />} />
           <Route path="/solodocDash" element={<SoloDoctorDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
