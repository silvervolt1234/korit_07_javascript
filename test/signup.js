var storedUserData = localStorage.getItem("userData");
var userData = storedUserData ? JSON.parse(storedUserData) : {};

function signup() {
    var username = document.getElementById("id").value;
    var password = document.getElementById("pw").value;

    if (userData[username]) {
        alert("이미 존재하는 계정입니다.");
    } else if (!username.trim() && !password.trim()){
        alert("아이디/비밀번호를 입력하십시오");
    } else if (!username.trim()) {
        alert("아이디를 입력하십시오");
    } else if (!password.trim()) {
        alert("비밀번호를 입력하십시오");
    } else {
        userData[username] = { password: password };
        alert("회원가입 성공! 로그인 페이지로 이동합니다.");
        localStorage.setItem("userData", JSON.stringify(userData));
        window.location.href = "signin.html";
    }
}

function showUserData() {
    console.log(JSON.stringify(userData, null, 2));
}

function login() {
    window.location.href = "signin.html";
}