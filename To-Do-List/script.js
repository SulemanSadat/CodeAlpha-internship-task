document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskList = document.getElementById("taskList");


  const li = document.createElement("li");


  li.textContent = taskText;


  const buttons = document.createElement("div");
  buttons.className = "task-buttons";

  const completeBtn = document.createElement("button");
  completeBtn.innerHTML = "&#10003;"; 
  completeBtn.onclick = function () {
    li.classList.toggle("completed");
  };


  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "&#10005;";
  deleteBtn.onclick = function () {
    taskList.removeChild(li);
  };

  buttons.appendChild(completeBtn);
  buttons.appendChild(deleteBtn);
  li.appendChild(buttons);

  taskList.appendChild(li);


  taskInput.value = "";
}
