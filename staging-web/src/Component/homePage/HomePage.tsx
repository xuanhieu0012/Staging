import React, { useRef } from "react";
import Navbar from "../NavBar/NavBar.tsx";
import decorVideo from "../../assets/decorVideo.mp4";
import "./HomePage.css";
import { Button } from "../reusable component/button/Button.tsx";

import ContactForm from "../reusable component/QuoteForm/QuoteForm.tsx";
import ReasonsToStage from "../listAdvantages/ReasonToList.tsx";
import Footer from "../footer/Footer.tsx";
import PropertyShowcase from "../reusable component/propertySection/PropertyShowcase.tsx";

function HomePage() {
  const formRef = useRef<HTMLDivElement>(null);
  const scrollToForm =  () => {
    if(formRef.current){
    formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <React.Fragment>
    <div className="container">
      <video src={decorVideo} autoPlay loop playsInline muted />
      <Navbar />
      <div className="content">
        <div className="homepage-header">
          <h1>Home Staging & Styling</h1>
          <h2>Do you want to stage your home with ease? </h2>
          <h2> Give us a call, we will make it easy</h2>
        </div>
        <Button
          title="Get A Quote"
          onButtonClick={scrollToForm}
        />
      </div>
    </div>
    <PropertyShowcase  scrollToForm={scrollToForm}/>
    <ReasonsToStage />
    <ContactForm ref={formRef}/>
    <Footer scrollToForm={scrollToForm}/>
       </React.Fragment>
  );
}

export default HomePage;
