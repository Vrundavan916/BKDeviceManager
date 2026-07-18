import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.registerDevice = async function () {
  try {
    await addDoc(collection(db, "devices"), {
      deviceName: "My Phone",
      status: "Online",
      battery: 100,
      createdAt: serverTimestamp()
    });

    alert("Device Registered Successfully!");
  } catch (e) {
    alert("Error: " + e.message);
  }
};