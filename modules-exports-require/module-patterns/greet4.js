// Replacing the module.exports object with a function constructor that can be used to create different instances of the object across the application

function Greetr(){
  this.greeting = 'greet4';
}

Greetr.prototype.greet = function(){
  console.log(this.greeting);
}


module.exports = Greetr;
