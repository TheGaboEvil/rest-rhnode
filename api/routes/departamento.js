'use strict';

module.exports = function(app){
  var departamento = require('../controllers/departamento');
  app.route('/departamento')
    .get(departamento.enlistar_todo)
    .post(departamento.crear_registro);

<<<<<<< HEAD
  app.route('/departamento/:id1/:id2')
=======
  app.route('/departamento/:id')
>>>>>>> 028bde28743e605721f70fff24f9553ae39214cf
  .get(departamento.obtener_registro)
  .put(departamento.actualizar_registro)
  .delete(departamento.borrar_registro);
};
