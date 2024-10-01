import React from "react";
import { FaWifi, FaConciergeBell, FaSmokingBan, FaKey, FaUtensils, FaDumbbell, FaEnvelope, FaPaw,  FaBed } from 'react-icons/fa';
import { MdMeetingRoom } from 'react-icons/md';
import "./GenerativeVenueAttraction.css";

function VenueAttraction() {
  return (
    <section className="VenueAttraction-v-warpper">
      <div className="paddings innerWidth flexCenter VenueAttraction-v-container">
        <div className="flexCenter VenueAttraction-v-left">
          <div className="VenueAttraction-image-container">
            <img className="ai-VenueAttraction" src="GeneratvieVenue.jpg" alt="Error" />
          </div>
        </div>
        <div className="flexColStart VenueAttraction-v-right">
          <span className="primaryText">Venue Attraction</span>
          <span className="orangeText">Hotel Services & Amenities</span>
          <div className="secondaryText-2 VenueAttraction-LineHeight">
            <ul>
              <li><FaBed /> Connecting Rooms</li>
              <li><FaUtensils /> Hot breakfast</li>
              <li><FaWifi /> Free WiFi</li>
              <li><FaConciergeBell /> Concierge</li>
              <li><FaSmokingBan /> Non-smoking rooms</li>
              <li><FaKey /> Digital Key</li>
            </ul>
            <ul>
              <li><FaUtensils /> On-site restaurant</li>
              <li><FaDumbbell /> Fitness center</li>
              <li><FaEnvelope /> Express Mail</li>
              <li><FaPaw /> Pet-friendly rooms</li>
              <li><FaConciergeBell /> Room service</li>
              <li><MdMeetingRoom /> Meeting rooms</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VenueAttraction;
