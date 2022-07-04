import React, { useState } from "react";
import "./SeeSchedule.scss";
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";
import { db } from "../../../firebase-config";
import MeetupsModal from "../../../components/Modals/MeetupsModal/MeetupsModal";

function SeeSchedule({ selectedCoach, userId }) {
  const [openTable, setOpenTable] = useState(false);
  const [schedule, setSchedule] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedClinic, setSelectedClinic] = useState([]);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const openSchedule = (coachId) => {
    setOpenTable(!openTable);
    const colRef = collection(db, "clinics");
    const q = query(colRef, where("coachId", "==", coachId));
    onSnapshot(q, (snapshot) => {
      let unsortedSchedule = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      let sortedSchedule = unsortedSchedule.sort(function (a, b) {
        return new Date(a.date.seconds) - new Date(b.date.seconds);
      });
      setSchedule(sortedSchedule);
    });
  };

  const selectClinic = (clinicId) => {
    let foundObj = schedule.find((clinic) => {
      return clinicId === clinic.id;
    });
    setSelectedClinic(foundObj);
    setModalOpen(true);
  };

  return (
    <div>
      {modalOpen && (
        <MeetupsModal
          setOpenModal={setModalOpen}
          title={selectedClinic.title}
          userRegistrations={selectedClinic.userRegistrations}
          eventId={selectedClinic.id}
          userId={userId}
          typeOfEvents="clinics"
        />
      )}
      <button
        onClick={() => {
          openSchedule(selectedCoach);
        }}
        className="clinic__accordian"
      >
        See Schedule
      </button>
      <div className="clinic__accordian-content">
        {openTable ? (
          <div className="clinic__accordian-table">
            <div className="clinic">
              {schedule?.map((clinic) => {
                return (
                  <div className="clinic__accordian-row" key={clinic.id}>
                    <li className="clinic__accordian-dates">
                      {new Date(clinic.date.seconds * 1000).toLocaleTimeString(
                        undefined,
                        options
                      )}{" "}
                      EST
                    </li>
                    <button
                      onClick={() => {
                        selectClinic(clinic.id);
                      }}
                      className="clinic__accordian-button"
                    >
                      Register
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default SeeSchedule;
