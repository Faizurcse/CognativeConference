import React from "react";
import "./AIhero.css";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaFileAlt,
  FaRegClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function AIHero() {
  return (
    <section className="ai-hero-wrapper">
      <div className="ai-image-container">
        <img
          className="ai-img"
          src="/aiheroimg.jpg"
          alt="AI Conference"

        />
      </div>
      <div className="ai-main">
        <div className="paddings innerWidth flexCenter ai-info">
          <span className="ai-primarytext">
            International Conference on Artificial Intelligence
          </span>
          <span className="ai-secondarytext-2">
            Theme : Merging Minds and Machines for a Future of Infinite
            Possibilities and Innovations
          </span>
        </div>
        <div className="ai-direction-row">
          <div className=" flexCenter ai-info-card">
            <img
              className="ai-logo"
              width="300"
              src="https://globalai.community/media/jhzomepg/302312863.webp?width=1920&v=1dad96f6dea7490"
              alt="AI Logo"
            />
            <div className="ai-details">
              <div className="ai-date flexCenter">
                <FaCalendarAlt className="ai-icon" />
                <div>
                  <h4>Date</h4>
                  <span className="ai-textSize">October 13-14, 2025</span>
                </div>
              </div>
              <div className="ai-venue flexCenter">
                <FaMapMarkerAlt className="ai-icon" />
                <div>
                  <h4>Venue</h4>
                  <span className="ai-textSize">Zurich, Switzerland</span>
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
          <Link to="/artificial-intelligence/artificial-intelligence-download-broucher/">
            <button className="ai-button ai-dwnd">Download Brochure</button>
          </Link>
          </div>

          <div className="ai-abstract-cards ai-card">
            <Link to="/artificial-intelligence/artificial-intelligence-abstract-submission/">
            <button className="ai-button ">Abstract Submission</button>
            </Link>
          </div>

          <div className="ai-register-cards ai-card">
            <Link to="/artificial-intelligence/artificial-intelligence-register-now/">
            <button className="ai-button ai-register">Register Now</button>
            </Link>
          </div>

          <div className="ai-speaker-cards ai-card">
            <Link to="/artificial-intelligence/artificial-intelligence-speaker-guidelines/">
              <button className="ai-button ai-speaker">Speaker Guidelines</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AIHero;
