import React from 'react'
import "./Cybermediapartners.css"
function AImediaPartners() {
  return (
    <section className="c-wrapper ai-media-partners-container">
    <div className="paddings innerWidth c-container">
      <div className="c-head flexCenter">
        <span className="primaryText">Media Partners</span>
      </div>
    </div>
    <div className="paddings innerWidth flexCenter c-container">
      <div className="marquee-container">
        <div className="marquee">
          <img src="/img1.webp" alt="Image 1" />
          <img src="/ellevents.webp" alt="Image 2" />
          <img src="/inomics.webp" alt="Image 3" />
          <img src="/events-in-ammeric.webp" alt="Image 4" />
          {/* Duplicate images for seamless looping */}
          <img src="/img1.webp" alt="Image 1" />
          <img src="/ellevents.webp" alt="Image 2" />
          <img src="/inomics.webp" alt="Image 3" />
          <img src="/events-in-ammeric.webp" alt="Image 4" />
        </div>
      </div>
    </div>
    </section>
  )
}

export default AImediaPartners
