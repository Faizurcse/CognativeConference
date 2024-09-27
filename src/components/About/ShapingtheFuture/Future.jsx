import React from "react";
import "./Future.css"; // Ensure you have this CSS file linked

function Future() {
  return (
    <section className="future-wrapper">
      <div className="paddings innerWidth future-container">
        <div className="flexCenter future-text-container">
          <span className="primaryText future-underLine">Join Us in Shaping the Future</span>
          <div className="flexColStart future-text-container-2">
            <p className="secondaryText-2">
            &#11045;  We welcome industry professionals, researchers, academicians,
              and enthusiasts to participate in shaping the future of artificial
              intelligence at the Cognitive Tech Summit. Explore our events,
              share your research, and join a community focused on innovation,
              collaboration, and knowledge advancement.
            </p>
            <p className="secondaryText-2">
            &#11045;  At the Cognitive Tech Summit, we encourage individuals to think
              outside the box, question conventional norms, and embrace new
              concepts. Join us in this thrilling adventure of exploration,
              learning, and teamwork. Let’s work together to push the limits of
              AI understanding and spark innovations that will impact future
              generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Future;
