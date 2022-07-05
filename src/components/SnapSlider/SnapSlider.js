import "./SnapSlider.scss";
import sarah from "../../assets/images/sarah.jpg";
import hugo from "../../assets/images/hugo.jpeg";
import melissa from "../../assets/images/melissa.jpeg";

import React from "react";

function SnapSlider() {
  return (
    <>
      <div className="snap-slider">
        <img
          src={sarah}
          alt="this is sarah"
          className="snap-slider__image--2"
        />
        <img src={hugo} alt="this is hugo" className="snap-slider__image--1" />

        <img
          src={melissa}
          alt="this is Canadian Weather"
          className="snap-slider__image--3"
        />
      </div>
      <div className="slider__tablet-container">
        <div className="slider__coach-container">
          <img
            alt="this is sarah"
            src={sarah}
            className="slider__coach-img"
          ></img>
          <p className="slider__coach-qualifications">
            Beach Volleyball Olympian 2016 / 2020 and World Champion
          </p>
          <p className="slider__coach-description">Sarah Paravan</p>
        </div>
        <div className="slider__coach-container">
          <img
            src={melissa}
            alt="this is melissa"
            className="slider__coach-img"
          ></img>
          <p className="slider__coach-qualifications">
            Level 3 certified Beach Volleyball Coach
          </p>
          <p className="slider__coach-description"> Melissa Peredes </p>
        </div>
        <div className="slider__coach-container">
          <img
            alt="this is hugo"
            src={hugo}
            className="slider__coach-img"
          ></img>
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
