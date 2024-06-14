import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Accueil from './pages/Accueil';
import Contact from './pages/Contact';
import Apropos from './pages/Apropos';
import Home from './pages/Home';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <Router>
      <Navigation />
      <AnimatedRoutes />
    </Router>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/Accueil" element={<PageWrapper><Accueil /></PageWrapper>} />
        <Route path="/Contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/APropos" element={<PageWrapper><Apropos /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const PageWrapper = ({ children }) => {
  const location = useLocation();

  // Vérifie si l'URL actuelle est différente de '/Home' pour afficher la Navigation
  const showNavigation = location.pathname !== '/Home';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      {showNavigation && <Navigation />}
      {children}
    </motion.div>
  );
};

export default App;
