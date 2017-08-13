'use strict';
const util = require('util');
const Events = require('events');

// REMEMBER THIS IS JUST SYNACTIC SUGAR FOR FUNCTION CONSTRUCTORS AND '.PROTOTYPE.METHOD =' 
class Greeter extends Events {
  constructor(){
    super();
    this.greeting = 'Hello';
  }

  greet(name){
    if(name){
      console.log(`${this.greeting} ${name}`);
    } else {
      console.log(this.greeting);
    }
    this.emit('greeted', name);
  }
}

let gtr = new Greeter();

gtr.on('greeted', function(name='Someone'){
  console.log(name + ' has been greeted.');
})

gtr.greet('John');
