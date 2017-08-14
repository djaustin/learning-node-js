const http = require('http');
const port = 1337;
const hostname = '127.0.0.1';

// Create a server object with a callback to be run on receipt of a request
const server = http.createServer((req, res) => {
  res.writeHead('200', {
    'Content-Type': 'text/plain',
  });
  res.end('Hello World\n'); // .end must be used to signal to the server that the message is complete
});

// Instruct the server to listen on the given port and hostname. A server may have more than one IP address so this allows you to specify which one
// The callback is used as a listener for the 'listening' event
server.listen(port, hostname, () => {
  console.log(`Server listening on ${hostname}:${port}`);
});
