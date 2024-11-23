import React from "react";
import './WorryingPage.css'; // Импортируем стили
import { useNavigate } from "react-router-dom"; // Для навигации между страницами
import { motion } from 'framer-motion';
import ButtonSuprise from "./components/button_suprise.jsx";
import weImage from './assets/worry.png'; // Импортируем изображение

function WoryingPage() {
    const pageVariants = {
        initial: { opacity: 0 },
        in: { opacity: 1 },
        out: { opacity: 0 },
    };

    const navigate = useNavigate();

    const new_page = () => {
        return navigate('/proud'); // Переход на страницу WorkingPage
    };

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={{ duration: 0.9 }} // Длительность анимации
        >
            <div className="worrying">
                <div className="worrying_context">
                    <div className="picture">
                        {/* Используем <img> с импортированным изображением */}
                        <img src={weImage} alt="Surprise" className="suprise-image" />
                    </div>
                    <h1 className="worrying_text">
                        Not gonna lie<br />sometimes<br />I worried <br />about you<br />a lot.
                    </h1>
                </div>
                <div className="suprise_button_container">
                    <ButtonSuprise onClick={new_page} />
                </div>
            </div>
        </motion.div>
    );
};

export default WoryingPage;