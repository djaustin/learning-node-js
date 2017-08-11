// The node engine is capable of importing JSON files and converting them to JSON objects
const greetings = require('./greetings.json');

var greet = function(){
  console.log(greetings.es);
}

module.exports = greet;
