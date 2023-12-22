// App.js
import React, { useState } from "react";
import UserInputSection from "./components/UserInputSection";
import EducationLevelSection from "./components/EducationLevelSection";
import ProgrammingLanguageSection from "./components/ProgrammingLanguageSection";
import ExperienceSection from "./components/ExperienceSection";
import AttachResumeSection from "./components/AttachResumeSection";
import AssignmentLinkSection from "./components/AssignmentLinkSection";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState({
    yourName: "",
    yourEmail: "",
    yourPhone: "",
    address: {
      country: "",
      state: "",
      city: "",
    },
    dateOfBirth: "",
    educationLevel: [],
    programmingLanguage: [],
    experienceInWordPress: "",
    resume: "",
    assignmentLink: "",
  });

  const [assignmentDetailsCompleted, setAssignmentDetailsCompleted] =
    useState(false);

  const sections = [
    "YourName",
    "YourEmail",
    "YourPhone",
    "Address",
    "DateOfBirth",
    "EducationLevel",
    "ProgrammingLanguage",
    "Experience",
    "AttachResume",
    "AssignmentLink",
  ];

  const handleContinue = () => {
    if (currentPage === 0) {
      // If on the assignment details section, set the flag to true
      setAssignmentDetailsCompleted(true);
    }

    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleFormSubmit = () => {
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const renderSection = (section) => {
    switch (section) {
      case "YourName":
      case "YourEmail":
      case "YourPhone":
      case "Address":
      case "DateOfBirth":
        return (
          <UserInputSection
            section={section}
            formData={formData}
            setFormData={setFormData}
            onNext={handleContinue}
          />
        );
      case "EducationLevel":
        return (
          <EducationLevelSection
            formData={formData}
            setFormData={setFormData}
            onNext={handleContinue}
          />
        );
      case "ProgrammingLanguage":
        return (
          <ProgrammingLanguageSection
            formData={formData}
            setFormData={setFormData}
            onNext={handleContinue}
          />
        );
      case "Experience":
        return (
          <ExperienceSection
            formData={formData}
            setFormData={setFormData}
            onNext={handleContinue}
          />
        );
      case "AttachResume":
        return (
          <AttachResumeSection
            formData={formData}
            setFormData={setFormData}
            onNext={handleContinue}
          />
        );
      case "AssignmentLink":
        return (
          <AssignmentLinkSection
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleFormSubmit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="App">
      {!assignmentDetailsCompleted && (
        <div>
          <h2
            style={{
              textTransform: "uppercase",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            ASSIGNMENT DETAILS TASK:
          </h2>
          <p>
            Create an exact duplicate of the Landing page given below. <br></br>{" "}
            <br></br> <br></br>
            NOTE: <br></br>1.The assignment has to be made on WordPress.{" "}
            <br></br> 2.You have to create an exact copy of this Landing Page
            with all the major and minor details. <br></br> 3.For webpage
            content, you can use AI copywriter tools, copy it from existing
            websites or write it yourself. <br></br> 4.For this assignment
            purpose, you can use any domain or sub-domain and hosting you might
            have already. After a week of submission, you can delete the work if
            needed. <br></br> 5.In case you do not have a spare domain or
            hosting for this assignment, please use tastewp.com to create a free
            7-day temporary website. But make sure that when you submit the form
            3+ days of expiring time should be remaining. <br></br> 6.You need
            to use Elementor page builder to make the landing page. <br></br>{" "}
            7.Feel free to use any other plugins/addons to enhance the look of
            the landing page. <br></br> 8.You have 24 Hours to finish the
            assignment.
          </p>
        </div>
      )}
      {renderSection(sections[currentPage])}
    </div>
  );
}

export default App;
