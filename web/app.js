function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "admin@bk.com" && password === "123456") {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("msg").style.color = "red";
        document.getElementById("msg").innerHTML = "Invalid Email or Password";
    }
}