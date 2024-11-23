import React from "react";
import './SupportPage.css';
import { useNavigate } from "react-router-dom"; // Импортируем useNavigate для навигации
import { motion } from 'framer-motion';
import ButtonSuprise from "./components/button_suprise.jsx";
import studyImage from './assets/help.png'; // Импортируем изображение

function SupportPage() {
    const pageVariants = {
        initial: { opacity: 0 },
        in: { opacity: 1 },
        out: { opacity: 0 },
    };

    const navigate = useNavigate();

    const new_page = () => {
        navigate('/real'); // Переход на страницу RunningPage
    };

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={{ duration: 0.9 }} // Длительность анимации
        >
            <div className="suprise">
                <div className="suprise_context">
                    <div className="picture_working">
                        {/* Используем <img> с импортированным изображением */}
                        <img src={studyImage} alt="Working" className="working-image" />
                    </div>
                    <h1 className="suprise_text">
                    You are so careful, even if smth happened we always together, solve the problem as Team-Moon<br />
                    </h1>
                </div>
                <div className="suprise_button_container">
                    <ButtonSuprise onClick={new_page} />
                </div>
            </div>
        </motion.div>
    );
}

export default SupportPage;