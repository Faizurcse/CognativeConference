import React from "react";
import "./Generativehero.css";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaFileAlt,
  FaRegClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function GenerativeHero() {
  return (
    <section className="ai-hero-wrapper">
      <div className="ai-image-container">
        <img
          className="ai-img"
          src="GenerativeHero.webp"
          alt="AI Conference"
        />
      </div>
      <div className="ai-main">
        <div className="paddings innerWidth flexCenter ai-info">
          <span className="ai-primarytext">
          International Conference on Generative AI
          </span>
          <span className="ai-secondarytext-2">
          Theme : Generative AI transforms ideas into innovative solutions
          </span>
        </div>
        <div className="ai-direction-row">
          <div className=" flexCenter ai-info-card">
            <img
              className="ai-logo"
              src="https://cdn.pixabay.com/photo/2020/05/10/10/48/osaka-5153461_640.jpg"
              alt="AI Logo"
            />
            <div className="ai-details">
              <div className="ai-date flexCenter">
                <FaCalendarAlt className="ai-icon" />
                <div>
                  <h3>Date</h3>
                  <span className="ai-textSize">November 10-11, 2025</span>
                </div>
              </div>
              <div className="ai-venue flexCenter">
                <FaMapMarkerAlt className="ai-icon" />
                <div>
                  <h3>Venue</h3>
                  <span className="ai-textSize">Osaka, Japan</span>
                </div>
              </div>
            </div>
          </div>
          <div className="ai-info-card flexCenter">
          
            <div className="ai-details">
              <div className="ai-date flexCenter">
                <FaFileAlt className="ai-icon" />
                <div>
                  <span className="ai-textSize">
                    Abstract Submission <br /> Open Started
                  </span>
                </div>
              </div>
              <div className="ai-venue flexCenter">
                <FaRegClock className="ai-icon" />
                <div>
                  <span className="ai-textSize">
                    Early Bird Registration <br />
                    Start
                  </span>
                  <br />
                  <span className="ai-textSize">March 01, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ai-buttons-container">
          <div className="ai-boucher-cards ai-card">
            <Link to="/generative-ai/generative-ai-download-broucher/">
            <button className="ai-button">Download Brochure</button>
            </Link>
          </div>

          <div className="ai-abstract-cards ai-card">
            <Link to="/generative-ai/generative-ai-abstract-submission/">
            <button className="ai-button">Abstract Submission</button>
            </Link>
          </div>

          <div className="ai-register-cards ai-card">
            <Link to="/generative-ai/generative-ai-register-now/">
            <button className="ai-button ai-register">Register Now</button>
            </Link>
          </div>

          <div className="ai-speaker-cards ai-card">
          <Link to="/generative-ai/generative-ai-speaker-guidelines/">
            <button className="ai-button">Speaker Guidelines</button>
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GenerativeHero;
