'use strict';

module.exports = function(app){
  var log_in = require('../controllers/log_in');
  app.route('/log_in')
    .post(log_in.crear_registro); // funcion para iniciar la session.
};
