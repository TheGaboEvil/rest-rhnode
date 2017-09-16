'use strict';

var ora = require('../models/ora');

exports.enlistar_todo = function(req,res){

  ora.then(function(con){
    con.execute('SELECT * FROM confrenta',function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener configuracion de renta " + err.message
        }));
      }else{
        console.log("Confrenta respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};

exports.crear_registro = function(req,res){
  ora.then(function(con){
    con.execute("INSERT INTO confrenta VALUES(:in_codrenta,:in_montodesde,:in_montohasta,in_porcentaplicar,:in_sobreexcedentede,:in_mascuotafijade,:in_tipoperiodo)",
    [req.body.in_codrenta,req.body.in_montodesde,req.body.in_montohasta,req.body.in_porcentapliar,req.body.in_sobreexcedentede,req.body.in_mascuotafijade,req.body.in_tipoperiodo],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al crear configuracion de renta " + err.message
        }));
      }else{
        console.log("Confrenta respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.obtener_registro = function(req,res){
  ora.then(function(con){
    con.execute('select * FROM confrenta WHERE codRenta=:id',[req.params.id],function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener configuracion de renta " + err.message
        }));
      }else{
        console.log("Confrenta respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};
exports.actualizar_registro = function(req,res){
  ora.then(function(con){
    con.execute("UPDATE confrenta SET montoDesde=:in_montodesde,montoHasta=:in_montohasta,porcentaplicar=:in_porcentaplicar,sobreExcedenteDe=:in_sobreexcedentede,masCuotaFijaDe=:in_mascuotafijada,tipoPeriodo=:in_tipoperiodo WHERE codRenta=:id",
    [req.body.in_montodesde,req.body.in_montohasta,req.body.in_porcentaplicar,req.body.in_sobreexcedentede,req.body.in_mascuotafijade,req.body.in_tipoperiodo,req.params.id],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al actualizar configuracion de renta " + err.message
        }));
      }else{
        console.log("Confrenta actualizo :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.borrar_registro = function(req,res){
  ora.then(function(con){
    con.execute("DELETE FROM confrenta WHERE codRenta=:id",
    [req.params.id],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al eliminar configuracion de renta " + err.message
        }));
      }else{
        console.log("Confrenta borrada :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
