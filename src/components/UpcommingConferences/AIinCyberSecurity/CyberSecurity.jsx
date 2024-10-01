import React from "react";
import Navbar from "../../Header/Header.jsx";
import Footer from "../../Footer/Footer.jsx";
import CyberHero from "../../UpcommingConferences/AIinCyberSecurity/CyberHeroSection/CyberHero.jsx";
import CyberConference from "../../UpcommingConferences/AIinCyberSecurity/CyberSecurityConference2025/Cyber2025.jsx"
import CyberSSSC from "../../UpcommingConferences/AIinCyberSecurity/CyberSecuritySummitSession/CyberSSSC.jsx"
import CyberVenueAttraction from "../../UpcommingConferences/AIinCyberSecurity/VenueAtrractionCyberSSS/VenueCyberSSS.jsx"
import CyberRegistration from "../../UpcommingConferences/AIinCyberSecurity/EarlybirdregistrationCyber/EarlybirdregistrationCyber.jsx"
import CybergetInTouch from "../../UpcommingConferences/AIinCyberSecurity/GetInTouchCyber/GetInTouchCyber.jsx"
import CyberOurMediaPartners from "../../UpcommingConferences/AIinCyberSecurity/Cyber-Media-Partners/CybermediaPartners.jsx"
import CyberFAQS from "../../UpcommingConferences/AIinCyberSecurity/Cyber-faqs/CyberFaqs.jsx"
import CyberMap from "../../UpcommingConferences/AIinCyberSecurity/Cyber-Map/Cybermap.jsx"
import "./CyberSec.css";
function AllImports() {
  return (
    <div>
      <div className="cyber-header">
        <Navbar />
      </div>
      <CyberHero />
      <CyberConference/>
      <CyberSSSC/>
      <CyberVenueAttraction/>
      <CyberRegistration/>
      <CybergetInTouch/>
      <CyberOurMediaPartners/>
      <CyberFAQS/>
      <CyberMap/>
      <Footer />
    </div>
  );
}

export default AllImports;
