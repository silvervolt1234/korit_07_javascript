/*
  7세 이하 - 0원
  8세 이상 13세 이하 - 450원
  14세 이상 19세 이하 -720원
  20세 이상 - 1200원
  70세 이상 - 0원
  에 해당하는 if문 작성

  실행 예
  12 살의 버스 요금은 450원 입니다.
*/

let age = 12; //변수 선언 및 초기화
let busFare = 0;
if (age <= 7) {
  busFare = 0
} else if (age <= 13) {
  busFare = 450
} else if (age <= 19) {
  busFare = 720
} else if (age <= 69) {
  busFare = 1200
} else {
  busFare = 0
}
console.log(age + " 살의 버스 요금은 " + busFare +"원입니다.");