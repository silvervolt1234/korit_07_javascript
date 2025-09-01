var storedUserData = localStorage.getItem("userData");
var userData = storedUserData ? JSON.parse(storedUserData) : {};

function login() {
    var username = document.getElementById("id").value;
    var password = document.getElementById("pw").value;

    if (userData[username] && userData[username].password === password) {
        alert("로그인했습니다");
        localStorage.setItem("username", username);
        window.location.href = "../test3/02_test03.html";
    } else {
        alert("아이디나 비밀번호가 틀립니다");
    }
}

function showUserData() {
    console.log(JSON.stringify(userData, null, 2));
}

function signup() {
    window.location.href = "../test1/02_test01.html";
}

function idpw() {
    window.location.href = "../test4/02_test04.html";
}