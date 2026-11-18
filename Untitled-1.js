
var taskList = document.getElementById("taskList");
var taskInput = document.getElementById("taskInput");
var countText = document.getElementById("countText");

function addTask() {
    if (taskInput.value == "") {
        alert("Enter a task!");
        return;
    }

    var li = document.createElement("li");
    li.innerText = taskInput.value;

    li.onclick = function() {
        li.classList.toggle("completed");
    };

    var btn = document.createElement("button");
    btn.innerText = "Delete";

    btn.onclick = function(event) {
        event.stopPropagation();
        li.remove();
        updateCount();
    };

    li.appendChild(btn);
    taskList.appendChild(li);

    taskInput.value = "";
    updateCount();
}

function updateCount() {
    countText.innerText = "Total tasks: " + taskList.children.length;
}

updateCount();
