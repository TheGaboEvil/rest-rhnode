'use strict';

module.exports = function(app){
  var planilla  = require('../controllers/planilla');
  app.route('/planilla')
    .get(planilla.enlistar_todo)
    .post(planilla.crear_registro);

  app.route('/planilla/:id1/:id2')
  .get(planilla.obtener_registro)
  .put(planilla.actualizar_registro)
  .delete(planilla.borrar_registro);
};
