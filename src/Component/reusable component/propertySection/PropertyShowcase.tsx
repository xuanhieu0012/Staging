import React, { useState, useEffect } from 'react';
import './PropertyShowcase.css';
import interior from '../../../assets/interior.jpg'
import homeDecor from '../../../assets/home-decor.jpg'
import roomDecor from '../../../assets/room-decorate.jpg'
import vacant from '../../../assets/vacant.jpg'


interface PropertyShowcase{
    scrollToForm: () => void
}
const PropertyShowcase = ({scrollToForm}: PropertyShowcase) => {
  const images = [
    interior,  // Replace with your image URLs
    homeDecor,
    roomDecor,
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="showcase-wrapper">
      {/* Large background image */}
      <div className="large-image-container">
        <img
          src={vacant}// Replace with your large image
          alt="Background"
          className="large-image"
        />
      </div>

      {/* Floating animated image container */}
      <div className="floating-image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Showcase ${index + 1}`}
            className={`floating-image ${
              index === currentImageIndex ? 'visible' : ''
            }`}
          />
        ))}
      </div>

      {/* Content Section */}
      <div className="content-container">
        <h2>"Every property deserves to look like a Model."</h2>
        <p>- Jana Uselton, Owner & Founder</p>
        <p>
          Through our Concierge offering, our team can quickly assess a property
          and identify the potential to increase value and build equity for
          maximum return. Whether this is through updates in flooring, paint,
          lighting, fixtures, etc., our goal is to position properties to
          appraise for higher and sell for more. Our team of professionals is
          available to manage and oversee it all, down to the professional
          photography and landscape refresh.
        </p>
        <button onClick={scrollToForm} className="quote-button">QUICK SERVICE QUOTE</button>
      </div>
    </div>
  );
};

export default PropertyShowcase;