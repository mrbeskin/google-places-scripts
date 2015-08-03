var express = require('express');

var app = express();

app.set('port', process.env.PORT || 80);

require('./routes')(app);

// Error handling
app.use(function(req, res){
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});

app.use(function(req, res){
  res.type('text/plain');
  res.status(500);
  res.send('500 - Server Error');
});

app.listen(app.get('port'), function() {
  console.log('Rocket Wagon Google Places integration server listening on http://localhost:' + app.get('port'));
});