import { useState } from "react";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Navbar.css";
import logo from './Logo.svg'
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
          <span>Cooks </span>
          <span>Delight</span>
        </div>

      
        <ul className="nav-links">
          <li className="active">HOME</li>
          <li>RECIPES</li>
          <li>COOKING TIPS</li>
          <li>ABOUT US</li>
        </ul>

        
        <div className="nav-actions">
          <button className="icon-btn">
            <FiSearch />
          </button>

          <button
            className="menu-btn icon-btn"
            onClick={() => setMenuOpen(true)}
          >
            <FiMenu />
          </button>
        </div>
      </nav>


      {menuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="mobile-menu"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="menu-header">
            <div className="menu-logo">
                <img src={logo} alt="logo" />
                <span>Cooks Delight</span>
            </div>

            <button className="close-btn" onClick={() => setMenuOpen(false)}>
                <FiX />
            </button>
            </div>

            <ul className="mobile-links">
            <li>HOME</li>
            <li>RECIPES</li>
            <li>COOKING TIPS</li>
            <li>ABOUT US</li>
            </ul>

            <div className="menu-actions">
            <button className="search-icon">
                <FiSearch />
            </button>

            <button className="signup-btn">
                SIGN UP NOW!
            </button>
            </div>
             <div className="socials">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="icon facebook">
                    <FaFacebookF />
                </a>

                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="icon instagram">
                    <FaInstagram />
                </a>

                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="icon youtube">
                    <FaYoutube />
                </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}