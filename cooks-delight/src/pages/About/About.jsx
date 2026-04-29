import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import ChefBio from "./ChefBio";
import FeaturedRecipes from "./FeaturedRecipes";
import { galleryImages } from "../../data/aboutData";
import Button from "../../components/common/button/Button";

export default function About() {
  const navigate = useNavigate();

  return (
    <main className="about-page">
      <section className="about-hero container">
        <div className="hero-left">
          <h1>Welcome to<br /> my Culinary Haven!</h1>
        </div>
        <div className="hero-right">
          <p>
            Bonjour and welcome to the heart of my kitchen! I'm Isabella Russo, 
            the culinary enthusiast behind this haven of flavors, Cooks Delight. 
            Join me on a gastronomic journey where each dish carries a story, 
            and every recipe is a crafted symphony of taste.
          </p>
          <Button 
            btnstyle="primary" 
            onClick={() => navigate('/recipes')}
          >
            Explore Recipes
          </Button>
        </div>
      </section>

      <section className="about-main-container container">
        <div className="content-card">
          <ChefBio />
          <div className="gallery-grid">
            {galleryImages.map(img => (
              <img key={img.id} src={img.src} alt="Gallery" />
            ))}
          </div>
        </div>
      </section>

      <section className="featured-recipes container">
        <FeaturedRecipes />
      </section>
    </main>
  );
}