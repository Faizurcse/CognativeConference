import React from "react";
import Navbar from "../../Header/Header.jsx";
import Footer from "../../Footer/Footer.jsx";
import CyberHero from "../../UpcommingConferences/AIinCyberSecurity/CyberHeroSection/CyberHero.jsx";
import "./CyberSec.css";
function AllImports() {
  return (
    <div>
      <div className="cyber-header">
        <Navbar />
      </div>
      <CyberHero />
      <Footer />
    </div>
  );
}

export default AllImports;
