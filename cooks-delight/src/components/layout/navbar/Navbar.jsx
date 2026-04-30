import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom"; 
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Navbar.css";
import logo from './Logo.svg';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
<nav className={`navbar ${menuOpen ? "navbar-expanded" : ""} ${isAuthPage ? "auth-navbar" : ""}`}>      {!menuOpen ? (
        <>
          <Link to="/" className="banner__brand">
            <div className="banner__logo-icon">
              <img src={logo} alt="Logo" />
            </div>
            <div className="banner__brand-text">
              <span className="banner__brand-name">Cooks</span>
              <span className="banner__brand-sub">Delight</span>
            </div>
          </Link>

          {!isAuthPage && (
            <>
              <ul className="nav-links">
                <li><NavLink to="/" end>HOME</NavLink></li>
                <li><NavLink to="/recipes">RECIPES</NavLink></li>
                <li><NavLink to="/tips">COOKING TIPS</NavLink></li>
                <li><NavLink to="/about">ABOUT US</NavLink></li>
              </ul>

              <div className="nav-actions">
                <button className="search-btn"><FiSearch /></button>
                <button className="menu-btn" onClick={() => setMenuOpen(true)}>
                  <FiMenu />
                </button>
              </div>
            </>
          )}
        </>
      ) : (
        <div className="dropdown-container">
          <div className="menu-header">
            <div className="menu-logo">
              <img src={logo} alt="logo" />
              <div className="banner__brand-text">
                <span className="banner__brand-name dropdown-text-white">Cooks</span>
                <span className="banner__brand-sub dropdown-text-white">Delight</span>
              </div>
            </div>

            <button className="close-btn-styled" onClick={() => setMenuOpen(false)}>
              <FiX />
            </button>
          </div>

          <ul className="mobile-links">
            <li><NavLink to="/" onClick={() => setMenuOpen(false)}>HOME</NavLink></li>
            <li><NavLink to="/recipes" onClick={() => setMenuOpen(false)}>RECIPES</NavLink></li>
            <li><NavLink to="/tips" onClick={() => setMenuOpen(false)}>COOKING TIPS</NavLink></li>
            <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>ABOUT US</NavLink></li>
          </ul>

          <div className="menu-actions">
            <button className="search-icon-mobile"><FiSearch /></button>
            <button className="signup-btn">SIGN UP NOW!</button>
          </div>

          <div className="socials">
            <a href="#" className="icon"><FaFacebookF /></a>
            <a href="#" className="icon"><FaInstagram /></a>
            <a href="#" className="icon"><FaYoutube /></a>
          </div>
        </div>
      )}
    </nav>
  );
}