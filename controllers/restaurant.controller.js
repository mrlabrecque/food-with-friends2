'use strict';
const config = require('config');

const yelp = require('yelp-fusion');
const client = yelp.client(config.get("RESTAURANT_API_KEY"));

//  Get all Posts handler
exports.getRestaurants = async(req, res, next) => {
    client.search(req.query).then(response => {
        res.status(200).json({ restaurants: response.jsonBody.businesses });
      }).catch(e => {
        res.status(500).json({message: e});
      });
}