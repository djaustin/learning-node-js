const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

// Add endpoints to the core app
module.exports = function(app){
  app.get('/', (req, res) => {
    res.render('index.pug');
  });

  // It is fairly simple to extract data from the query string of a GET request. Just use req.query object
  app.get('/person/:id(\\d+)', (req, res) => {
    res.render('person', {
      id: req.params.id,
      queryString: req.query
    });
  });

  // Extracting the parameters from a post request is not part of the standard express module so we need to use some middleware
  // body-parser provides factory methods for many different middleware functions that are specialised for certain content-types
  // Every type will place the result in req.body if it was able to parse the body. An empty object will be there if it was no body, mismatched content-type or an error occurred
  // eg. bodyParser.json(..) will parse the body if it is of type JSON and set the value of req.body to an object created from the JSON
  // eg. bodyParser.text(..) will parse the body if it is of type text and set the value of req.body to string created from the body
  // We can chain middleware in our requests. The below will check for URL-encoded then check for JSON so the req.body variable will be set if either of them can parse the body
  app.post('/person', bodyParser.urlencoded({extended:false}), jsonParser, (req, res) => {
    res.render('person', {postParams: req.body})
  });


  app.post('/personjson', jsonParser, (req, res) => {
    res.send('JSON Data Received');
    console.log('Received: ', req.body);
  });
}
