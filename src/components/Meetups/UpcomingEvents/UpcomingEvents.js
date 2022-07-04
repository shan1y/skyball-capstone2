import React, { useEffect, useState } from "react";
import "./UpcomingEvents.scss";
import {
  doc,
  onSnapshot,
  collection,
  query,
  where,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebase-config";

function UpcomingEvents({ userId }) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const colRef = collection(db, "events");
    const q = query(
      colRef,
      where("userRegistrations", "array-contains", userId)
    );
    onSnapshot(q, (snapshot) => {
      let unsortedEventsSchedule = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      let sortedEventsSchedule = unsortedEventsSchedule.sort(function (a, b) {
        return new Date(a.date.seconds) - new Date(b.date.seconds);
      });
      setEvents(sortedEventsSchedule);
    });
  }, [userId]);

  const Swal = require("sweetalert2");

  const handleEventDelete = (id, userRegistrations) => {
    Swal.fire({
      title: "Are you sure you want to unregister?",
      text: "Doing so will open your spot to someone else",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, unregister!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Success",
          "This event will no longer appear in your schedule",
          "success"
        );
        unRegister(id, userRegistrations);
      }
    });
  };

  const unRegister = async (id, userRegistrations) => {
    const docRef = doc(db, "events", id);
    await updateDoc(docRef, {
      userRegistrations: userRegistrations.filter((element) => {
        return userId !== element;
      }),
    });
  };

  console.log(events.length == 0);
  return (
    <div>
      {" "}
      <div className="user-profile">
        <div className="user-profile__left-container">
          <div className="user-profile__picture">
            <img alt=""></img>
          </div>
        </div>
        <div className="user-profile__right-container">
          <div className="user-profile__name">User Profile: {userId}</div>
          <div className="user-profile__stats">
            <div className="user-profile__stats-info">
              {`${events.length}  event registration(s)`}
            </div>
            <div className="user-profile__stats-info">0 created</div>
            <div className="user-profile__stats-info">0 following</div>
          </div>
        </div>
      </div>
      <h1 className="clinics__title">Upcoming Events</h1>
      <div className="sessions-container">
        {events.length === 0 && <p>You haven't registered for any events!</p>}
        {events.map((event) => (
          <div className="order" key={event.id}>
            <div className="order__card order__card--bottom-border">
              <div className="order__left">
                <img
                  alt="event associated"
                  className="event__image"
                  src={event.image}
                ></img>
              </div>
              <div className="event__left">
                <h2 className="event__title">{event.title}</h2>
                <div className="event__group-main-container">
                  <div className="event__group">
                    <h3 className="event__date">Organizer</h3>
                    <p className="event__skill">{event.organizer}</p>
                    <h3 className="event__date">Skill Level</h3>
                    <p className="event__skill">beginner</p>
                  </div>
                  <div className="event__group">
                    <h3 className="event__date">Date</h3>
                    <p className="event__skill">
                      {" "}
                      {new Date(event.date.seconds * 1000).toLocaleDateString(
                        undefined,
                        options
                      )}
                    </p>
                    <h3 className="event__date">Time</h3>
                    <p className="event__skill">
                      {" "}
                      {new Date(event.date.seconds * 1000).toLocaleTimeString(
                        "en-US",
                        {
                          timeZone: "America/New_York",
                        }
                      )}
                    </p>
                  </div>
                </div>
                <button
                  className="order__button"
                  onClick={() => {
                    handleEventDelete(event.id, event.userRegistrations);
                  }}
                >
                  Unregister
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingEvents;
