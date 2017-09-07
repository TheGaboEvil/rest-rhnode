'use strict';

var ora = require('../models/ora');

exports.enlistar_todo = function(req,res){

  ora.then(function(con){
    con.execute('SELECT * FROM catalogoplanilla',function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener catalogos de planilla " + err.message
        }));
      }else{
        console.log("Catalogo planilla respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};

exports.crear_registro = function(req,res){
  ora.then(function(con){
    con.execute("INSERT INTO catalogoplanilla VALUES(:in_codcatplanilla,:in_nomcatplanilla,:in_tipocatplanilla,:in_dtllecatplanilla)",
    [req.body.in_codcatplanilla,req.body.in_nomcatplanilla,req.body.in_tipocatplanilla,req.body.in_dtllecatplanilla],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al crear catalogo planilla" + err.message
        }));
      }else{
        console.log("Catalogo planilla respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.obtener_registro = function(req,res){
  ora.then(function(con){
    con.execute('SELECT * FROM catalogoplanilla WHERE codCatPlanilla=:id',[req.params.id],function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener catalogo de planilla " + err.message
        }));
      }else{
        console.log("Catalogo planilla respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};
exports.actualizar_registro = function(req,res){
  ora.then(function(con){
    con.execute("UPDATE catalogoplanilla SET nomCatPlanilla=:in_nomcatplanilla,tipoCatPlanilla=:in_tipocatplanilla,dtlleCatPlanilla=:in_dtllecatplanilla WHERE codcatplanilla,=:id",
    [req.body.in_nomcatplanilla,req.body.in_tipocatplanilla,req.body.in_dtllecatplanilla,req.params.id],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al actualizar catalogo planilla " + err.message
        }));
      }else{
        console.log("Catalogo planilla actualizo :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.borrar_registro = function(req,res){
  ora.then(function(con){
    con.execute("DELETE FROM catalogoplanilla WHERE codCatPlanilla=:id",
    [req.params.id],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al eliminar catalogo planilla " + err.message
        }));
      }else{
        console.log("Catalogo planilla borrado :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
