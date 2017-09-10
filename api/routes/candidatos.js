'use strict';

module.exports = function(app){
  var candidatos = require('../controllers/candidatos');
  app.route('/candidatos')
    .get(candidatos.enlistar_todo)
    .post(candidatos.crear_registro);

  app.route('/candidatos/:id1/:id2/:id3')
  .get(candidatos.obtener_registro)
  .put(candidatos.actualizar_registro)
  .delete(candidatos.borrar_registro);
};
