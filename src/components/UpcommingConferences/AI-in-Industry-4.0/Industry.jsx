import React from "react";
import IndustryNav from "../../Header/Header.jsx";
import IndusFooter from "../../Footer/Footer.jsx";
import "./Industry.css";
function Industry() {
  return (
    <div>
      <div className="industry-hnveader">
        <IndustryNav />
      </div>
      <IndusFooter />
    </div>
  );
}

export default Industry;
