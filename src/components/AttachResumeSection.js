// AttachResumeSection.js
import React from "react";

const AttachResumeSection = ({ formData, setFormData, onNext }) => {
  const handleInputChange = (e) => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      resume: value,
    }));
  };

  return (
    <section>
      <h2>Attach Your Resume</h2>
      <label>Attach Your Resume</label>
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleInputChange}
      />
      <button onClick={onNext}>Continue</button>
    </section>
  );
};

export default AttachResumeSection;
