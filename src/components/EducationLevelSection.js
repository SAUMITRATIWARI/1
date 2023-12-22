// EducationLevelSection.js
import React from "react";

const EducationLevelSection = ({ formData, setFormData, onNext }) => {
  const handleCheckboxChange = (value) => {
    const selectedEducationLevels = formData.educationLevel.includes(value)
      ? formData.educationLevel.filter((level) => level !== value)
      : [...formData.educationLevel, value];

    setFormData((prevData) => ({
      ...prevData,
      educationLevel: selectedEducationLevels,
    }));
  };

  return (
    <section>
      <h2>Education Level</h2>
      <div>
        <input
          type="checkbox"
          id="highSchool"
          checked={formData.educationLevel.includes("High School")}
          onChange={() => handleCheckboxChange("High School")}
        />
        <label htmlFor="highSchool">High School</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="bachelors"
          checked={formData.educationLevel.includes("Bachelor's Degree")}
          onChange={() => handleCheckboxChange("Bachelor's Degree")}
        />
        <label htmlFor="bachelors">Bachelor's Degree</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="masters"
          checked={formData.educationLevel.includes("Master's Degree")}
          onChange={() => handleCheckboxChange("Master's Degree")}
        />
        <label htmlFor="masters">Master's Degree</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="phd"
          checked={formData.educationLevel.includes("PhD")}
          onChange={() => handleCheckboxChange("PhD")}
        />
        <label htmlFor="phd">PhD</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="other"
          checked={formData.educationLevel.includes("Other")}
          onChange={() => handleCheckboxChange("Other")}
        />
        <label htmlFor="other">Other</label>
      </div>
      <button onClick={onNext}>Continue</button>
    </section>
  );
};

export default EducationLevelSection;
