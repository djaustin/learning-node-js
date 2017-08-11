// Aggregating modules
const english = require('./english');
const spanish = require('./spanish');

// We are building a new object by combining the two other modules.
// This could allow larger modules to be created from many constituent parts which are in seperate files for clarity
module.exports = {
  english: english,
  spanish: spanish
};
