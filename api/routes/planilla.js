'use strict';

module.exports = function(app){
  var planilla  = require('../controllers/planilla');
  app.route('/planilla')
    .get(planilla.enlistar_todo)
    .post(planilla.crear_registro);

<<<<<<< HEAD
  app.route('/planilla/:id')
=======
  app.route('/planilla/:id1/:id2')
>>>>>>> 0b464f3b4c36b160f21c5300b09f5e25c4b967a6
  .get(planilla.obtener_registro)
  .put(planilla.actualizar_registro)
  .delete(planilla.borrar_registro);
};
