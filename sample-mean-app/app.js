const express = require('express');
const path = require('path');
const app = express();

let port = process.env.PORT | 3000;

app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, '/public')));

app.listen(port);
