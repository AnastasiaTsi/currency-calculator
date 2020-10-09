const Joi = require('joi');
const express = require('express');
const router = express.Router();
const getRates = require('../rates_api')

/**
 * handling the get request
 */
router.get('/', async(req, res) =>{
    // getting the rates from the API
    let rates = await getRates('latest');
    
    var parsedBody = JSON.parse(JSON.stringify(rates));
    res.send( parsedBody );
 
});

module.exports = router;