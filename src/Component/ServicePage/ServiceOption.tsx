import React from 'react';
import './ServiceOption.css'; // Create a corresponding CSS file for styling
import interior from '../../assets/interior.jpg'
import ocupie from '../../assets/ocupie.jpg'
import vacant from '../../assets/vacant.jpg'

interface stagingType {
    scrollToForm: () => void
}
const StagingService = ({scrollToForm}: stagingType) => {
  const services = [
    {
      title: 'Occupied Staging',
      description: 'We arrange the existing furnishings and bring accents where needed. Great for MLS listings & buyer walkthroughs.',
      imageUrl: ocupie, // Replace with actual image path
    },
    {
      title: 'Vacant Staging',
      description: 'We bring modern styled room furnishings for builders, homeowners and investors. Great for MLS listings and buyer walkthroughs.',
      imageUrl: vacant, // Replace with actual image path
    },
    {
      title: 'Interior Styling',
      description: 'Our modern styling catered to your needs. Great for short term rentals (AirBnB, VRBOs), homeowners, apartment models.Our modern styling catered to your needs.',
      imageUrl: interior, // Replace with actual image path
    }
  ];

  return (
    <div className="staging-service">
      <h1>Home Staging & Styling</h1>
      <div className="service-cards">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div>
                <img src={service.imageUrl} alt={service.title} />
                <h2>{service.title}</h2>
                <p>{service.description}</p>
            </div>
            <div>
              
            </div>
            <button onClick={scrollToForm} className="quote-link">Get a quote today!</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StagingService;
