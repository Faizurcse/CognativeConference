import React from "react";
import "./AboutComponents2.css";

function AboutComponents2() {
  return (
    <section className="About-2-v-warpper">
      <div className="paddings innerWidth flexCenter About-2-v-container">
        <div className="flexCenter About-2-v-left">
          <div className="About-2-image-container ">
            <img
              src="https://cdn.pixabay.com/photo/2024/05/22/10/56/ai-generated-8780351_640.png"
              alt="Error"
            />
          </div>
        </div>
        <div className="flexColStart About-2-v-right">
          <span className="orangeText">Exhibitions and Demos</span>
          <span className="primaryText About-heading">About Cognitive tech Summit</span>
          <p className="secondaryText-2 about-2-LineHeight">
            The Cognitive Tech Summit is an event dedicated to exploring the
            latest advancements and applications of cognitive technologies,
            including artificial intelligence (AI), machine learning (ML),
            natural language processing (NLP), and other related fields. It
            features keynote presentations, panel discussions, and workshops led
            by industry experts, researchers, and practitioners. Topics often
            include the impact of cognitive technologies on various industries
            such as healthcare, finance, and manufacturing, emerging trends in
            AI and ML, ethical considerations and responsible AI development,
            and case studies showcasing successful implementations. The summit
            serves as a platform for knowledge exchange, collaboration, and
            innovation, aiming to advance the understanding and utilization of
            cognitive technologies. Specific details about upcoming events, such
            as dates, location, and speakers, are typically available on the
            official website or through industry announcements.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutComponents2;
