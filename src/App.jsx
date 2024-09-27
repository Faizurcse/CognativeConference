import React from "react"
import "./index.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx"
import About from "./components/About/About.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Aintelligence from "./components/UpcommingConferences/ArtificialIntelligence/Aintelligence.jsx"
 import CyberSecurity from "./components/UpcommingConferences/AIinCyberSecurity/CyberSecurity.jsx"
// import Conference3 from "./components/UpcommingConferences/conference3.jsx"
// import Conference4 from "./components/UpcommingConferences/conference4.jsx"
function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/artificial-intelligence" element={<Aintelligence />} />
         <Route path="/cyber-security" element={<CyberSecurity  />} />
         {/* <Route path="/conference3" element={<Conference3 />} /> */}
        {/* <Route path="/conference4" element={<Conference4 />} />  */}
      </Routes>
    </Router>
  )
}

export default App
