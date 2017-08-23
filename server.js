var express = require('express'),
  app       = express(),
  bodyParser = require('body-parser'),
  port      = process.env.PORT || 8030;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
var routes = require('./api/routes/nodetest');
routes(app);
app.listen(port);

console.log("rest-rhnode API server ejecutandoce en: " + port );
