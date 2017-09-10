'use strict';

var ora = require('../models/ora');

exports.crear_registro = function(req,res){

  ora.then(function(con){
    con.execute('select * from usurios where NICK= :in_nick AND PASS = : in_pass',
    [req.body.in_nick,req.body.in_pass],
    function(err,result){
        if(err){
          console.log("Error  "+err.message);
          res.writeHead(500,{'Content-Type':'aplication/json'});
          res.end(JSON.stringify({
            status:500,
            message: "Error al obtener todo usuario" + err.message
          }));
        }else{
          console.log("usuario respondio :" + result.rows);
          res.writeHead(200,{'Content-Type':'application/json'});
          res.end(JSON.stringify(result.rows));
        }
      });
  }); //fin del ora.then()
};