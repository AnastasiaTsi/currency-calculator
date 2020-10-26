const Joi = require('joi');
const express = require('express');
const router = express.Router();
const getRates = require('../rates_api')

/**
 * handling the get request
 */
router.get('/', async (req, res, nex) => {
    // getting the rates from the API
    try {
        let rates = await getRates('latest');

        var parsedBody = JSON.parse(JSON.stringify(rates));
        res.send(parsedBody);
    } catch (error) {
        res.status(500).send('internal server error')
    }
});

module.exports = router;