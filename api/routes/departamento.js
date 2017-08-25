'use strict';

module.exports = function(app){
  var departamento = require('../controllers/departamento');
  app.route('/departamento')
    .get(departamento.enlistar_todo)
    .post(departamento.crear_registro);

  app.route('/departamento/:id')
  .get(departamento.obtener_registro)
  .put(departamento.actualizar_registro)
  .delete(departamento.borrar_registro);
};
