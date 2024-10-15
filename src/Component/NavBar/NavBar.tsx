import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import mainLogo from '../../assets/logo-Transparent.png';
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger and Close Icons

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  // Handle scroll event to change navbar background
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled || isMenuOpen ? "navbar-scrolled" : "navbar-transparent"}`}>
      <div id="navBar-menu">
        <div className="logo-container">
          <img src={mainLogo} alt="Logo" />
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>
      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/gallery" onClick={toggleMenu}>Gallery</Link></li>
        <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
        <li><Link to="/aboutus" onClick={toggleMenu}>About Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
