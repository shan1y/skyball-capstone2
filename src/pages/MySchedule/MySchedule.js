import React from "react";
import "./MySchedule.scss";
import image from "../../assets/images/volleyball.jpg";
import ClinicsSessions from "../../components/Clinics/ClinicsSessions/ClinicsSessions";
import UpcomingEvents from "../../components/Meetups/UpcomingEvents/UpcomingEvents";

function MySchedule({ userId }) {
  return (
    <div>
      <UpcomingEvents userId={userId} />

      <h1 className="clinics__title">Upcoming Clinics</h1>
      <ClinicsSessions userId={userId} />
    </div>
  );
}

export default MySchedule;
