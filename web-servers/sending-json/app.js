const http = require('http');

http.createServer((req, res) => {

  // Instruct the browser to treat our response as JSON
  res.writeHead('200', {
    'Content-Type': 'application/json'
  });

  // The object we will convert to JSON and send
  var obj = {
    firstname: 'John',
    lastname: 'Doe'
  };

  // Convert to JSON and send with header
  // JSON is a built in library for this purpose. Can also JSON.parse(...) to turn JSON into an object
  // This allows us to easily serialise and deserialise data
  res.end(JSON.stringify(obj));

}).listen(1337, '127.0.0.1');
