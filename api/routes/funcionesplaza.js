'use strict';

module.exports = function(app){
  var funcionesplaza = require('../controllers/funcionesplaza');
  app.route('/funcionesplaza')
    .get(funcionesplaza.enlistar_todo)
    .post(funcionesplaza.crear_registro);

  app.route('/funcionesplaza/:id1/id2')
  .get(funcionesplaza.obtener_registro)
  .put(funcionesplaza.actualizar_registro)
  .delete(funcionesplaza.borrar_registro);
};
