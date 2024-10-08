
import React from "react";
import "./CyberHero.css";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaFileAlt,
  FaRegClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";


function CyberHero() {
  return (
    <section className="ai-hero-wrapper">
      <div className="ai-image-container">
        <img
          className="ai-img"
          src="cyberHeroImge.png"
          alt="AI Conference"
        />
      </div>
      <div className="ai-main">
        <div className="paddings innerWidth flexCenter ai-info cyber-info">
          <span className="ai-primarytext">
          International Conference on AI Cyber Security
          </span>
          <span className="ai-secondarytext-2">
          Theme : Enhancing Threat Detection and Response through Advanced Machine Learning
          </span>
        </div>
        <div className="ai-direction-row">
          <div className=" flexCenter ai-info-card  cyber-info-card">
            <img
              className="ai-logo cyber-logo"
              src="heroSmallimg.jpg"
              alt="AI Logo"
            />
            <div className="ai-details">
              <div className="ai-date flexCenter">
                <FaCalendarAlt className="ai-icon" />
                <div>
                  <h3>Date</h3> 
                  <span className="ai-textSize">June 02-03, 2025</span>
                </div>
              </div>
              <div className="ai-venue flexCenter">
                <FaMapMarkerAlt className="ai-icon" />
                <div>
                  <h3>Venue</h3>
                  <span className="ai-textSize">Tokyo, Japan</span>
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
            <Link to="/cyber-security/cyber-security-download-broucher/" >
            <button className="ai-button ai-dwnd">Download Brochure</button>
            </Link>
          </div>

          <div className="ai-abstract-cards ai-card">
            <Link to="/cyber-security/cyber-security-abstract-submission/">
            <button className="ai-button">Abstract Submission</button>
            </Link>
          </div>

          <div className="ai-register-cards ai-card">
            <Link to="/cyber-security/cyber-security-register-now/">
            <button className="ai-button ai-register">Register Now</button>
            </Link>
          </div>

          <div className="ai-speaker-cards ai-card">
            <Link to="/cyber-security/cyber-security-speaker-guidelines/">
            <button className="ai-button ai-speaker">Speaker Guidelines</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CyberHero;
