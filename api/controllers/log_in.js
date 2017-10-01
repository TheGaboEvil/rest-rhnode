'use strict';

var ora = require('../models/ora');

exports.crear_registro = function(req,res){
  ora.then(function(con){
    con.execute('select * from usuarios where NICK= :nick AND PASS = : pass',
    [req.body.nick,req.body.pass],
    function(err,result){
        if(err){
          console.log("Error  "+err.message);
          res.writeHead(500,{'Content-Type':'aplication/json'});
          res.end(JSON.stringify({
            status:500,
            message: "Error al obtener USUARIOS " + err.message
          }));
        }else{
          console.log("usuario respondio :" + result.rows);
          res.writeHead(200,{'Content-Type':'application/json'});
          res.end(JSON.stringify({
            'usuario': result.rows[0]
          }));
        }
      });
  }); //fin del ora.then()
};