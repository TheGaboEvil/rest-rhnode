'use strict';

var ora = require('../models/ora');

exports.enlistar_todo = function(req,res){

  ora.then(function(con){
    con.execute('select * from empleados',function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener empleados" + err.message
        }));
      }else{
        console.log("Empleados respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};

exports.crear_registro = function(req,res){
  ora.then(function(con){
    con.execute("INSERT INTO EMPLEADOS VALUES (:codempleado,:codjefe,:coddepartamento,:codsucursal,:nombre1,:nombre2,:apellido1,:apellido2,:tituloempleado,TO_DATE(:fechanacimiento,'YYYY/MM/DD'),:generoempleado,:estadocivil,:documentoidentidad,:tipodocumentoident,:nitempleado,:isssempleado,:nupempleado,:nombreafp,:numerocuentabanco,:nombrebanco,:puesto,:tiempotrabajo,:sueldobase,:tiempopago)",
    [req.body.codempleado,req.body.codjefe,req.body.coddepartamento,req.body.codsucursal,req.body.nombre1,req.body.nombre2,req.body.apellido1,req.body.apellido2,req.body.tituloempleado,req.body.fechanacimiento,req.body.generoempleado,req.body.estadocivil,req.body.documentoidentidad,req.body.tipodocumentoident,req.body.nitempleado,req.body.isssempleado,req.body.nupempleado,req.body.nombreafp,req.body.numerocuentabanco,req.body.nombrebanco,req.body.puesto,req.body.tiempotrabajo,req.body.sueldobase,req.body.tiempopago],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al crear registro empleados " + err.message
        }));
      }else{
        console.log("Empleados respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.obtener_registro = function(req,res){
  ora.then(function(con){
    con.execute('SELECT * FROM empleados where codEmpleado = :id',[req.params.id],function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener empleados " + err.message
        }));
      }else{
        console.log("Empleados respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};
exports.actualizar_registro = function(req,res){
  ora.then(function(con){
    con.execute("UPDATE empleados SET codjefe=:codjefe,coddepartamento=:coddepartamento,codsucursal=:codsucursal,nombre1=:nombre1,nombre2=:nombre2,apellido1=:apellido1,apellido2=:apellido2,tituloempleado=:tituloempleado,fechadenacimiento=TO_DATE(:fechanacimiento,'YYYY/MM/DD'),generoempleado=:generoempleado,estadocivil=:estadocivil,documentoidentidad=:documentoidentidad,tipodocumentoident=:tipodocumentoident,nitempleado=:nitempleado,isssempleado=:isssempleado,nupempleado=:nupempleado,nombreafp=:nombreafp,numerocuentabanco=:numerocuentabanco,nombrebanco=:nombrebanco,puesto=:puesto,tiempotrabajo=:tiempotrabajo'  WHERE codempleado=:id",
    [req.body.codjefe,req.body.coddepartamento,req.body.codsucursal,req.body.nombre1,req.body.nombre2,req.body.apellido1,req.body.apellido2,req.body.tituloempleado,req.body.fechanacimiento,req.body.generoempleado,req.body.estadocivil,req.body.documentoidentidad,req.body.tipodocumentoident,req.body.nitempleado,req.body.isssempleado,req.body.nupempleado,req.body.nombreafp,req.body.numerocuentabanco,req.body.nombrebanco,req.body.puesto,req.body.tiempotrabajo,req.body.sueldobase,req.body.tiempopago,req.params.id],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al actualizar empleados " + err.message
        }));
      }else{
        console.log("Empleados actualizo :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.borrar_registro = function(req,res){
  ora.then(function(con){
    con.execute("DELETE FROM empleados WHERE codempleado=:id",
    [req.params.id],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al eliminar empleados " + err.message
        }));
      }else{
        console.log("Empleados borro :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
