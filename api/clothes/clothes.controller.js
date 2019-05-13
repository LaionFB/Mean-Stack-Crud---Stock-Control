"use strict";

const provider   = require('./clothes.provider');
const express    = require('express');
const route      = express.Router();
const authEngine = require('../../authentication/auth');

route.use(authEngine.authMiddleware);

route.get('/getAll', async (req, res) => {
    try {
        let clothes = await provider.getAll();
        res.status(200).send(clothes);
    } catch(e) {
        res.status(400).send(e.message);
    }
});

route.get('/get/:id', async (req, res) => {
    try {
        let clothes = await provider.get(req.params.id);
        res.status(200).send(clothes);
    } catch(e) {
        res.status(400).send(e.message);
    }
});

route.put('/insert', async (req, res) => {
    try {
        await provider.insert(req.body);
        res.status(200).send({ OK: true });
    } catch(e) {
        res.status(400).send(e.message);
    }
});

route.post('/update', async (req, res) => {
    try {
        await provider.update(req.body);
        res.status(200).send({ OK: true });
    } catch(e) {
        res.status(400).send(e.message);
    }
});

route.delete('/delete/:id', async (req, res) => {
    try {
        await provider.delete(req.params.id);
        res.status(200).send({ OK: true });
    } catch(e) {
        res.status(400).send(e.message);
    }
});

module.exports = route;
