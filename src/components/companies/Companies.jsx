import React from "react";
import "./Companies.css";
function Companies() {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth c-container">
        <div className="c-head flexColStart">
          <span className="primaryText">Media Partners</span>
        </div>
      </div>
      <div className="paddings innerWidth flexCenter c-container">
      <div className="marquee-container">
      <marquee className="marquee">
        <img src="/img1.webp" alt="Image 1" />
        <img src="/ellevents.webp" alt="Image 2" />
        <img src="/inomics.webp" alt="Image 3" />
        <img src="/events-in-ammeric.webp" alt="Image 4" />
        
      </marquee>
    </div>
      </div>
    </section>
  );
}

export default Companies;

{
  /* <section className="r-wrapper">
<div className="paddings innerWidth r-container">
  <div className="r-head flexColStart">
    <span className="orangeText">Best Choices</span>
    <span className="primaryText">Upcoming Conferences</span>
  </div>
</div>
</section> */
}
