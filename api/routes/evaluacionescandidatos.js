'use strict';

module.exports = function(app){
  var evaluacionescandidatos = require('../controllers/evaluacionescandidatos');
  app.route('/evaluacionescandidatos')
    .get(evaluacionescandidatos.enlistar_todo)
    .post(evaluacionescandidatos.crear_registro);

  app.route('/evaluacionescandidatos/:id')
  .get(evaluacionescandidatos.obtener_registro)
  .put(evaluacionescandidatos.actualizar_registro)
  .delete(evaluacionescandidatos.borrar_registro);
};
