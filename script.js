function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value === "") {
      alert("Please enter a task.");
      return;
    }
  
    var li = document.createElement("li");
    li.textContent = taskInput.value;
  
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.addEventListener("change", function () {
      if (checkBox.checked) {
        li.classList.add("completed");
      } else {
        li.classList.remove("completed");
      }
    });
  
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      taskList.removeChild(li);
    });
  
    li.appendChild(checkBox);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  
    taskInput.value = "";
  }
  