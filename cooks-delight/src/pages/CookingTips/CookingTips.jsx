import Navbar from "../../components/layout/navbar/Navbar";
import FeaturedRecipes from "../about/FeaturedRecipes";
import "./cookingTips.css";
import ToolsSection from "./ToolsSection";
import { motion } from "framer-motion";

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
            <h1>Our Essential Cooking Tips</h1>
          </motion.div>

          <motion.div
            className="hero-right"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p>
             Welcome to Cooks Delight's treasure trove of cooking wisdom! Whether you're a seasoned chef or just starting your culinary journey, our cooking tips are designed to elevate your skills, enhance your kitchen experience, and bring joy to your cooking adventures.
            </p>
          </motion.div>
        </section>


        <ToolsSection/>
        
        <FeaturedRecipes title="Newest recipes " cardsPerView={2} />

        
        <FeaturedRecipes title="Mastering the Basics" cardsPerView={6} />
        <FeaturedRecipes title="TIps & tricks" cardsPerView={6} />

      </main>
    </>
  );
}