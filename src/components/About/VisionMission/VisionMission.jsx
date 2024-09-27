import React from 'react';
import "./VisionMission.css";

function VisionMission() {
  return (
    <section className="VisionMission-wrapper">
      <div className="innerWidth flexCenter VisionMission-container">
        <div className="flexColStart vision-left">
          <span className="primaryText mission-vission-underLine">
            Vision
          </span>
          <ul className='secondaryText-2 vision-mission-line-height'>
            <li>Establish the Cognitive Tech Summit as the premier global hub for cognitive technologies.</li>
            <li>Promote innovation, cooperation, and information sharing within the realm of cognitive technologies.</li>
            <li>Unite visionaries, professionals, scholars, and practitioners.</li>
            <li>Encourage developments that shape the future of artificial intelligence, machine learning, and related fields.</li>
            <li>Propel advancements in diverse sectors and enhance societal welfare.</li>
          </ul>
        </div>
        <div className="flexColStart mission-right">
          <span className='primaryText mission-vission-underLine'>
            Mission
          </span>
          <ul className='secondaryText-2 vision-mission-line-height'>
            <li>Present innovative research, advancements, and practical applications in cognitive technologies.</li>
            <li>Foster connections and collaborations among professionals, scholars, and industry experts.</li>
            <li>Encourage idea-sharing and implementation of best practices.</li>
            <li>Advocate for responsible AI development with a focus on ethical considerations.</li>
            <li>Ensure the beneficial use of cognitive technologies for all.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default VisionMission;
