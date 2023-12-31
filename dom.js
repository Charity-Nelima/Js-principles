// The DOM (Document Object Model) is a programming interface for web documents. It represents the structure of an
// HTML or XML document as a tree-like model, here each element in the document is a node in the tree. 
// The DOM tree starts with the root node, which represents the entire HTML document. 
// The root node has child nodes, which represent the HTML elements (e.g., <html>, <head>, <body>, etc.)
// example
// - Document (root node)
//   - <html> (element node)
//     - <head> (element node)
//       - <title> (element node)
//         - Text Node: "My Web Page"
//     - <body> (element node)
//       - <h1> (element node)
//         - Text Node: "Hello, DOM!"
//       - <p> (element node)
//         - Text Node: "Welcome to my webpage."

// Accessing DOM Elements:
// In JavaScript, you can access DOM elements using various methods:

// getElementById: This method selects an element by its unique id attribute.
// getElementsByClassName: This method selects elements by their class names. It returns a collection of elements (HTMLCollection).
// getElementsByTagName: This method selects elements by their tag names (e.g., "div", "p", "h1", etc.).
// querySelector: This method allows you to select elements using CSS selectors. It returns the first matched element.
// querySelectorAll: Similar to querySelector, but it returns a collection of all matched elements (NodeList).

// Using getElementById
const myDiv = document.getElementById("myDiv");

// Using getElementsByClassName (returns a collection)
const paragraphs = document.getElementsByClassName("paragraph");

// Using getElementsByTagName (returns a collection)
const pTags = document.getElementsByTagName("p");

// Using querySelector (returns the first matched element)
const firstParagraph = document.querySelector("p");

// Using querySelectorAll (returns a collection)
const allParagraphs = document.querySelectorAll("p");

// Manipulating DOM Elements:
// Once you've selected DOM elements, you can manipulate them in various ways:

// Modifying Content: You can change the text content or HTML content of an element.
// Changing Styles: You can update the CSS styles of elements to change their appearance.
// Adding and Removing Elements: You can create new elements and add them to the DOM, or remove existing elements.
// Event Handling: You can add event listeners to elements to respond to user interactions.


let bombTimer = setTimeout(() => {
    console.log("BOOM!");
  }, 500);
  
  if (Math.random() < 0.5) { // 50% chance
    console.log("Defused.");
    clearTimeout(bombTimer);
  }

//   import and export
// Default Export:

// You can also use a default export to export a single value as the default export of a module.
// There can be only one default export per module.
// When importing a default export, you can use any name you want.
// Example:
// javascript
// Copy code
// myModule.js
const myData = 42;
export default myData;

