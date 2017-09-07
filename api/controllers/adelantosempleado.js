'use strict';

var ora = require('../models/ora');

exports.enlistar_todo = function(req,res){

  ora.then(function(con){
    con.execute('select * from adelantosempleado',function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener de adelantos empleado " + err.message
        }));
      }else{
        console.log("Adelantosempleado respondio: " + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};

exports.crear_registro = function(req,res){
  ora.then(function(con){
    con.execute("INSERT INTO adelantosempleado VALUES(:in_codadelanto,:in_codempleado,TO_DATE(:in_fechaadelanto,'YYYY/MM/DD'),:in_montoadelanto,:in_estadoadelanto)",
    [req.body.in_codadelanto,req.body.in_codempleado,req.body.in_fechaadelanto,req.body.in_montoadelanto,req.body.in_estadoadelanto],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al crear registro de adelantos empleado " + err.message
        }));
      }else{
        console.log("Adelantoempleado respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.obtener_registro = function(req,res){
  ora.then(function(con){
    con.execute('SELECT * from adelantosempleado WHERE codAdelanto=:id1 AND codEmpleado=id2',
    [req.params.id1,req.params.id2],function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener adelanto de empleado " + err.message
        }));
      }else{
        console.log("Adelantoempleado respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};
exports.actualizar_registro = function(req,res){
  ora.then(function(con){
    con.execute("UPDATE adelantosempleado SET fechaAdelanto=TO_DATE(:in_fechaadelanto,'YYYY/MM/DD'),montoAdelanto=:in_montoadelanto,estadoAdelanto=:in_estadoAdelanto WHERE codAdelanto=:id1 AND codEmpleado=:id2",
    [req.body.in_fechaadelanto,req.body.in_montoadelanto,req.body.in_estadoadelanto,req.params.id1,req.params.id2],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al actualizar adelantos empleado " + err.message
        }));
      }else{
        console.log("Adelantoempleado actualizo :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.borrar_registro = function(req,res){
  ora.then(function(con){
    con.execute("DELETE FROM adelantosempleado WHERE codAdelanto=:id1 AND codAdelanto=:id2",
    [req.params.id1,req.params.id2],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al eliminar adelanto empleado " + err.message
        }));
      }else{
        console.log("Adelanto empleado borrado :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
