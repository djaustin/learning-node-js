const Emitter = require('./emitter');

var e1 = new Emitter();

// Closures allow variables from this execution context to be captured for when the listener is triggered
var name = 'John';
e1.on('greet', () => {
  console.log('Hello ' + name);
});

e1.on('greet', () => {
  console.log('Hola');
})

e1.emit('greet');
