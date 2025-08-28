// 빈 객체 생성
let person = new Object;

// 멤버 설정
person.firstName = "John";
person.lastName = "Doe";
person.age = 30;
person.getFullName = function () {
  return this.firstName + " " + this.lastName;
};
/*
  8번 라인에 대한 해석을 위해서는 함수 표현식 관련 부분을 알아야 한다

  JS에서는 함수를 변수에 저장 가능. 그래서 객체명.함수명()으로 호출을 하게 되기에 method
*/
console.log(person.getFullName());
// 결과값 : John Doe

// String-indexOf()
let str = '일이삼사오육칠팔구 십십일';
let emptySpace = str.indexOf('십');
console.log(emptySpace);
let lastTen = str.lastIndexOf('십');
console.log(lastTen);

// String-slice()
let str2 = "Apple, Banana, Kiwi";
let result2 = str2.slice(7, 12);
let result3 = str2.slice(7, 13);
console.log(result2);   // 결과값 : Banan
console.log(result3);   // 결과값 : Banana
/*
  주의할 점은 한계값 바로 앞까지만 불러와서 result2를 완전한 단어로 착각 가능

  즉 slice()의 두 번째 매개변수를 for문에서 한계값 설정할 때 이상/이하보단 초과/미만을 적용하는 경우가 많다
*/
let result4 = str2.slice(7);
console.log(result4);   // 결과값 : Banana, Kiwi
/*
  매개변수를 하나만 지정했을 경우 그 시작 인데스부터 문자열 끝까지 출력

  마이너스 인덱스
  맨 만지막 문자열의 index를 -1로 잡고 앞으로 올때마다 -1씩 더하기
*/
let result5 = str2.slice(-12);
console.log(result5);   // 결과값 : Banana, Kiwi
/*
  굳이 마이너스 인덱스를 써야하는 이유

  자동차 차량 번호판
  12일5678
  370수5690

  7번지로 출력하려면 12일5678의 경우 index number 7이 없어서 오류 발생. -1을 쓰면 해결
*/
// String-substring()
let result6 = str2.substring(7, 13);  
console.log(result6);   // 결과값 : Banana
// 마이너스 인덱스를 지원하지 않아 결과값이 예상과 다름
// let result7 = str2.substring(-12);  
// console.log(result7);  // 결과값 : Apple, Banana, Kiwi

// String-substr()
let result8 = str2.substr(0, 5);    
console.log(result8);   // 결과값 : Apple
let result9 = str2.substr(-12);   
console.log(result9);   // 결과값 : Banana, Kiwi

let stc = '부산광역시 부산진구에 오신것을 환영합니다';   
let replcedStc = stc.replace('부산', '서울');
console.log(replcedStc);   
// 결과값 : 서울광역시 부산진구에 오신것을 환영합니다
// 특정 문자열의 첫 값을 교체

let eStc = 'Please visit Seoul and Seoul';
let rpdStc = eStc.replace('SEOUL', 'BUSAN');
console.log(rpdStc);
// 결과값 : Please visit Seoul and Seoul
// 유니코드로 대문자와 소문자 값이 다르기에 대소문자도 구분해야 replace() 적용

let rpdStc2 = eStc.replace(/SEOUL/i, 'Busan');
console.log(rpdStc2);
// 결과값 : Please visit Busan and Seoul
/*
  81번 라인의 경우 i(insensetive)를 이용해 
  대소문자 구분 없이 찾는 다는 의미
*/
let rpdStc3 = eStc.replace(/Seoul/g, 'Busan');
console.log(rpdStc3);
// 결과값 : Please visit Busan and Busan
// /g는 global의 약자로 맨 앞것만이 아닌 전부 다 바꾸는 의미

// String-concat()
let txt1 = 'Hello';
let txt2 = 'World';
let txt3 = txt1.concat(' ', txt2);
console.log(txt3);
// 결과값 : Hello World
let txt4 = 'Hello' + ' ' + 'World';

/*
  실무 사용 예시
  한국은 이름이 성이름으로 붙어았지만 다른 나라읃 이름 성 형태나 / 성 이름 등 공백으로 구분하는 경우가 많다. 

  이런 경우 firstName / middleName / lastName 으로 각각 변수에 데이터를 저장하고

  fullNAME 변수에 .concat()을 적용해 출력할 수 있다
*/

// String-trim()
let txtSpace = '     Hello, World!     ';
console.log(txtSpace.trim()); // call3() 유형
// 결과값 : Hello, World!

// String-charAt()
let charAtTxt = "I'm tired.";
console.log(charAtTxt.charAt(4));
// 결과값 : t

// String-split()
let birthday = '1988-07-09';
let birthdayArray = birthday.split('-');
// -를 기준으로 나눠서 배열로 만들기
// index는 3번까지
console.log(birthdayArray);
// 결과값 : (3) ['1988', '07', '09']