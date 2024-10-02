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
function App() {
  
  return (
    <Router>
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
      </Routes>
    </Router>
  )
}

export default App
