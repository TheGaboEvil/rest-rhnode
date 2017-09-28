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
    
    con.execute("INSERT INTO descuentosautomaticos VALUES(:numprestamo,:codempleado,:tipoprestamo,:entidadprestamo,:numcuenta,:montoprestamo,:cuotaprestamo,:fechapago,:mododescuento,:estadoprestamo)",
    [req.body.numprestamo,req.body.codempleado,req.body.tipoprestamo,req.body.entidadprestamo,req.body.numcuenta,req.body.montoprestamo,req.body.cuotaprestamo,req.body.fechapago,req.body.mododescuento,req.body.estadoprestamo],
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
    con.execute('SELECT * FROM descuentosautomaticos WHERE numprestamo=:id1',
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
    con.execute("UPDATE descuentosautomaticos SET cuotaprestamo=:cuotaprestamo,fechapago=:fechapago,mododescuento=:mododescuento,estadoprestamo=:estadoprestamo WHERE numprestamo=:id1",
    [req.body.cuotaprestamo,req.body.fechapago,req.body.mododescuento,req.body.estadoprestamo,req.params.id1],
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
    con.execute("DELETE FROM descuentosautomaticos WHERE numprestamo=:id1",
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
