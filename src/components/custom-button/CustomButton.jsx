import React from "react";
import "./CustomButton.styles.scss";

function CustomButton({ children, ...otherProps }) {
  return (
    <button {...otherProps} className="custom-button">
      {children}
    </button>
  );
}

export default CustomButton;
