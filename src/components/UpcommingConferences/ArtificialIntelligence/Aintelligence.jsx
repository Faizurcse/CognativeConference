import React from "react";
import Header from "../../Header/Header.jsx";
import Footer from "../../Footer/Footer.jsx"
import AIHero from "./AIheroSection/AIHero.jsx";
import AIconference2025 from './AIconference2025/Conference2025.jsx'
import ScientificSession from "./AIscientificSession/ScientificSession.jsx"
import VenueAttraction   from "./VenueAttraction/VenueAttraction.jsx"
import './AI.css'
function Aintelligence() {
  return (
    <div>
      <div className="ai-header">
        <Header />
      </div>
      <AIHero/>
      <AIconference2025/>
      <ScientificSession/>
      <VenueAttraction/>
      <Footer/>
    </div>
  );
}

export default Aintelligence;
