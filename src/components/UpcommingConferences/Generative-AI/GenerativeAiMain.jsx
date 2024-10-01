import React from "react";
import "./GenerativeAIMain.css"
import Nav from "../../Header/Header.jsx";
import Footer from "../../Footer/Footer.jsx"
import HeroGenerative from "../Generative-AI/GenerativeheroSection/GenerativeHero.jsx"
import GenerativeConference from "../Generative-AI/Generativeconference2025/Conference2025Generative.jsx"
import GenerativeSummitScientifisSession from "../Generative-AI/GenerativescientificSession/GenerativeScientificSession.jsx"
import GenerativeVenues from "../Generative-AI/GenerativeVenueAttraction/GenerativeVenueAttraction.jsx"
import GenrtaiveRegistration from "../Generative-AI/GenartiveEarlybirdregistration/GenerativeEarlybirdregistration.jsx"
import GenerativeGetInTouch from "../Generative-AI/GenertaiveGetInTouch/GenerativeGetInTouch.jsx"
import GenertaiveMEdia from "../Generative-AI/Generative-Media-Partners/GenerativemediaPartners.jsx"
import GenerativeMap from "../Generative-AI/Generative-Map/Genrativemap.jsx"
import GenerativeFAQS from "../Generative-AI/Generative-faqs/GenerativeFaqs.jsx"

function GenerativeAiMain() {
  return (
    <div>
      <div className="generative-header">
        <Nav />
      </div>
      <HeroGenerative/>
      <GenerativeConference/>
      <GenerativeSummitScientifisSession/>
      <GenerativeVenues/>
      <GenrtaiveRegistration/>
      <GenerativeGetInTouch/>
      <GenertaiveMEdia/>
      <GenerativeFAQS/>
      <GenerativeMap/>
      <Footer/>
    </div>
  );
}

export default GenerativeAiMain;
