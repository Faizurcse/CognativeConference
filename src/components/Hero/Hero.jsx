import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import {motion} from 'framer-motion'
function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{y:"2rem",opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{duration:2,type:"ease-in"}}
            >
              Cognitive <br /> Tech Summit <br />
              (AI Conference)
            </motion.h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">Theme : Empowering Minds :</span>
            <span className="secondaryText">
              The Evolution of Cognitive Technologies in Shaping the Future
            </span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8000} end={9000} duration={20} />
                <span>+</span>
              </span>
              <span className="secondaryText">Artificial Intelligence</span>
            </div>

            <div className="flexColCenter  stat">
              <span>
                <CountUp start={8000} end={10000} duration={20} />
                <span>+</span>
              </span>
              <span className="secondaryText">AI Cyber Security</span>
            </div>

            <div className="flexColCenter  stat">
              <span>
                <CountUp start={8000} end={11000} duration={20} />
                <span>+</span>
              </span>
              <span className="secondaryText">Generative AI</span>
            </div>

            {/* <div className="flexColCenter  stat">
              <span>
                <CountUp start={8000} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">AI Industry 4.0</span>
            </div> */}
          </div>
        </div>

        <div className="flexCenter hero-right">
          <motion.div
          initial={{x:"7rem",opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{
            duration:2,type:"ease-in"
          }}
           className="image-container"

          >
            <img
              src="../../../public/ai-generated-8327395_640.webp"
              alt="hero"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
