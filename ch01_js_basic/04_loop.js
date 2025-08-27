let brands = ["애플", "구글", "메타", '아마존', '삼성전자'];

console.log(brands[0]);
console.log(brands[1]);
console.log(brands[2]);
console.log(brands[3]);
console.log(brands[4]);

// 이와 같은 방식을 굳이 할 필요 없기에 반복문 사용
// java외 동일

// for (let i = 0 ; i < brands.length ; i++) {
//   console.log('반복문으로 출력한 ' + brands[i])
// }

let productList = [
  {
    name: '솔의 눈',
    price: 700,
  },
  {
    name: '레쓰비',
    price: 780,
  },
  {
    name: '파워에이드',
    price: 1200,
  },
  {
    name: '오렌지주스',
    price: 1400,
  },
  {
    name: '제로콜라',
    price: 800,
  },
];

/*
  이상의 코드 라인에서 주목할 부분은

  첫번째, 마지막 index에 해당하는 element 다음에 ',' 가 찍혀도 오류가 발생하지 않는다는 점

  두번쨰, Array의 element인 object는 마지막 property의 value 값 다음에도 ','가 있지만 오류가 발생하지 않는다는 점

  추후 property를 추가하거나 element를 추가할 때 쉼표 치고 엔터치고 다시 {} 혹은 property 추가하기 힘들기에 마지막 element/property 여부와 무관하게 쉼표를 찍어주는게 관행처럼 굳어져 오류처리 아님
*/

console.log(productList[4]);    // Array의 element는 object
                                // 그렇다면 제로콜라의 string만 뽑아내려면
console.log(productList[4]['name']);

// 솔의 눈과 파워에이드 음료수 합을 구하시오
console.log(productList[0]['name'] + '의 가격과 ' + productList[2]['name'] + '의 가격은 각각 ' + productList[0]['price'] + '원과 ' + productList[2]['price'] + '원으로 합은 ' + (productList[0]['price'] + productList[2]['price']) + '원입니다.');


let inputCoin = 900;
let outputList = [];
// 빈 배열을 하나 선언하고 inputCoin으로 살 수 있는 음료 목록들 넣기

for (let i = 0 ; i < productList.length ; i++) {
  if(inputCoin >= productList[i]["price"]) {
    // outputList에 element로 추가
    outputList.push(productList[i])
  }
}
console.log('살 수 있는 음료 목록 : ' + outputList);
// 결과값 : 살 수 있는 음료 목록 : [object Object],[object Object],[object Object]

for (let i = 0 ; i < outputList.length ; i++) {
  console.log(outputList[i])
}
// 리스트 내부의 객첼ㄹ 하나씩 확인하려니 출력 가능

/*
  배열 내부의 객체가 element라면 배열 자체를 console.log(배열명);으로 출렬했을 때 결과값이 
  [object Object],[object Object],[object Object] 형식으로만 나오기에 

  각 객첵의 명확한 상태를 알기 위해서는 배열의 element를 추출하는 반복문이 필요
*/

// for (let i = 0; i < outputList ; i++) {
//   for (let j = 0; j < outputList[i] ; j++) {
//     console.log(outputList[i][j]);
//   }
// }
// 논리적으로 불가능한 코드

/*
  outputList의 element의 자료형은 객체고 객체에는 index number가 존재하지 않아서 이중 for문을 통해 객체 내부의 property 확인은 불가능

  마찬가지로 일반 객체의 property를 추출해 데이터 가공방식이 불가능
*/

// 2. for-in 문

let person = {
  fName: '일',
  lname: '김',
  age: 20,
}

// js에서 객체에 반복문을 돌리면 key값을 return
// 그래서 해당 key에 할당된 value를 추출하려면 107번 라인으로 코드 작성
for (const key in person) {  // 추출되는 key는 각각 fName / lName / age
  console.log(key);
  console.log(person[key]);
}
// 이 시점에서 첫 번째 반복이라고 가정하면
// key = 'fName'이 저장된 상태

// 즉 person.key는 person.fName이 아닌 person.'fName'인게 문제
// console.log(person.key)

// 그래서 2가지 방법으로 객체의 value 조회

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 일반 for문으로 추출
for (let i = 0; i < nums.length ; i++) {
  console.log(nums[i])
}

// 객체의 property의 key를 추출할 수 있어서 향상된 for문처럼 보이기에 for-in으로 추출 시도
for (let num in nums) {
  console.log(num)    // 결과값 : string
}

// 3. for-of문
// for-in문의 경우 객체 한정으로 생각
// 일반적인 Java에서 enhanced for문에 해당하는 것을 for-of문이라 생각

for (const num of nums) {
  console.log(num);
  console.log(typeof num);
}
