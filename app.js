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


