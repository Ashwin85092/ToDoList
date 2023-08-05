function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.innerText = taskText;
  taskList.appendChild(taskItem);

  taskInput.value = "";
}
