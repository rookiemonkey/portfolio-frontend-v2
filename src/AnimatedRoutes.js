import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Home from '~/pages/Home';
import Skills from '~/pages/Skills';
import Projects from '~/pages/Projects';

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/development-tools" element={<Skills />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;