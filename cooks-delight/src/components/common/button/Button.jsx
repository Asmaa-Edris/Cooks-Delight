import React from "react";
import "./Button.css";

const Button = ({ children, btnstyle = "primary", onClick, className = "", ...props }) => {
  return (
    <button 
      className={`btn btn-${btnstyle} ${className}`} 
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;