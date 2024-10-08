import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            className="hero-h1-heading"
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "ease-in" }}
            >
              Cognitive <br /> Tech Summit <br />
              (AI Conference)
            </motion.h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText-22" >Theme<span style={{ fontSize:'1.1rem'}}> : </span>Empowering Minds</span>
            <span className="secondaryText-22" >
              The Evolution of Cognitive Technologies in Shaping the Future
            </span>
          </div>
        </div>

        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="/ai-generated-8327395_640.webp" alt="hero" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
