import React, { useEffect, useState } from "react";
import MeetupsModal from "../Modals/MeetupsModal/MeetupsModal";
import { db } from "../../firebase-config";
import "./MeetupsContent.scss";
import { deleteDoc, doc } from "firebase/firestore";
import FooterComponent from "../FooterComponent/FooterComponent";

import { onSnapshot, collection } from "firebase/firestore";

function MeetupsContent({ userId }) {
  const [events, setEvents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedObj, setSelectedObj] = useState([]);
  let buttonVisible = false;

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const selectEvent = (id) => {
    let foundObj = events.find((event) => {
      return id === event.id;
    });
    setSelectedObj(foundObj);
    setModalOpen(true);
  };

  const Swal = require("sweetalert2");
  const handleDeleteClick = (eventIdentification) => {
    Swal.fire({
      title: "Are you sure you want to delete this event?",
      text: "This action cannot be reverted",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteEvent(eventIdentification);
      }
    });
  };

  const deleteEvent = async (eventIdentification) => {
    console.log(eventIdentification);
    const eventDoc = doc(db, "events", eventIdentification);
    try {
      await deleteDoc(eventDoc);
      fireSuccess();
    } catch (e) {
      console.log(e);
    }
  };

  const fireSuccess = async () => {
    await Swal.fire("Success", "This event has been deleted", "success");
  };

  useEffect(() => {
    onSnapshot(collection(db, "events"), (snapshot) => {
      let unsortedEvents = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      let sortedEvents = unsortedEvents.sort(function (a, b) {
        return new Date(a.date.seconds) - new Date(b.date.seconds);
      });
      setEvents(sortedEvents);
    });
  }, []);

  const addButton = (event) => {
    if (event.organizer === userId) {
      buttonVisible = true;
    } else {
      buttonVisible = false;
    }
  };
  return (
    <div>
      <div className="event-body">
        {modalOpen && (
          <MeetupsModal
            typeOfEvents="events"
            setOpenModal={setModalOpen}
            title={selectedObj.title}
            userRegistrations={selectedObj.userRegistrations}
            eventId={selectedObj.id}
            userId={userId}
          />
        )}
        <div className="event-register__title">Register for a local meetup</div>
        <div className="event">
          {events.map((event) => (
            <article className="event__card" key={event.id}>
              <div className="event__card--top">
                <div className="event__left">
                  <h2 className="event__title">{event.title}</h2>
                  <div className="event__group-main-container">
                    <div className="event__group">
                      <h3 className="event__date">Organizer</h3>
                      <p className="event__skill">{event.organizer}</p>
                      <h3 className="event__date">Skill Level</h3>
                      <p className="event__skill">beginner</p>
                      <button
                        className=" event__buttons-meetup--register"
                        onClick={() => {
                          selectEvent(event.id);
                        }}
                      >
                        Register
                      </button>
                      <div>{addButton(event)}</div>
                      {buttonVisible ? (
                        <button
                          onClick={() => {
                            handleDeleteClick(event.id);
                          }}
                          className=" event__buttons-meetup--delete"
                        >
                          Delete my event
                        </button>
                      ) : null}
                    </div>
                    <div className="event__group event__group--right">
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
                </div>
                <div className="order__left">
                  <img
                    alt="event associated"
                    className="event__image"
                    src={event.image}
                  ></img>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default MeetupsContent;
