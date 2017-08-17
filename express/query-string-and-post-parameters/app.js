const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const app = express();
const jsonParser = bodyParser.json();


app.set('view engine', 'pug');
app.use('/assets', express.static('./public'));

// The following require statements return functions that take express apps as parameters
// The when the functions are called, a series of app.get, app.post, app.delete etc. calls are run to add the endpoints to this app 

// add api controllers to this app
require('./controllers/api.js')(app);
// add html controllers to this app
require('./controllers/html.js')(app);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
