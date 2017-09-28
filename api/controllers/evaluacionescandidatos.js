'use strict';

var ora = require('../models/ora');

exports.enlistar_todo = function(req,res){

  ora.then(function(con){
    con.execute('SELECT * FROM evaluacionescandidatos',function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener evaluacionescandidatos " + err.message
        }));
      }else{
        console.log("evaluacionescandidatos respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};

exports.crear_registro = function(req,res){
  ora.then(function(con){
    con.execute("INSERT INTO evaluacionescandidatos VALUES(:codevaluacion,:nombreevaluacion,:estadoevaluacion,:descripcionevaluacion,:puntuacionrequerida,:puntuacionmaxima)",
    [req.body.codevaluacion,req.body.nombreevaluacion,req.body.estadoevaluacion,req.body.descripcionevaluacion,req.body.puntuacionrequerida,req.body.puntuacionmaxima],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al crear evaluacionescandidatos " + err.message
        }));
      }else{
        console.log("evaluacionescandidatos respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.obtener_registro = function(req,res){
  ora.then(function(con){
    con.execute('select * FROM evaluacionescandidatos WHERE codevaluacion=:id',[req.params.id],function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener evaluacionescandidatos" + err.message
        }));
      }else{
        console.log("evaluacionescandidatos respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};
exports.actualizar_registro = function(req,res){
  ora.then(function(con){
    con.execute("UPDATE evaluacionescandidatos SET nombreevalacion=:nombreevaluacion,estadoEvaluacion=:estadoevaluacion,descripcionevaliacion=:descripcionevaluacion,puntuacionrequerida=:puntuacionrequerida,puntuacionMaxima=:pupuntuacionmaxima WHERE codevaluacion=:id",
    [req.body.nombreevaluacion,req.body.estadoevaluacion,req.body.estadoevaluacion,req.body.indescripcionevaluacion,req.body.puntuacionrequerida,req.body.puntuacionmaxima,req.params.id],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al actualizar evaluacionescandidatos" + err.message
        }));
      }else{
        console.log("evaluacionescandidatos actualizo :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.borrar_registro = function(req,res){
  ora.then(function(con){
    con.execute("DELETE FROM evaluacionescandidatos WHERE codevaluacion=:id",
    [req.params.id],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al eliminar evaluacionescandidatos" + err.message
        }));
      }else{
        console.log("evaluacionescandidatos borrada :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
