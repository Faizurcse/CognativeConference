import React from "react"
import "./index.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx"
import About from "./components/About/About.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Aintelligence from "./components/UpcommingConferences/ArtificialIntelligence/Aintelligence.jsx"
 import CyberSecurity from "./components/UpcommingConferences/AIinCyberSecurity/CyberSecurity.jsx"
import GenerativeAI from "./components/UpcommingConferences/Generative-AI/GenerativeAiMain.jsx"
import AiinIndustry from "./components/UpcommingConferences/AI-in-Industry-4.0/Industry.jsx"
import CancellationPolicy from "./components/Footer/CancellationPolicy.jsx";
import TermsandConditions from "./components/Footer/TermsandConditions.jsx";
import PrivacyPolicy from "./components/Footer/PrivacyPolicy.jsx";
import ScrollOnTop from "./components/ScrollOnTop.jsx";
import DownloadBroucher from "./components/AllButtonsPages/BroucherDownload.jsx"
import AbstractSubmission from "./components/AllButtonsPages/AbstractTamplate.jsx"
import SpeakerGuidelines from "./components/AllButtonsPages/SpeakerGuidelines.jsx";
import RegisterNow from "./components/AllButtonsPages/RegisterNow.jsx"
function App() {
  
  return (
    <Router>
      <ScrollOnTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/artificial-intelligence" element={<Aintelligence />} />
         <Route path="/cyber-security" element={<CyberSecurity  />} />
         <Route path="/generative-ai" element={<GenerativeAI />} /> 
         <Route path="/ai-in-Industry" element={<AiinIndustry/>} /> 
         <Route path="/cancellation-policy" element={<CancellationPolicy/>}/>
         <Route path="/terms-and-Conditions" element={<TermsandConditions/>}/>
         <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
         <Route path="/artificial-intelligence/artificial-intelligence-download-broucher/" element={<DownloadBroucher/>}/>
         <Route path="/artificial-intelligence/artificial-intelligence-abstract-submission/" element={<AbstractSubmission/>}/>
         <Route path="/artificial-intelligence/artificial-intelligence-speaker-guidelines/" element={<SpeakerGuidelines/>}/>
         <Route path="/artificial-intelligence/artificial-intelligence-register-now/" element={<RegisterNow/>}/>

      </Routes>
    </Router>
  )
}

export default App
