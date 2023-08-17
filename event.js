// EventListener
// In JavaScript, you can set up event listeners to "listen" 
// for specific events and execute a function (event handler) when the event occurs.

// Common DOM Events:
// Here are some common DOM events you can use:

// click: Occurs when an element is clicked.
// mouseover: Occurs when the mouse pointer moves over an element.
// mouseout: Occurs when the mouse pointer moves out of an element.
// keydown: Occurs when a key on the keyboard is pressed.
// keyup: Occurs when a key on the keyboard is released.
// submit: Occurs when a form is submitted.
// change: Occurs when the value of an input element is changed (for input fields, checkboxes, etc.)

const button = document.getElementById("myButton");

function handleClick() {
  alert("Button Clicked!");
}

button.addEventListener("click", handleClick);


