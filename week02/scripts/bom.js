// Variables
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

//  "Add Chapter" button
button.addEventListener('click', () => {
    
    if (input.value.trim() !== '') {
        // DOM elements
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        // list item and delete button
        li.textContent = input.value;
        deleteButton.textContent = '❌';

        li.append(deleteButton);
       
        list.append(li);

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus(); // 
        });

        // Clear the input 
        input.value = '';
    }

    input.focus();
});