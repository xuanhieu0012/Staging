
import { Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './Component/homePage/HomePage.tsx';
import Services from './Component/ServicePage/Services.tsx';
import AboutUs from './Component/Aboutus/AboutUs.tsx';
import ContactUs from './Component/ContactUs.tsx';
import Gallery from './Component/Gallery/Gallery.tsx';

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery />} />

      </Routes>

  );
}

export default App
