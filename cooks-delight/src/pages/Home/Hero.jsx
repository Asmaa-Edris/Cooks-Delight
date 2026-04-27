import React from 'react';
import './Home.css';
import Button from '../../components/common/button/Button';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-card">
          <div className="hero-overlay">
            <div className="hero-content">
              <h1 className="hero-title">unleash culinary excellence</h1>
              <p className="hero-text">
                Explore a world of flavors, discover handcrafted recipes, 
                and let the aroma of our passion for cooking fill your kitchen
              </p>
                      <Button children="sign up now!"  btnstyle="sign"/>
                      <Button children="explore recipes" btnstyle="explore"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;