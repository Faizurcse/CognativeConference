import React from "react";
import "./AImap.css"; // Make sure to import the CSS file

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
        
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1383207.3404173388!2d8.503369!3d47.381177!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900b9749bea219%3A0xe66e8df1e71fdc03!2sZ%C3%BCrich%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1727686448595!5m2!1sen!2sus"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AImap;
