import React from "react";
import { Link } from "react-router-dom";
import SnapSlider from "../SnapSlider/SnapSlider";
import "./Clinics.scss";

function Clinics({ userId }) {
  return (
    <div className="clinics">
      <h1 className="clinics-section__title">Clinics</h1>
      <p className="clinics-section__description">
        Looking to imrpove your skills? Sign up for a clinic run by a seasoned
        and local volley ball player. You can also enjoy lessons, drills, and
        scrimmages at our volleyball clinics. All clinics are friendly and
        self-officiated with the option to choose from various skill levels.
      </p>
      <SnapSlider />
      <p className="clinics__coaches-description">
        Featured Coaches: Sarah Paravan, Hugo Rosso, Melissa Peredes
      </p>
      <Link to="/clinics">
        <p className="clinics__title--homepage">See clinics</p>
      </Link>
    </div>
  );
}

export default Clinics;
