'use strict';

var ora = require('../models/ora');

exports.enlistar_todo = function(req,res){

  ora.then(function(con){
    con.execute('SELECT * FROM planillaempleado',function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener planillas de empleado " + err.message
        }));
      }else{
        console.log("Planilla de empleado respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};

exports.crear_registro = function(req,res){
  ora.then(function(con){
    con.execute("INSERT INTO planillaempleado VALUES(:in_codempledo,:in_codcatplanilla,:in_codplanilla,:in_cddepartamento,:in_monto,:in_observacion)",
    [req.body.in_codempleado,req.body.in_codcatplanilla,req.body.in_codplanilla,req.body.in_coddepartamento,req.body.in_monto,req.body.in_observacion],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al crear planilla empleado " + err.message
        }));
      }else{
        console.log("Planilla empleado respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.obtener_registro = function(req,res){
  ora.then(function(con){
    con.execute('SELECT * FROM planillaempleado WHERE codEmpleado=:id1 AND codCatPlanilla AND codPlanilla=:id3',
    [req.params.id1,req.params.id2,req.params.id3],function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener planilla de empleado " + err.message
        }));
      }else{
        console.log("Planilla de empleado respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};
exports.actualizar_registro = function(req,res){
  ora.then(function(con){
    con.execute("UPDATE planillaempleado SET coddcatplanilla = :in_codcatplanilla,codplanilla= :in_codplanilla,coddepartamento= :in_coddepartamento,monto= :in_monto,:in_observacion WHERE codempledo=:id",
    [req.body.in_codcatplanilla,req.body.coddepartanebto,req.body.in_monto,req.body.in_observacion, req.params.id],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener todo planillaempleado" + err.message
        }));
      }else{
        console.log("nodetesr actualizo :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.borrar_registro = function(req,res){
  ora.then(function(con){
    con.execute("DELETE FROM nodetest WHERE id=:id",
    [req.params.id],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener todo nodetest " + err.message
        }));
      }else{
        console.log("nodetesr borro :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
