import React from "react";
import "./CyberStyle2025.css";
function Cyber2025() {
  return (
    <section className="conference-2025-v-warpper">
      <div className="paddings innerWidth flexCenter conference-2025-v-container">
        <div className="flexCenter conference-2025-v-left">
          <div className="conference-2025-image-container">
            <img className="ai-confernce-2025" src="cyberSecurity.jpeg" alt="Error" />
          </div>
        </div>
        <div className="flexColStart conference-2025-v-right">
          <span className="primaryText">AI Cyber Security <br /> Conference - 2025</span>
          <p className="secondaryText-2 conference-2025-LineHeight">
            Join us for the AI Cyber Security Conference on June 02-03, 2025, in
            Tokyo, Japan. This AI summit, themed “Shaping the Future: New Ideas
            and Uses in AI,” brings together global experts to talk about the
            newest AI technologies. Attendees can join research talks,
            workshops, and hands-on lessons. This global AI Cyber Security
            Summit will cover subjects like artificial general intelligence,
            chatbots, convolutional neural networks, and deepfakes. The event
            lineup includes the Cyber AI & Automation, chatbots, deepfakes,
            Responsible AI Summit, and Big Data Conference. Both professionals
            and beginners in AI and machine learning will gain practical
            information and experience from this global AI conference. At one of
            Japan’s most anticipated AI events, don’t pass up the opportunity to
            network with the international AI community and learn about the
            direction artificial intelligence is taking.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Cyber2025;
