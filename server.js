var express = require('express'),
  app       = express(),
  path = require('path'),
  bodyParser = require('body-parser'),
  port      = process.env.PORT || 8030;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('restCliente/dist/'));

var routes = require('./api/routes/nodetest');
routes(app);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'restCliente/dist/index.html'));
});

app.listen(port);

console.log("rest-rhnode API server ejecutandoce en: " + port );
