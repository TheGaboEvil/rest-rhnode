'use strict';

module.exports = function(app){
  var prestamoempleado = require('../controllers/prestamoempleado');
  app.route('/prestamoempleado')
    .get(prestamoempleado.enlistar_todo)
    .post(prestamoempleado.crear_registro);

  app.route('/prestamoempleado/:id')
  .get(prestamoempleado.obtener_registro)
  .put(prestamoempleado.actualizar_registro)
  .delete(prestamoempleado.borrar_registro);
};
