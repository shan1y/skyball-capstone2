import "./SnapSlider.scss";
import sarah from "../../assets/images/sarah.jpg";
import hugo from "../../assets/images/hugo.jpeg";
import melissa from "../../assets/images/melissa.jpeg";

import React from "react";

function SnapSlider() {
  return (
    <>
      <div className="snap-slider">
        <img src={sarah} alt="Open Account" className="snap-slider__image--2" />
        <img
          src={hugo}
          alt="Booking Appointment"
          className="snap-slider__image--1"
        />

        <img
          src={melissa}
          alt="Canadian Weather"
          className="snap-slider__image--3"
        />
      </div>
      <div className="slider__tablet-container">
        <div className="slider__coach-container">
          <img src={sarah} className="slider__coach-img"></img>
          <p className="slider__coach-qualifications">
            Beach Volleyball Olympian 2016 / 2020 and World Champion
          </p>
          <p className="slider__coach-description">Sarah Paravan</p>
        </div>
        <div className="slider__coach-container">
          <img src={melissa} className="slider__coach-img"></img>{" "}
          <p className="slider__coach-qualifications">
            Level 3 certified Beach Volleyball Coach
          </p>
          <p className="slider__coach-description"> Melissa Peredes </p>
        </div>
        <div className="slider__coach-container">
          <img src={hugo} className="slider__coach-img"></img>
          <p className="slider__coach-qualifications">
            20+ years experience in beach volleyball, accredited professional
            beach vball coach with 15+yrs of coaching experience
          </p>
          <p className="slider__coach-description"> Hugo Rosso </p>
        </div>
      </div>
    </>
  );
}

export default SnapSlider;
