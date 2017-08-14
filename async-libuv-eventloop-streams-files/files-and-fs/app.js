const fs = require('fs');

// This is a synchronous approach to reading a file, the engine will wait until the file is completely loaded before continuing with the rest of the code in this file
// This has limited use cases such as needing to load a file completely at the start of the code before anything else happens
let greet = fs.readFileSync(`${__dirname}/greet.txt`, 'utf8'); //encoding is not required if utf8 because that is default
console.log(greet);

// This is asychronous so we must provide a callback. This callback will be run when the file is loaded or an error has occurred.
// This is an example of an 'error-first callback'. This just means that the first parameter will be an object defining the error or null if no error happened
// Asynchronous is preferable
// If an encoding method is provided (second parameter), a string will be returned in 'data'. Otherwise, a buffer will be returned
// The buffer is stored on the heap, if a large file is being read and this code is being run multiple times we could run into memory issues.
// We need a way to minimise the data we are working with at any one time... STREAMS
fs.readFile(`${__dirname}/greet.txt`, 'utf8', function(err, data){
  if(!err){
    console.log(data);
  }
});

// This will be run before the 'readFile' call because it is an asychronous call so the node engine continues to run the rest of the code while the file is being loaded
console.log('Done!');
