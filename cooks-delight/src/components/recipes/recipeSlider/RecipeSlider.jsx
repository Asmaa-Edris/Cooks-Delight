import { useState } from "react";
import RecipeCard from "../recipesCard/RecipeCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import "./RecipeSlider.css";

export default function RecipeSlider({ title = "FEATURED RECIPES" }) {
  const recipes = [
    {
      image: "/g1.jpg",
      title: "Savory Herb-Infused Chicken",
      description: "Indulge in the rich and savory flavors...",
      time: "40 MIN",
      level: "EASY PREP",
      serves: "3 SERVES",
    },
    {
      image: "/g2.jpg",
      title: "Decadent Chocolate Mousse",
      description: "Dive into the velvety indulgence...",
      time: "30 MIN",
      level: "MEDIUM PREP",
      serves: "4 SERVES",
    },
    {
      image: "/g3.jpg",
      title: "Pasta Delight",
      description: "Classic Italian pasta",
      time: "25 MIN",
      level: "EASY",
      serves: "2 SERVES",
    },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    if (index < recipes.length - 2) {
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
    <section className="recipe-slider container">
      <div className="recipe-slider-header">
        <h2>{title}</h2>

        <div className="arrows">
          <button onClick={prev} disabled={index === 0}>
            <FiChevronLeft />
          </button>

          <button onClick={next} disabled={index >= recipes.length - 2}>
            <FiChevronRight />
          </button>
        </div>
      </div>

      {/*  Animation  */}
      <div className="recipe-slider-cards-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="recipe-slider-cards"
            initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }}
            transition={{ duration: 0.4 }}
          >
            {recipes.slice(index, index + 2).map((recipe, i) => (
              <RecipeCard key={i} recipe={recipe} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
