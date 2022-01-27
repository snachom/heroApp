import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { DashboardRoutes } from './DashboardRoutes';
import { LoginScreen } from '../components/login/LoginScreen';


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<LoginScreen />} />

        <Route path="/*" element={ <DashboardRoutes />} />

      </Routes>
    </BrowserRouter>
  )
};
