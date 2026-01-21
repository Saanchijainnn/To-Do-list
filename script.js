// Select elements
const input = document.querySelector(".input-section input");
const addBtn = document.querySelector(".input-section button");
const todoList = document.querySelector(".todo-list");

// Function to create a new task
function addTask() {
  const taskText = input.value.trim();

  // prevent empty task
  if (taskText === "") {
    return;
  }

  // create li
  const li = document.createElement("li");

  // create span
  const span = document.createElement("span");
  span.textContent = taskText;

  // create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";
  deleteBtn.className = "delete-btn";

  // delete functionality
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  // append elements
  li.appendChild(span);
  li.appendChild(deleteBtn);
  todoList.appendChild(li); // stack behavior

  // clear input
  input.value = "";
}

// Add button click
addBtn.addEventListener("click", addTask);
