"use strict";

const jwt      = require('jsonwebtoken');
const config   = require('../config');

module.exports.authMiddleware = async (req, res, next) => {
    let token = req.headers['x-access-token'];
    try{
        let jwtContent = jwt.verify(token, config.secret);
        let user = {
            _id : jwtContent.id,
            name: jwtContent.name,
            email: jwtContent.email
        }
        req.user = user;
        next();
    } catch(e){
        return res.status(401).send('Sessão expirada, faça login novamente!');
    }
}

