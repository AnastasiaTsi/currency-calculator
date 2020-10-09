/**
 * Here we fetch the api with the rates
 */

const fetch = require('node-fetch');

//Fetching the rates json
async function getRates(period) {

    try{
        const BASE_URL = `https://api.exchangeratesapi.io/${period}`;
        const response = await fetch(BASE_URL);
        const rates = await response.json();
        return rates;
    }catch(error){
        console.log(error);
        return error;
    }  
}

module.exports = getRates;