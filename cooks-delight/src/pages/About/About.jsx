import Button from "../../components/common/button/Button";


import RecipeCard from "../../components/recipes/recipesCard/RecipeCard";
import ChefBio from "./ChefBio";
import FeaturedRecipes from "./FeaturedRecipes";
import "./about.css";
import Image from "./imgs/Image.png";
import Image2 from "./imgs/Image1.png";
import Image3 from "./imgs/Image5.png";
import Image4 from "./imgs/Image2.png";
import Image5 from "./imgs/Image3.png";
import Image6 from "./imgs/Image4.png";
import Image7 from "./imgs/Image6.png";
import Image8 from "./imgs/Image7.png";

import { motion } from "framer-motion";

export default function About() {
  const recipes = [1, 2];

  return (
    <>

      <main className="about-page">

        
        <section className="about-hero container">

          <motion.div
            className="hero-left"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Welcome to my Culinary Haven!</h1>
          </motion.div>

          <motion.div
            className="hero-right"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p>
             Bonjour and welcome to the heart of my kitchen! I'm Isabella Russo, the culinary enthusiast behind this haven of flavors, Cooks Delight. Join me on a gastronomic journey where each dish carries a story, and every recipe is a crafted symphony of taste.
            </p>

            <Button btnstyle="primary">
              Explore Recipes
            </Button>
          </motion.div>

        </section>

       

        <section className="about-gallery container">
             <ChefBio />
          <div className="gallery-grid">
            <img src={Image} />
            <img src={Image2} />
            <img src={Image3} />
            <img src={Image4} />
            <img src={Image5} />
            <img src={Image6} />
            <img src={Image7} />
            <img src={Image8} />

          </div>
        </section>

        <FeaturedRecipes />

      </main>
      
      

    </>
  );
}