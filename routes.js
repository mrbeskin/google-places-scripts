var placesController = require('./controllers/placesController');

function routes(app) {

  app.get('/googleplaces/nearby', placesController);

}

module.exports = routes;