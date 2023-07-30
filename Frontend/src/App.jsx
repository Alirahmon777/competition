import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import DoctorList from './pages/Info_Doctor/Info_Doctor';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/info_doctor" element={<DoctorList/>} />
      </Routes>
    </div>
  );
}
