// Cards.tsx
import React from "react";
import "./Cards.css"; // Custom styling for the cards

interface CardsProps {
  onCardClick: (key: string) => void;
}

const Cards: React.FC<CardsProps> = ({ onCardClick }) => {
  return (
    <div className="cards-container">
      <div className="card" onClick={() => onCardClick("homeStaging")}>
        <h3>Home Staging</h3>
      </div>
      <div className="card" onClick={() => onCardClick("interiorDesign")}>
        <h3>Interior Design</h3>
      </div>
      <div className="card" onClick={() => onCardClick("rentalStyling")}>
        <h3>Short Term Rental Styling</h3>
      </div>
    </div>
  );
};

export default Cards;
