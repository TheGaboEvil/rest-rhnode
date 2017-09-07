'use strict';

var ora = require('../models/ora');

exports.enlistar_todo = function(req,res){

  ora.then(function(con){
    con.execute('SELECT * FROM asistenciaempleado',function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener asistencias de empleado " + err.message
        }));
      }else{
        console.log("Asistencia empleado respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};

exports.crear_registro = function(req,res){
  ora.then(function(con){
    con.execute("INSERT INTO asistenciaempleado VALUES (:in_codempleado,TO_DATE(:in_fechahorareg,'YYYY/MM/DD'),:in_tiporegistro,:in_observacion)",
    [req.body.in_codempleado,req.body.in_fechahorareg,req.body.in_tiporegistro,req.body.in_observacion],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al crear asistencia de empleado " + err.message
        }));
      }else{
        console.log("Asistencia empleado respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.obtener_registro = function(req,res){
  ora.then(function(con){
    con.execute('SELECT * FROM asistenciaempleado WHERE codempleado=:id1 AND fechaHoraReg=:id2',
    [req.params.id1,req.params.id2],function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener todo asistenciaempleado " + err.message
        }));
      }else{
        console.log("Asistencia empleado respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};
exports.actualizar_registro = function(req,res){
  ora.then(function(con){
    con.execute("UPDATE asistenciaempleado SET fechaHoraReg=TO_DATE(:in_fechahorareg,'YYYY/MM/DD'),tipoRegistro=:in_tiporegistro,observacion=:in_observacion WHERE codempleado=:id1 AND fechaHoraReg=:id2",
    [req.body.in_fechahorareg,req.body.in_tiporegistro,req.body.in_observacion,req.params.id1,req.params.id2],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener asistencia de empleado" + err.message
        }));
      }else{
        console.log("Asistencia empleado actualizo :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.borrar_registro = function(req,res){
  ora.then(function(con){
    con.execute("DELETE FROM asistenciaempleado WHERE codEmpleado=:id1 AND fechaHoraReg=:id2",
    [req.params.id1,req.params.id2],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al eliminar asistencia de empledo " + err.message
        }));
      }else{
        console.log("Asistencia empledo borrado :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
