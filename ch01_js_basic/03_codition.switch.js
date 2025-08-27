let date = new Date();    // Java의 객체 생성 방식
let day = date.getDay();  // 객체명.메서드명()의 결과값을 day 변수에 대입
let dayName = "";
/* 
  일요일 = 0, 월요일 = 1, ... 토요일 = 6
*/
switch(day) {
  case 0: 
    dayName="일요일";
    break;
  case 1: 
    dayName="월요일";
    break;
  case 2: 
    dayName="화요일";
    break;
  case 3: 
    dayName="수요일";
    break;
  case 4: 
    dayName="목요일";
    break;
  case 5: 
    dayName="금요일";
    break;
  case 6: 
    dayName="토요일";
    break;
  default:
    dayName="아무 결과가 없습니다";
    break;
}
console.log('오늘은 ' + dayName + '입니다.')