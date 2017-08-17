const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/address_book');
const Schema = mongoose.Schema;

// Define a schema that dictates the structure of a document
let personSchema = new Schema({
  firstname: String,
  lastname: String,
  address: String,
  age: Number
});

// generate a model from that schema. This creates a copy of the schema so changes to the schema made after model generation will not be seen unless a new model is generated
// The model allows for interaction with the database. Objects sent to or retrieved from the database will be fit the schema provided
let Person = mongoose.model('Person', personSchema);

// var jake = new Person({
//   firstname: 'Jane',
//   lastname: 'Doe',
//   address: '555 Main St.',
//   age: 5
// });
//
// jake.save((err) => {
//   if(err) throw err;
//   console.log('Person saved');
// });

// Find all people with an age less than or equal to 6 and log the firstname of the first result
Person.where('age').exists().lte(6).exec((err, results) => {
  console.log(results[0].firstname);
})
