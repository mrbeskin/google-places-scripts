var request = require('request');

function placesController(req, res, next) {
  var baseURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';

  // get full query string from client request
  var querySeperator = req.url.indexOf('?');
  var queryString = req.url.substr(querySeperator);

  request.get({
    url: baseURL + queryString + '&key=' + process.env.PLACES_API_KEY
  }).on('error', function(err){
    console.log(err);
    next(err);
  }).pipe(res);

}

module.exports = placesController;


