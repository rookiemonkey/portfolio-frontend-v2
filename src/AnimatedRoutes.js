import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Home from './pages/Home';
import DeveloperJourney from './pages/DeveloperJourney';
import DeveloperSkills from './pages/DeveloperSkills';
import Projects from './pages/Projects';

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/developer-journey" element={<DeveloperJourney />} />
        <Route path="/development-tools" element={<DeveloperSkills />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;