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
    con.execute("INSERT INTO candidatos VALUES(:in_codcandidato,:in_codperfilplaza,:in_codsucursal,:in_coddepartamento,:in_nombrecompleto,:in_documentoidentidad,:in_tipodocumento,:in_titulocandidato,:in_correoelectronicocandidato,TO_DATE(:in_fechasolicitud,'YYYY/MM/DD'),:in_estadocandidato)",
    [req.body.in_codcandidato,req.body.in_codperfilplaza,req.body.in_codsucursal,req.body.in_coddepartamento,req.body.in_nombrecompleto,req.body.in_documentoidentidad,req.body.in_tipodocumentoidento,req.body.in_titulocandidato,req.body.in_telefonocandidato,req.body.in_correoelectronicocandidato,req.body.in_fechasolicitud,req.body.in_estadocandidato],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al crear configuracion de renta " + err.message
        }));
      }else{
        console.log("candidato respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
exports.obtener_registro = function(req,res){
  ora.then(function(con){
    con.execute('select * FROM candidatos WHERE codCandidato=:id',[req.params.id],function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al obtener configuracion de candidato" + err.message
        }));
      }else{
        console.log("candidato respondio :" + result.rows);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rows));
      }
    });
  }); //fin del ora.then()
};
exports.actualizar_registro = function(req,res){
  ora.then(function(con){
    con.execute("UPDATE candidato SET codPerfilPlaza=:in_codperfilplaza,codSucursal=:in_codsucursal,codedepartamento=:in_coddepartamente,nombrecompleto=:in_nombrecompleto,documentoIdentidad=:in_documentoidentidad,tipodocumento=:in_tipodocumento,tituloCandidato=:in_titulocandidato,telefonoCandidato=:in_telefonocandidato,correoElectronicoCandidato = :in_correoelectronicocandidato, fechaSolicitud=:in_fechasolicitud WHERE codCandidato=:id",
    [req.body.in_codperfilplaza,req.body.in_codsucursal,req.body.in_coddepartamento,req.body.in_nombrecompleto,req.body.in_documentoidentidad,req.body.in_tipodocumentoidento,req.body.in_titulocandidato,req.body.in_telefonocandidato,req.body.in_correoelectronicocandidato,req.body.in_fechasolicitud,req.body.in_estadocandidato,req.params.id],
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
    con.execute("DELETE FROM candidatos confrenta WHERE codCandidato=:id",
    [req.params.id],
    function(err,result){
      if(err){
        console.log("Error  "+err.message);
        res.writeHead(500,{'Content-Type':'aplication/json'});
        res.end(JSON.stringify({
          status:500,
          message: "Error al eliminar configuracion de candidatos " + err.message
        }));
      }else{
        console.log("Candidatos borrada :" + result.rowsAffected);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result.rowsAffected));
      }
    });
  }); //fin del ora.then()
};
