'use strict';

var ora = require('../models/ora');

exports.enlistar_todo = function(req,res){

  ora.then(function(con){
    con.execute('SELECT * FROM descuentosautomaticos',function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener descuentosautomaticos " + err.message
        }));
      }else{
        console.log("descuentosautomaticos respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};

exports.crear_registro = function(req,res){
  ora.then(function(con){
    
    con.execute("INSERT INTO descuentosautomaticos VALUES(:in_numprestamo,:in_codempleado,:in_tipoprestamo,:in_entidadprestamo,:in_numcuenta,:in_montoprestamo,:in_cuotaprestamo,:in_fechapago,:in_mododescuento,:in_estadoprestamo)",
    [req.body.in_numprestamo,req.body.in_codempleado,req.body.in_tipoprestamo,req.body.in_entidadprestamo,req.body.in_numcuenta,req.body.in_montoprestamo,req.body.in_cuotaprestamo,req.body.in_fechapago,req.body.in_mododescuento,req.body.in_estadoprestamo],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al crear descuentosautomaticos" + err.message
        }));
      }else{
        console.log("descuentosautomaticos respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.obtener_registro = function(req,res){
  ora.then(function(con){
    con.execute('SELECT * FROM descuentosautomaticos WHERE in_numprestamo=:id1',
    [req.params.id1],function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener descuentosautomaticos" + err.message
        }));
      }else{
        console.log("descuentosautomaticos respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};
exports.actualizar_registro = function(req,res){
  ora.then(function(con){
    con.execute("UPDATE descuentosautomaticos SET cuotaprestamo=:in_cuotaprestamo,fechapago=:in_fechapago,mododescuento=:in_mododescuento,estadoprestamo=:in_estadoprestamo WHERE numprestamo=:id1",
    [req.body.in_cuotaprestamo,req.body.in_fechapago,req.body.in_mododescuento,req.body.in_estadoprestamo,req.params.id1],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al actualizar descuentosautomaticos " + err.message
        }));
      }else{
        console.log("descuentosautomaticos actualizo :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.borrar_registro = function(req,res){
  ora.then(function(con){
    con.execute("DELETE FROM descuentosautomaticos WHERE in_numprestamo=:id1",
    [req.params.id1],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al eliminar descuentosautomaticos " + err.message
        }));
      }else{
        console.log("descuentosautomaticos borrado :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
