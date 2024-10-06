import React from "react";
import "./WhyChoose.css"; // Ensure you have this CSS file linked

function WhyChoose() {
  return (
    <section className="whyChoose-wrapper">
      <div className="paddings innerWidth flexCenter whyChoose-container">
        <div className="flexCenter WhyChoose-text-container">
          <span className="primaryText choose-underLine">Why Choose Cognitive Tech Summit?</span>
          <div className="flexColStart WhyChoose-text-container-2">
            <span>
              <p className="secondaryText-2">&#11045;  Our focus is on fostering curiosity:</p>
              <p className="secondaryText-2 secondry-paragarapg">
              &#x21E8;  At the Cognitive Tech Summit, we promote exploration, discovery,
                and challenging existing paradigms to expand knowledge across
                various fields.
              </p>
            </span>

            <span>
              <p className="secondaryText-2">&#11045; We prioritize creating an inclusive environment:</p>
              <p className="secondaryText-2">
              &#x21E8;  We strive to create a welcoming space where individuals from
                diverse backgrounds can share their unique perspectives and
                contribute to impactful discussions.
              </p>
            </span>

            <span>
              <p className="secondaryText-2">&#11045; We emphasize active engagement:</p>
              <p className="secondaryText-2">
              &#x21E8;  Our programs go beyond passive learning, incorporating
                workshops, discussions, and networking opportunities to
                facilitate meaningful connections and collaborations.
              </p>
            </span>

            <span>
              <p className="secondaryText-2">&#11045; Access to expertise is our priority:</p>
              <p className="secondaryText-2">
              &#x21E8;  We provide access to renowned researchers, industry pioneers,
                and leading experts who share their valuable insights and engage
                in thought-provoking conversations.
              </p>
            </span>

            <span>
              <p className="secondaryText-2">&#11045; We are committed to excellence:</p>
              <p className="secondaryText-2">
              &#x21E8;  Our dedication is to ensure a seamless and rewarding experience,
                with every aspect of our summit meticulously organized and
                professionally executed.
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
