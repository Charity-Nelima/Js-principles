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
