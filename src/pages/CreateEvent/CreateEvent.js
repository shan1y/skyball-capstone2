import React, { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import "./CreateEvent.scss";
import { storage } from "../../firebase-config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { FaCheckCircle } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import FooterComponent from "../../components/FooterComponent/FooterComponent";

function CreateEvent({ userId }) {
  const history = useHistory();
  const [newTitle, setNewTitle] = useState("");
  const [newSkill, setNewSkill] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newDate, setNewDate] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const eventsCreateCollectionRef = collection(db, "events");
  const [imageName, setImageName] = useState([]);
  const [uploadError, setUploadError] = useState(false);

  const createEvent = async (event) => {
    event.preventDefault();
    console.log(imageName);
    await addDoc(eventsCreateCollectionRef, {
      title: newTitle,
      skill: newSkill,
      description: newDescription,
      date: Timestamp.fromDate(new Date(newDate)),
      image: imageName,
      organizer: userId,
      userRegistrations: [],
    });
    await fireSuccess();
  };

  const submitImageUpload = (event) => {
    setImageUpload(event.target.files[0]);
  };

  useEffect(() => {
    uploadImage();
  }, [imageUpload]);

  const uploadImage = () => {
    console.log(imageUpload);
    if (imageUpload == null) return;
    setUploadError(true);
    const imageName = `/images/${imageUpload.name + v4()}`;
    const imageRef = ref(storage, imageName);
    uploadBytes(imageRef, imageUpload).then(() => {
      getImageLink(imageRef);
    });
  };

  const getImageLink = (imageRef) => {
    console.log(imageRef);
    getDownloadURL(imageRef).then((url) => {
      setImageName(url);
    });
  };
  const Swal = require("sweetalert2");
  const fireSuccess = () => {
    Swal.fire("Success", "Event has been created", "success");
    history.push("/");
  };

  return (
    <>
      <div className="create-event-body">
        <h1 className="create-event__title">Create a Public Meetup</h1>
        <div className="create-event__form create-event__form--upload">
          <label htmlFor="file-upload" className="custom-file-upload">
            Choose Image
          </label>
          <input
            required
            id="file-upload"
            type="file"
            onChange={(event) => {
              submitImageUpload(event);
            }}
          />
          {!uploadError && (
            <p className="custom-file-upload-error">No file selected</p>
          )}
          {uploadError && (
            <div className="create-event__form--upload-icons">
              <p className="custom-file-upload-success">success</p>
              <FaCheckCircle />
            </div>
          )}
        </div>

        <form className="create-event__form" onSubmit={createEvent}>
          <label className="create-event__form-label">Meetup Title</label>
          <input
            required
            className="create-event__form-input"
            placeholder="Title"
            onChange={(event) => {
              setNewTitle(event.target.value);
            }}
          ></input>
          <label>Skill Level</label>
          <input
            required
            className="create-event__form-input"
            placeholder="Skill"
            onChange={(event) => {
              setNewSkill(event.target.value);
            }}
          ></input>
          <label className="create-event__form-label">Meetup Description</label>
          <input
            required
            className="create-event__form-input"
            placeholder="Description"
            onChange={(event) => {
              setNewDescription(event.target.value);
            }}
          ></input>
          <label className="create-event__form-label">Meetup Date & Time</label>
          <input
            required
            className="create-event__form-input create-event__form-input--date"
            type="datetime-local"
            id="meeting-time"
            name="meeting-time"
            onChange={(event) => {
              setNewDate(event.target.value);
              console.log(event.target.value);
            }}
          />

          <button className="create-event__form-button">Create Event</button>
        </form>
      </div>
      <FooterComponent />
    </>
  );
}

export default CreateEvent;
