// AssignmentDetailsSection.js
import React from "react";

const AssignmentDetailsSection = ({ onContinue }) => {
  return (
    <section>
      <h2>ASSIGNMENT DETAILS TASK:</h2>
      <p>
        Create an exact duplicate of the Landing page given below.<br></br>{" "}
        NOTE: The assignment has to be made on WordPress. You have to create an
        exact copy of this Landing Page with all the major and minor details.
        For webpage content, you can use AI copywriter tools, copy it from
        existing websites or write it yourself. For this assignment purpose, you
        can use any domain or sub-domain and hosting you might have already.
        After a week of submission, you can delete the work if needed. In case
        you do not have a spare domain or hosting for this assignment, please
        use tastewp.com to create a free 7-day temporary website. But make sure
        that when you submit the form 3+ days of expiring time should be
        remaining. You need to use Elementor page builder to make the landing
        page. Feel free to use any other plugins/addons to enhance the look of
        the landing page. You have 24 Hours to finish the assignment.
      </p>
      <button onClick={onContinue}>Continue</button>
    </section>
  );
};

export default AssignmentDetailsSection;
