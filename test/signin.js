var storedUserData = localStorage.getItem("userData");
var userData = storedUserData ? JSON.parse(storedUserData) : {};

function login() {
    var username = document.getElementById("id").value;
    var password = document.getElementById("pw").value;

    if (userData[username] && userData[username].password === password) {
        alert("로그인했습니다");
    } else {
        alert("아이디나 비밀번호가 틀립니다");
    }
}

function showUserData() {
    console.log(JSON.stringify(userData, null, 2));
}

function signup() {
    window.location.href = "signup.html";
}