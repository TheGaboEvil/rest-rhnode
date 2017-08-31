'use strict';

module.exports = function(app){
  var nodetest = require('../controllers/planilla');
  app.route('/planilla')
    .get(planilla.enlistar_todo)
    .post(planilla.crear_registro);

  app.route('/nodetest/:id')
  .get(planilla.obtener_registro)
  .put(planilla.actualizar_registro)
  .delete(planilla.borrar_registro);
};
