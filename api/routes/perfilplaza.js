'use strict';

module.exports = function(app){
  var perfilplaza = require('../controllers/perfilplaza');
  app.route('/perfilplaza')
    .get(perfilplaza.enlistar_todo)
    .post(perfilplaza.crear_registro);

  app.route('/perfilplaza/:id')
  .get(perfilplaza.obtener_registro)
  .put(perfilplaza.actualizar_registro)
  .delete(perfilplaza.borrar_registro);
};
