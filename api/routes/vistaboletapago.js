"use strict";

module.exports = function(app) {
  var vistaboletapago = require("../controllers/vistaboletapago");
  app.route("/vistaboletapago/:id1")
  .get(vistaboletapago.boletasempleado1);

  app.route("/vistaboletapago/:id1/:id2")
  .get(vistaboletapago.boletasempleado2);
};
