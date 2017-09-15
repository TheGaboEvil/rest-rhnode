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
  console.log(req.body);
  ora.then(function(con){
    con.execute("INSERT INTO EMPLEADOS VALUES (:in_codempleado,:in_codjefe,:in_coddepartamento,:in_codsucursal,:in_nombre1,:in_nombre2,:in_apellido1,:in_apellido2,:in_tituloempleado,TO_DATE(:in_fechanacimiento,'YYYY/MM/DD'),:in_generoempleado,:in_estadocivil,:in_documentoidentidad,:in_tipodocumentoident,:nitempleado,:in_isssempleado,:in_nupempleado,:in_nombreafp,:in_numerocuentabanco,:in_nombrebanco,:in_puesto,:in_tiempotrabajo,:in_sueldobase,:in_tiempopago)",
    [req.body.in_codempleado,req.body.in_codjefe,req.body.in_coddepartamento,req.body.in_codsucursal,req.body.in_nombre1,req.body.in_nombre2,req.body.in_apellido1,req.body.in_apellido2,req.body.in_tituloempleado,req.body.in_fechanacimiento,req.body.in_generoempleado,req.body.in_estadocivil,req.body.in_documentoidentidad,req.body.in_tipodocumentoident,req.body.in_nitempleado,req.body.in_isssempleado,req.body.in_nupempleado,req.body.in_nombreafp,req.body.in_numerocuentabanco,req.body.in_nombrebanco,req.body.in_puesto,req.body.in_tiempotrabajo,req.body.in_sueldobase,,req.body.in_tiempopago],
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
    con.execute("UPDATE empleados SET codjefe=:in_codjefe,coddepartamento=:in_coddepartamento,codsucursal=:in_codsucursal,nombre1=:in_nombre1,nombre2=:in_nombre2,apellido1=:in_apellido1,apellido2=:in_apellido2,tituloempleado=:in_tituloempleado,fechadenacimiento=TO_DATE(:in_fechanacimiento,'YYYY/MM/DD'),generoempleado=:in_generoempleado,estadocivil=:in_estadocivil,documentoidentidad=:in_documentoidentidad,tipodocumentoident=:in_tipodocumentoident,nitempleado=:nitempleado,in_isssempleado=:in_isssempleado,nupempleado=:in_nupempleado,nombreafp=:in_nombreafp,numerocuentabanco=:in_numerocuentabanco,nombrebanco=:in_nombrebanco,puesto=:in_puesto,tiempotrabajo=:in_tiempotrabajo'  WHERE codempleado=:id",
    [req.body.in_codjefe,req.body.in_coddepartamento,req.body.in_codsucursal,req.body.in_nombre1,req.body.in_nombre2,req.body.in_apellido1,req.body.in_apellido2,req.body.in_tituloempleado,req.body.in_fechanacimiento,req.body.in_generoempleado,req.body.in_estadocivil,req.body.in_documentoidentidad,req.body.in_tipodocumentoident,req.body.in_nitempleado,req.body.in_isssempleado,req.body.in_nupempleado,req.body.in_nombreafp,req.body.in_numerocuentabanco,req.body.in_nombrebanco,req.body.in_puesto,req.body.in_tiempotrabajo,req.body.in_sueldobase,req.body.in_tiempopago,req.params.id],
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
