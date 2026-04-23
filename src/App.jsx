import Reatc from "react";
import "./App.css";
import Home from "./Components/Pages/Home";
import Dashboard from "./Components/Layout/Dashboard";
import Auth from "./Components/Pages/Auth";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Auth />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
     </Routes>
    </Router>
  );
}

export default App;
