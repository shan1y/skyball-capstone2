import React from "react";
import "./MeetupsModal.scss";
import ReactDOM from "react-dom";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase-config";

function MeetupsModal({
  setOpenModal,
  title,
  userId,
  userRegistrations,
  eventId,
  typeOfEvents,
}) {
  const register = async (id, userRegistrations) => {
    const docRef = doc(db, typeOfEvents, eventId);
    await updateDoc(docRef, {
      userRegistrations: [...userRegistrations, userId],
    });
    setOpenModal(false);
    showSuccess();
  };

  const Swal = require("sweetalert2");

  const showSuccess = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Success!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return ReactDOM.createPortal(
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className="body">
          <p className="modal__confirm-text">
            Please confirm that you'd like to register for{" "}
            <span className="italics">{title}</span>
          </p>
        </div>
        <div className="footer-modal">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              register(userId, userRegistrations);
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default MeetupsModal;
