// Replacing the module.exports object with a single function
const greet1 = require('./greet1');

// Adding properties or methods to the existing module.exports object
const greet2 = require('./greet2');
// When looking for a specific member of the module object, you can just speicify the property you are looking for:
  // const greet2 = require('./greet2').greet;
  // This would then mean that greet2 is a function and could be invoked without member access

// Replacing the module.exports object with an object containig properties and methods
const greet3 = require('./greet3');



// Replacing module.exports with a single function so it can be invoked here
greet1();

// Adding to the existing module.exports object. Creating a new property/method
greet2.greet();

// Replacing module.exports with a new object containing properties and methods
greet3.greet();
console.log(greet3.greeting);

// We are creating a new object in the module greet3 but importing it multiple times results in only one object being created.
// That object is returned every time the import is called.
// Mutating this object will affect every import
// This is because the node engine stores the module in a cache when it is imported so further imports are retrieved from the cache instead of importing the entire file again
greet3.greeting = 'Greet3 changed';
const greet3b = require('./greet3');
greet3b.greet();

// To create a new instance every time the module is imported, you can instead return the function constructor in module.exports
const Greet4 = require('./greet4');
const greet4instance  = new Greet4();
greet4instance.greet();

// Revealing module pattern.
// Only the members that we want to expose are available outside of the module
// The method 'greet' is available but the underlying variable 'greeting' upon which it relies is hidden outside of the module
const greet5 = require('./greet5');
greet5.greet();
console.log('greet5.greeting: ' + greet5.greeting);
