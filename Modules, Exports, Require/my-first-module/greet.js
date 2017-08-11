// Files importing this module will only have access to the members of this module if we explicitly allow it.
// Just a funciton definition on its own will not be sufficient to allow other files to make use of the code here.
// This is by design as it ensure that modules are self-contained and prevents collisions of variable names
const greet = function(){
  console.log('hello');
}

// If we do want to make members available to another file (app.js) we use the following line:
module.exports = greet;

// the module object is available here because the node engine wraps the code within a function expression.
// Among other things, this function expression takes and is provided with the 'module' object in which to set the 'exports' value.
// Once the function wrapper is executed, and the module object has been updated by our code, the value of module.exports is returned by the require function


// This module.exports object is returned when require(...) is called on this file
// This allows us to choose what will be available to other files outside of our module. Only the things attached to this variable  will be available outside the module for use.
// We can attach an object instead of just a function, this allows us to export a lot of functionality:
  // const greet = {
  //   sayHello: () => {
  //     console.log('Hello');
  //   }
  // }
