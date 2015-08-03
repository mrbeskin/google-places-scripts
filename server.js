var express = require('express');

var app = express();

app.set('port', process.env.PORT || 80);

require('./routes')(app);

app.use(function(err, req, res, next){
  res.status(500).json({error: err.toString()});
});

app.listen(app.get('port'), function() {
  console.log('Rocket Wagon Google Places integration server listening on http://localhost:' + app.get('port'));
});