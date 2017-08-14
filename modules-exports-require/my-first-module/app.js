// require is a function that is part of the node js javascript core.
// It takes the location or name of a module that you wish to include in this file
// You do not need to include '.js' file extension as the engine will infer that you are referencing a javascript file


// This runs the file which, in this case, results in just the console.log running and printing 'hello' to the console
// 'require' returns the value of the 'module.exports' in the module file we are importing. Here, we assign it to the greet variable in app.js and so now greet in this file points to the function defined in greet.js
const greet = require('./greet');
greet();
