// When our code is wrapped in a function expression to give us access to 'module' and therefore module.exports,
// we also get access to a parameter called exports. The engine passes in module.exports as the value for this parameter so
// 'exports' and 'module.exports' point to the same thing
  // exports  = function(){
  //   console.log('Hello');
  // }

exports.greet  = function(){
  console.log('Hello');
}

// If we replace the exports variable with a pointer to a new object or function, the module.exports object is not affected
// This is because when we assign a value to the exports variable, we change the memory address pointer for that variable so that it points at our object or function instead of the module.exports object
// The node js engine 'require' function returns the 'module.exports' object so nothing will be returned if we change the pointer of 'exports'
// We would instead need to actually change the 'module.exports' object
// This is because we are simply mutating the 'module'

// If we want to use 'exports' we have to just mutate it instead of changing the reference
// This allows us to add properties and methods to the object eg. exports.

// It is probably just easier to use module.exports...
console.log(exports);
console.log(module.exports);
