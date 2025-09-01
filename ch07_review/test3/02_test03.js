const username = localStorage.getItem("username");

// 메시지 표시
if (username) {
  document.getElementById("welcome-message").textContent = `${username}님, 수고하셨습니다`;
}

function logout() {
  localStorage.removeItem("username"); 
  alert("로그아웃합니다");
  window.location.href = "../test2/02_test02.html";
}