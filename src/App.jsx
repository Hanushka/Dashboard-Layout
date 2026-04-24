import React from "react";
import "./App.css";
import Home from "./Components/Pages/Home";
import Dashboard from "./Components/Layout/Dashboard";
import SignIn from "./Components/Auth/SignIn";
import SignUp from "./Components/Auth/SignUp";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import ResetPassword from "./Components/Auth/ResetPassword";
import OTP from "./Components/Auth/OTP";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inventory" element={<Dashboard />} />
        <Route path="/add-product" element={<Dashboard />} />
        <Route path="/reports" element={<Dashboard />} />
        <Route path="/404" element={<Dashboard />} />
        <Route path="/docs" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/otp" element={<OTP />} />
      </Routes>
    </Router>
  );
}

export default App;
