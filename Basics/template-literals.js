let name = 'John Doe';
let greeting = 'Hello ' + name;

// using 'backticks' instead of single quotes.
// Any expression to be evaluated in the string should be wrapped in ${...}
// Template literals allow for multi-line strings and string interpolation
let greeting2 = `Hello
 ${name}`;

console.log(greeting);
console.log(greeting2);
