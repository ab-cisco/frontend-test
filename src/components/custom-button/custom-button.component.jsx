import React from 'react'

import './custom-button.styles.scss';


const CustomButton = ({ children, onClick, className, disabled, otherProps }) => (
    <button 
        className={`${disabled ? 'disabled' : '' } ${className}`} 
        onClick={onClick}
        {...otherProps}
    >
        {children}
    </button>
);

export default CustomButton;
