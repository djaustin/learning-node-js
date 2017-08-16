const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
// express exports a function so we invoke that function here
const app = express();
// Retrieve the port number the environment variable named PORT if it exists, else use 3000
const port = process.env.PORT || 3000;

// STATIC FILES AND MIDDLEWARE
// Middleware is code that sits between two layers of software such as between the request and response of our application
// If we want to be able to handle static files being downloaded without having to manually deal with each file request eg. css, html, image files
// We do not want to have to write a 'get' case for all of the files individually

// This means that whenever a request for /assets/<some_file> comes in, it will look for the file in __dirname/public
// A request to localhost:3000/assets/style.css will return the style.css file from ./public
app.use('/assets', express.static(path.join(__dirname, '/public')));


// We can specify our own middleware using the structure below
// You can specify a route (eg. '/'). Whenever the route is hit, the function is executed
// The use function can be called with no route and the function will then be applied to every incoming request
app.use((req, res, next) => {
  // This logs every request to the console
  console.log(req.method, req.url);
  // this is provided for middleware to our function.
  // It runs the next middleware, technically the .get(...) calls are middleware so this will carry on with the usual response
  // Route handlers and middleware functions are executed in the order they are declared in our code
  // If this middleware function is declared after the route handler, it won't be run.
  next();
})
// Express exposes methods based on the HTTP verbs (GET, POST, DELETE etc)
// They take a url (eg. '/') and a callback to run when the request is received
app.get('/', (req, res) => {
  // Express will try to infer the content type of the data that we send
  res.send('<html><body>Hello</body></html>');
});

app.get('/jsonData', (req, res) => {
  // Express is able to convert between JSON and js objects for us
  res.send({firstname: 'John', lastname: 'Doe'} );
})

// There are many different, more expressive ways that express can use routing and these are on the website (eg. using regex for url)

// We can easily extract the parameters from a url by using colon-prefixed variables in the url as below.
// This sends back a JSON file showing the person ID that was included in the request
// We can also restrict the type of value that can be used in the paramaters. The '(\\d+)' below means that our app only accepts requests where the :id parameter is one or more digits
app.get('/person/:id(\\d+)', (req, res) => {
  res.send({personId: req.params.id});
})

// Start listening on a given port
app.listen(port);
