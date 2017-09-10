var express = require('express'),
  app       = express(),
  path = require('path'),
  bodyParser = require('body-parser'),
  port      = process.env.PORT || 8030;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('restCliente/dist/'));

var routes_adelantosempleado = require('./api/routes/adelantosempleado');
routes_adelantosempleado(app);
var routes_agendaempleado = require('./api/routes/agendaempleado');
routes_agendaempleado(app);
var routes_asistenciaempleado = require('./api/routes/asistenciaempleado');
routes_asistenciaempleado(app);
var routes_catalogoplanilla = require('./api/routes/catalagoplanilla');
routes_catalogoplanilla(app);
var routes_confrenta = require('./api/routes/confrenta');
routes_confrenta(app);
var routes_departamento = require('./api/routes/departamento');
routes_departamento(app);
var routes_departamentoperfilplaza = require('./api/routes/departamentoperfilplaza');
routes_departamentoperfilplaza(app);
var routes_empleados = require('./api/routes/empleados');
routes_empleados(app);
var routes_funcionesplaza = require('./api/routes/funcionesplaza');
routes_funcionesplaza(app);
var routes_log_in = require('./api/routes/log_in');
routes_log_in(app);
var routes_perfilplaza = require('./api/routes/perfilplaza');
routes_perfilplaza(app);
var routes_planilla = require('./api/routes/planilla');
routes_planilla(app);
var routes_planillaempleado = require('./api/routes/planillaempleado');
routes_planillaempleado(app);
var routes_prestamoempleado = require('./api/routes/prestamoempleado');
routes_prestamoempleado(app);
var routes_requerimientosplaza = require('./api/routes/requerimientosplaza');
routes_requerimientosplaza(app);
var routes_sucursales = require('./api/routes/sucursales');
routes_sucursales(app);
var routes_usuarios = require('./api/routes/usuarios');
routes_usuarios(app);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'restCliente/dist/index.html'));
});

app.listen(port);

console.log("rest-rhnode API server ejecutandoce en: " + port );
