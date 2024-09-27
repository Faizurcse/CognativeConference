import React from "react";
import Header from "../Header/Header.jsx";
import Hero from "../Hero/Hero.jsx";
import Companies from "../companies/Companies.jsx";
import Card from "../CardConference/Card.jsx";
import AboutCognitive from "../AboutCognitive/AboutCognitive.jsx";
import Footer from "../Footer/Footer.jsx";
import FQAS from "../FQAS/FQAS.jsx";
import "./Home.css";
function Home() {
  return (
    <div className="Header">
      <div>
        <div className="white-gradient" />

        <Header />

        <Hero />
      </div>
      <Card />
      <AboutCognitive />
      <FQAS />
      <Companies />
      <Footer />
    </div>
  );
}

export default Home;
