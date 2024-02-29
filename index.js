/* Function to display todo list in Webpage */
const todoList = []; // An array to store the todo's

function renderList(){

  let todoListHTML = '';

  todoList.forEach((todoObject) => { 


    const {name,dueDate} =todoObject;
    const html = 
     ` <div class="list">
        <input type="checkbox" class="checkbox">
        <div class="todo1">${name}</div>
        <div class="todo2">${dueDate}</div>
        <button class="delete-btn">Delete
        </button>
       </div> 
       `
    ; // Generating HTML

    todoListHTML += html;

  });

  /* To display todo in the div class */
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

  /* delete btn function */

  document.querySelectorAll('.delete-btn')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click',() => {
        todoList.splice(index, 1);
        renderList();
      });
    });
};

/* Add todo btn behaviour */
document.querySelector('.add-btn').addEventListener('click', addTodo);

/* Add todo function */
function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value.trim();

  const dateInputElement = document.querySelector('.js-date-input');
  const dueDate = dateInputElement.value;

  if (name && dueDate) {
    todoList.push({ name, dueDate, completed: false});
    inputElement.value='';
    dateInputElement.value='';
    renderList();
  } else {
    alert('Please enter both task name and due date.');
  }
}


// keyboard shortcut to add todo and delete
document.body
.addEventListener('keydown',(event)=>{
    if (event.key === 'Enter'){
      addTodo();
    };
  });
