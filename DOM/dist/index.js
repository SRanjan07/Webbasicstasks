// ! to store data the data
let todos = [];
// ! Targeting the elements
let form = document.getElementById("form");
let input = document.getElementById("inputvalue");
let listitems = document.getElementById("items");
// ! Adding task
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let value = input.value;
    let newTask = {
        id: Date.now().toString(),
        task: value,
    };
    todos.push(newTask);
    input.value = "";
    render();
});
listitems.addEventListener("click", (e) => {
    let target = e.target;
    if (target.classList.contains("delete-btn")) {
        let id = target.getAttribute("data-id");
        if (id)
            deleteNode(id);
    }
});
function render() {
    listitems.innerHTML = "";
    // for(let i=0; i< todos.length; i++){
    //     let display=todos[i];
    //     let li =document.createElement("li");
    //     li.textContent= display.task;
    //     listitems.appendChild(li);
    // }
    todos.forEach((todo) => {
        let li = document.createElement("li");
        // li.textContent=todo.task;
        li.innerHTML = `
        <span>${todo.task}</span>
        <button data-id="${todo.id}" class="delete-btn">Delete</button>
        `;
        listitems.appendChild(li);
    });
}
//delete function
function deleteNode(id) {
    todos = todos.filter((todo) => todo.id !== id);
    render();
}
export {};
//# sourceMappingURL=index.js.map