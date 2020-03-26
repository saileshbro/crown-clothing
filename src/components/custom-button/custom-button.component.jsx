import React from "react";
import "./custom-button.styles.scss";
const CustomButton = ({ children, isGoogleSignin, ...otherProps }) => (
  <button
    {...otherProps}
    className={`custom-button ${isGoogleSignin ? "google-sign-in" : ""}`}
  >
    {children}
  </button>
);
export default CustomButton;
