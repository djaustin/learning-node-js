// It is possible to specify an entire directory with require.
// If you do this, the javascript engine looks for a file name index.js inside of that directory.
// This index.js file should aggregate the other modules and return a single 'module.exports' object to be used here.
const greet = require('./greet');

// English and Spanish came from two different modules in different files.
// The file index.js returned an object that contains both of the modules
greet.english();
greet.spanish();

// The actual greetings being used in the above functions come from a JSON file which is itself imported and converted implicity into a js object using the require function
// (See english.js and spanish.js)
