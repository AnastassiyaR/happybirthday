import React from "react";
import './WorkingPage.css'; // Импортируем стили
import { useNavigate } from "react-router-dom"; // Для навигации между страницами
import { motion } from 'framer-motion';
import ButtonSuprise from "./components/button_suprise.jsx";
import weImage from './assets/study.png'; // Импортируем изображение

function WorkingPage() {
    const pageVariants = {
        initial: { opacity: 0 },
        in: { opacity: 1 },
        out: { opacity: 0 },
    };

    const navigate = useNavigate();

    const new_page = () => {
        return navigate('/worrying'); // Переход на страницу WorkingPage
    };

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={{ duration: 0.9 }} // Длительность анимации
        >
            <div className="working">
                <div className="working_context">
                    <div className="picture">
                        {/* Используем <img> с импортированным изображением */}
                        <img src={weImage} alt="Surprise" className="working-image" />
                    </div>
                    <h1 className="working_text">
                        You worked a lot to achieve your own goals.<br />
                        Not gonna lie - sometimes I worried about you a lot.
                    </h1>
                </div>
                <div className="suprise_button_container">
                    <ButtonSuprise onClick={new_page} />
                </div>
            </div>
        </motion.div>
    );
};

export default WorkingPage;