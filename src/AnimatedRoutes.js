import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Home from './pages/Home';
import DeveloperJourney from './pages/DeveloperJourney';
import Projects from './pages/Projects';

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/developer-journey" element={<DeveloperJourney />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;