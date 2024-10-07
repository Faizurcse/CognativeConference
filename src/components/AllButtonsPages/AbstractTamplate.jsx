import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

// Import icons (you can use any icon library)
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

function AbstractTemplate({Props2}) {
  return (
    <div>
      <div style={{ backgroundColor: "var(--black)" }}>
        <Header />
      </div>

      <div style={styles.heroContainer}>
        <div style={styles.overlay}>
          <div style={styles.textContainer}>
            <h1 style={styles.heading}>
             {Props2}
            </h1>
            <p style={styles.subHeading}>Abstract Template</p>
            <a
              href="\Sample_Abstract_Template.docx"
              download
              style={styles.downloadButton}
            >
              Download Here
            </a>
          </div>
        </div>
      </div>

      {/* Flex container for form and forum cards */}
      <div style={styles.mainContent}>
        <div style={styles.formContainer}>
          <form style={styles.form}>
            <label style={styles.label}>
              Full Name
              <input
                type="text"
                name="fullName"
                style={styles.input}
                required
              />
            </label>
            <label style={styles.label}>
              Phone Number
              <input
                type="text"
                name="phone"
                placeholder="+1"
                style={styles.input}
                required
              />
            </label>
            <label style={styles.label}>
              Your Email
              <input type="email" name="email" style={styles.input} required />
            </label>
            <label style={styles.label}>
              Abstract Session
              <select name="abstractSession" style={styles.select} required>
                <option value="">—Please choose an option—</option>
                <option value="session1">Session 1</option>
                <option value="session2">Session 2</option>
                <option value="session3">Session 3</option>
              </select>
            </label>
            <label style={styles.label}>
              Abstract Type
              <select name="abstractType" style={styles.select} required>
                <option value="">—Please choose an option—</option>
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
                <option value="type3">Type 3</option>
              </select>
            </label>
            <label style={styles.label}>
              File Upload
              <input
                type="file"
                name="fileUpload"
                style={styles.input}
                required
              />
            </label>
            <button type="submit" style={styles.button}>
              Submit
            </button>
          </form>
        </div>

        <div style={styles.forumSection}>
          <h1 style={styles.forumHeading}>Presentation Forum</h1>
          <div style={styles.forumContainer}>
            {forums.map((forum, index) => (
              <div key={index} style={styles.forumCard}>
                <div style={styles.icon}>{forum.icon}</div>
                <h3 style={styles.forumName}>{forum.name}</h3>
              </div>
            ))}
          </div>
          <div style={styles.publicationsLink}>
            <a href="#">
              Journal Publications
              <br />
              Go to Publications Page.
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

const styles = {
  heroContainer: {
    position: "relative",
    height: "60vh",
    backgroundImage:
      "url('/abstract.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    textAlign: "center",
  },
  textContainer: {
    maxWidth: "600px",
    textAlign: "center",
  },
  heading: {
    fontSize: "36px",
    marginBottom: "10px",
  },
  subHeading: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  downloadButton: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "white",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "4px",
    textDecoration: "none",
    cursor: "pointer",
  },
  mainContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: "30px",
    backgroundColor: "#f9f9f9",
    flexWrap: "wrap",
  },
  formContainer: {
    flex: "1",
    maxWidth: "500px",
    marginBottom: "20px",
  },
  form: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  label: {
    display: "block",
    marginBottom: "10px",
    fontSize: "16px",
    color: "#333",
  },
  input: {
    padding: "10px",
    margin: "5px 0 15px 0",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    width: "100%",
    boxSizing: "border-box",
  },
  select: {
    padding: "10px",
    margin: "5px 0 15px 0",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    width: "100%",
    boxSizing: "border-box",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "white",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  forumSection: {
    flex: "2",
    maxWidth: "800px",
    textAlign: "center",
  },
  forumHeading: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  forumContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "15px",
    padding: "20px",
  },
  forumCard: {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    padding: "15px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    fontSize: "20px",
    marginBottom: "10px",
  },
  forumName: {
    fontSize: "16px",
    color: "#333",
  },
  publicationsLink: {
    marginTop: "20px",
    fontSize: "16px",
    color: "#007BFF",
    textDecoration: "none",
  },
  "@media (max-width: 768px)": {
    mainContent: {

        display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: "30px",
    backgroundColor: "#f9f9f9",
    flexWrap: "wrap",
    },

    heading: {
      fontSize: "28px",
    },
    subHeading: {
      fontSize: "18px",
    },
    downloadButton: {
      fontSize: "14px",
    },
    form: {
      padding: "20px",
    },
    button: {
      fontSize: "14px",
    },
    forumHeading: {
      fontSize: "20px",
    },
    forumName: {
      fontSize: "14px",
    },
  },
};

export default AbstractTemplate;
