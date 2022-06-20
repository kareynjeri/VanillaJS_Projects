const todosEl = document.getElementById("todos");
const form = document.getElementById("form");
const submit = document.getElementById("submit");

const date = new Date(Date.now()).toLocaleDateString();


const allTodos = [];

const renderTodos = (todos) => {
    let todosContent = ``;

    for(let i = 0; i < todos.length; i++) {
        todosContent += `
            <div class="todo" id=${todos[i].id}>
                <h3 id="title">${todos[i].title} <br>${todos[i].createdAt} </h3>
                <div class="btnContainer">
                    <button><i data-feather="delete"></i></button>
                </div>
            </div>
        `;
    }
    
    return todosContent;
}

submit.addEventListener("click", (event) => {
    event.preventDefault();
    
    const todoTitle = form[0].value; 

    const newTodo = {
        id: Date.now(),
        createdAt: date,
        title: todoTitle,
        completed: false
    }

    allTodos.push(newTodo);

    todosEl.innerHTML = renderTodos(allTodos);
});



todosEl.innerHTML = renderTodos(allTodos);

