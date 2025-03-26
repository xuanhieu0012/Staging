import { useEffect, useState, useCallback, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import './Navbar.css';
import mainLogo from '../../assets/logo-Transparent.png';
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger and Close Icons
import { Button } from "../reusable component/button/Button.tsx";

interface NavbarProps {
  scrollToForm?: () => void;
}

const Navbar = memo(function Navbar({scrollToForm}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const location = useLocation();

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 0);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Toggle mobile menu open/close
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

 
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/services', label: 'Services' },
    { path: '/aboutus', label: 'About Us' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : "navbar-transparent"}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo-container">
          <img src={mainLogo} alt="Logo" loading="eager" />
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-content">
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <Link 
                  to={path} 
                  className={location.pathname === path ? 'active' : ''}
                  onClick={toggleMenu}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Quote Button - Always visible */}
          <div className="quote-button">
            <Button
              title="GET A QUOTE"
              onButtonClick={() => scrollToForm && scrollToForm()}
              variant="outline"
              size="small"
              showArrow={true}
              className="nav-quote-button"
            />
          </div>

          {/* Hamburger Menu - Mobile only */}
          <button className="hamburger-icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="mobile-nav-overlay" onClick={toggleMenu}>
          <div className="mobile-nav-content" onClick={e => e.stopPropagation()}>
            <ul className="mobile-nav-links">
              {navLinks.map(({ path, label }) => (
                <li key={path}>
                  <Link 
                    to={path} 
                    className={location.pathname === path ? 'active' : ''}
                    onClick={toggleMenu}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
});

export default Navbar;
