import React, { useState, useEffect } from "react";
import "./ClinicsPage.scss";
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";
import { db } from "../../firebase-config";
import SeeSchedule from "./SeeSchedule/SeeSchedule";
function ClinicsPage({ userId }) {
  const [coaches, setCoaches] = useState([]);

  useEffect(() => {
    const colRef = collection(db, "coaches");
    const q = query(colRef);
    onSnapshot(q, (snapshot) => {
      setCoaches(
        snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    });
  }, []);

  return (
    <div className="clinic">
      <div className="clinic__titles">
        <h2 className="clinic__register-title">
          Register for Beach Volleyball Clinics
        </h2>
        <p className="clinic__register-description">
          Sign up for one (or many!) beach volleyball clinics offered by local
          coaches, and improve your skills in a group setting.
        </p>
      </div>
      <div className="clinic__greater-container">
        {coaches &&
          coaches.map((coach) => (
            <div className="clinic__container" key={coach.id}>
              <div className="clinic__mobile-container">
                <div className="clinic__image-container">
                  <img src={coach.image} className="clinic__image"></img>
                </div>
                <div className="clinic__info-container">
                  <h3>{coach.name}</h3>
                  <div className="clinic__info"> {coach.qualifications}</div>
                </div>
              </div>
              <div className="clinic__description-container">
                <div className="clinic__description">{coach.description}</div>
                <SeeSchedule userId={userId} selectedCoach={coach.coachId} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ClinicsPage;
