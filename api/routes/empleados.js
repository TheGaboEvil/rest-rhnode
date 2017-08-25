'use strict';

module.exports = function(app){
  var empleados = require('../controllers/empleados');
  app.route('/empleados')
    .get(empleados.enlistar_todo)
    .post(empleados.crear_registro);

  app.route('/empleados/:id')
  .get(empleados.obtener_registro)
  .put(empleados.actualizar_registro)
  .delete(empleados.borrar_registro);
};
