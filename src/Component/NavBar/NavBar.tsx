import { useEffect, useState, useCallback, memo } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import './Navbar.css';
import mainLogo from '../../assets/logo-Transparent.png';
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../reusable component/button/Button.tsx";

const NavBar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/services', label: 'Services' },
    { path: '/aboutus', label: 'About Us' },
    { path: '/contactus', label: 'Contact Us' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : "navbar-transparent"} ${isOpen ? "menu-open" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo-container">
          <img src={mainLogo} alt="Logo" loading="eager" />
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-content">
          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <NavLink 
                  to={path} 
                  className={location.pathname === path ? 'active' : ''}
                  onClick={toggleMenu}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Quote Button - Always visible */}
          <div className="quote-button">
            <NavLink to="/quote">
              <Button
                title="GET A QUOTE"
                variant="outline"
                size="small"
                showArrow={true}
                className="nav-quote-button"
                onButtonClick={() => {}}
              />
            </NavLink>
          </div>

          {/* Hamburger Menu - Mobile only */}
          <button className="hamburger-icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="mobile-nav-overlay" onClick={toggleMenu}>
          <div className="mobile-nav-content" onClick={e => e.stopPropagation()}>
            <ul className="mobile-nav-links">
              {navLinks.map(({ path, label }) => (
                <li key={path}>
                  <NavLink 
                    to={path} 
                    className={location.pathname === path ? 'active' : ''}
                    onClick={toggleMenu}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
});

export default NavBar;
