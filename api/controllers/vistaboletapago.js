'use strict';

var ora = require('../models/ora');

exports.boletasempleado = function(req,res){

  ora.then(function(con){
    con.execute('select * from BOLETA_PAGO where codEmpleado = :in_codempleado and OBSERVACION = :in_observacion',function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener Boleta de pago " + err.message
        }));
      }else{
        console.log("Boleta de pago respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};
