import styles from "./AddProperty.module.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import uuid4 from "uuid4";

import InputControl from "../../InputControl/InputControl";
import { auth, getDatabase, ref, set, storage } from "../../../firebase";
import {
  ref as reff,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";

function AddProperty() {
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    Ownername: "",
    Address: "",
    Placename: "",
    Price: "",
    Amenities: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [addButtonDisabled, setAddButtonDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const file = e.target[0]?.files[0];
    if (!file) return;
    const storageRef = reff(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);
        });
      }
    );
  };

  const handleSubmission = () => {
    if (!values.Ownername || !values.Address || !values.Placename) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setAddButtonDisabled(true);
    var pid = uuid4();
    const db = getDatabase();
    set(ref(db, "places/" + pid), {
      pid: pid,
      Ownername: values.Ownername,
      Address: values.Address,
      Placename: values.Placename,
      Price: values.Price,
      Amenities: values.Amenities,
    });
    navigate("/hooo");
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Enter Place Information</h1>

        <InputControl
          label="Owner Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, Ownername: event.target.value }))
          }
        />
        <InputControl
          label="Address"
          placeholder="Enter Address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, Address: event.target.value }))
          }
        />
        <InputControl
          label="Place Name"
          placeholder="Enter Place-Name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, Placename: event.target.value }))
          }
        />
        <InputControl
          label="Price Per-Night"
          placeholder="Enter Price"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, Price: event.target.value }))
          }
        />
        <InputControl
          label="Amenities"
          placeholder="Options"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, Amenities: event.target.value }))
          }
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={addButtonDisabled}>
            Add Place
          </button>
          <form onSubmit={handleSubmit} className="form">
            <input type="file" />
            <button type="submit">Upload</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProperty;
