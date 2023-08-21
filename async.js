// Synchronous Programming:
// In synchronous programming, each operation is executed one after the other in a sequence. 
// When an operation is being executed, 
// the program "waits" for that operation to complete before moving on to the next one. 
// example
console.log('Start');
console.log('Middle');
console.log('End');

// output

// Start
// Middle
// End

// Asynchronous programming
// In asynchronous programming, operations can be started but do not block the execution of the rest of the code. 
// Instead of waiting for a task to finish, the program continues to execute other tasks.
// Once the asynchronous task is complete, a callback function is typically called to handle the result.
// example
console.log('Start');

setTimeout(() => {
  console.log('Middle');
}, 1000);

console.log('End');

// output

// Start
// End
// Middle

// Promises and async/await:
// JavaScript introduced promises and later the async/await syntax to simplify asynchronous programming.

// Promises: Promises provide a cleaner way to handle asynchronous operations using chained .then() methods to handle success and error cases.

// async/await: async functions are a modern way to write asynchronous code that looks more like synchronous code.
//  await is used within
//  an async function to pause the execution until a promise is resolved or rejected.

async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchData();
  