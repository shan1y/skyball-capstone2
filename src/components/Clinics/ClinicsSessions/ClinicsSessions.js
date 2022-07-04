import React, { useEffect, useState } from "react";
import "./ClinicsSessions.scss";
import {
  doc,
  onSnapshot,
  collection,
  query,
  where,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebase-config";

function ClinicsSessions({ userId }) {
  const [clinics, setClinics] = useState([]);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  useEffect(() => {
    const colRef = collection(db, "clinics");
    const q = query(
      colRef,
      where("userRegistrations", "array-contains", userId)
    );
    onSnapshot(q, (snapshot) => {
      let unsortedClinics = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      let sortedClinics = unsortedClinics.sort(function (a, b) {
        return new Date(a.date.seconds) - new Date(b.date.seconds);
      });
      setClinics(sortedClinics);
    });
  }, [userId]);

  const Swal = require("sweetalert2");
  const handleDeleteClick = (id, userRegistrations) => {
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
    console.log(id);
    console.log(userRegistrations);
    const docRef = doc(db, "clinics", id);
    await updateDoc(docRef, {
      userRegistrations: userRegistrations.filter((element) => {
        return userId !== element;
      }),
    });
  };

  return (
    <div className="sessions-container">
      <div className="sessions-container__col-top"></div>
      <div className="sessions__main-container">
        {clinics.length === 0 && <p>You haven't registered for any clinics!</p>}
        {clinics.map((event) => (
          <article className="clinic__card" key={event.id}>
            <div className="sessions-container__bottom">
              <div className="upcoming-session__container">
                <div className="upcoming-session__label">Date</div>
                <div className="upcoming-session__skill">
                  {new Date(event.date.seconds * 1000).toLocaleDateString(
                    undefined,
                    options
                  )}
                </div>
                <div className="upcoming-session__label">Time</div>
                <div className="upcoming-session__skill">
                  {new Date(event.date.seconds * 1000).toLocaleTimeString(
                    "en-US",
                    {
                      timeZone: "America/New_York",
                    }
                  )}
                  EST
                </div>
                <div className="upcoming-session__label">Coach</div>
                <div className="upcoming-session__skill">{event.coach}</div>
                <button
                  className="upcoming-session__unregister"
                  onClick={() => {
                    handleDeleteClick(event.id, event.userRegistrations);
                  }}
                >
                  Unregister
                </button>
                <div className="upcoming-session__divider"></div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default ClinicsSessions;
