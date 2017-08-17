const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const app = express();
const jsonParser = bodyParser.json();


app.set('view engine', 'pug');
app.use('/assets', express.static('./public'));

// add api controllers to this app
require('./controllers/api.js')(app);
require('./controllers/html.js')(app);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
