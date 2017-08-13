// events is the name of the core events module in node js
const Events = require('events');
// This module could store all sorts of config values, here it contains the strings used for event types in our code in order to reduce errors in typing strings
const eventTypes = require('./config.js').events;
// This creates a new emitter so will not work between modules as is
var emitter = new Events();

// Closures allow variables from this execution context to be captured for when the listener is triggered
var name = 'John';
emitter.on(eventTypes.GREET, () => {
  console.log('Hello ' + name);
});

// Using 'Magic Strings' to identify our event types can be dangerous as a typo will cause a lot of problems and is fairly hard to detect
emitter.on(eventTypes.GREET, () => {
  console.log('Hola');
})
8
emitter.emit(eventTypes.GREET);
