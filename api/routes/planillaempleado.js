'use strict';

module.exports = function(app){
  var planillaempledo = require('../controllers/planillaempleado');
  app.route('/planillaempleado')
    .get(planillaempledo.enlistar_todo)
    .post(planillaempledo.crear_registro);

  app.route('/planillaempleado/:id1/:id2/:id3')
  .get(planillaempledo.obtener_registro)
  .put(planillaempledo.actualizar_registro)
  .delete(planillaempledo.borrar_registro);
};
