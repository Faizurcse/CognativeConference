import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const BroucherDownload = ({Props1}) => {
  return (
    <div>
      <div style={{ backgroundColor: "var(--black)" }}>
        <Header />
      </div>

      <div style={styles.heroContainer}>
        <div style={styles.overlay}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>{Props1}</h1>
          </div>
        </div>
      </div>

      <div style={styles.contactContainer}>
        <div style={styles.formContainer}>
          {/* <h1 style={styles.heading}>Contact Us</h1> */}
          <form style={styles.form}>
            <label style={styles.label}>
              Your Name
              <input type="text" name="name" style={styles.input} />
            </label>
            <label style={styles.label}>
              Phone Number
              <PhoneInput
                country={'in'}
                value={''}
                onChange={phone => console.log(phone)}
                inputStyle={styles.phoneInput}
              />
            </label>
            <label  style={styles.emailLabel}>
              Your Email
              <input type="email" name="email" style={styles.input} />
            </label>
            <label style={styles.label}>
              Message Us
              <textarea
                name="message"
                style={{ ...styles.input, height: "100px" }}
              />
            </label>
            <button type="submit" style={styles.button}>
              Submit
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const styles = {
  heroContainer: {
    position: "relative",
    height: "60vh",
    backgroundImage:
      "url('/Broucher.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
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
  },
  heroContent: {
    color: "white",
    textAlign: "center",
  },
  heroTitle: {
    fontSize: "36px",
    fontWeight: "bold",
  },
  contactContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
  },
  formContainer: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "8px",
    width: "90%",
    maxWidth: "800px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
  },
  heading: {
    marginBottom: "20px",
    fontSize: "24px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  emailLabel:{
    marginTop: "15px",
    fontSize: "16px",
    color: "#333",
    textAlign: "left",
  },
  label: {
    marginBottom: "15px",
    fontSize: "16px",
    color: "#333",
    textAlign: "left",
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
  phoneInput: {
    width: "100%",
    padding: "22px",
    paddingLeft:"40px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    marginBottom: "15px",
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
};

export default BroucherDownload;
