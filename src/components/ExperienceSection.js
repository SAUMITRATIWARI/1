// ExperienceSection.js
import React from "react";

const ExperienceSection = ({ formData, setFormData, onNext }) => {
  const handleInputChange = (e) => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      experienceInWordPress: value,
    }));
  };

  return (
    <section>
      <h2>Experience in WordPress</h2>
      <label>How many years of experience do you have in WordPress?</label>
      <input
        type="number"
        value={formData.experienceInWordPress}
        onChange={handleInputChange}
      />
      <button onClick={onNext}>Continue</button>
    </section>
  );
};

export default ExperienceSection;
