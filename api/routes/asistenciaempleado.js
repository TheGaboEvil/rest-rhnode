'use strict';

module.exports = function(app){
  var asistenciaempleado = require('../controllers/asistenciaempleado');
  app.route('/asistenciaempleado')
    .get(asistenciaempleado.enlistar_todo)
    .post(asistenciaempleado.crear_registro);

  app.route('/asistenciaempleado/:id')
  .get(asistenciaempleado.obtener_registro)
  .put(asistenciaempleado.actualizar_registro)
  .delete(asistenciaempleado.borrar_registro);
};
