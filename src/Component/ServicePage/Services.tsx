import React, { useRef } from "react";
import Navbar from "../NavBar/NavBar";
import ContactForm from "../reusable component/QuoteForm/QuoteForm";
import sofaLivingRoom from '../../assets/sofa-living.jpg';
import './Services.css'
import StagingService from "./ServiceOption";
import Footer from "../footer/Footer";
function Services() {
  const formRef = useRef<HTMLDivElement>(null);
  const scrollToForm =  () => {
    if(formRef.current){
    formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="service-container">
           <Navbar />
           <div className="service-banner">
              <img src={sofaLivingRoom} />
           </div>
      <StagingService scrollToForm={scrollToForm} />
      <ContactForm ref={formRef}/>
      <Footer />
    </div>
  );
}

export default Services;