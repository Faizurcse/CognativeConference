import React from "react";
import { FaMicrophone } from "react-icons/fa";
import "./EarlybrCyber.css";
import { Link } from "react-router-dom";
function Earlybirdregistration() {
  return (
    <section className="earlybird-r-wrapper">
      <div className="paddings innerWidth earlybird-r-container">
        <div className=" flexCenter earlybird-r-head">
          <span  className="primaryText">Registration</span>
          <span  className="orangeText">Early bird registration available</span>
        </div>

        <div className="flex-center">
          <div className="flex-col-start earlybird-r-card">
            <span className="earlybird-icon"><FaMicrophone /></span>
            <span className="secondary-text earlybird-r-price">
              <span style={{ color: "red" }}>$799</span>
            </span>
            <span className="orange-text">Oral Presentations</span>
            <span className="primary-text-2">Speaker Registration</span>
            <div className="flex-center earlybird-register-button">
            <Link to="/register-now/">
              <button className="button-2 earlybird-button-2">Register Now</button>
            </Link>
            </div>
          </div>

          <div className="flex-col-start earlybird-r-card">
            <span className="earlybird-icon"><FaMicrophone /></span>
            <span className="secondary-text earlybird-r-price">
              <span style={{ color: "red" }}>$845</span>
            </span>
            <span className="orange-text">Oral Presentations</span>
            <span className="primary-text-2">Delegate Registration</span>
            <div className="flex-center earlybird-register-button">
            <Link to="/register-now/">
              <button className="button-2 earlybird-button-2">Register Now</button>
            </Link>
            </div>
          </div>

          <div className="flex-col-start earlybird-r-card">
            <span className="earlybird-icon"><FaMicrophone /></span>
            <span className="secondary-text earlybird-r-price">
              <span style={{ color: "red" }}>$499</span>
            </span>
            <span className="orange-text">Oral Presentations</span>
            <span className="primary-text-2">Student Registration</span>
            <div className="flex-center earlybird-register-button">
            <Link to="/register-now/">
              <button className="button-2 earlybird-button-2">Register Now</button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Earlybirdregistration;
