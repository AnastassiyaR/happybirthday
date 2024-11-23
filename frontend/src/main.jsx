import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainPage from './MainPage.jsx';
import RunningPage from './RunningPage.jsx';
import SuprisePage from './SuprisePage.jsx';
import WorkingPage from "./WorkingPage.jsx";
import SupportPage from "./SupportPage.jsx";
import WorryingPage from "./WorryingPage.jsx";
import ProudPage from "./ProudPage.jsx";
import RealPage from "./RealPage.jsx"
// Create the root element for rendering
const root = createRoot(document.getElementById('root'));

// Render the application
root.render(
  <StrictMode>
    <Router>
      <AnimatePresence>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/running" element={<RunningPage />} />
            <Route path="/suprise" element={<SuprisePage />} />
            <Route path="/working" element={<WorkingPage />} />
            <Route path="/worrying" element={<WorryingPage />} />
            <Route path="/proud" element={<ProudPage />} />
            <Route path="/real" element={<RealPage />} />
            <Route path="/support" element={<SupportPage />} />
        </Routes>
      </AnimatePresence>
    </Router>
  </StrictMode>
);