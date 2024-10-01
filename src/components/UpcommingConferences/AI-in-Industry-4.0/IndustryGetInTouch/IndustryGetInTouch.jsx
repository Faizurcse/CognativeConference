import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "./IndustryGetInTouch.css";

function GetInTouch() {
  return (
    <section className="get-in-touch-wrapper">
      <div className="paddings innerWidth get-in-touch-container">
        <div className="flexCenter get-in-touch-head">
          <span className="primaryText">Get In Touch</span>
          <p className="orangeText description-text">
            To learn more about our conferences and events, please get in touch
            with us. Join our extensive network of scientists, professional
            experts, and research scholars to stay informed and connected.
          </p>
        </div>

        <div className="get-in-touch-details flex-center">
          <div className="detail-card flex-center">
            <FaMapMarkerAlt className="get-in-touch-icon" />
            <div className="text-content">
              <span className="detail-title">Address</span>
              <br />
              <span className="detail-info">
                16192 Coastal Highway Lewes, Delaware, USA 19958
              </span>
            </div>
          </div>

          <div className="detail-card flex-center">
            <FaPhone className="get-in-touch-icon" />
            <div className="text-content">
              <span className="detail-title">Phone number</span>
              <br />
              <span className="detail-info">+1 630 768 1199</span>
            </div>
          </div>

          <div className="detail-card flex-center">
            <FaEnvelope className="get-in-touch-icon" />
            <div className="text-content">
              <span className="detail-title">E-mail-address</span>
              <br />
              <span className="detail-info">support@stripeconferences.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
