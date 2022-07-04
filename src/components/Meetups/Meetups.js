import React from "react";
import "./Meetups.scss";
import volleyball from "../../assets/images/volleyball.jpg";
import MeetupsContent from "../MeetupsContent/MeetupsContent";

function Meetups({ userId }) {
  return (
    <div className="meetups__body">
      <div className="meetups__container">
        <img
          alt="associated event"
          src={volleyball}
          className="meetups__top-photo"
        />
        <div className="meetups__card">
          <h2>Local Meetups</h2>
          <p className="meetups__card-body">
            Participate in clinics for one of the fastest growing sports this
            summer with verified, local coaches.
          </p>
          <p className="meetups__card-body">
            Or, checkout the public events, organized by passionate volleyball
            players at all skill levels!
          </p>
        </div>
      </div>
      <MeetupsContent userId={userId} />
    </div>
  );
}

export default Meetups;
