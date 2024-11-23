import React from "react";
import './RealPage.css'; // Импортируем стили
import { useNavigate } from "react-router-dom"; // Для навигации между страницами
import { motion } from 'framer-motion';
import ButtonSuprise from "./components/button_suprise.jsx";
import weImage from './assets/dummy.png'; // Импортируем изображение

function RealPage() {
    const pageVariants = {
        initial: { opacity: 0 },
        in: { opacity: 1 },
        out: { opacity: 0 },
    };

    const navigate = useNavigate();

    const new_page = () => {
        return navigate('/proud'); // Переход на страницу ProudPage
    };

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={{ duration: 0.9 }} // Длительность анимации
        >
            <div className="real" style={{ backgroundImage: `url(${weImage})` }}>
                <div className="real_context">
                    <h1 className="real_text">
                        Please stay that real Himanshu I know
                    </h1>
                </div>
            </div>
        </motion.div>
    );
};

export default RealPage;