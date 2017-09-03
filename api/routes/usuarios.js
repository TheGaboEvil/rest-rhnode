'use strict';

module.exports = function(app){
  var usuarios = require('../controllers/usuarios');
  app.route('/usuarios')
    .get(usuarios.enlistar_todo)
    .post(usuarios.crear_registro);

  app.route('/usuarios/:id')
  .get(usuarios.obtener_registro)
  .put(usuarios.actualizar_registro)
  .delete(usuarios.borrar_registro);
};
