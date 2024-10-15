import React from "react"

import './button.css'




interface ButtonProps {
    title: string;
    onButtonClick: () => void;

}
export const Button = ({title, onButtonClick}:ButtonProps) => {



    return <button className="cta-button" onClick={onButtonClick}>{title}</button>
}