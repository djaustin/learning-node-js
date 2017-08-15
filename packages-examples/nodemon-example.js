
// Nodemon is short for 'node monitor'
// It works like the normal 'node' CLI tool but it will automatically restart the application when any of the code in any of the files changes
// This means that we can change our code on the fly and don't have to worry about restarting node every time
// It is installed globally because our code is not dependent on it, and it is not a dev dependency. We just want to be able to use it everywhere

const http = require('http');
const fs = require('fs');
const path = require('path');

const port=1337, hostname='127.0.0.1';

http.createServer((req, res) => {
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
      res.writeHead('404');
      res.end();
  }
}).listen(port,hostname,() => {
  console.log(`Server listening on ${hostname}:${port}`);
})
