// AssignmentLinkSection.js
import React, { useState } from "react";
import "./AssignmentLinkSection.css"; // Import the CSS file

const AssignmentLinkSection = ({ formData, setFormData, onSubmit }) => {
  const [submissionMessage, setSubmissionMessage] = useState(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      assignmentLink: value,
    }));
  };

  const isValidUrl = (url) => {
    // Simple check for HTTP or HTTPS links
    const pattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return pattern.test(url);
  };

  const handleSubmit = () => {
    if (isValidUrl(formData.assignmentLink)) {
      // Assume onSubmit is a function that handles form submission logic

      // Display submission message
      setSubmissionMessage("Assignment submitted successfully!");

      // Call the actual onSubmit function if needed
      if (onSubmit) {
        onSubmit();
      }
    } else {
      // Display message for invalid link
      setSubmissionMessage(
        "Invalid link. Please provide a valid HTTP or HTTPS link."
      );
    }
  };

  return (
    <section>
      <h2>Attach Your Assignment Link</h2>
      <label>Attach Your Assignment Link</label>
      <input
        type="text"
        value={formData.assignmentLink}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Submit</button>

      {/* Display submission message */}
      {submissionMessage && (
        <div className="submission-message">{submissionMessage}</div>
      )}
    </section>
  );
};

export default AssignmentLinkSection;
