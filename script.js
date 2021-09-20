
let input = document.querySelector('form input');
let addBtn = document.querySelector('.add-btn');
let inputValue = ''; 

const resetInput = () => {
  // Reset input value and do focus
  input.value = '';
  inputValue = '';
  input.focus();
};

const todoButtonsEventHandler = (newTodo) => {
  const doneBtn = newTodo.querySelector(".done-btn");
  const deleteBtn = newTodo.querySelector(".delete-btn");
  let isTodoDone = false;

  if (doneBtn) {
    doneBtn.addEventListener('click', () => {
      // If doneBtn with text "Done" is click
      if (!isTodoDone) {
        newTodo.style.textDecoration = 'line-through';
        doneBtn.innerText = 'Undo';
        isTodoDone = true;
      }
      // If doneBtn with text "Undo" is click
      else {
        newTodo.style.textDecoration = 'none';
        doneBtn.innerText = 'Done';
        isTodoDone = false;
      }
    });
  }

  if (deleteBtn) {
    deleteBtn.addEventListener('click', () => {
      // Get the current todo (parent element of the button)
      newTodo.remove();
    });
  }
};

const createElements = () => {
  let todoList = document.querySelector('.todo__list');

  // Create a todo element with a text based on the input value - li
  let newTodo = document.createElement('li');
  newTodo.innerText = `${inputValue} `;

  let buttonsWrapper = document.createElement('div');

  // Create a button element with text "Done"
  let doneBtn = document.createElement('button');
  doneBtn.className = 'done-btn btn';
  doneBtn.innerText = 'Done';

  // Create a button element with text "Delete"
  let deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn btn';
  deleteBtn.innerText = 'Delete';

  todoList.prepend(newTodo);
  buttonsWrapper.appendChild(doneBtn);
  buttonsWrapper.appendChild(deleteBtn);
  newTodo.appendChild(buttonsWrapper);


  todoButtonsEventHandler(newTodo); // Handles todo's "Done/Undo" & "Delete" button 
};

const addTodo = () => {
  if (!inputValue) {
    // If input is empty
    input.focus();
  } else {
    createElements(); // Create the todo and its buttons
    resetInput(); // Reset input value and do focus
  }
};


window.onload = () => {
  addBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent page reload if submit button is pressed
    addTodo();
  });

  input.addEventListener('input', (e) => {
    inputValue = e.target.value;
  });
}
