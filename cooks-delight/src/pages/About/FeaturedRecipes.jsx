import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { recipeService } from "../../services/recipeService";
import RecipeCard from "../../components/recipes/recipesCard/RecipeCard";
import "./featured.css";

export default function FeaturedRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const data = await recipeService.getAllRecipes(8, 0);
        const formatted = data.recipes.map(recipe => ({
          image: recipe.image,
          title: recipe.name,
          description: recipe.instructions?.[0]?.substring(0, 80) + "..." || "A delightful culinary experience...",
          time: `${recipe.prepTimeMinutes + recipe.cookTimeMinutes} MIN`,
          level: recipe.difficulty.toUpperCase(),
          serves: `${recipe.servings} SERVES`,
          id: recipe.id
        }));
        setRecipes(formatted);
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  const cardsToShow = isMobile ? 1 : 2;

  const next = () => {
    if (index < recipes.length - cardsToShow) {
      setDirection(1);
      setIndex(prev => prev + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setDirection(-1);
      setIndex(prev => prev - 1);
    }
  };

  if (loading) return <div className="featured-loading">Loading Our Best Recipes...</div>;

  return (
    <div className="featured">
      <div className="featured-inner">
        <div className="featured-header">
          <h2>SIMILAR RECIPES</h2>
          <div className="arrows">
            <button onClick={prev} disabled={index === 0} aria-label="Previous">
              <FiChevronLeft />
            </button>
            <button onClick={next} disabled={index >= recipes.length - cardsToShow} aria-label="Next">
              <FiChevronRight />
            </button>
          </div>
        </div>

        <div className="featured-cards-wrapper">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              className="featured-cards-grid"
              initial={{ opacity: 0, x: direction === 1 ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction === 1 ? -50 : 50 }}
              transition={{ duration: 0.3 }}
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                gap: '24px'
              }}
            >
              {recipes.slice(index, index + cardsToShow).map((recipe) => (
                <div key={recipe.id} className="recipe-card-box">
                  <RecipeCard recipe={recipe} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}