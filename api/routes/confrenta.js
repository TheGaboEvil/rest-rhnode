'use strict';

module.exports = function(app){
  var confrenta = require('../controllers/confrenta');
  app.route('/confrenta')
    .get(confrenta.enlistar_todo)
    .post(confrenta.crear_registro);

  app.route('/confrenta/:id')
  .get(confrenta.obtener_registro)
  .put(confrenta.actualizar_registro)
  .delete(confrenta.borrar_registro);
};
