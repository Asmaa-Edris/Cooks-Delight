import React from 'react';
import './Blog.css';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faBellConcierge, faWeightScale } from '@fortawesome/free-solid-svg-icons';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import pizzaImg from '../../assets/images/pizza.png';
import RecipeSlider from "../../components/recipes/recipeSlider/RecipeSlider";

const Blog = () => {
    const location = useLocation();
    const recipeData = location.state?.recipe;

    // Default data if no recipe is passed (Margherita Pizza)
    const displayData = recipeData ? {
        title: recipeData.title,
        image: recipeData.image,
        description: recipeData.description,
        time: recipeData.time,
        level: recipeData.level,
        serves: recipeData.serves,
        instructions: recipeData.fullInstructions || [],
        ingredients: recipeData.fullIngredients || []
    } : {
        title: "CLASSIC MARGHERITA PIZZA",
        image: pizzaImg,
        description: "Welcome to Cooks Delight, where culinary dreams come alive! Today, we embark on a journey of flavors with a dish that promises to elevate your dining experience – our Classic Margherita Pizza.",
        time: "40 MINUTES",
        level: "EASY DIFFICULTY",
        serves: "4 SERVES",
        instructions: [
            "Preheat the oven to 475°F (245°C)",
            "Roll out the pizza dough and spread tomato sauce evenly",
            "Top with slices of fresh mozzarella and fresh basil leaves",
            "Drizzle with olive oil and season with salt and pepper",
            "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown",
            "Slice and serve hot"
        ],
        ingredients: [
            "Pizza dough",
            "Tomato sauce",
            "Fresh mozzarella cheese",
            "Fresh basil leaves",
            "Olive oil",
            "Salt and pepper to taste"
        ]
    };

    return (
        <div className="blog-page">
            <header className="blog-header">
                <div className="container">
                    <div className="recipe-badge">RECIPE</div>
                    <h1 className="recipe-title">{displayData.title}</h1>
                    <p className="recipe-desc">
                        {displayData.description}
                    </p>
                    <div className="recipe-meta">
                        <div className="meta-item">
                            <FontAwesomeIcon icon={faClock} /> {displayData.time}
                        </div>
                        <div className="meta-item">
                            <FontAwesomeIcon icon={faWeightScale} /> {displayData.level}
                        </div>
                        <div className="meta-item">
                            <FontAwesomeIcon icon={faBellConcierge} /> {displayData.serves}
                        </div>
                    </div>
                </div>
            </header>

            <section className="recipe-main-image container">
                <img src={displayData.image} alt={displayData.title} className="hero-image" />
                <div className="image-meta">
                    <div className="rating">
                        <span className="stars">★★★★☆</span>
                        <span className="review-count">98 REVIEWS</span>
                    </div>
                    <div className="categories">
                        <span className="category-tag pizza">PIZZA</span>
                        <span className="category-tag italian">ITALIAN</span>
                    </div>
                </div>
            </section>

            <section className="recipe-content container">
                <div className="content-grid">
                    <div className="instructions-section">
                        <h2>INSTRUCTIONS</h2>
                        <div className="steps-list">
                            {displayData.instructions.map((step, index) => (
                                <p key={index}><strong>Step {index + 1})</strong> {step}</p>
                            ))}
                        </div>
                        <div className="share-pill">
                            <span>SHARE</span>
                            <div className="share-icons">
                                <FaFacebook />
                                <FaInstagram />
                                <FaYoutube />
                            </div>
                        </div>
                    </div>

                    <div className="sidebar-section">
                        <div className="ingredients-card">
                            <h3>INGREDIENTS</h3>
                            <ul>
                                {displayData.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="nutrition-card">
                            <h3>NUTRITIONAL VALUE</h3>
                            <p>Per serving:</p>
                            <p><strong>Calories:</strong> ~300</p>
                        </div>
                        <p className="note">NOTE: NUTRITIONAL VALUES ARE APPROXIMATE AND MAY VARY BASED ON SPECIFIC INGREDIENTS AND PORTION SIZES.</p>
                    </div>
                </div>
            </section>

            <section className="similar-recipes container">
                <RecipeSlider title="Similar RECIPES" />
            </section>

            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h3>JOIN THE FUN</h3>
                        <h2>CREATE ACCOUNT NOW!</h2>
                        <p>Unlock exclusive recipes, tips, and a personalized cooking experience.</p>
                        <button className="cta-btn">JOIN US</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;

