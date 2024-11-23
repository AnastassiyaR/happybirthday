import React from "react";
import './SuprisePage.css'; // Импортируем стили
import { useNavigate } from "react-router-dom"; // Для навигации между страницами
import { motion } from 'framer-motion';
import ButtonSuprise from "./components/button_suprise.jsx";
import weImage from './assets/we.png'; // Импортируем изображение

function SuprisePage() {
    const pageVariants = {
        initial: { opacity: 0 },
        in: { opacity: 1 },
        out: { opacity: 0 },
    };

    const navigate = useNavigate();

    const new_page = () => {
        return navigate('/working'); // Переход на страницу WorkingPage
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
                    <div className="picture">
                        {/* Используем <img> с импортированным изображением */}
                        <img src={weImage} alt="Surprise" className="suprise-image" />
                    </div>
                    <h1 className="suprise_text">Supriseeeeeeeeeeee</h1>
                </div>
                <div className="suprise_button_container">
                    <ButtonSuprise onClick={new_page} />
                </div>
            </div>
        </motion.div>
    );
};

export default SuprisePage;