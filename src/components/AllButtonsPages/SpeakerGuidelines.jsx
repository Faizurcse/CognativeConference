import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

function SpeakerGuidelines({Props3}) {
  return (
    <div>
      <div style={{ backgroundColor: "var(--black)" }}>
        <Header />
      </div>

      <div style={styles.heroContainer}>
        <div style={styles.overlay}>
          <div style={styles.textContainer}>
            <h1 style={styles.heading}>{Props3}</h1>
          </div>
        </div>
      </div>

      <div style={styles.contentContainer}>
        <h2>Speaker Guidelines</h2>
        <p style={styles.paragraph}>
          Authors are requested to submit the abstract (250-300 words) and biography (80-100 words) along with a photograph showing a clear face in 250*250 size.
          Selected abstract submissions will be presented during oral sessions generally lasting for 3-4 hours. Authors will present their research/overview, etc., in a specific topic area, and presentations will be moderated by experts in the field.
        </p>
        <p style={styles.paragraph}>
          A scientific overview may be included in an oral abstract session, as appropriate, or a moderator may provide a brief transnational summary at the close of a session. Co-mediators will introduce speakers and facilitate audience questions.
        </p>
        
        <h3>Presentation Length</h3>
        <p style={styles.paragraph}>
          Oral presenters will be allocated 25 minutes for their presentation and 5 minutes for questions and answers. If the presentation exceeds 25 minutes, the moderator will shorten the Q&A period that follows the presentation.
          Our experience indicates that up to 20 slides is optimal, allowing 1 minute per slide. You may choose to use more than 20 slides, but please be sure to complete your presentation within the allocated 25 minutes. The content slides should give an overview of the research with conclusions and future research direction.
        </p>
        
        <h3>Slide Format</h3>
        <p style={styles.paragraph}>
          Prepare slides that clearly mention the abstract title, your name, university/hospital/company, and country. The conference name or logo should be added to the first slide of the PPT.
          Kindly use Microsoft PowerPoint Presentation to prepare the slides. All the speakers should prepare the PPT (PowerPoint Presentation) to present at the scheduled time.
          We request all presenters send the final PPT to the conference manager 7 days before the event. The PPT name should be the presenting speaker's name, and the same PPT will be available on the day of the event.
          If you are unable to send the PPT via email (when the file size exceeds limits), please use WeTransfer or any drive links from Google or Outlook. Please inform the conference manager once you send an email or share a link.
          Speakers must check their slides twice (content, images) and listen to audio if you include any.
        </p>
        
        <h2>Benefits of Joining Artificial Intelligence</h2>
        <ul style={styles.list}>
          <li>Networking Opportunities</li>
          <li>Knowledge Sharing</li>
          <li>Professional Development</li>
          <li>Exposure to Innovations</li>
          <li>Presentation Opportunities</li>
          <li>Brand Visibility</li>
          <li>Talent Acquisition</li>
          <li>Strategic Insights</li>
          <li>Partnerships and Collaborations</li>
          <li>Market Research</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}

const styles = {
  heroContainer: {
    position: "relative",
    height: "50vh",
    backgroundImage: "url(/speaker.png)",
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
  contentContainer: {
    padding: "20px",
    maxWidth: "1200px", // Adjusted width
    margin: "0 auto",
  },
  paragraph: {
    fontSize: "16px",
    marginBottom: "15px",
    lineHeight: "1.6", // Increased line height
  },
  list: {
    paddingLeft: "20px",
    fontSize: "16px",
    lineHeight: "1.6", // Increased line height
  },
  listItem: {
    marginBottom: "10px", // Adjusted spacing between list items
  },
};

export default SpeakerGuidelines;
