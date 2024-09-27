import React from "react";
import { Swiper, SwiperSlide,useSwiper } from "swiper/react";
import "swiper/css";
import "./Card.css";
import { sliderSettings} from "../../utils/common.js";

import data from "../../utils/slider.json";
function Card() {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Upcoming Conferences</span>
        </div>
        <Swiper {...sliderSettings}>
            <SliderButtons/>
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="error" />
               

                <span className="secondaryText r-price">
                  <span>{card.date}</span>
                </span>
                <span style={{ color: "orange" }}>{card.place}</span>
                <span className="primaryText-2">{card.name}</span>
              
                <div className="flexCenter registerButton">
                  <button className="button-2">Register Now</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Card;

const SliderButtons = ()=>{
    const swiper = useSwiper();
    return(
        <div className="flexCenter r-button">
            <button onClick={()=>swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    )
}
