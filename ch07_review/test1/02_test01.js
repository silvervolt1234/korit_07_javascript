var storedUserData = localStorage.getItem("userData");
var userData = storedUserData ? JSON.parse(storedUserData) : {};

function signup() {
    var username = document.getElementById("id").value;
    var password = document.getElementById("pw").value;
    var passwordcheck = document.getElementById("pwck").value;

    if (userData[username]) {
        alert("이미 존재하는 계정입니다.");
    } else if (!username.trim() && !password.trim() && !passwordcheck.trim()){
        alert("아이디/비밀번호를 입력하십시오");
    } else if (!username.trim()) {
        alert("아이디를 입력하십시오");
    } else if (!password.trim()) {
        alert("비밀번호를 입력하십시오");
    } else if (!passwordcheck.trim()) {
        alert("비밀번호를 재입력하십시오");
    } else if (password != passwordcheck) {
        alert("비밀번호가 다릅니다");
    } else {
        userData[username] = { password: password };
        alert("회원가입이 완료되었습니다");
        localStorage.setItem("userData", JSON.stringify(userData));
        window.location.href = "../test2/02_test02.html";
    }
}

function showUserData() {
    console.log(JSON.stringify(userData, null, 2));
}

function login() {
    window.location.href = "../test2/02_test02.html";
}