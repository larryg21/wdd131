// Get references to the HTML elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul'); // Select the unordered list element

// Add a click event listener to the 'Add Chapter' button
button.addEventListener('click', () => {

    // Check if the input field is NOT empty or just has whitespace
    if (input.value.trim() !== '') {

        // Create new list item (li) and delete button elements
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        // Set the text content of the li and delete button
        li.textContent = input.value;
        deleteButton.textContent = '❌';

        // Append the delete button to the list item
        li.append(deleteButton);

        // Append the new list item to the unordered list
        list.append(li);

        // Add a click event listener to the newly created delete button
        deleteButton.addEventListener('click', () => {
            // Remove the parent li element from the list
            list.removeChild(li);
            // Return focus to the input field
            input.focus();
        });

        // Clear the input field after adding the chapter
        input.value = '';
    }

    // Always set focus back to the input field, even if nothing was added
    input.focus();
});