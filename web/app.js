import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

window.login = async function () {

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const msg = document.getElementById("msg");

    try {
        await signInWithEmailAndPassword(auth, email, password);

        msg.style.color = "green";
        msg.innerHTML = "Login Successful";

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);

    } catch (error) {
        msg.style.color = "red";
        msg.innerHTML = error.message;
    }

}