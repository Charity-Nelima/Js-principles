// In JavaScript, "mapping" typically refers to the process of transforming elements in an array using a provided function to produce a new array with the transformed elements. 
// The map() method is a powerful tool for achieving this transformation. 
// example
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(function(number) {
  return number * number;
});

console.log(squaredNumbers);