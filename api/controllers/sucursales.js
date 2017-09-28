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
        res.end(JSON.stringify( {"Sucursales" : result.rows} ));
      }
    });
  }); //fin del ora.then()
};

exports.crear_registro = function(req,res){
  ora.then(function(con){
    con.execute("INSERT INTO sucursal VALUES(:codsucursal,:direccion,:ciudad,:departamento,:pais,:codigopostal,:telefono,:coordenadas)",
    [req.body.codsucursal,req.body.direccion,req.body.ciudad,req.body.departamento,req.body.pais,req.body.codigopostal,req.body.telefono,req.body.coordenadas],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        console.log(req.body);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al crear sucursal " + err.message
        }));
      }else{
        console.log("Sucursal respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify({
          status:200,
          data:result.rowsAffected
        }));
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
        res.end(JSON.stringify({"Sucursal" : result.rows}));
      }
    });
  }); //fin del ora.then()
};
exports.actualizar_registro = function(req,res){
  ora.then(function(con){
    con.execute("UPDATE sucursal SET direccion=:direccion,ciudad=:ciudad,departamento=:departamento,pais=:pais,codigoPostal=:codigopostal,telefono=:telefono,coordenadas=:coordenadas WHERE codSucursal=:id",
    [req.body.direccion,req.body.ciudad,req.body.departamento,req.body.pais,req.body.codigopostal,req.body.coordenadas,req.params.id],
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
