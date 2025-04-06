import React, { useState } from 'react';
import  vacant  from '../../../assets/vacant.jpg'
import roomDecorate from '../../../assets/room-decorate.jpg'
import homeDecor from '../../../assets/home-decor.jpg'
import interior from '../../../assets/interior.jpg'
import './ButtonImage.css';
type Section = 'Style' | 'Expertise' | 'Creativity' | 'Results';

const contentMap: Record<Section, { title: string; description: string; image: string }> = {
  Style: {
    title: 'Style',
    description: 'We bring in modern, cozy, and timeless designs that make your home unforgettable.',
    image: vacant,
  },
  Expertise: {
    title: 'Expertise',
    description: 'With years of experience in staging, we know exactly what buyers want to see.',
    image: roomDecorate,
  },
  Creativity: {
    title: 'Creativity',
    description: 'Every space is a canvas. We create unique, styled interiors that captivate buyers.',
    image: homeDecor,
  },
  Results: {
    title: 'Results',
    description: 'Our results speak volumes. Homes staged by us sell fast and at top dollar.',
    image: interior,
  },
};

const WhyChooseUs: React.FC = () => {
    const [selected, setSelected] = useState<Section>('Results');
    const { title, description, image } = contentMap[selected];
  
    return (
      <div className="why-choose-us-container">
        <div className="why-choose-us-left">
          <h1>Why Choose Us?</h1>
          <div className="button-group">
            {Object.keys(contentMap).map((key) => (
              <button
                key={key}
                onClick={() => setSelected(key as Section)}
                className={`section-button ${selected === key ? 'active' : ''}`}
              >
                {key}
              </button>
            ))}
          </div>
        </div>
  
        <div className="why-choose-us-right">
          <div  className="section-image" >
          <img src={image} alt={title}/>
          </div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
  };
  

export default WhyChooseUs;
