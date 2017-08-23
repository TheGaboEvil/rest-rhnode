'use strict';

var ora = require('../models/ora');

exports.enlistar_todo = function(req,res){

  ora.then(function(con){
    con.execute('select * from agendaempleado',function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener todo agendaempleado " + err.message
        }));
      }else{
        console.log("agendaempleado respondio :" + result.rows);
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
          message: "Error al crear un registro agendaempleado " + err.message
        }));
      }else{
        console.log("agendaempleado respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.obtener_registro = function(req,res){
  ora.then(function(con){
    con.execute('select * from agendaempleado where codempleado = :id',[req.params.id],function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener todo nodetest " + err.message
        }));
      }else{
        console.log("agendaempleado respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};
exports.actualizar_registro = function(req,res){
  ora.then(function(con){
    con.execute("UPDATE nodetest SET :in_tiporegistro,TO_DATE(:in_fechahoraentrada,'YYYY/MM/DD'),TO_DATE(:in_fechahorasalida,'YYYY/MM/DD'),:in_observacion WHERE  :in_codempleadoid=:id",
    [req.body.in_nombre,req.body.in_apellido,req.body.in_fechanacimiento,req.body.in_salario,req.params.id],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener todo agendaempleado " + err.message
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
    con.execute("DELETE FROM agendaempleado WHERE codempleado=:id",
    [req.params.id],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener todo agendaempleado " + err.message
        }));
      }else{
        console.log("agendaempleado borro :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
