// variables(let, const, var)
// strict equality operator (===)
// strict inequality operator (!==)
// loose equality operator (==)
// loose inequality operator (!=)
// day 3
// function declaration
// function expression
// calling a function
// parameters and arguments
// return statements
function sayHello(name) {
    console.log(`Hello, ${name}!`);
  }
  
  sayHello("John"); // Output: Hello, John!

  function learn(subjects) {
    console.log(`am learning, ${subjects}!`);
  }
  
  learn("Swahili")
// a,b are parameters
// 5,3 are the actual values
  function addNumbers(a, b) {
    return a + b;
  }
  
  const result = addNumbers(5, 3);
  console.log(result); // Output: 8

  function multipyNumbers(c,d) {
    return  c * d;
   }
   let answer = multipyNumbers(5,3);
   console.log(answer);

//    arrow functions

const functionName = (parameters) => {
    // Function body
  };

  // Regular Function Expression
function square(x) {
    return x * x;
  }
  
  // Arrow Function
  const squareArrow = x => x * x;

//   example
  
// Arrow Function
const calculateRectangleAreaArrow = (length, width) => length * width;

const length = 5;
const width = 3;
const area = calculateRectangleAreaArrow(length, width);
console.log(`The area of the rectangle is: ${area}`); // Output: The area of the rectangle is: 15

let perimeter = (leng, wid) => 2 * (leng + wid) ;
const leng = 5;
const wid = 3;
const addition = perimeter(leng, wid);
console.log(`The perimeter of the rectangle is: ${addition}`);

  
const findArea = (q,r) => q * r ;
let q  = 2;
let r  = 3;
const are = findArea(q,r);
console.log(`area of rectangle is: ${are}`);

// default parameters
// You can set default values for function parameters,
//  which are used if no arguments are passed or if the passed value is undefined.
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet();       // Output: Hello, Guest!
greet("John"); // Output: Hello, John!

// Nested Functions:
// Functions can be defined inside other functions, creating nested or inner functions.
// example
function outerFunction() {
  console.log("This is the outer function.");

  function innerFunction() {
    console.log("This is the inner function.");
  }

  innerFunction();
}

outerFunction();
// Output:
// This is the outer function.
// This is the inner function.

// objects, arrays and Strings
// An object is a composite data type that allows you to store multiple key-value pairs as properties
// Objects are defined using curly braces {}.
// example
const person = {
  name: "John",
  age: 30,
  isStudent: true,
  sayHello: function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
  
};
// methods
// Properties that contain functions are generally called methods
//  of the value they belong to, as in “toUpperCase is a method of a string”.
// example; push, pop
// Math.random() generates a random number between 0 (inclusive) and 1 (exclusive).
const randomNum = Math.random();
console.log(randomNum);

// Math.floor() rounds down to the nearest integer.
const num = 4.8;
const roundedNum = Math.floor(num);
console.log(roundedNum); // Output: 4

// Math.pow() raises a number to a specified power.
const base = 2;
const exponent = 3;
const ans = Math.pow(base, exponent);
console.log(ans); // Output: 8

const message = "Hello, World!";

// message.length gives the length of the string.
console.log(message.length); // Output: 13

// message.toLowerCase() converts the string to lowercase.
console.log(message.toLowerCase()); // Output: hello, world!

// message.toUpperCase() converts the string to uppercase.
console.log(message.toUpperCase()); // Output: HELLO, WORLD!

// message.includes() checks if a substring is present in the string.
console.log(message.includes("World")); // Output: true

// message.slice() extracts a portion of the string.
console.log(message.slice(0, 5)); // Output: Hello

// message.replace() replaces a substring with another string.
console.log(message.replace("Hello", "Hi")); // Output: Hi, World!

// arrays
// Arrays are defined using square brackets [], and elements are separated by commas.
const fruits = ["apple", "banana", "orange", "grape"];

// strings

// A string is a sequence of characters, used to represent text in JavaScript.
// Strings are defined using single quotes ' ', double quotes " ", or backticks ` (template literals).
// Strings are immutable, meaning their values
// cannot be changed directly. However, you can create new strings based on existing ones.

const trial = "Hey your honor, Chiraa Brian is innocent!";
console.log(trial);


