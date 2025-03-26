import Navbar from "../NavBar/NavBar";
import aboutUsHeaderImg from "../../assets/about-us.jpg";
import './AboutUs.css'
import Footer from "../footer/Footer";
function AboutUs() {
  return (
    <div className="about-us-container">
        <Navbar />
        <div className="about-us-image-container">
          <img src={aboutUsHeaderImg}/>
        </div>
      <h1>About Us</h1>
      <p>Learn more about us here.</p>
    <Footer/>
    </div>
  );
}

export default AboutUs;