import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import "./Abstarct.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import {
  FaChalkboardTeacher,
  FaUserGraduate,
  FaClipboardList,
  FaUsers,
  FaFileAlt,
  FaLaptopCode,
} from "react-icons/fa";

const forums = [
  { name: "Keynote Forum", icon: <FaChalkboardTeacher /> },
  { name: "Mini-Plenary Sessions", icon: <FaClipboardList /> },
  { name: "Distinguished Speakers Forum", icon: <FaUsers /> },
  { name: "Student Forum", icon: <FaUserGraduate /> },
  { name: "Poster Sessions", icon: <FaFileAlt /> },
  { name: "Young Researchers Forum", icon: <FaUsers /> },
  { name: "Educational Workshops", icon: <FaLaptopCode /> },
  { name: "Research Workshop", icon: <FaClipboardList /> },
  { name: "Corporate Workshop", icon: <FaUsers /> },
  { name: "Highlights Of The Day Sessions", icon: <FaClipboardList /> },
  { name: "Meet The Professor", icon: <FaUsers /> },
  { name: "Educational Sessions", icon: <FaLaptopCode /> },
  { name: "Training Programs", icon: <FaClipboardList /> },
];

function AbstractTemplate({ Props2 }) {
  return (
    <div>
      <div style={{ backgroundColor: "var(--black)" }}>
        <Header />
      </div>

      <div className="abst-template-hero-container">
        <div className="abst-template-overlay">
          <div className="abst-template-text-container">
            <h1 className="abst-template-heading">{Props2}</h1>
            <p className="abst-template-sub-heading">Abstract Template</p>
            <a
              href="\Sample_Abstract_Template.docx"
              download
              className="abst-template-download-button"
            >
              Download Here
            </a>
          </div>
        </div>
      </div>

      <div className="abst-template-main-content">
        <div className="abst-template-form-container">
          <form className="abst-template-form">
            <label className="abst-template-label">
              Full Name
              <input
                type="text"
                name="fullName"
                className="abst-template-input"
                required
              />
            </label>
            <label className="abst-template-label">
              Phone Number
              <PhoneInput
                country={"in"}
                value={""}
                onChange={(phone) => console.log(phone)}
                inputStyle={styles.phoneInput3}
              />
            </label>
            <label className="abst-template-label">
              Your Email
              <input
                type="email"
                name="email"
                className="abst-template-input"
                required
              />
            </label>
            <label className="abst-template-label">
              Abstract Session
              <select
                name="abstractSession"
                className="abst-template-select"
                required
              >
                <option value="">—Please choose an option—</option>
                <option value="AI & Big Data">AI & Big Data</option>
                <option value="AI & Robotics">AI & Robotics</option>
                <option value="Data science">Data science</option>
                <option value="Deep learning">Deep learning</option>
                <option value="Data Analytics">Data Analytics</option>
                <option value="Artificial Intelligence in Healthcare">
                  Artificial Intelligence in Healthcare
                </option>
                <option value="Internet of things">
                  Internet of things (IOT)
                </option>
                <option value="AI Finance">AI Finance</option>
                <option value="Human Robotics">Human Robotics</option>
                <option value="Cloud Robotics">Cloud Robotics</option>
                <option value="Advancements">
                  Advancements in Deep Learning Architectures
                </option>
                <option value="Role">
                  Role of AI & Robotics in industry & Bussiness
                </option>
              </select>
            </label>
            <label className="abst-template-label">
              Abstract Type
              <select
                name="abstractType"
                className="abst-template-select"
                required
              >
                <option value="">—Please choose an option—</option>
                <option value="Research">Keynote Presentation</option>
                <option value="Review">Oral Presentation</option>
                <option value="Case Study">E-Poster</option>
              </select>
            </label>
            <label className="abst-template-label">
              File Upload
              <input
                type="file"
                name="fileUpload"
                className="abst-template-input"
                required
              />
            </label>
            <button type="submit" className="abst-template-button">
              Submit
            </button>
          </form>
        </div>

        <div className="abst-template-forum-section">
          <h2 className="abst-template-forum-heading">
            <u>Abstract Forums</u>
          </h2>
          <div className="abst-template-forum-container">
            {forums.map((forum, index) => (
              <div key={index} className="abst-template-forum-card">
                <div className="abst-template-icon">{forum.icon}</div>
                <div className="abst-template-forum-name">{forum.name}</div>
              </div>
            ))}
          </div>
          <a href="#" className="abst-template-publications-link">
            Journal Publications
            <br />
            Go to Publications Page.
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

const styles = {
  phoneInput3: {
    width: "100%",
    padding: "22px",
    paddingLeft: "40px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    marginBottom: "15px",
  },
  phoneInput3Focus: {
    borderColor: "black",
    // outline: "none",
  },
};

export default AbstractTemplate;
