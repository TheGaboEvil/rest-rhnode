'use strict';

module.exports = function(app){
  var agendaempleado = require('../controllers/agendaempleado');
  app.route('/agendaempleado')
    .get(agendaempleado.enlistar_todo)
    .post(agendaempleado.crear_registro);

  app.route('/agendaempleado/:id1/:id2/:id3')
  .get(agendaempleado.obtener_registro)
  .put(agendaempleado.actualizar_registro)
  .delete(agendaempleado.borrar_registro);
};
