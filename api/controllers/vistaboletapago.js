'use strict';

var ora = require('../models/ora');

exports.boletasempleado1 = function(req,res){
  
    ora.then(function(con){
      con.execute('select * from BOLETA_PAGO where codEmpleado = :codempleado',
      [req.params.id1],function(err,result){
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
          res.end(JSON.stringify({
            status:200,
            data:result.rows}));
        }
      });
    }); //fin del ora.then()
  };

exports.boletasempleado2 = function(req,res){

  ora.then(function(con){
    con.execute('select * from BOLETA_PAGO where codEmpleado = :codempleado and OBSERVACION = :observacion',
    [req.params.id1,req.params.id2],function(err,result){
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
