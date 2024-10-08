import React from "react";
import Header from "../../Header/Header.jsx";
import Footer from "../../Footer/Footer.jsx"
import AIHero from "./AIheroSection/AIHero.jsx";
import AIconference2025 from './AIconference2025/Conference2025.jsx'
import ScientificSession from "./AIscientificSession/ScientificSession.jsx"
import VenueAttraction   from "./VenueAttraction/VenueAttraction.jsx"
import Earlybirdregistration from "./Earlybirdregistration/Earlybirdregistration.jsx"
import GetInTouch from "./GetInTouch/GetInTouch.jsx"
import AImediaPartners from "./AI-Media-Partners/AImediaPartners.jsx"
import AIFaqs from "./AI-faqs/AiFaqs.jsx"
import AImap from "./AI-Map/AImap.jsx"
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
      <Earlybirdregistration/>
      <GetInTouch/>
      <AImediaPartners/>
      <AIFaqs/>
      <AImap/>
      <Footer/>
    </div>
  );
}

export default Aintelligence;
