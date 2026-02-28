interface TODO{
    id:string;
    task:string;
}
// ! to store data the data
let todos: TODO[]=[];
// ! Targeting the elements
let form=document.getElementById("form") as HTMLFormElement;
let input=document.getElementById("inputvalue") as HTMLInputElement;
let listitems =document.getElementById("items") as HTMLUListElement;
// ! Adding task

form.addEventListener("submit",(e)=> {
 e.preventDefault();
 let value =input.value;
 let newTask: TODO ={
    id:Date.now().toString(),
    task: value,
 };
 todos.push(newTask);
 input.value="";
 render();
});

listitems.addEventListener("click",(e)=>{
    let target=e.target as HTMLElement;
    if(target.classList.contains("delete-btn")){
        let id=target.getAttribute("data-id");
        if(id) deleteNode(id);
    }
})


function render(){
    listitems.innerHTML="";
    // for(let i=0; i< todos.length; i++){
    //     let display=todos[i];
    //     let li =document.createElement("li");
    //     li.textContent= display.task;
    //     listitems.appendChild(li);
    // }
    todos.forEach((todo)=>{
        let li=document.createElement("li");
        // li.textContent=todo.task;
        li.innerHTML=`
        <span>${todo.task}</span>
        <button data-id="${todo.id}" class="delete-btn">Delete</button>
        `;
        listitems.appendChild(li);
    });
}
//delete function
function deleteNode(id:string){
    todos=todos.filter((todo)=>todo.id !== id);
    render();
}