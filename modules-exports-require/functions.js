// Function statement
function greet() {
  console.log('hello');
}
greet();

// First class, higher-order functions
function logGreeting(fn){
  fn();
}

logGreeting(greet);

// Function expression - A block of code that results in a value
var greetMe = function(){
  console.log('Hi');
}

// A function is a specialised type of object
console.log(greetMe);

greetMe();
logGreeting(greetMe);

// Using function expressions on the fly
logGreeting(function(){
  console.log('Hola');
});
