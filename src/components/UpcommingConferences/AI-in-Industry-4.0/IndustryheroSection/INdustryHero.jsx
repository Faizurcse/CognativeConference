import React from "react";
import "./Industryhero.css";
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
          src="industryHero.jpg"
          alt="AI Conference"
        />
      </div>
      <div className="ai-main">
        <div className="paddings innerWidth flexCenter ai-info">
          <span className="ai-primarytext">
          International Conference on AI Industry 4.0
          </span>
          <span className="ai-secondarytext-2">
          Theme : AI revolutionizing Industry 4.0, optimizing processes,<br /> enhancing automation, and driving innovation.
          </span>
        </div>
        <div className="ai-direction-row">
          <div className=" flexCenter ai-info-card">
            <img
              className="ai-logo"
              src="https://www.cvent.com/venues/_next/image?url=https%3A%2F%2Fimages.cvent.com%2Fcsn%2F49036519-026c-4226-974f-6ccde0cb2f45%2Fimages%2Fefb791ae8e994e33ba33d88667ba86be_large!_!14eb617c046e1045a0eb7d94356a5957.jpg&w=3840&q=75"
              alt="AI Logo"
            />
            <div className="ai-details">
              <div className="ai-date flexCenter">
                <FaCalendarAlt className="ai-icon" />
                <div>
                  <h3>Date</h3>
                  <span className="ai-textSize">September 22-23, 2025</span>
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
            <Link to="/ai-in-Industry/ai-in-Industry-download-broucher/">
            <button className="ai-button ai-dwnd">Download Brochure</button>
            </Link>
          </div>

          <div className="ai-abstract-cards ai-card">
          <Link to="/ai-in-Industry/ai-in-Industry-abstract-submission/">
            <button className="ai-button">Abstract Submission</button>
          </Link>
          </div>

          <div className="ai-register-cards ai-card">
          
          <Link to="/ai-in-Industry/ai-in-Industry-register-now/">
            <button className="ai-button ai-register">Register Now</button>
          </Link>
          </div>

          <div className="ai-speaker-cards ai-card">
          <Link to="/ai-in-Industry/ai-in-Industry-speaker-guidelines/">
            <button className="ai-button ai-speaker">Speaker Guidelines</button>
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GenerativeHero;
