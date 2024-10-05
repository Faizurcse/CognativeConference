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
import AiView from "./components/ViewAllSSButtons/AIvssb/Aivssb.jsx"
import Cybervssb from "./components/ViewAllSSButtons/Cybervssb/Cybervssb.jsx"
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
         {/* AI */}
         <Route path="/artificial-intelligence/artificial-intelligence-download-broucher/" element={<DownloadBroucher Props1={"Artificial Intelligence Brochure Download"}/>}/>
         <Route path="/artificial-intelligence/artificial-intelligence-abstract-submission/" element={<AbstractSubmission  Props2={"Artificial Intelligence Abstract Submission Form"}/>}/>
         <Route path="/artificial-intelligence/artificial-intelligence-speaker-guidelines/" element={<SpeakerGuidelines Props3={"Speaker Guidelines"}/>}/>
         <Route path="/artificial-intelligence/artificial-intelligence-register-now/" element={<RegisterNow/>}/>
        {/* Cyber security */}
         <Route path="/cyber-security/cyber-security-download-broucher/" element={<DownloadBroucher Props1={"AI Cyber Security Brochure Download"}/>}/>
         <Route path="/cyber-security/cyber-security-abstract-submission/" element={<AbstractSubmission  Props2={"AI Cyber Security Abstract Submission Form"}/>}/>
         <Route path="/cyber-security/cyber-security-speaker-guidelines/" element={<SpeakerGuidelines Props3={"Speaker Guidelines"}/>}/>
         <Route path="/cyber-security/cyber-security-register-now/" element={<RegisterNow/>}/>

         {/* Generative AI */}
         <Route path="/generative-ai/generative-ai-download-broucher/" element={<DownloadBroucher Props1={"Generative AI Brochure Download"}/>}/>
         <Route path="/generative-ai/generative-ai-abstract-submission/" element={<AbstractSubmission  Props2={"Generative AI Abstract Submission Form"}/>}/>
         <Route path="/generative-ai/generative-ai-speaker-guidelines/" element={<SpeakerGuidelines Props3={"Speaker Guidelines"}/>}/>
         <Route path="/generative-ai/generative-ai-register-now/" element={<RegisterNow/>}/>

         {/*AI Industry*/}
         <Route path="/ai-in-Industry/ai-in-Industry-download-broucher/" element={<DownloadBroucher Props1={"AI Industry 4.0 Brochure Download"}/>}/>
         <Route path="/ai-in-Industry/ai-in-Industry-abstract-submission/" element={<AbstractSubmission  Props2={"AI Industry 4.0 Abstract Submission Form"}/>}/>
         <Route path="/ai-in-Industry/ai-in-Industry-speaker-guidelines/" element={<SpeakerGuidelines Props3={"Speaker Guidelines"}/>}/>
         <Route path="/ai-in-Industry/ai-in-Industry-register-now/" element={<RegisterNow/>}/>

         {/* All-Views */}
         <Route path="/artificial-intelligence/artificial-intelligence-scientific-sessions/" element={<AiView/>}/>
         <Route path="/cyber-security/cyber-security-scientific-sessions/" element={<Cybervssb/>}/>
      </Routes>
    </Router>
  )
}

export default App
