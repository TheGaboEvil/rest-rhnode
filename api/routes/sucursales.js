'use strict';

module.exports = function(app){
  var sucursales = require('../controllers/sucursales');
  app.route('/sucursales')
    .get(sucursales.enlistar_todo)
    .post(sucursales.crear_registro);

  app.route('/sucursales/:id')
  .get(sucursales.obtener_registro)
  .put(sucursales.actualizar_registro)
  .delete(sucursales.borrar_registro);
};