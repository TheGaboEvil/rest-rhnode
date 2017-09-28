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
          message: "Error al obtener candidatosevaluaciones" + err.message
        }));
      }else{
        console.log("Candidatos evaluaciones respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};

exports.crear_registro = function(req,res){
  ora.then(function(con){
    con.execute("INSERT INTO candidatosevaluaciones VALUES(:codcandidato,:codevaluacion,TO_DATE(:fechaevaluacion,'YYYY/MM/DD'),:puntajeevaluacion,:observaciones,:documentoevaluacion)",
    [req.body.codcandidato,req.body.codevaluacion,req.body.fechaevaluacion,req.body.puntajevaluacion,req.body.observaciones,req.body.documentoevaluacion],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al crear candidatos evaluaciones " + err.message
        }));
      }else{
        console.log("Candidatosevaluaciones respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.obtener_registro = function(req,res){
  ora.then(function(con){
    con.execute('SELECT * FROM candidatosevaluaciones WHERE codCandidato=:id1 AND codEvaluacion=:id2',
    [req.params.id1,req.params.id2],function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener candidato evaluaciones" + err.message
        }));
      }else{
        console.log("Candidatos evaluaciones respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};
exports.actualizar_registro = function(req,res){
  ora.then(function(con){
    con.execute("UPDATE candidatosevaluaciones SET fechaEvaluacion=:fechaevaluacion,puntajeevaluacion=:puntajeevaluacion,observaciones=:observaciones,documentoEvaluacion=documentoevaluacion WHERE codcandidato=:id1 and codEvaluacion=:id2",
    [req.body.fechaevaluacion,req.body.puntajeevaluacion,req.body.observaciones,req.body.documentoevaluacion,req.params.id1,req.params.id2],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al actualizar candidatos evaluacionesa " + err.message
        }));
      }else{
        console.log("Candidatosevaluaciones actualizo :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.borrar_registro = function(req,res){
  ora.then(function(con){
    con.execute("DELETE FROM candidatosevaluaciones WHERE codcandidato=:id1 and codevaluacion=:id2",
    [req.params.id1,req.params.id2],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al eliminar candidatos evaluaciones" + err.message
        }));
      }else{
        console.log("Candidatosevaluaciones borrada :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
