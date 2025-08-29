// DOM 요소 가져오기 위한 변수 선언 및 초기화
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// 처음 페이지에 들어갔을 때 localStorage를 참조해서 기존 todo 데이터가 있을 때 가지고 나오기
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// Todo 리스트를 불러오는 과정 필요
function renderTodos() {
  // 기존 todo list를 초기화 -> 추가했을 때 누적 안되게
  todoList.innerHTML = '';

  // todos 배열을 반복 돌려서 목록을 생성
  todos.forEach((todo, index) => {
    // todos의 반복을 돌면 내부 element가 있을텐데 그때마다
    // li 태그를 생성하는 의미
    const li = document.createElement('li');
    // li태그만 만들었고 클래스 이름을 안 정해서
    li.className = 'todo-item';
    if (todo.completed) {
      li.classList.add('completed');
    }

    // 체크 박스
    const checkbox = document.createElement('input');
    // type이 text가 아니라 checkbox니
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed

    // 텍스트 내용 생성 - span태그
    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = todo.text;

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
        li.remove();
        saveTodos();
      }
    });
  });

}

function saveTodos() {
    // localStorage에 저장한다는 의미
    localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodo() {
  const todoText = todoInput.value.trim();  // trim(): 공백 제거
  if(todoText === '') {
    alert('내용을 입력하세요!');
    return;
  }


// input 창에 내용이 있다면 내용이 들어갈 JS 객체 선언
const newTodo = {
  text: todoText,
  completed: false,
};

// todos 배열에 새로운 todo를 추가
todos.push(newTodo);

// 추가한 이후에 input 태그 내의 내용을 비우는 역할
todoInput.value = '';

renderTodos();
saveTodos();
}


// 추가 버튼 클릭 이벤트
addBtn.addEventListener('click', addTodo);

// 엔터 키 입력 이벤트
todoInput.addEventListener('keydown', (event) => {
if (event.key === 'Enter') {
  addTodo();  // input태그에 Enter키 입력을 감지하면 addTodo(); 함수 호출
}
});

// 새로고침했을 때 renderTodos()가 호출
window.onload = renderTodos();