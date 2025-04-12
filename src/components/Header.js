import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import heroLogo from '../assets/sharp-travel.jpg';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src={heroLogo} alt="Sharp Travel Logo" className="logo-image" />
            <span className="logo-text">Sharp Travel</span>
          </Link>

          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <Link 
                  to="/" 
                  className={`nav-link ${isActive('/') ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/destinations" 
                  className={`nav-link ${isActive('/destinations') ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Destinations
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/tours" 
                  className={`nav-link ${isActive('/tours') ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Tours
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/packages" 
                  className={`nav-link ${isActive('/packages') ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Packages
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/air-ticketing" 
                  className={`nav-link ${isActive('/air-ticketing') ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Air Ticketing
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/services" 
                  className={`nav-link ${isActive('/services') ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/about" 
                  className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/contact" 
                  className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;