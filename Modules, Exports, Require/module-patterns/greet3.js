// Replace module.exports with a new object containing properies and methods
// Because the value stored in module.exports is cached, there will only be one instanc of this object created and it will be returned every time this module is imported in the application
// Can be useful but also potentially dangerous

function Greetr(){
  this.greeting = 'greet3';
}

Greetr.prototype.greet = function(){
  console.log(this.greeting);
}

module.exports = new Greetr();
