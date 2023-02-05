import styles from "./AddProperty.module.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import uuid4 from "uuid4";

import InputControl from "../../InputControl/InputControl";
import { getDatabase, ref, set, storage } from "../../../firebase";
import { getAuth } from "firebase/auth";

import {
  ref as reff,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";

function AddProperty() {
  const [ownerName, setOwnerName] = useState("");
  const [address, setAddress] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pricePerNight, setPricePerNight] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
  const [amenities, setAmenities] = useState({});
  const [cancellationPolicies, setCancellationPolicies] = useState({});

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
    if (
      !ownerName ||
      !address ||
      !title ||
      !description ||
      !pricePerNight ||
      !imageUrls ||
      !amenities ||
      !cancellationPolicies
    ) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setAddButtonDisabled(true);
    var pid = uuid4();
    const db = getDatabase();
    set(ref(db, "places/" + pid), {
      pid: pid,
      OwnerName: ownerName,
      OwnerID: getAuth().currentUser.uid,
      Address: address,
      Title: title,
      Description: description,
      PricePerNight: pricePerNight,
      ImageURl: imageUrls,
      Amenities: amenities,
      CancellationPolicies: cancellationPolicies,
    });
    navigate("/hoo");
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Enter Place Information</h1>

        <InputControl
          label="Owner Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setOwnerName((prev) => ({ ...prev, OwnerName: event.target.value }))
          }
        />
        <InputControl
          label="Address"
          placeholder="Enter Address"
          onChange={(event) =>
            setAddress((prev) => ({ ...prev, Address: event.target.value }))
          }
        />
        <InputControl
          label="Place Name"
          placeholder="Enter Place-Name"
          onChange={(event) =>
            setTitle((prev) => ({ ...prev, Title: event.target.value }))
          }
        />
        <InputControl
          label="Description"
          placeholder="Enter Description"
          onChange={(event) =>
            setDescription((prev) => ({
              ...prev,
              Description: event.target.value,
            }))
          }
        />
        <InputControl
          label="Price Per-Night"
          placeholder="Enter Price"
          onChange={(event) =>
            setPricePerNight((prev) => ({
              ...prev,
              PricePerNight: event.target.value,
            }))
          }
        />
        <InputControl
          label="ImageURL"
          placeholder="Enter Image URL"
          onChange={(event) =>
            setImageUrls((prev) => ({
              ...prev,
              ImageURl: event.target.value,
            }))
          }
        />
        <InputControl
          label="Amenities"
          placeholder="Options"
          onChange={(event) =>
            setAmenities((prev) => ({
              ...prev,
              Amenities: event.target.value,
            }))
          }
        />
        <InputControl
          label="Cancellation Policy"
          placeholder="write cancellation policy"
          onChange={(event) =>
            setCancellationPolicies((prev) => ({
              ...prev,
              CancellationPolicies: event.target.value,
            }))
          }
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>

          <form onSubmit={handleSubmit} className="form">
            <input type="file" />
            <button type="submit">Upload</button>
          </form>
          <button onClick={handleSubmission} disabled={addButtonDisabled}>
            Add Place
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProperty;
