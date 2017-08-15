// Routing is the process of mapping HTTP requests to content in the web server
// Could be static HTML files, files on the server, data stored in databases etc..

const http = require('http');
const fs = require('fs');
const path = require('path');

const port=1337, hostname='127.0.0.1';

http.createServer((req, res) => {
  // Unless we route requests, all request to this server will return the same thing

  // Send JSON data on call to '/api'. Send the index.html file on call to '/'
  switch (req.url) {
    case '/api':
      res.writeHead('200', {
        'Content-Type': 'application/json'
      });

      var obj = {
        firstname: 'John',
        lastname: 'Doe'
      };
      res.end(JSON.stringify(obj));
      break;
    case '/':
      fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res);
      break;
    default:
      //Respond with 404 error
      res.writeHead('404');
      res.end();
  }
}).listen(port,hostname,() => {
  console.log(`Server listening on ${hostname}:${port}`);
})
