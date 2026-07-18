function login(){

let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

if(email==="admin@bk.com" && password==="123456"){
    document.getElementById("msg").style.color="green";
    document.getElementById("msg").innerHTML="Login Successful";
}else{
    document.getElementById("msg").style.color="red";
    document.getElementById("msg").innerHTML="Invalid Login";
}

}