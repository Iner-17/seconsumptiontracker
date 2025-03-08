import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HeroPage from "./components/HeroPage";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/RegisterPage";

function App() {
  return (
    <Router>
      <>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<HeroPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
