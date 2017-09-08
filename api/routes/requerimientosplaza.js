'use strict';

module.exports = function(app){
  var requerimientosplaza = require('../controllers/requerimientosplaza');
  app.route('/requerimientosplaza')
    .get(requerimientosplaza.enlistar_todo)
    .post(requerimientosplaza.crear_registro);

  app.route('/requerimientosplaza/:id1/:id2')
  .get(requerimientosplaza.obtener_registro)
  .put(requerimientosplaza.actualizar_registro)
  .delete(requerimientosplaza.borrar_registro);
};
