// Declarations

const todo_list = document.querySelector('ul');
const user_input = document.querySelector('#input');
const user_form = document.querySelector('form');
const clear_all_action = document.querySelector('button');
const todo_array = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

// Functions

const addToList = todo_string => {
    let todo_item = document.createElement('li')
    todo_item.textContent = todo_string;
    todo_list.appendChild(todo_item)
}

todo_array.forEach(item => addToList(item))

// Events

form.addEventListener('submit', function(e) {
    e.preventDefault();
    todo_array.push(user_input.value);
    localStorage.setItem('todos',JSON.stringify(todo_array));
    addToList(user_input.value);
    user_input.value = "";
})

clear_all_action.addEventListener('click',() => {
    window.localStorage.clear();
    while (todo_list.firstChild) {
        todo_list.removeChild(todo_list.firstChild)
    }
});






