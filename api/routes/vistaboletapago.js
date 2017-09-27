'use strict';

module.exports = function(app){
  var vistaboletapago = require('../controllers/vistaboletapago');
  app.route('/vistaboletapago')
    .get(vistaboletapago.boletasempleado)


};
