import React from "react";
import "./Cybermap.css"; // Make sure to import the CSS file

function AImap() {
  return (
    <section className="ai-map-wrapper">
      <div className="paddings innerWidth flexCenter ai-map-container">
        <div className="flexCenter ai-map-left">
          <div className="contact-form">
            <div className="flexCenter map-heading">
              <span className="primaryText">CONTACT US</span>
            </div>

            <div className="input-group ur-name">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" />
            </div>

            <div className="input-group email-phone">
              <label htmlFor="phone">Phone Number</label>
              <input type="number" id="phone" />
            </div>

            <div className="input-group email-phone">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" />
            </div>

            <div className="input-group msg">
              <label htmlFor="message">Message Us</label>
              <textarea id="message" rows="2"></textarea>
            </div>
            <div className="flexCenter cnt-btn">
              <button className="button">Submit</button>
            </div>
          </div>
        </div>

        <div className="flexCenter ai-map-right">
          <div className="map-v-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6737765.970814769!2d141.728278!3d34.454057!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2sTokyo%2C%20Japan!5e0!3m2!1sen!2sus!4v1727765503748!5m2!1sen!2sus"
              width="100%"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AImap;
