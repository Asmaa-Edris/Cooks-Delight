import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaYoutube, FaSearch } from "react-icons/fa";
import "./Navbar.css";
import logo from './Logo.svg';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [desktopSearchOpen, setDesktopSearchOpen] = useState(false);
  const [mobileSearchVisible, setMobileSearchVisible] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';
  const query = new URLSearchParams(location.search).get('q') || '';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchChange = (e) => {
    const val = e.target.value;
    navigate(val ? `/search?q=${encodeURIComponent(val)}` : `/search`, { replace: true });
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileSearchVisible(false);
  };

  return (
    <nav className={`navbar ${menuOpen ? "navbar-expanded" : ""} ${isAuthPage ? "auth-navbar" : ""} ${isScrolled ? "scrolled" : ""}`}>
      
      <div className="nav-top-row">
        <Link to="/" className="banner__brand" onClick={closeMenu}>
          <div className="banner__logo-icon">
            <img src={logo} alt="Logo" />
          </div>
          <div className="banner__brand-text">
            <span className={`banner__brand-name ${menuOpen ? "dropdown-text-white" : ""}`}>Cooks</span>
            <span className={`banner__brand-sub ${menuOpen ? "dropdown-text-white" : ""}`}>Delight</span>
          </div>
        </Link>

        {!isAuthPage && !menuOpen && (
          <ul className="nav-links">
            <li><NavLink to="/" end>HOME</NavLink></li>
            <li><NavLink to="/recipes">RECIPES</NavLink></li>
            <li><NavLink to="/tips">COOKING TIPS</NavLink></li>
            <li><NavLink to="/about">ABOUT US</NavLink></li>
          </ul>
        )}

        {menuOpen && (
          <button className="close-btn-styled" onClick={closeMenu}>
            <FiX />
          </button>
        )}

        {!isAuthPage && !menuOpen && (
          <div className="nav-actions">
            <div className={`search-container ${desktopSearchOpen ? "active" : ""}`}>
              <input
                type="text"
                placeholder="Search for recipes"
                value={query}
                onChange={handleSearchChange}
                className="search-input"
              />
              <div className="search-icon-wrapper" onClick={() => setDesktopSearchOpen(!desktopSearchOpen)}>
                <FaSearch />
              </div>
            </div>
            <button className="menu-btn" onClick={() => setMenuOpen(true)}>
              <FiMenu />
            </button>
          </div>
        )}
      </div>

      {!isAuthPage && menuOpen && (
        <div className="dropdown-container">
          <ul className="mobile-links">
            <li><NavLink to="/" onClick={closeMenu}>HOME</NavLink></li>
            <li><NavLink to="/recipes" onClick={closeMenu}>RECIPES</NavLink></li>
            <li><NavLink to="/tips" onClick={closeMenu}>COOKING TIPS</NavLink></li>
            <li><NavLink to="/about" onClick={closeMenu}>ABOUT US</NavLink></li>
          </ul>

          <div className="mobile-interaction-area">
            <div className="mobile-buttons-row">
              <button 
                className={`mobile-search-btn ${mobileSearchVisible ? "is-active" : ""}`}
                onClick={() => setMobileSearchVisible(!mobileSearchVisible)}
              >
                <FaSearch />
              </button>
              <button className="mobile-sub-button" onClick={() => { navigate('/register'); closeMenu(); }}>
                SUBSCRIBE
              </button>
            </div>

            {mobileSearchVisible && (
              <div className="mobile-search-input-field">
                <input 
                  type="text" 
                  autoFocus
                  placeholder="Search for recipes" 
                  value={query}
                  onChange={handleSearchChange}
                />
              </div>
            )}
          </div>

          <div className="socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="icon"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="icon"><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="icon"><FaYoutube /></a>
          </div>
        </div>
      )}
    </nav>
  );
}