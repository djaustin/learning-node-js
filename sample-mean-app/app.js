const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config');
const app = express();

let port = process.env.PORT | 3000;

app.set('view engine', 'pug');
mongoose.connect(config.getDbConnectionString());
app.use(express.static(path.join(__dirname, '/public')));

app.listen(port);
