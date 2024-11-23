import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { motion } from 'framer-motion';
import cats from "./assets/cats.jpg";
import "./MainPage.css";

function MainPage() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Function to show an alert when the image is clicked
  const handlePictureClick = () => {
    alert("Dummy click on the button");
  };

  // Function to navigate to the next page
  const handleNextPage = () => {
    navigate('/running'); // Navigate to the RunningPage
  };

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.9 }} // Duration of the animation
    >
      <div className="content">
        <img src={cats} className="cats" alt="Cats" onClick={handlePictureClick} />
        <h1 className='text'>To my little Dummy</h1>
        <button className="button" onClick={handleNextPage}>Continue</button>
      </div>
    </motion.div>
  );
}

export default MainPage;