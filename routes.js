var placesController = require('./controllers/placesController');

function routes(app) {

  app.get('/googlePlaces', placesController);

}

module.exports = routes;