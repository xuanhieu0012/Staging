import { useState } from "react";
import Navbar from "../NavBar/NavBar";
import Footer from "../footer/Footer";
import ParallaxSection from "../reusable component/parallax section/ParrlaxSection";
import roomDecorate from '../../assets/room-decorate.jpg'
import './Gallery.css';
import Cards from "../reusable component/Card/Cards";
import ImageGallery from "../reusable component/Image Gallery/ImageGallery";

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCardClick = (key: string) => {
    setSelectedCategory(key);
  };

  return (
    <div className="gallery-container">
      <Navbar />
      <div className="gallery-front-page">
        <ParallaxSection imageSrc={roomDecorate} title="Gallery"/>
      </div>
    
      <div className="gallery-content-container">
        <h1>Featured Project</h1>
        {!selectedCategory ? (
        <Cards onCardClick={handleCardClick} />
      ) : (
        <ImageGallery category={selectedCategory} />
      )}
      </div>
 


      <Footer />
    </div>
  );
}

export default Gallery;