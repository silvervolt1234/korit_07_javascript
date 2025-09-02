var storedUserData = localStorage.getItem("userData");
var userData = storedUserData ? JSON.parse(storedUserData) : {};

function login() {
    var username = document.getElementById("id").value;
    var password = document.getElementById("pw").value;

    if (userData[username] && userData[username].password === password) {
        alert("로그인 성공");
    } else {
        alert("로그인 실패");
    }
}

function showUserData() {
    console.log(JSON.stringify(userData, null, 2));
}

function signup() {
    window.location.href = "signup.html";
}