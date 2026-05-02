import FeaturedRecipes from "../About/FeaturedRecipes";
import "./cookingTips.css";
import ToolsSection from "./ToolsSection";
import { motion } from "framer-motion";
import NourishingSection from './NourishingSection';
import RecipeSlider from "../../components/recipes/recipeSlider/RecipeSlider";

export default function CookingTips() {

  return (
    <>


      <main className="tips-page">

        <section className="tips-hero container">
          <motion.div
            className="hero-left"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1><span>Our Essential </span>
              <span>CookingTips</span></h1>
          </motion.div>

          <motion.div
            className="hero-right"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="hero-right">
              Welcome to Cooks Delight's treasure trove of cooking wisdom! Whether you're a seasoned chef or just starting your culinary journey, our cooking tips are designed to elevate your skills, enhance your kitchen experience, and bring joy to your cooking adventures.
            </p>
          </motion.div>
        </section>
        <ToolsSection />
        <div style={{ marginTop: "15px", width: "100%", padding: "12px 32px " }}>

          <RecipeSlider title="Newest Recipes" cardsPerView={2} dataSource="api" />
        </div>
        <FeaturedRecipes title="Mastering the Basics" cardsPerView={6} dataSource="basics" buttonText="Read More" noBorder />
        <NourishingSection />

        <FeaturedRecipes title="Tips & Tricks" cardsPerView={6} dataSource="tips" buttonText="Read More" noBorder />

      </main>
    </>
  );
}