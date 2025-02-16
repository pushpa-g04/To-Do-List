const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
window.onload = function () {
    loadTasks();
};

function AddTask() {
    if (inputbox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        let taskText = document.createElement("span");
        taskText.textContent = inputbox.value;

        let deleteBtn = document.createElement("span");
        deleteBtn.innerHTML = "\u00d7";  
        deleteBtn.classList.add("delete-btn");

        checkbox.addEventListener("click", function () {
            li.classList.toggle("checked");
            updateLocalStorage(); 
        });

        deleteBtn.addEventListener("click", function () {
            li.remove();
            updateLocalStorage(); 
        });

        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(deleteBtn);
        listcontainer.appendChild(li);

        updateLocalStorage();
    }
    inputbox.value = "";
}

function updateLocalStorage() {
    localStorage.setItem("data",listcontainer.innerHTML);
}

function loadTasks() {
    const savedData = localStorage.getItem("data");
    if (savedData) {
        listcontainer.innerHTML = savedData; 
        const tasks = listcontainer.querySelectorAll("li");
        tasks.forEach((task) => {
            const checkbox = task.querySelector("input[type='checkbox']");
            const deleteBtn = task.querySelector(".delete-btn");

            checkbox.addEventListener("click", function () {
                task.classList.toggle("checked");
                updateLocalStorage();
            });

            deleteBtn.addEventListener("click", function () {
                task.remove();
                updateLocalStorage();
            });
        });
    }
}


