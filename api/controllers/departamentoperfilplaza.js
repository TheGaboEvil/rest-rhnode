'use strict';

var ora = require('../models/ora');

exports.enlistar_todo = function(req,res){

  ora.then(function(con){
    con.execute('select * from departamentoperfilplaza',function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener departamentos perfil de plaza " + err.message
        }));
      }else{
        console.log("Departamento perfil de plaza respondio: " + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};

exports.crear_registro = function(req,res){
  ora.then(function(con){
    con.execute("INSERT INTO departamentoperfilplaza VALUES(:in_codperfilplaza,:in_coddepartamento,:in_codsucursal,:in_cantidadplazas,:in_plazasactivas,observaciones)",
    [req.body.in_codperfilplaza,req.body.in_coddepartamento,req.body.in_codsucursal,req.body.in_cantidadplazas,req.body.in_plazasactivas,req.body.observaciones],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al crear registro de departamento perfil de plaza" + err.message
        }));
      }else{
        console.log("Departamento perfil de plaza respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.obtener_registro = function(req,res){
  ora.then(function(con){
    con.execute('SELECT * from departamentoperfilplaza WHERE codPerfilPlaza=:id1 AND coddepartamento=id2 AND codsucursal=id3 ',
    [req.params.id1,req.params.id2],function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener departamentos perfil de plaza" + err.message
        }));
      }else{
        console.log("Departamento perfil de plaza respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};
exports.actualizar_registro = function(req,res){
  ora.then(function(con){
    con.execute("UPDATE departamentoperfilplaza SET cantidadplazas=:in_cantidadplazas,plazasactivas=:in_plazasactivas,observaciones=:in_observaciones WHERE codperfilplaza=:id1 AND coddepartamento=:id2 AND codsucursal=:id3",
    [req.body.in_cantidadplazas,req.body.in_plazasactivas,req.body.in_observaciones,req.params.id1,req.params.id2,req.params.id3],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al actualizar departamentos perfil de plaza " + err.message
        }));
      }else{
        console.log("Departamento perfil de plaza actualizo :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.borrar_registro = function(req,res){
  ora.then(function(con){
    con.execute("DELETE FROM departamentoperfilplaza WHERE codperfilplaza=:id1 AND codDepartamento=:id2 AND codsucursal=:id3",
    [req.params.id1,req.params.id2,req.params.id3],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al eliminar departamento perfil de plaza " + err.message
        }));
      }else{
        console.log("Departamento perfil de plaza borrado :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
