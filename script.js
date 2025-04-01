function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button onclick="removeTask(this)">X</button>`;
    li.addEventListener("click",
         () => li.classList.toggle("completed"));

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}

function switchModes() {
    document.querySelector(".dark").addEventListener("click", () => {
        document.body.classList.add("dark-mode");
    });
    document.querySelector(".light").addEventListener("click", () => {
        document.body.classList.remove("dark-mode");
    })
}

switchModes();