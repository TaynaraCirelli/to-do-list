const todoForm = document.querySelector("#tofo-form");
const todoInput = document.querySelector("#tofo-input");
const todoList= document.querySelector("#tofo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

const saveTodo = (text) => {

    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button")
}

todoForm.addEventListener("submit", (e) => {

    e.preventDefault();
    
    const inputValue = todoInput.value;

    if(inputValue) {
        saveTodo(inputValue);
    }
})