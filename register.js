import { auth, db } from "./firebase.js";

import {
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  doc,
  setDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.register = async function () {

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("msg");

  try {

    const userCredential =
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

    await setDoc(
      doc(db, "users", userCredential.user.uid),
      {
        name: name,
        email: email,
        role: "user",
        createdAt: serverTimestamp()
      }
    );

    msg.innerHTML = "Registration Successful";

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);

  } catch (e) {
    msg.innerHTML = e.message;
  }

}