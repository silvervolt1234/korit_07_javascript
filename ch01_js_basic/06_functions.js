function sum(x, y) {
  let sum = x + y;
  return sum;
}

console.log(sum(10,20));

console.log('안녕','하세요');

// 함수의 결과값을 변수에 대입하고 그 변수를 가지고 연산
let result = sum(11,22);
console.log(result);
let result2 = sum(result, 33);
console.log(result2);   // 함수형 프로그래밍

function sum(x, y) {
  let sum = x + y;
  return sum;
}

function sum(x, y) {
  let sum = x - y;
  return sum;
}