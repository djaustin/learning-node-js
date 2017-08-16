const express = require('express');

const port = process.env.PORT || 3000;
const app = express();
// Express allow for many template engines to be used

// First we have to install the template engine
  // $ npm install pug --save

// Then we have to set the view engine to be the engine we are using
app.set('view engine', 'pug');
// Pug will by default look for views within the /views folder. This can be overwritten using app.set('views', '<dir_path>')


app.get('/', (req, res) => {
  // Compile and return the contents of index.pug
  res.render('index.pug');
})

app.get('/person/:id(\\d+)', (req, res) => {
  // Fetch id from URL and pass to pug engine to render the page with a variable
  res.render('person', {
    id: req.params.id
  })
})

app.use('/assets', express.static('./public'));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})
