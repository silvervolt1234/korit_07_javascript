// alert()
// windows.alert('이것은 alert창입니다');

// confirm()
// confirm('정말 삭제하시겠습니까?');

// prompt()
// prompt('삭제하신다면 delete my page를 입력하세요');

// open()
// open(https://www.naver.com);

// setTimeout() / clearTimeout()
let myExec;

function myFunction() {
  myExec = setTimeout(
    function() {{console.log('5초 후 실행');}}
  , 5000);
}

function myStopFunction() {
  console.log('취소합니다.');
  clearTimeout(myExec);
}

// 보통 onclick에 사용

// 함수 호출
myFunction();