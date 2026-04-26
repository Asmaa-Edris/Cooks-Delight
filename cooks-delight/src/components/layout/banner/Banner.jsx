import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <section className="news-banner">
      <div className="container">
        <div className="news-card">
          <div className="ellipse-1"></div>
          <div className="ellipse-2"></div>
          <div className="news-content">
            <p className="news-tag">subscribe</p>
            <p className="news-title">join the fun <br /> subscribe now!</p>
            <p className="news-text">
              subscribe to our newsletter for a weekly serving of recipes, 
              cooking tips, and exclusive insights straight to your inbox.
            </p>
            <div className="news-form">
              <input type="email" placeholder="Email Address" className="news-input" />
              <button className="news-btn">subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;