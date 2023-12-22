// ContinueButton.js
import React from "react";
import "./ContinueButton.css";

const ContinueButton = ({ onContinue }) => {
  return (
    <div className="continue-button">
      <button onClick={onContinue}>Continue</button>
    </div>
  );
};

export default ContinueButton;
