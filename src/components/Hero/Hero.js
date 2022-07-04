import React from "react";
import { Link } from "react-router-dom";
import "./Hero.scss";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__image">
        <div className="hero__text">
          <h1 className="hero__title">SkyBall Clinics & Meetups</h1>
          <p className="hero__body">
            The ultimate summer sport with sand between your toes! We will be at
            the mecca of beach volleyball in Ontario, Ashbridges Bay Beach /
            Woodbine Beach! <br />
          </p>
          <Link to="/myschedule">
            <button className="hero__button">Manage schedule</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
