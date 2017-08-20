const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config');

// Routes
const setup = require('./routes/setup');
const api = require('./routes/api');
const app = express();

let port = process.env.PORT | 3000;

mongoose.connect(config.getDbConnectionString());

app.set('view engine', 'pug');
app.use('/seed', setup);
app.use('/api', api);
app.use(express.static(path.join(__dirname, '/public')));

app.listen(port);
