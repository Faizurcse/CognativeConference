import React from "react";
import IndustryNav from "../../Header/Header.jsx";
import IndusFooter from "../../Footer/Footer.jsx";
import IndustryHero from "../AI-in-Industry-4.0/IndustryheroSection/INdustryHero.jsx";
import IndustryConference from "../AI-in-Industry-4.0/Industryconference2025/Conference2025Industry.jsx";
import IndustryScientific from "../AI-in-Industry-4.0/IndusrtyscientificSession/IndustryScientificSession.jsx";
import IndustryVenue from "../AI-in-Industry-4.0/IndustryVenueAttraction/IndustryVenueAttraction.jsx";
import IndustryReg from "../AI-in-Industry-4.0/IndustryEarlybirdregistration/IndustryEarlybirdregistration.jsx";
import IndustryGetInTouch from "../AI-in-Industry-4.0/IndustryGetInTouch/IndustryGetInTouch.jsx";
import IndustryMedia from "../AI-in-Industry-4.0/Industry-Media-Partners/IndustrymediaPartners.jsx";
import InsdustryFAQs from "../AI-in-Industry-4.0/Industry-faqs/IndustryFaqs.jsx";
import IndustryMapp from "../AI-in-Industry-4.0/Industry-Map/Industrymap.jsx";
import "./Industry.css";
function Industry() {
  return (
    <div>
      <div className="industry-hnveader">
        <IndustryNav />
      </div>
      <IndustryHero />
      <IndustryConference />
      <IndustryScientific />
      <IndustryVenue />
      <IndustryReg />
      <IndustryGetInTouch />
      <IndustryMedia />
      <InsdustryFAQs />
      <IndustryMapp />
      <IndusFooter />
    </div>
  );
}

export default Industry;
