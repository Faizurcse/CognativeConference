import React from "react";
import Nav from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx"
import "./Contact.css";
function Contact() {
  return (
    <div>
      <div className="conatct-header">
        <Nav />
      </div>
      <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1024px', margin: '0 auto', padding: '20px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <div style={{ flex: '1 1 300px', padding: '20px' }}>
          <img src="https://raiday.ai/wp-content/uploads/2024/04/Contact-Us-1024x585.webp" alt="Contact Us" style={{ width: '100%', borderRadius: '10px' }} />
          <h2 className="primaryText">Contact Details</h2>
          <p className="orangeText"><strong>Tokyo, Japan</strong></p>
          <p><strong>Call Us:</strong> +1 630 768 1199</p>
          <p><strong>Email Us to Know More:</strong> <a href="mailto:ai@cognitivetechsummit.com">ai@cognitivetechsummit.com</a></p>
        </div>
        <div style={{ flex: '1 1 300px', padding: '20px' }}>
          <form>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Your Name</label>
              <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Phone Number</label>
              <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Your Email</label>
              <input type="email" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Message Us</label>
              <textarea style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', height: '100px' }}></textarea>
            </div>
            <button type="submit" className="button">Submit</button>
          </form>
        </div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d108637.76026396327!2d139.60939059064128!3d35.707806978188415!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2sTokyo%2C%20Japan!5e0!3m2!1sen!2sus!4v1727785392221!5m2!1sen!2sus"
          style={{ width: '100%', height: '400px', border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
<Footer/>
    </div>
  );
}

export default Contact;
