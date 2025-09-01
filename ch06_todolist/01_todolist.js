// DOM 요소 가져오기 위한 변수 선언 및 초기화
const todoInput = document.getElementById('todo-input');  // 메서드 결과값을 변수에 대입
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// 처음 페이지에 들어갔을 때 localStorage를 참조해서 기존 todo 데이터가 있을 때 가지고 나오기
let todos = JSON.parse(localStorage.getItem('todos')) || [];
// 값이 있으면 true고 없으면 false
// localStorage.getItem('todos')에 데이터가 있으면 true이기에 JSON으로 바꾸고 데이터가 없으면 빈배열
console.log(todos);
// JS 객체가 아닌 배열이란 점에 주목 -> 맨 처음에 localstorage를 뒤짐녀  빈 배열이 저장되는데 이후 배열 내부의 element에 객체를 추가

// Todo 리스트를 불러오는 과정 필요. 페이지에 처음 들어갔을때의 로직
function renderTodos() {
  // 기존 todo list를 초기화 -> 추가했을 때 누적 안되게
  // todoList =/= todos
  todoList.innerHTML = '';

  // todos 배열을 반복 돌려서 목록을 생성
  todos.forEach((todo, index) => {
    // todos의 반복을 돌면 내부 element가 있을텐데 그때마다
    // li 태그를 생성하는 의미
    // 보통 forEach() / map() method에는 두 개 이상의 argument가 요구
    // 첫 번째가 반복문 돌 떄의 element 이름을 선언
    // 두 번째가 index 관련

    // 각 todo는 JS 객체에 해당하고 이걸 페이지 상에서 보여주기 위해서 ul 태그의 자식인 li 태그가 필요

    // 지역변수
    const li = document.createElement('li');
    // li태그만 만들었고 클래스 이름을 안 정해서
    li.className = 'todo-item';
    // Java의 객체에 field 값 대입하는 방법과 동일
    if (todo.completed) { // localStorage의 'todos' key 내부를 확인했을 때 배열로 저장되어있고 내부에 JS 객체가 있는데 그 객체가 todo라고 이름 붙여져 있음. 그 todod들은 text라는 key, completed라는 key를 가지고 있는데
    // 그 completed는 자료형이 boolean이고 true / false 인지에 따라 조건문 실행 여부 결정
    // .css에서 completed 속성 부분을 적용하기 위한 코드라인
    // completed가 true면 할 일이 완료되었음 표시를 위해 css 상 차이를 만들었고 그걸 적용
      li.classList.add('completed');
    }
    // J 객체 상의 key가 completed인 코드의 value가 true면 li 태그에 completed라는 속성을 추가하는데 이것이 추가되면 .css에 정의된 추가 스타일 적용(취소선, 배경색 등)

    // li 태그의 자식요소로 input checkbox / span / button으로 이루어져 각각의 요소를 만들 필요 존재
    // 체크 박스
    const checkbox = document.createElement('input');
    // type이 text가 아니라 checkbox니
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed // true라 값이 있는 상태여서 todo.completed만 존재
    // 그래서 checked 자체는 true false 상관없이 계속 유지

    // input의 type이 checkbox라면 checked하고 = " "가 없는 게 존재하는데 <input type = "checkbox" checked> 형태

    // 텍스트 내용 생성 - span태그
    // div가 아닌 span인 이유는
    // div -  컨텐츠가 있는 가로줄 전체가 영역
    // span - 컨텐츠가 있는 길이만큼 영역
    const span = document.createElement('span');
    span.className = 'todo-text'; // css 적용을 위해
    span.textContent = todo.text; // 내용이 있는거니 배열 내의 element인 JS 객체의 text라는 키의 value를 span 태그의 내부에 집어넣어 페이지상에 출력

    // 삭제 버튼 - button 태그
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '&times';  // x 기호

    // 요소들을 li 변수에 추가(li 내부에 체크박스/스팬/버튼)
    li.append(checkbox);
    li.append(span);
    li.append(deleteBtn);

    // li를 ul 태그에 추가
    todoList.append(li);

    // 이벤트 리스너 추가
    // 체크박스 변경 이벤트
    checkbox.addEventListener('change', () => {
      todo[index].completed = checkbox.checked; // checkbox가 type이고 checked는 속성에 해당
      // 완료 상테에 따라 CSS 클래스를 토글
      li.classList.toggle('completed', checkbox.checked);
      saveTodos();
    });

    // 삭제버튼 클릭 이벤트
    deleteBtn.addEventListener('click', () => {
      // 삭제할 항목의 텍스트를 이용해 배열 내에서 정확한 인덱스 찾기
      // 보통은 index로 내용을 확읺나 계속 삭제를 하면 index 넘버가 변함
      // 그래서 input에 입력한 내용을 근거로 index를 역으로 찾기
      const itemText = span.textContent;    // trim을 삭제해 공백이 없어지니 추가
      // 배열 내에서의 내용과 span 태그 내애서의 내용이 같은 index를 뽑아 itemIndex 변수에 저장
      const itemIndex = todos.findIndex(item => item.text === itemText);

      if (itemIndex !== -1) { // 일치하지 않는 인덱스라면 -1
        todos.splice(itemIndex, 1); // itemIndex에 해당하는 element 하나를 삭제

        // 주의 : splice() =/= slice()
        li.remove();
        saveTodos();
      }
    });
  });

}

function saveTodos() {
    // localStorage에 저장한다는 의미
    localStorage.setItem('todos', JSON.stringify(todos));
    // 1번 매개변수 - key
    // 2번 매개변수 - 그 key에 들어가는 value
    localStorage.setItem('temp', '안녕');  // 항상 localStorage
}

function addTodo() {
  const todoText = todoInput.value.trim();  // trim(): 공백 제거
  if(todoText === '') {
    alert('내용을 입력하세요!');
    return;     // 메서드 종료 의미
  }


// input 창에 내용이 있다면 내용이 들어갈 JS 객체 선언
const newTodo = {
  text: todoText,
  completed: false,   // 초기 생성시에 무조건 false로 고정
};

// todos 배열에 새로운 todo를 추가
todos.push(newTodo);

// 추가한 이후에 input 태그 내의 내용을 비우는 역할
todoInput.value = '';

renderTodos();    // 추가 버튼을 누르고 다시 (갱신된) 리스트 가지고 와야 해서 renderTodos() 함수 호출
saveTodos();      // 그리고 localStorage에도 저장해야하니 saveTodos() 함수 호출

// 의문점은 어차피 renderTodos() 할 때 saveTodos()가 필수인거 같은데 함께 묶어서 쓸 수 있나 싶지만

// method는 하나당 기능이라고 생각
}


// 추가 버튼 클릭 이벤트
addBtn.addEventListener('click', addTodo);    // button 태그에 onclick 속성 -> 두 번째 argument로 addTodo 함수를 넣었는데 addTodo가 아니라는 점에 주목

// 엔터 키 입력 이벤트
todoInput.addEventListener('keydown', (event) => {
if (event.key === 'Enter') {
  addTodo();  // input태그에 Enter키 입력을 감지하면 addTodo(); 함수 호출
}
});

// 새로고침했을 때 renderTodos()가 호출
window.onload = renderTodos();