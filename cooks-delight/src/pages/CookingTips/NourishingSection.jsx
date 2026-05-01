import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Button from "../../components/common/button/Button";
import "./nourishing.css";

export default function NourishingSection() {
    const data = [
        { image: "/g1.jpg", title: "Gluten-Free Alternatives", desc: "Explore gluten-free options..." },
        { image: "/g2.jpg", title: "Plant-Based Cooking", desc: "Delight in plant-based meals..." },
        { image: "/g3.jpg", title: "Allergy-Friendly Substitutions", desc: "Discover allergy-safe ideas..." },
        { image: "/g1.jpg", title: "Healthy Meals", desc: "Eat better every day..." },
        { image: "/g2.jpg", title: "Quick Recipes", desc: "Fast & easy meals..." },
    ];

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const cardsPerView = 3;

    const next = () => {
        if (index < data.length - cardsPerView) {
            setDirection(1);
            setIndex(index + 1);
        }
    };

    const prev = () => {
        if (index > 0) {
            setDirection(-1);
            setIndex(index - 1);
        }
    };

    return (
        <section className="nourishing container">

            <div className="nourishing-header">
                <h2>NOURISHING EVERY PALATE</h2>

                <div className="arrows">
                    <button onClick={prev} disabled={index === 0}>
                        <FiChevronLeft />
                    </button>
                    <button onClick={next} disabled={index >= data.length - cardsPerView}>
                        <FiChevronRight />
                    </button>
                </div>
            </div>

            <div className="nourishing-wrapper">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        className="nourishing-grid"
                        initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }}
                        transition={{ duration: 0.4 }}
                    >
                        {data.slice(index, index + cardsPerView).map((item, i) => (
                            <div className="n-card" key={i}>
                                <img src={item.image} />

                                <div className="overlay"></div>
                                <div className="n-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                    <div className="card-footer">
                                        <span className="card-meta">15 MIN • 01 JUN 23</span>
                                        <Button btnstyle="white" className="recipe-btn"> READ MORE </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

        </section>
    );
}