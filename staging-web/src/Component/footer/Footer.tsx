import React from "react";
import "./Footer.css";
import mainLogo from "../../assets/logo-Transparent.png";
import { Link } from "react-router-dom";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

interface FooterProps {
    scrollToForm?: () =>void
}
export default function Footer({scrollToForm}: FooterProps) {

  return (
    <footer className="footer-container">
      <div className="container-all-columns">
        <div className="footer-left">
          <img src={mainLogo} alt="buddy-logo" />

          {/* <p class="footer-company-name">© 2021 Buddy Store US</p> */}
        </div>
        <div className="footer-center">
          <h2>Support & More</h2>
          <div className="footer-center-content">
            <div className="footer-center-policy">
              <Link to={"/aboutus"}>About Us</Link>
              <Link to={"/services"}>Services</Link>
       
            </div>
            <div className="footer-center-product-link">
            <Link to={""}>Gallery</Link>
            <Link to={""}>Blog</Link>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <h2>Follow Us</h2>
          <div className="social-icon-container">
          <FaSquareFacebook
            onClick={(e) => {
              e.preventDefault();
              window.open("https://www.facebook.com/BuddyStore", "_blank");
            }}
          />

          <FaSquareInstagram
            onClick={(e) => {
              e.preventDefault();
              window.open("https://www.instagram.com/buddystoreus/", "_blank");
            }}
          />
          </div>
          <button onClick={scrollToForm}>Quick Service Quote</button>
        </div>
      </div>
      <div className="bottom-footer">
        <p>© Serenity Staging</p>
      </div>
    </footer>
  );
}


