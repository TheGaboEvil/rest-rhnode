'use strict';

var ora = require('../models/ora');

exports.enlistar_todo = function(req,res){

  ora.then(function(con){
    con.execute('SELECT * FROM candidatos',function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener cantidatos " + err.message
        }));
      }else{
        console.log("candidatos respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};

exports.crear_registro = function(req,res){
  ora.then(function(con){
    con.execute("INSERT INTO candidatos VALUES(:codcandidato,:codperfilplaza,:codsucursal,:coddepartamento,:nombrecompleto,:documentoidentidad,:tipodocumento,:telefonocandidato,:titulocandidato,:correoelectronicocandidato,TO_DATE(:fechasolicitud,'YYYY/MM/DD'),:estadocandidato)",
    [req.body.codcandidato,req.body.codperfilplaza,req.body.codsucursal,req.body.coddepartamento,req.body.nombrecompleto,req.body.documentoidentidad,req.body.tipodocumento,req.body.telefonocandidato,req.body.titulocandidato,req.body.correoelectronicocandidato,req.body.fechasolicitud,req.body.estadocandidato],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al crear candidato " + err.message
        }));
      }else{
        console.log("Candidato respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.obtener_registro = function(req,res){
  ora.then(function(con){
    con.execute('SELECT * FROM candidatos WHERE codCandidato=:id',[req.params.id],function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener candidato" + err.message
        }));
      }else{
        console.log("Candidato respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};
exports.actualizar_registro = function(req,res){
  ora.then(function(con){
    con.execute("UPDATE candidato SET codPerfilPlaza=:codperfilplaza,codSucursal=:codsucursal,codedepartamento=:coddepartamento,nombrecompleto=:nombrecompleto,documentoIdentidad=:documentoidentidad,tipodocumento=:tipodocumento,tituloCandidato=:titulocandidato,telefonoCandidato=:telefonocandidato,correoElectronicoCandidato = :correoelectronicocandidato, fechaSolicitud=TO_DATE(:fechasolicitud,'YYYY/MM/DD'), estadoCandidato=:estadocandidato WHERE codCandidato=:id",
    [req.body.codperfilplaza,req.body.codsucursal,req.body.coddepartamento,req.body.nombrecompleto,req.body.documentoidentidad,req.body.tipodocumentoidento,req.body.titulocandidato,req.body.telefonocandidato,req.body.correoelectronicocandidato,req.body.fechasolicitud,req.body.estadocandidato,req.params.id],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al actualizar candidato " + err.message
        }));
      }else{
        console.log("Candidatos actualizo :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.borrar_registro = function(req,res){
  ora.then(function(con){
    con.execute("DELETE FROM candidatos WHERE codCandidato=:id",
    [req.params.id],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al eliminar candidatos " + err.message
        }));
      }else{
        console.log("Candidatos borrado :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
