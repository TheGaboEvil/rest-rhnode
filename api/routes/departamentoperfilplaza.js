'use strict';

module.exports = function(app){
  var departamentoperfilplaza = require('../controllers/departamentoperfilplaza');
  app.route('/departamentoperfilplaza')
    .get(departamentoperfilplaza.enlistar_todo)
    .post(departamentoperfilplaza.crear_registro);

  app.route('/departamentoperfilplaza/:id1/:id2/:id3')
  .get(departamentoperfilplaza.obtener_registro)
  .put(departamentoperfilplaza.actualizar_registro)
  .delete(departamentoperfilplaza.borrar_registro);
};
