// ProgrammingLanguageSection.js
import React from "react";

const ProgrammingLanguageSection = ({ formData, setFormData, onNext }) => {
  const handleCheckboxChange = (value) => {
    const selectedLanguages = formData.programmingLanguage.includes(value)
      ? formData.programmingLanguage.filter((lang) => lang !== value)
      : [...formData.programmingLanguage, value];

    setFormData((prevData) => ({
      ...prevData,
      programmingLanguage: selectedLanguages,
    }));
  };

  return (
    <section>
      <h2>Programming Language</h2>
      <div>
        <input
          type="checkbox"
          id="wordpress"
          checked={formData.programmingLanguage.includes("WordPress")}
          onChange={() => handleCheckboxChange("WordPress")}
        />
        <label htmlFor="wordpress">WordPress</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="php"
          checked={formData.programmingLanguage.includes("PHP")}
          onChange={() => handleCheckboxChange("PHP")}
        />
        <label htmlFor="php">PHP</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="javascript"
          checked={formData.programmingLanguage.includes("JavaScript")}
          onChange={() => handleCheckboxChange("JavaScript")}
        />
        <label htmlFor="javascript">JavaScript</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="html"
          checked={formData.programmingLanguage.includes("HTML")}
          onChange={() => handleCheckboxChange("HTML")}
        />
        <label htmlFor="html">HTML</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="css"
          checked={formData.programmingLanguage.includes("CSS")}
          onChange={() => handleCheckboxChange("CSS")}
        />
        <label htmlFor="css">CSS</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="python"
          checked={formData.programmingLanguage.includes("Python")}
          onChange={() => handleCheckboxChange("Python")}
        />
        <label htmlFor="python">Python</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="java"
          checked={formData.programmingLanguage.includes("Java")}
          onChange={() => handleCheckboxChange("Java")}
        />
        <label htmlFor="java">Java</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="cpp"
          checked={formData.programmingLanguage.includes("C++")}
          onChange={() => handleCheckboxChange("C++")}
        />
        <label htmlFor="cpp">C++</label>
      </div>
      <button onClick={onNext}>Continue</button>
    </section>
  );
};

export default ProgrammingLanguageSection;
