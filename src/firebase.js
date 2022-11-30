import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCPEMb_I36tYLYqGApAv3ynKGb2oSGHxGA",
  authDomain: "rentinease-9439d.firebaseapp.com",
  projectId: "rentinease-9439d",
  storageBucket: "rentinease-9439d.appspot.com",
  messagingSenderId: "381587055284",
  appId: "1:381587055284:web:a50645cce65e64b4752de1",
  measurementId: "G-RH4NVXXMVV",
};

var app = 0;

// Initialize Firebase
if (firebase.getApps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.getApp();
}

const auth = getAuth();
const storage = getStorage(app);

export { app, auth, storage, getDatabase, ref, onValue, set };
