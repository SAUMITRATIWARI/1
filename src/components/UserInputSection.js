// UserInputSection.js
import React from "react";

const UserInputSection = ({ section, formData, setFormData, onNext }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [section.toLowerCase()]: value,
    }));
  };

  return (
    <section>
      <h2>{section.replace(/([a-z])([A-Z])/g, "$1 $2")}</h2>
      <label>{section}</label>
      <input
        type={section === "YourEmail" ? "email" : "text"}
        value={formData[section.toLowerCase()]}
        onChange={handleChange}
      />
      <button onClick={onNext}>Continue</button>
    </section>
  );
};

export default UserInputSection;
