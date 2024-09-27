import React from "react";
import "./Area.css";
function Area() {
  return (
    <section className=" area-wrapper">
      <div className="paddings innerWidth flexCenter area-container">
        <div className="flexCenter area-text-container">
          <span className="primaryText area-underLine">Area of Focus</span>
          <div className="flexColStart area-text-container-2">
            <p className="flexColStart secondaryText-2 " >
            &#11045; The Cognitive Tech Summit is dedicated to artificial
              intelligence, covering AI research and development, AI in
              healthcare, AI in industry, ethics and responsible AI, and AI’s
              impact on society.
            </p>
            <p className="flexColStart secondaryText-2 ">
            &#11045; The summit delves into groundbreaking research in AI
              disciplines like machine learning, natural language processing,
              and computer vision, as well as cutting-edge advancements in AI
              applications for medical research and disease prevention.
            </p>
            <p className="flexColStart secondaryText-2 ">
            &#11045; It also examines the transformative impact of AI on industries
              such as finance, manufacturing, and logistics, while engaging in
              critical discussions on the ethical considerations and responsible
              development of AI technologies.
            </p>
            <p className="flexColStart secondaryText-2 ">
            &#11045; Furthermore, the summit explores the broader implications of AI
              on education, social justice, global development, and the future
              of human interactions, ensuring that AI benefits society as a
              whole.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Area;
