const fetch = require('node-fetch');
require('dotenv').config();

// this line tells chrome to ignore CORS policy just in case
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
};

exports.handler = async (event, context) => {
  
  try {
  
    const response = await fetch (`https://api.yelp.com/v3/businesses/search?location=${event.queryStringParameters.yelpQuery}&attributes=hot_and_new`, {

      headers: {
        Authorization: `Bearer ${process.env.YELP_KEY}`,
      }
    });
    const data = await response.json();
    const json = JSON.stringify(data);
    
    return {
      statusCode: 200,
      headers, 
      body: json };
  }
  catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error }),
    };
  }
};