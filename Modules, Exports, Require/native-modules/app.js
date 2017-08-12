// Native modules are the node js core modules
// Info on these can be found in the api documentation on the node js website
// Some are global and are always available, others require imports

// We do not need to specify the directory for native js files as ***it will check for these before looking for files***
const util = require('util');

let name = 'Dan';
let greeting = util.format('Hello, %s', name);
util.log(greeting);
