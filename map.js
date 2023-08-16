// In JavaScript, "mapping" typically refers to the process of transforming elements in an array using a provided function to produce a new array with the transformed elements. 
// The map() method is a powerful tool for achieving this transformation. 
// example
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(function(number) {
  return number * number;
});

console.log(squaredNumbers);

// or when using arrow function

const numberss = [1, 2, 3, 4, 5];

const squaredNumberss = numberss.map(number => number * number);

console.log(squaredNumberss); // [1, 4, 9, 16, 25]

// example 2
const names = ['kiarie', 'hansen', 'charity', 'nelima'];

const capitalizedNames = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));

console.log(capitalizedNames); 

