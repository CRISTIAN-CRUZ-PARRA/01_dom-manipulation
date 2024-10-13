// EXERCISE 1: Selecting Elements
// Select the element with the ID 'mainTitle' and log it to the console.
const mainTitle = document.getElementById('mainTitle');
console.log(mainTitle);

// Exercise 2: Changing HTML Content
// Select all paragraph elements and change the content of the second paragraph.
const paragraphs = document.getElementsByClassName('paragraph');
paragraphs[1].textContent = 'This paragraph has been changed.';

// Exercise 3: Changing CSS Styles
// Select the first list item and change its text color to red.
const firstListItem = document.querySelector('#list li');
firstListItem.style.color = 'red';

// Exercise 4: Adding/Removing Classes
// Add the "highlight" class to the first paragraph.
paragraphs[0].classList.add('highlight');

// Remove the "highlight" class from the first paragraph after 3 seconds.
setTimeout(() => {
  paragraphs[0].classList.remove('highlight');
}, 3000);

// Exercise 5: Creating and Appending Elements
// Create a new list item with the text "Item 4" and append it to the existing list.
const newListItem = document.createElement('li');
newListItem.textContent = 'Item 4';
document.getElementById('list').appendChild(newListItem);

// Exercise 6: Removing Elements
// Remove the last list item from the unordered list.
const list = document.getElementById('list');
list.removeChild(list.lastElementChild);

// Exercise 7: Handling Events
// Add a click event listener to the button that displays an alert saying "Button clicked!"
const actionButton = document.getElementById('actionButton');
actionButton.addEventListener('click', () => {
  alert('Button clicked!');
});

// Exercise 8: Working with Input
// Add an input event listener to the input field that displays the current input value in the result div.
const inputField = document.getElementById('inputField');
const resultDiv = document.getElementById('result');
inputField.addEventListener('input', (event) => {
  resultDiv.textContent = event.target.value;
});

// Exercise 9: Toggling Visibility
// Add a click event listener to the button that toggles the visibility of the content div.
const contentDiv = document.getElementById('content');
actionButton.addEventListener('click', () => {
  if (contentDiv.style.display === 'none') {
    contentDiv.style.display = 'block';
  } else {
    contentDiv.style.display = 'none';
  }
});

// Exercise 10: Modifying Attributes
// Select the input field and change its placeholder text to "Enter your name".
inputField.placeholder = 'Enter your name';
