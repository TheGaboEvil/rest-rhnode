'use strict';

var ora = require('../models/ora');

exports.enlistar_todo = function(req,res){

  ora.then(function(con){
    con.execute('select * from prestamoempleado',function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener todo prestamoempleado " + err.message
        }));
      }else{
        console.log("prestamoempleado respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};

exports.crear_registro = function(req,res){
  ora.then(function(con){
    con.execute("INSERT INTO prestamoempleado VALUES(:in_numprestamo,:in_codempleado,:in_tipoprestamo,in_e ntidadprestamo,:in_numcuenta,:in_cuotaprestamo,TO_DATE(:in_fechapago,'YYYY/MM/DD'),:in_mododescuento,:in_estadoprestamo)",
    [req.body.in_numprestamo,req.body.in_codempleado,req.body.in_tipoprestamo,req.body.in_entidadprestamo,req.body.in_numcuenta,req.body.in_cuotaprestamo,req.body.in_fechapago,req.body.mododescuento,req.body.estadoprestamo],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al crear un registro prestamoempleado " + err.message
        }));
      }else{
        console.log("nodetesr respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.obtener_registro = function(req,res){
  ora.then(function(con){
    con.execute('select * from prestamoempleado where id = :id',[req.params.id],function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener  prestamoempleado " + err.message
        }));
      }else{
        console.log("prestamoempleado respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};
exports.actualizar_registro = function(req,res){
  ora.then(function(con){
    con.execute("UPDATE prestamoempleado SET codempleado=:in_codempleado,tipoprestamo=:in_tipoprestamo,entidadprestamo=in_e ntidadprestamo,numcuenta=:in_numcuenta,cuotaprestamo=:in_cuotaprestamo,fechapago=TO_DATE(:in_fechapago,'YYYY/MM/DD'),mododescuento=:in_mododescuento,estadoprestamo=:in_estadoprestamo where numprestamo=:id",
    [req.body.in_numprestamo,req.body.in_codempleado,req.body.in_tipoprestamo,req.body.in_entidadprestamo,req.body.in_numcuenta,req.body.in_cuotaprestamo,req.body.in_fechapago,req.body.in_mododescuento,req.body.estadoprestamo,req.params.in_numcuenta],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener todo nodetest " + err.message
        }));
      }else{
        console.log("nodetesr actualizo :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.borrar_registro = function(req,res){
  ora.then(function(con){
    con.execute("DELETE FROM prestamoempleado WHERE numprestamo=:id",
    [req.params.id],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener todo nodetest " + err.message
        }));
      }else{
        console.log("prestamoempleado borro :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
