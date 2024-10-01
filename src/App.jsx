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
      </Routes>
    </Router>
  )
}

export default App
