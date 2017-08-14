// Handle server creation and request handling
const http = require('http');
// Handle access to HTML file on server
const fs = require('fs');

const port = 1337;
const hostname = '127.0.0.1';
const message = 'Thank you for visiting my site';

const server = http.createServer((req, res) => {
  res.writeHead('200', {
    'Content-Type': 'text/html'
  })

  // Load index.html with fudged template language. Replace the placeholder with the message variable
  fs.readFile(`${__dirname}/index.html`,'utf8', (err, data) => {
    if(!err){
      let html = data.replace('{message}', message);
      res.end(html);
    }
  });

  // OR CAN USE THIS AS SYNCHRONOUS VERSION OF FILE LOADING
  // let template = fs.readFileSync(`${__dirname}/index.html`,'utf8');
  // let html = template.replace('{message}', message);
  // res.end(html);
});

server.listen(port, hostname, () => {
  console.log(`Server listening on ${hostname}:${port}`);
})
