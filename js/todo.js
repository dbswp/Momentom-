const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

// 텍스트 옆에 있는 X를 누르면 삭제되는 함수
function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

// 입력받은 텍스트 값을 index.html에 넣어주기
function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

// 입력한 텍스트 값
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  // newTodo는 value값을 ""처리했다고 해서 빈 값이 아님
  toDoInput.value = "";
  toDos.push(newTodo);
  paintTodo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
