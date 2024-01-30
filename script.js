function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task.");
        return;
    }

    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            li.style.textDecoration = "line-through";
        } else {
            li.style.textDecoration = "none";
        }
    });
    li.appendChild(checkbox);

    var span = document.createElement("span");
    span.innerText = taskInput.value;
    li.appendChild(span);

    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };
    li.appendChild(deleteButton);

    taskList.appendChild(li);
    taskInput.value = "";
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        addTask();
    }
}
