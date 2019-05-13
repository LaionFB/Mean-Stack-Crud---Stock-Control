"use strict";

const express    = require('express');
const http       = require('http');
const bodyParser = require('body-parser');
const cors       = require('cors');
const mongoose   = require('mongoose');
const config     = require('./config.json');

let apiRouter    = require('./api/router');
let app          = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/app/dist/stock-control'));

app.use('/api', apiRouter);

mongoose.connect(config.connectionString, { useCreateIndex: true, useNewUrlParser: true })
.then(() => console.log('Database connected!'))
.catch(e => console.error('Failed to connect on database!'));

const port = process.env.PORT || 5555;
app.server = http.createServer(app);
app.server.listen(port, () => console.log(`Running on port ${port}`));
