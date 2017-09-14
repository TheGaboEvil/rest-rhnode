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
    con.execute("INSERT INTO candidatosevaluaciones VALUES(:in_codcandidato,:in_codevaluacion,TO_DATE(:in_fechaevaluacion,'YYYY/MM/DD'),:in_puntajeevaluacion,:in_observaciones,:in_documentoevaluacion)",
    [req.body.in_codcandidato,req.body.in_codevaluacion,req.body.in_fechaevaluacion,req.body.in_puntajevaluacion,req.body.in_observaciones,req.body.in_documentoevaluacion],
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
    con.execute("UPDATE candidatosevaluaciones SET fechaEvaluacion=:in_fechaevaluacion,puntajeevaluacion=:in_puntajeevaluacion,observaciones=:in_observaciones,documentoEvaluacion=in_documentoevaluacion WHERE codcandidato=:id1 and codEvaluacion=:id2",
    [req.body.in_fechaevaluacion,req.body.in_puntajeevaluacion,req.body.in_observaciones,req.body.in_documentoevaluacion,req.params.id1,req.params.id2],
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
    [req.params.id1,req.params.id2|],
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
