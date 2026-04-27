import React from 'react';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faSignal, faBellConcierge, faWeightScale } from '@fortawesome/free-solid-svg-icons';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import pizzaImg from '../../assets/images/pizza.png';
import RecipeSlider from "../../components/recipes/recipeSlider/RecipeSlider";

const Blog = () => {
    return (
        <div className="blog-page">
            <header className="blog-header">
                <div className="container">
                    <div className="recipe-badge">RECIPE</div>
                    <h1 className="recipe-title">CLASSIC</h1>
                    <h1 className="recipe-title">MARGHERITA PIZZA</h1>
                    <p className="recipe-desc">
                        Welcome to Cooks Delight, where culinary dreams come alive!
                        Today, we embark on a journey of flavors with a dish that promises
                        to elevate your dining experience – our Classic Margherita Pizza.
                    </p>
                    <div className="recipe-meta">
                        <div className="meta-item">
                            <FontAwesomeIcon icon={faClock} /> 40 MINUTES
                        </div>
                        <div className="meta-item">
                            <FontAwesomeIcon icon={faWeightScale} /> EASY DIFFICULTY
                        </div>
                        <div className="meta-item">
                            <FontAwesomeIcon icon={faBellConcierge} /> 4 SERVES
                        </div>
                    </div>
                </div>
            </header>

            <section className="recipe-main-image container">
                <img src={pizzaImg} alt="Classic Margherita Pizza" className="hero-image" />
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
                            <p><strong>Step 1)</strong> Preheat the oven to 475°F (245°C)</p>
                            <p><strong>Step 2)</strong> Roll out the pizza dough and spread tomato sauce evenly</p>
                            <p><strong>Step 3)</strong> Top with slices of fresh mozzarella and fresh basil leaves</p>
                            <p><strong>Step 4)</strong> Drizzle with olive oil and season with salt and pepper</p>
                            <p><strong>Step 5)</strong> Bake in the preheated oven for 12-15 minutes or until the crust is golden brown</p>
                            <p><strong>Step 6)</strong> Slice and serve hot</p>
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
                                <li>Pizza dough</li>
                                <li>Tomato sauce</li>
                                <li>Fresh mozzarella cheese</li>
                                <li>Fresh basil leaves</li>
                                <li>Olive oil</li>
                                <li>Salt and pepper to taste</li>
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
