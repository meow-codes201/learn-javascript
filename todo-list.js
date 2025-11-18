const todoList = [
{
    name:'make dinner',
    dueDate:'2025-05-18'
},
{
    name:'wash dishes',
    dueDate:'2025-05-19'
}
];

renderTodoList()
function renderTodoList(){

    let todoListHtml = [];
    todoList.forEach((todoObject,i)=>{
        const {name,dueDate}=todoObject;
        
        const htmlCode = `
        
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
        todoList.splice(${i},1);
        renderTodoList()
        " class="delete-btn">Delete</button>
        `
        todoListHtml+=htmlCode;
    
    })
    
    // for(let i=0;i<todoList.length;i++){
    //     const todoObject = todoList[i];
    //     const {name,dueDate}=todoObject;
        
    //     const htmlCode = `
        
    //     <div>${name}</div>
    //     <div>${dueDate}</div>
    //     <button onclick="
    //     todoList.splice(${i},1);
    //     renderTodoList()
    //     " class="delete-btn">Delete</button>
    //     `
    //     todoListHtml+=htmlCode;
    // } 
    // console.log(todoListHtml);
    document.querySelector(".js-todolist-div").innerHTML = todoListHtml;
    
}

function addTodo(){


    const inputElement = document.querySelector(".js-name-input");
    const name = inputElement.value;
    const dateIp = document.querySelector(".date-ip");
    const dueDate = dateIp.value;

    if(name){
    todoList.push({
        name,
        dueDate

    })
    }
    console.log(todoList);
    inputElement.value="";
    renderTodoList();


}

function check(event){
    if(event.key == 'Enter'){
        addTodo();
    }
}