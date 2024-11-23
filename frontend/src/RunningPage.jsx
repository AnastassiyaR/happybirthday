import React from 'react';
import { motion } from 'framer-motion';
import './RunningPage.css';
import { useNavigate } from "react-router-dom";
import Square_running from "./components/Square_running.jsx";
import ButtonRunning from "./components/Button_running.jsx";
function RunningPage() {
  const navigate = useNavigate();
  const NextPage = () => {
    navigate('/suprise'); // Navigate to the main page
  };
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    out: { opacity: 0 },
  };
  return (
    <div className="running-page">
      <motion.div
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="out"
        transition={{ duration: 0.5 }}
        className="running-content"
      >
        <h1>You hear someone is running to you</h1>
        <p>Who is that?</p>
        <Square_running />
          <ButtonRunning onClick={NextPage} /> {/* Pass the NextPage function */}
      </motion.div>
    </div>
  );
}
export default RunningPage;