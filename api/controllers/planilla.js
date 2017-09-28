'use strict';

var ora = require('../models/ora');

exports.enlistar_todo = function(req,res){

  ora.then(function(con){
    con.execute('SELECT * FROM planilla',function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener las planillas " + err.message
        }));
      }else{
        console.log("Planilla respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};

exports.crear_registro = function(req,res){
  ora.then(function(con){
    con.execute("INSERT INTO planilla VALUES(:codplanilla,:coddepartamento,:codsucursal,TO_DATE(:fechaini,'YYYY/MM/DD'),TO_DATE(:fechafin,'YYYY/MM/DD'),:tipoplanilla)",
    [req.body.codplanilla,req.body.coddepartamento,req.body.codsucursal,req.body.fechaini,req.body.fechafin,req.body.tipoplanilla],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al crear planilla " + err.message
        }));
      }else{
        console.log("Planilla respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.obtener_registro = function(req,res){
  ora.then(function(con){
    con.execute('SELECT * FROM planilla WHERE codPlanilla=:id1 AND codDepartamento=:id2',[req.params.id1,req.params.id2],function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener planilla " + err.message
        }));
      }else{
        console.log("Planilla respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};
exports.actualizar_registro = function(req,res){
  ora.then(function(con){
    con.execute("UPDATE planilla SET coddepartamento=:coddepartamento,codsucursal=:codsucursal,fechaini= TO_DATE(:fechaini,'YYYY/MM/DD'),fechafin=TO_DATE(:fechafin,'YYYY/MM/DD'),tipoplanilla=:tipoplanilla WHERE codplanilla=:id",
    [req.body.nombre,req.body.apellido,req.body.fechanacimiento,req.body.salario,req.params.id],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al actualizar planilla " + err.message
        }));
      }else{
        console.log("Planilla actualizo :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.borrar_registro = function(req,res){
  ora.then(function(con){
    con.execute("DELETE FROM planilla WHERE codplanilla=:id",
    [req.params.id],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al borrar la planilla " + err.message
        }));
      }else{
        console.log("Planilla borro :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
