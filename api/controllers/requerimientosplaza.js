'use strict';

var ora = require('../models/ora');

exports.enlistar_todo = function(req,res){

  ora.then(function(con){
    con.execute('SELECT * FROM REQUERIMIENTOSPLAZA',function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener agenda REQUERIMIENTOSPLAZA" + err.message
        }));
      }else{
        console.log("REQUERIMIENTOSPLAZA respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};

exports.crear_registro = function(req,res){
  ora.then(function(con){
    con.execute("INSERT INTO REQUERIMIENTOSPLAZA VALUES(:in_codrequerimientoplaza,:in_codperfilplaza,:in_nombrerequerimiento,:in_descripcionrequerimiento)",
    [req.body.in_codrequerimientoplaza,req.body.in_codperfilplaza,req.body.in_nombrerequerimiento,req.body.in_descripcionrequerimiento],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al crear REQUERIMIENTOSPLAZA " + err.message
        }));
      }else{
        console.log("REQUERIMIENTOSPLAZA respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.obtener_registro = function(req,res){
  ora.then(function(con){
    con.execute('SELECT * FROM REQUERIMIENTOSPLAZA WHERE codrequerimientoPlaza=:id AND codPerfilPlaza=:id2 ',
    [req.params.id1,req.params.id2],function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener REQUERIMIENTOSPLAZA " + err.message
        }));
      }else{
        console.log("REQUERIMIENTOSPLAZA respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};
exports.actualizar_registro = function(req,res){
  ora.then(function(con){
    con.execute("UPDATE REQUERIMIENTOSPLAZA SET nombrerequerimiento =:in_nombrerequerimiento,descripcionRequerimiento=:in_descripcionrequerimiento WHERE codrequerimientoPlaza=:id1 AND codperfilplaza=:id2",
    [req.body.in_nombrerequerimiento,req.body.in_descripcionrequerimiento,req.params.id1,req.params.id2],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener todo REQUERIMIENTOSPLAZA " + err.message
        }));
      }else{
        console.log("REQUERIMIENTOSPLAZA actualizo :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.borrar_registro = function(req,res){
  ora.then(function(con){
    con.execute("DELETE FROM REQUERIMIENTOSPLAZA WHERE codrequerimientoPlaza=:id1 AND  codperfilplaza=:id2 ",
    [req.params.id1,req.params.id2],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al eliminar REQUERIMIENTOSPLAZA" + err.message
        }));
      }else{
        console.log("REQUERIMIENTOSPLAZA  borrada :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
