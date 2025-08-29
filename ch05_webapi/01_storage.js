// localStorage에 문자열 데이터와 배열 데이터를 저장하는 예시

if (typeof Storage !== 'undefined') { // Storage가 검색됬으니 문제 없음
  localStorage.setItem('title', 'review : 파이팅');
  /*
    .setItem() 라는 메서드가 있고 거기에 2개의 argument를 집어넣기
    두 번째 매개변수인 value 값은 원래 string 자료형이면 그대로
  */

  // 집어넣을 데이터 예시 - JS 배열인데 내부 element가 객체 -> String으로의 변환 과정 필요
  const users = [
    {
      id: 1,
      name: '김일'  
    }, {
      id: 2,
      name: '김이'
    },
  ];
  localStorage.setItem('users', JSON.stringify(users))
}


// localStorage 내에 있는 데이터를 조회하는 예시
if (Storage !== undefined) {
  console.log(localStorage.getItem('title'));
  console.log(localStorage.getItem);
  // 이 경우 26 / 27번 라인의 자료형 결과값들은 전부 string
  // 그래서 27번 라인을 string으로 쓸거면 별 문제가 없지만 굳이 객체정보로 저장한걸 string으로 쓸 리가 없으니 원상복구하는 method가 필요
  console.log(JSON.parse(localStorage.getItem('users')));

  const userFromLocal = JSON.parse(localStorage.getItem('users'));
  console.log(userFromLocal[0].name);
}

// 삭제 예시
localStorage.removeItem('title');