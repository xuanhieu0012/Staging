import React, { useRef, useCallback, Suspense, useState } from "react";
import Navbar from "../NavBar/NavBar.tsx";
import decorVideo from "../../assets/decorVideo.mp4";
import "./HomePage.css";
import { Button } from "../reusable component/button/Button.tsx";

// Lazy load components that are not immediately visible
const ContactForm = React.lazy(() => import("../reusable component/QuoteForm/QuoteForm.tsx"));
const ReasonsToStage = React.lazy(() => import("../listAdvantages/ReasonToList.tsx"));
const Footer = React.lazy(() => import("../footer/Footer.tsx"));
const PropertyShowcase = React.lazy(() => import("../reusable component/propertySection/PropertyShowcase.tsx"));

function HomePage() {
  const formRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  
  const scrollToForm = useCallback(() => {
    if(formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleVideoError = () => {
    console.error("Error loading video:", videoRef.current?.error);
    setVideoError(true);
  };

  return (
    <React.Fragment>
      <div className="hero-section">
        {!videoError && (
          <video 
            ref={videoRef}
            className="background-video"
            src={decorVideo} 
            autoPlay 
            loop 
            playsInline 
            muted 
            preload="auto"
            onError={handleVideoError}
          />
        )}
        <div className="overlay"></div>
        <Navbar scrollToForm={scrollToForm} />
        
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">Transforming Spaces,</span>
            <span className="title-line">Enhancing Homes</span>
          </h1>
          <p className="hero-subtitle">
            Experienced & Reliable Remodelers since 1968
          </p>
          <Button
            title="GET A QUOTE"
            onButtonClick={scrollToForm}
            variant="primary"
            size="large"
            className="hero-cta"
          />
        </div>
      </div>
      
      <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
        <PropertyShowcase scrollToForm={scrollToForm}/>
      </Suspense>
      
      <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
        <ReasonsToStage />
      </Suspense>
      
      <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
        <ContactForm ref={formRef}/>
      </Suspense>
      
      <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
        <Footer scrollToForm={scrollToForm}/>
      </Suspense>
    </React.Fragment>
  );
}

export default React.memo(HomePage);
