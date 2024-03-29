import React from "react";
import "./CustomButton.styles.scss";

function CustomButton({ children, isGoogleSignIn, ...otherProps }) {
  return (
    <button
      {...otherProps}
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    >
      {children}
    </button>
  );
}

export default CustomButton;
