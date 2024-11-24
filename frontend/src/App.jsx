// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainPage from './MainPage.jsx';
import RunningPage from './RunningPage.jsx';
import SuprisePage from './SuprisePage.jsx';
import WorkingPage from './WorkingPage.jsx';
import SupportPage from './SupportPage.jsx';
import WorryingPage from './WorryingPage.jsx';
import ProudPage from './ProudPage.jsx';
import RealPage from './RealPage.jsx';

const App = () => {
  return (
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
  );
};

export default App;