// Template Literals

function hello2(name) {
  console.log(`Hello ${name}. 환영합니다!`);
}

hello2('김일');

// Object Literal Syntax Extension

// 12번 라인의 변수명과
let type = 'studernt';
let score = {
  // 15번 라인의 [] 값이 동일해야함
  [type]: 'Josh',
  score: 92,
};

console.log(score.student)

/*
  [type]으로 작성했지만 실제 property의 key 값은 'student'
*/

// Spread 연산자

let arr1 = [4, 5, 6];
let arr2 = [1, 2, 3];

// 결과값이 [1,2,3,4,5,6]으로 나오게 하렴녀
let arr3 = arr2.concat(arr1);
console.log(arr3);
// 과 같은 방법이 있고

// spread를 활용하게 됬을 때
let arr4 = [...arr2, ... arr1];
console.log(arr4);
// 최중요부분
/*
  ...arr2와 같이 작성하면 arr2라는 배열 자체가 들어가는 것이 아닌 배열 내부의 element를 하나씩 가지고 온다고 생각하는게 원활함

  즉 let arr4 = [...arr2, ... arr1];는 외부가 []가 있는걸로 보면
  새로 배열을 생성하거고 거기의 내부에 arr2의 element들을 순서대로 집어넣고
  그 다음 arr1의 element들을 순서대로 넣어서 완성했다고 해석
*/

function getPerson() {
  return {
    fName: 'John',
    lName: 'Doe',
    age: 20,
    email: 'a@test.com',
    city: 'New York',
    country: 'USA',
  };
};

let {fName, lName} = getPerson;

// 사용하려는 데이터가 저장되어있는 key 이름만 정의하면 해당 키를 갖는 값을 바로 사용 가능
// 즉 {} 내의 요소들은 객체의 key과 같아야 함

console.log(fName); // 결과값 : John
console.log(lName); // 결과값 : Doe

let person = getPerson(); // return값이 JS 객체이므로 person은 JS객체의 객체명

// 여태까지 방식은 객체명.key 혹은 객체명.['key']여야 했지만
console.log(person.fName);
console.log(person.lName);

// 객체 구조분해를 쓰면 필요한 key-value만 추출 가능

function displayFullName({fName, lName}) {

  console.log(`${fName} ${lName}`);
}

displayFullName(getPerson());

function getScores() {
  return [ 70, 80, 90 ];
}

let scores = getScores();

let x = scores[0], y = scores[1], z = scores[2];

let [ x1, y1, z1 ] = getScores();

console.log(x1);
console.log(y1);
console.log(z1);

/*
  이상의 개념은 react 및 eventhandler 관련 부분에서 자주 사용
 */