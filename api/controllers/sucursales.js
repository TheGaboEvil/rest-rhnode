'use strict';

var ora = require('../models/ora');

exports.enlistar_todo = function(req,res){

  ora.then(function(con){
    con.execute('SELECT * FROM sucursal',function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener sucursales " + err.message
        }));
      }else{
        console.log("Sucursales respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};

exports.crear_registro = function(req,res){
  ora.then(function(con){
    con.execute("INSERT INTO sucursal VALUES(:in_codsucursal,:in_direccion,:in_ciudad,:in_departamento,:in_pais,:in_codigopostal,:in_telefono,:in_coordenadas)",
    [req.body.in_codsucursal,req.body.direccion,req.body.in_ciudad,req.body.in_departamento,req.body.in_pais,req.body.in_codigopostal,req.body.in_telefono,req.body.coordenadas],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al crear sucursal " + err.message
        }));
      }else{
        console.log("Sucursal respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.obtener_registro = function(req,res){
  ora.then(function(con){
    con.execute('SELECT * FROM sucursal WHERE codSucursal = :id',[req.params.id],function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener sucursales " + err.message
        }));
      }else{
        console.log("Sucursal respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};
exports.actualizar_registro = function(req,res){
  ora.then(function(con){
    con.execute("UPDATE sucursal SET codSucursal=:in_codsucursal,direccion=:in_direccion,ciudad=:in_ciudad,departamento=:in_departamento,pais=:in_pais,codigoPostal=:in_codigopostal,telefono=:in_telefono,coordenadas=:in_coordenadas WHERE codSucursal=:id",
    [req.body.in_codsucursal,req.body.in_direccion,req.body.in_ciudad,req.body.in_departamento,req.body.in_pais,req.body.in_codigopostal,req.body.in_coordenadas,req.params.id],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al actualizar sucursal " + err.message
        }));
      }else{
        console.log("Sucursal actualizo :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.borrar_registro = function(req,res){
  ora.then(function(con){
    con.execute("DELETE FROM sucursal WHERE codsucursal=:id",
    [req.params.id],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al eliminar sucursal " + err.message
        }));
      }else{
        console.log("Sucursal borro :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
