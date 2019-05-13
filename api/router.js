"use strict";

const express    = require('express');
const routes     = express.Router();
const authEngine = require('../authentication/auth');

let account      = require('./account/account.controller');
let clothes      = require('./clothes/clothes.controller');

routes.use('/account', account);
routes.use('/clothes', clothes);

module.exports = routes;
