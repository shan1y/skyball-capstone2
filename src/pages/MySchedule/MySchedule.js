import React from "react";
import "./MySchedule.scss";
import image from "../../assets/images/volleyball.jpg";
import ClinicsSessions from "../../components/Clinics/ClinicsSessions/ClinicsSessions";
import UpcomingEvents from "../../components/Meetups/UpcomingEvents/UpcomingEvents";
import FooterComponent from "../../components/FooterComponent/FooterComponent";

function MySchedule({ userId }) {
  return (
    <div>
      <div className="user-profile__for-footer">
        <UpcomingEvents userId={userId} />

        <h1 className="clinics__title">Upcoming Clinics</h1>
        <ClinicsSessions userId={userId} />
      </div>
      <FooterComponent />
    </div>
  );
}

export default MySchedule;
