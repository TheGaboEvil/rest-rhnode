'use strict';

module.exports = function(app){
  var nodetest = require('../controllers/nodetest');
  app.route('/nodetest')
    .get(nodetest.enlistar_todo)
    .post(nodetest.crear_registro);

  app.route('/nodetest/:id')
  .get(nodetest.obtener_registro)
  .put(nodetest.actualizar_registro)
  .delete(nodetest.borrar_registro);
};
