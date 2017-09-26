'use strict';

module.exports = function(app){
  var descuentosautomaticos = require('../controllers/descuentosautomaticos');
  app.route('/descuentosautomaticos')
    .get(descuentosautomaticos.enlistar_todo)
    .post(descuentosautomaticos.crear_registro);

  app.route('/descuentosautomaticos/:id1')
  .get(descuentosautomaticos.obtener_registro)
  .put(descuentosautomaticos.actualizar_registro)
  .delete(descuentosautomaticos.borrar_registro);
};
