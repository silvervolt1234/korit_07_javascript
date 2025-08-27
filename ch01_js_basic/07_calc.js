/*
  조건문을 활용하고 숫자 2개와 사칙연산기호 하나를 매개변수로 받아서 그에 맞는 계산을 하는 계산기 함수 정의
*/

let calc = function(x, y, operator) {  // 매개변수의 자료형이나 선언자가 없다는 점이 특이점
  if (operator === '+') { // -, *, / 를 작성
    return x + y;
  } else if (operator === '-') {
    return x - y;
  } else if (operator === '*') {
    return x * y;
  } else if (operator === '/') {
    return x / y;
  }
}

let plusReuslt = calc(5, 7, '+');
console.log(plusReuslt);
let minusReuslt = calc(10, 7, '-');
console.log(minusReuslt);
let multiReuslt = calc(203, 3459, '*');
console.log(multiReuslt);
let divReuslt = calc(5943, 21, '/');
console.log(divReuslt);

// 변수명 minusReuslt 10 - 7 / multiResult 203 * 3459 / divResult 5943 / 21