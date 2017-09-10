'use strict';

module.exports = function(app){
  var candidatosevaluaciones = require('../controllers/candidatosevaluaciones');
  app.route('/candidatosevaluaciones')
    .get(candidatosevaluaciones.enlistar_todo)
    .post(candidatosevaluaciones.crear_registro);

  app.route('/candidatosevaluaciones/:id1/:id2')
  .get(candidatosevaluaciones.obtener_registro)
  .put(candidatosevaluaciones.actualizar_registro)
  .delete(candidatosevaluaciones.borrar_registro);
};
