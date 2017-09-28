'use strict';

var ora = require('../models/ora');

exports.enlistar_todo = function(req,res){

  ora.then(function(con){
    con.execute('SELECT * FROM funcionesplaza',function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener funciones de plaza" + err.message
        }));
      }else{
        console.log("Funciones de plaza respondio: " + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};

exports.crear_registro = function(req,res){
  ora.then(function(con){
    con.execute("INSERT INTO funcionesplaza VALUES(:codfuncionesplaza,:codperfilplaza,:nombrefunciones,:descripcionfunciones)",
    [req.body.codfuncionesplaza,req.body.codperfilplaza,req.body.nombrefunciones,req.body.descripcionfunciones],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al crear registro de funciones de plaza " + err.message
        }));
      }else{
        console.log("Funciones de plaza respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.obtener_registro = function(req,res){
  ora.then(function(con){
    con.execute('SELECT * FROM funcionesplaza WHERE codfuncionesplaza=:id1 AND codperfilplaza=id2',
    [req.params.id1,req.params.id2],function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener funciones de plaza" + err.message
        }));
      }else{
        console.log("Funcionesplaza respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};
exports.actualizar_registro = function(req,res){
  ora.then(function(con){
    con.execute("UPDATE funcionesplaza SET nombrefunciones=:nombrefunciones,descripcionfunciones=:descripcionfunciones WHERE codfuncionesplaza=:id1 AND codperfilplaza=:id2",
    [req.body.nombrefunciones,req.body.descripcionfunciones,req.params.id1,req.params.id2],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al actualizar funcionesplaza " + err.message
        }));
      }else{
        console.log("Funciones plaza actualizo :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.borrar_registro = function(req,res){
  ora.then(function(con){
    con.execute("DELETE FROM funcionesplaza WHERE codfuncionesplaza=:id1 AND codperfilplaza=:id2",
    [req.params.id1,req.params.id2],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al eliminar funciones de plaza " + err.message
        }));
      }else{
        console.log("Funcionesplaza borrado :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
