// REVEALING MODULE PATTERN
//'Extremely popular and useful'
// Hiding the greeting variable but exposing the greet function
// We return only the properties and methods that we want to via a returned object
// Allows for information hiding and prevents the underlying, hidden members from being changed if we don't want them to be
let greeting = 'greet5';

function greet(){
  console.log(greeting);
}
module.exports = {
  greet: greet
};
