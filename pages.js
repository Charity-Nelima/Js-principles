// Get references to the elements
const contentDiv = document.getElementById('content');
const addButton = document.getElementById('addButton');

// Add event listener to the button
addButton.addEventListener('click', () => {
  // Create a new paragraph element
  const newParagraph = document.createElement('p');
  newParagraph.textContent = 'This is a new paragraph created with JavaScript.';

  // Append the new paragraph to the content div
  contentDiv.appendChild(newParagraph);
});


// Apply styling to the new paragraph
newParagraph.style.color = 'blue';
newParagraph.style.fontWeight = 'bold';
