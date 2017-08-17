const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

// Add endpoints to core app
module.exports = function(app){
  app.get('/api/person/:id(\\d+)', (req, res) => {
    // Return person info
  });

  app.post('/api/person', jsonParser, (req, res) => {
    // Save person to database
  });

  app.delete('/api/person/:id(\\d+)', (req, res) => {
    // Delete person
  });
}
