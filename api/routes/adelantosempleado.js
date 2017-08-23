'use strict';

module.exports = function(app){
  var adelantosempleado = require('../controllers/adelantosempleado');
  app.route('/adelantosempleado')
    .get(adelantosempleado.enlistar_todo)
    .post(adelantosempleado.crear_registro);

  app.route('/adelantosempleado/:id')
  .get(adelantosempleado.obtener_registro)
  .put(adelantosempleado.actualizar_registro)
  .delete(adelantosempleado.borrar_registro);
};
