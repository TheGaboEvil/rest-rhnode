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
    con.execute("INSERT INTO confrenta VALUES(:codrenta,:montodesde,:montohasta,:porcentaplicar,:sobreexcedentede,:mascuotafijade,:tipoperiodo)",
    [req.body.codrenta,req.body.montodesde,req.body.montohasta,req.body.porcentaplicar,req.body.sobreexcedentede,req.body.mascuotafijade,req.body.tipoperiodo],
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
    con.execute("UPDATE confrenta SET montoDesde=:montodesde,montoHasta=:montohasta,porcentaplicar=:porcentaplicar,sobreExcedenteDe=:sobreexcedentede,masCuotaFijaDe=:mascuotafijada,tipoPeriodo=:tipoperiodo WHERE codRenta=:id",
    [req.body.montodesde,req.body.montohasta,req.body.porcentaplicar,req.body.sobreexcedentede,req.body.mascuotafijade,req.body.tipoperiodo,req.params.id],
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
