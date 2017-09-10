'use strict';

var ora = require('../models/ora');

exports.enlistar_todo = function(req,res){

  ora.then(function(con){
    con.execute('SELECT * FROM candidatosevaluaciones',function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener configuracion candidatosevaluaciones" + err.message
        }));
      }else{
        console.log("candidatosevaluaciones respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};

exports.crear_registro = function(req,res){
  ora.then(function(con){
    con.execute("INSERT INTO candidatosevaluaciones VALUES(:in_codcandidato,:in_codevaluacion,TO_DATE(:in_fechaevaluacion,'YYYY/MM/DD')n,in:puntajeEvaluacion,:in_observaciones,:in_documentoevaluacion)",
    [req.body.in_codcandidato,req.body.in_codevaluacion,req.body.in_fechaevaluacion,req.body.in_puntajevaluacion,req.body.in_observaciones,req.body.in_documentoevaluacion],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al crear candidatosevaluaciones " + err.message
        }));
      }else{
        console.log("candidatosevaluaciones respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.obtener_registro = function(req,res){
  ora.then(function(con){
    con.execute('select * FROM candidatosevaluaciones WHERE codCandidato=:id1 and codEvaluacion=:id2',[req.params.id],function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener configuracion de renta " + err.message
        }));
      }else{
        console.log("candidatosevaluaciones respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};
exports.actualizar_registro = function(req,res){
  ora.then(function(con){
    con.execute("UPDATE candidatosevaluaciones SET observaciones=:in_observaciones WHERE codcandidato=:id1 and codEvaluacion=:id2",
    [req.body.in_montodesde,req.body.in_montohasta,req.body.in_porcentaplicar,req.body.in_sobreexcedentede,req.body.in_mascuotafijade,req.body.in_tipoperiodo,req.params.id],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al actualizar candidatosevaluacionesa " + err.message
        }));
      }else{
        console.log("candidatosevaluaciones actualizo :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.borrar_registro = function(req,res){
  ora.then(function(con){
    con.execute("DELETE FROM candidatosevaluaciones WHERE codcandidato=:id1 and codevaluacion=:id2",
    [req.params.id],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al eliminar candidatosevaluaciones" + err.message
        }));
      }else{
        console.log("candidatosevaluaciones borrada :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
