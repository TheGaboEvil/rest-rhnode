'use strict';

var ora = require('../models/ora');

exports.enlistar_todo = function(req,res){

  ora.then(function(con){
    con.execute('SELECT * FROM agendaempleado',function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener agenda empleado " + err.message
        }));
      }else{
        console.log("Agenda empleado respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};

exports.crear_registro = function(req,res){
  ora.then(function(con){
    con.execute("INSERT INTO agendaempleado VALUES(:in_codempleado,:in_tiporegistro,TO_DATE(:in_fechahoraentrada,'YYYY/MM/DD'),TO_DATE(:in_fechahorasalida,'YYYY/MM/DD'),:in_observacion)",
    [req.body.in_codempleado,req.body.in_tiporegistro,req.body.in_fechahoraentrada,req.body.in_fechahorasalida,req.body.in_observacion],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al crear registro de agenda empleado " + err.message
        }));
      }else{
        console.log("Agenda empleado respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.obtener_registro = function(req,res){
  ora.then(function(con){
    con.execute('SELECT * FROM agendaempleado WHERE codEmpleado=:id AND fechaHoraEntrada=:id2 AND fechaHoraSalida=:id3',
    [req.params.id1,req.params.id2,req.params.id3],function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener agenda empleado " + err.message
        }));
      }else{
        console.log("Agenda empleado respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};
exports.actualizar_registro = function(req,res){
  ora.then(function(con){
    con.execute("UPDATE agendaempleado SET tipoRegistro:in_tiporegistro,fechaHoraEntrada=TO_DATE(:in_fechahoraentrada,'YYYY/MM/DD'),fechaHoraSalida=TO_DATE(:in_fechahorasalida,'YYYY/MM/DD'),:in_observacion WHERE codEmpleado=:id1 AND fechaHoraEntrada=:id2 AND fechaHoraSalida=:id3",
    [req.body.in_tiporegistro,req.body.in_fechahoraentrada,req.body.in_fechahorasalida,req.body.in_observacion,req.params.id1,req.params.id2,req.params.id3],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener todo agendaempleado " + err.message
        }));
      }else{
        console.log("Agenda empleado actualizo :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.borrar_registro = function(req,res){
  ora.then(function(con){
    con.execute("DELETE FROM agendaempleado WHERE codempleado=:id1 AND fechaHoraEntrada=:id2 AND fechaHoraSalida=:id3",
    [req.params.id1,req.params.id2,req.params.id3],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al eliminar agenda de empleado " + err.message
        }));
      }else{
        console.log("Agenda empleado borrada :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
