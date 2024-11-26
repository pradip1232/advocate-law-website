// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarHeader from './components/NavbarHeader';
import HeroSection from './components/HeroSection';
import AboutUs from './Pages/AboutUs';
import Expertise from './Pages/Expertise';
import OurTeam from './Pages/OurTeam';
import NewsAndInsights from './Pages/NewsAndInsights';
import Careers from './Pages/Careers.js';
import ContactUs from './Pages/ContactUs';
import Footer from './components/Footer.js';
import Home from './Pages/Home.js';

function App() {
  return (
    <Router>
      <NavbarHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/news" element={<NewsAndInsights />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
