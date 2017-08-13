const util = require('util');
const Events = require('events');
// The inherit function in the util module contains a 'inherits' function which allows the properties and methods of one object constructor's prototype available to the object prototype of another constructor
// It will override the prototype of the inheriting object so any custom additions must be made after calling the function

function Greeter() {
  // Adds all properties and methods that are defined in the Events constructor to our Greeter objects.
  // We need to do this because util.inherits only connects us to the prototype of 'Events' meaning we would not get any of the members created in the Events constructor
  Events.call(this); // Functions a bit like a 'super' constructor
  this.greeting = 'Hello';
}

// Any new Greeter objects will also have the properties and methods from Greeter's prototype
// This sets the prototype of Greeter's prototype object to be the prototype of the Events constructor.
// Prototype Chain: Greeter -> Greeter.prototype -> Event.prototype
util.inherits(Greeter, Events);

// We can still add our own properties and methods to Greeter's prototype but this must be done after the call to 'inherits'
// Now we have access to the Greeter functionality but also to the ability to emit and listen to events
Greeter.prototype.greet = function(name) {
  if(name){
    console.log(this.greeting + ' ' + name);
  } else {
    console.log(this.greeting);
  }
  this.emit('greeted', name);
}

let gtr = new Greeter();

gtr.on('greeted', function(name='Someone'){
  console.log(name + ' has been greeted.')
})

gtr.greet('John');
