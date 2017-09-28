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
          message: "Error al obtener descuentos " + err.message
        }));
      }else{
        console.log("Descuentos automaticos respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};

exports.crear_registro = function(req,res){
  ora.then(function(con){
    con.execute("INSERT INTO descuentosautomaticos VALUES(:numprestamo,:codempleado,:tipoprestamo,entidadprestamo,:numcuenta,:cuotaprestamo,TO_DATE(:fechapago,'YYYY/MM/DD'),:mododescuento,:estadoprestamo)",
    [req.body.numprestamo,req.body.codempleado,req.body.tipoprestamo,req.body.entidadprestamo,req.body.numcuenta,req.body.cuotaprestamo,req.body.fechapago,req.body.mododescuento,req.body.estadoprestamo],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al crear descuento " + err.message
        }));
      }else{
        console.log("Descuentos automaticos respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.obtener_registro = function(req,res){
  ora.then(function(con){
    con.execute('SELECT * FROM descuentosautomaticos WHERE  numPrestamo=:id1 AND codEmpleado=:id2',
    [req.params.id1,req.params.id2],function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener descuentos de empleado " + err.message
        }));
      }else{
        console.log("Descuentos automaticos respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};
exports.actualizar_registro = function(req,res){
  ora.then(function(con){
    con.execute("UPDATE descuentosautomaticos SET cuotaprestamo=:cuotaprestamo,fechapago=TO_DATE(:fechapago,'YYYY/MM/DD'),mododescuento=:mododescuento,estadoprestamo=:estadoprestamo where numPrestamo=:id1 AND codEmpleado=:id2",
    [req.body.cuotaprestamo,req.body.fechapago,req.body.mododescuento,req.body.estadoprestamo,req.params.id1,req.params.id2],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al actualizar descuento " + err.message
        }));
      }else{
        console.log("Descuentos automaticos actualizo :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.borrar_registro = function(req,res){
  ora.then(function(con){
    con.execute("DELETE FROM descuentosautomaticos WHERE numPrestamo=:id1 AND codEmpleado=:id2",
    [req.params.id1,req.params.id2],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al eliminar descuento " + err.message
        }));
      }else{
        console.log("Descuento automaticos eliminado :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
