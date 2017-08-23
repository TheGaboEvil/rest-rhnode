'use strict';

module.exports = function(app){
  var catalogoplanilla = require('../controllers/catalogoplanilla');
  app.route('/catalogoplanilla')
    .get(catalogoplanilla.enlistar_todo)
    .post(catalogoplanilla.crear_registro);

  app.route('/catalogoplanilla/:id')
  .get(catalogoplanilla.obtener_registro)
  .put(catalogoplanilla.actualizar_registro)
  .delete(catalogoplanilla.borrar_registro);
};
