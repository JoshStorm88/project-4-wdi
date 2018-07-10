const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(`${__dirname}/public`));

const routes = require('./config/routes');

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI, port } = require('./config/environment');

mongoose.connect(dbURI);

app.use(bodyParser.json());
app.use('/api', routes);

app.listen(port, () => console.log(`Galloping towards ${port}`));

module.exports = app;
