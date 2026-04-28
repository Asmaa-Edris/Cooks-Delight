import { useState } from "react";
import RecipeCard from "../../components/recipes/recipesCard/RecipeCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import "./featured.css";

export default function FeaturedRecipes({
  title = "FEATURED RECIPES",
  cardsPerView = 2,
}) {
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
    {
      image: "/g1.jpg",
      title: "Chicken Special",
      description: "Tasty and juicy",
      time: "50 MIN",
      level: "MEDIUM",
      serves: "4 SERVES",
    },
    {
      image: "/g2.jpg",
      title: "Sweet Dessert",
      description: "Delicious dessert",
      time: "20 MIN",
      level: "EASY",
      serves: "2 SERVES",
    },
    {
      image: "/g3.jpg",
      title: "Italian Pasta",
      description: "Classic taste",
      time: "30 MIN",
      level: "EASY",
      serves: "3 SERVES",
    },
    {
      image: "/g2.jpg",
      title: "Sweet Dessert",
      description: "Delicious dessert",
      time: "20 MIN",
      level: "EASY",
      serves: "2 SERVES",
    },
    {
      image: "/g3.jpg",
      title: "Italian Pasta",
      description: "Classic taste",
      time: "30 MIN",
      level: "EASY",
      serves: "3 SERVES",
    },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    if (index < recipes.length - cardsPerView) {
      setDirection(1);
      setIndex(index + cardsPerView);
    }
  };

  const prev = () => {
    if (index > 0) {
      setDirection(-1);
      setIndex(index - cardsPerView);
    }
  };

  return (
    <section className="featured container">

      
      <div className="featured-header">
        <h2>{title}</h2>

        <div className="arrows">
          <button onClick={prev} disabled={index === 0}>
            <FiChevronLeft />
          </button>

          <button
            onClick={next}
            disabled={index >= recipes.length - cardsPerView}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>

      
      <div className="featured-cards-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className={`featured-cards ${
              cardsPerView === 2 ? "two" : "six"
            }`}
            initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }}
            transition={{ duration: 0.4 }}
          >
            {recipes
              .slice(index, index + cardsPerView)
              .map((recipe, i) => (
                <RecipeCard key={i} recipe={recipe} />
              ))}
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  );
}