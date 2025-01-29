document.addEventListener("DOMContentLoaded", function () {
    const todolist = document.querySelector(".todo-list");
    const todoInput = document.querySelector(".add-todo input");
    const todoBtn = document.querySelector(".add-todo button");

    function addTodo() {
        const value = todoInput.value.trim();
        if (value === "") {
            alert("Please enter a task!");
            return;
        }

        const newTodo = document.createElement("div");
        newTodo.classList.add("todo");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const taskText = document.createElement("span");
        taskText.textContent = value;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "DELETE";
        deleteBtn.classList.add("delete-btn");

        // Toggle strikethrough when checkbox is clicked
        checkbox.addEventListener("change", function () {
            taskText.classList.toggle("completed");
        });

        deleteBtn.addEventListener("click", function () {
            todolist.removeChild(newTodo);
        });

        newTodo.appendChild(checkbox);
        newTodo.appendChild(taskText);
        newTodo.appendChild(deleteBtn);

        todolist.appendChild(newTodo);

        todoInput.value = "";
    }

    todoBtn.addEventListener("click", addTodo);

    todoInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTodo();
        }
    });
});
