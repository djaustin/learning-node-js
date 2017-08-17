const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const mysql = require('mysql');

const allCustomersQuery = `SELECT p.firstname, p.lastname, a.address
FROM person p, personAddress pa, address a
WHERE a.id = pa.addressId and p.id = pa.personId;`


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'pass',
  database: 'customers'
})

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

  app.get('/api/customers', (req, res) => {
    console.log('Retrieving all customers');
    // MYSQL returns a javascript object for us containing the results
    connection.query(allCustomersQuery, (err, results, fields) => {
      if(!err){
        res.send(results);
      }else{
        res.send(err);
      }
    })
  })
}
