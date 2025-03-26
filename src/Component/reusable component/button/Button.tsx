import { memo } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './button.css'

interface ButtonProps {
    title: string;
    onButtonClick: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    showArrow?: boolean;
}

export const Button = memo(function Button({
    title,
    onButtonClick,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    type = 'button',
    className = '',
    showArrow = true
}: ButtonProps) {
    return (
        <button 
            className={`cta-button ${variant} ${size} ${className}`}
            onClick={onButtonClick}
            disabled={disabled}
            type={type}
        >
            <span>{title}</span>
            {showArrow && <FaArrowRight className="button-arrow" />}
        </button>
    );
});