'use strict';

module.exports = function(app){
  var planillaempledo = require('../controllers/planillaempledo');
  app.route('/planillaempledo')
    .get(planillaempledo.enlistar_todo)
    .post(planillaempledo.crear_registro);

  app.route('/planillaempledo/:id')
  .get(planillaempledo.obtener_registro)
  .put(planillaempledo.actualizar_registro)
  .delete(planillaempledo.borrar_registro);
};
