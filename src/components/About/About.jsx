import React from 'react'
import Header from "../Header/Header.jsx"
import Footer from "../Footer/Footer.jsx"
// import AboutHero from './AboutComponents/HeroAbout.jsx'
import AboutComponents2 from "../About/AboutComponents2/AboutComponents2.jsx"
import VissionMission from "../About/VisionMission/VisionMission.jsx"
import WhyChoose from "../About/WhyChoose/WhyChoose.jsx"
import Area from "../About/AreaFocus/Area.jsx"
import Future from "../About/ShapingtheFuture/Future.jsx"
import "./About.css"
function About() {
  return (
    <div>
      <div className="about-header">
      <Header/>
      </div>
     {/* <AboutHero/> */}
     <AboutComponents2/>
     <VissionMission/>
     <WhyChoose/>
     <Area/>
     <Future/>
      <Footer/>
    </div>
  )
}

export default About
