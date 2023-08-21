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
