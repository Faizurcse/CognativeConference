import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer-wrapper">
      <div className="paddings innerWidth flexCenter footer-container">
        <div className="flexColStart footer-left">
          <img src="/COGNITIVE.png" alt="Cognitive Tech Summit" width={200} />
          <span className="body-text">
            We organize global conferences,
            <br />
            connecting researchers and experts to share groundbreaking
            <br />
            developments and enhance human life and the environment.
          </span>
        </div>
        <div className="flexColStart footer-right">
          <span className="header-text">Topics</span>
          <span className="body-text">Artificial Intelligence</span>
          <span className="body-text">AI In Cyber Security</span>
          <span className="body-text">Generative AI</span>
          <span className="body-text">AI in Industry 4.0</span>
        </div>
        <div className="flexColStart footer-right">
          <span className="header-text">Get in Touch</span>
          <span className="body-text">
            We can help you find the best summit for you.
          </span>
          <span className="body-text">Call: +1 630 768 1199</span>
          <span className="body-text">Email: ai@cognitivetechsummit.com</span>
        </div>
        <div className="flexColStart footer-right">
          <span className="header-text">Follow Us on</span>
          <div className="social-media-icons">
            <FaFacebook size={30} />
            <FaInstagram size={30} />
            <FaTwitter size={30} />
            <FaLinkedin size={30} />
            <FaWhatsapp size={30} />
          </div>
          <div className="flexCenter menu-items">
            <span>Home</span>
            <span>About Us</span>
            <span>Upcoming Conferences</span>
          </div>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p className="footer-text">
          Copyright © 2024 Cognitive Tech Summit |
          <Link className="footer-link" to="/cancellation-policy ">
            Cancellation Policy
          </Link>
          |
          <Link className="footer-link" to="/terms-and-conditions">
            Terms and Conditions
          </Link>
          |
          <Link className="footer-link" to="/privacy-policy">
            Privacy Policy
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Footer;
