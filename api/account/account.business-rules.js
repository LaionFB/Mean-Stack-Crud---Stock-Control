"use strict";

const jwt      = require('jsonwebtoken');
const config   = require('../../config');
const bcrypt   = require('bcrypt-nodejs');
const provider = require('./account.provider');

module.exports.login = async (email, password) => {
    try{
        let account = await provider.getByEmail(email);
        if (account && bcrypt.compareSync(password, account._password)){
            let jwtContent = {
                _id : account._id,
                name: account.firstName + ' ' + account.lastName,
                email: account.email
            }
            return { token: jwt.sign(jwtContent, config.secret), username: account.firstName + ' ' + account.lastName };
        } else {
            throw new Error();
        }
    } catch(e){
        let error = new Error();
        error.message = "Email e senha não conferem!";
        throw error;
    }
}
