
/*
DE AQUI PARA ABAJO SON LAS TABLAS QUE YA FUNCONAN EN EL PRIMER MODULO.
*/


CREATE TABLE SUCURSAL(
    codSucursal varchar2(30),
    direccion   varchar2(200),
    ciudad      varchar2(200),
    departamento    varchar2(200),
    pais            varchar2(200),
    codigoPostal    varchar2(30),
    telefono        varchar2(43),
    coordenadas     varchar2(20),
    PRIMARY KEY(codSucursal)
);

CREATE TABLE DEPARTAMENTO(
    codDepartamento varchar2(30),
    codSucursal     varchar2(30),
    nombreDepartamento  varchar2(25),
    numPlazas           smallint,
    PRIMARY KEY(codDepartamento,codSucursal),
    CONSTRAINT fkSucursalDepartamentos FOREIGN KEY(codSucursal) REFERENCES SUCURSAL(codSucursal)
);

CREATE TABLE EMPLEADOS(
  codEmpleado     varchar2(30),
  codJefe         varchar2(30),
  codDepartamento varchar2(30),
  codSucursal     varchar2(30),
  nombre1 varchar2(80),
  nombre2 varchar2(80),
  apellido1 varchar2(80),
  apellido2 varchar2(80),
  tituloEmpleado  varchar2(100),
  fechaNacimiento date,
  generoEmpleado  char(1),
  estadoCivil     varchar2(30),
  documentoIdentidad varchar2(25),
  tipoDocumentoIdent varchar2(30),
  nitEmpleado        varchar2(17),
  isssEmpleado       varchar2(25),
  nupEmpleado        varchar2(12),
  nombreAFP          varchar2(30),
  numeroCuentaBanco  varchar2(25),
  nombreBanco        varchar2(25),
  Puesto             varchar2(50),
  tiempoTrabajo      varchar2(250),
  sueldoBase         number(9,2),
  tiempoPago         varchar2(50), -- mensual o quincenal
  --- ejemplo de valor EN FORMATO JSON "{"LU": ["08:00", "17:30"],"MA": ["08:00", "17:30"],"MI": ["08:00", "17:30"],"JU": ["08:00", "17:30"],"VI": ["08:00", "17:30"],"SA": ["08:00", "17:30"],"DO": ["00:00", "00:30"]}"
  CONSTRAINT pkEMPLEADO PRIMARY KEY (codEmpleado),
  CONSTRAINT fkEMPLEADOSDEPARTAMENTO FOREIGN KEY(codDepartamento,codSucursal) REFERENCES DEPARTAMENTO(codDepartamento,codSucursal)
);

CREATE TABLE PLANILLA(
  codPlanilla varchar2(30),
  codDepartamento varchar2(30),
  codSucursal     varchar2(30),
  fechaIni date,
  fechaFin date,
  tipoPlanilla varchar2(30),
  CONSTRAINT pkPlanilla PRIMARY KEY(codPlanilla,codDepartamento),
  CONSTRAINT fkPlanillaDepartamento FOREIGN KEY(codDepartamento,codSucursal) REFERENCES DEPARTAMENTO(codDepartamento,codSucursal)
);

CREATE TABLE CATALOGOPLANILLA(
  codCatPlanilla varchar2(30),
  nomCatPlanilla varchar2(200),
  tipoCatPlanilla smallint,
  dtlleCatPlanilla varchar2(250),
  CONSTRAINT pkCatalogoPlanilla PRIMARY KEY(codCatPlanilla)
);

CREATE TABLE PLANILLAEMPLEADO(
  codEmpleado varchar2(30),
  codCatPlanilla varchar2(30),
  codPlanilla varchar2(30),
  codDepartamento varchar(30),
  monto number(6,2),
  observacion varchar2(250),
  CONSTRAINT pkPlanillaEmpleado PRIMARY KEY(codEmpleado,codCatPlanilla,codPlanilla),
  CONSTRAINT fkPlanillaEmpleado FOREIGN KEY(codEmpleado) REFERENCES EMPLEADOS(codEmpleado),
  CONSTRAINT fkPlanillaEmpleadoCatPlanilla FOREIGN KEY(codCatPlanilla) REFERENCES CATALOGOPLANILLA(codCatPlanilla),
  CONSTRAINT fkPlanillaEmpleadoPlanilla FOREIGN KEY(codPlanilla,codDepartamento) REFERENCES PLANILLA(codPlanilla,codDepartamento)
);

CREATE TABLE DESCUENTOSAUTOMATICOS(
  numPrestamo varchar2(250),
  codEmpleado varchar2(30),
  tipoPrestamo varchar2(100),
  entidadPrestamo varchar2(100),
  numCuenta varchar2(100),
  montoPrestamo number(6,2),
  cuotaPrestamo number(6,2),
  fechaPago date,
  modoDescuento varchar2(30),
  estadoPrestamo smallint,
  CONSTRAINT pkPrestamoEmpleado PRIMARY KEY(numPrestamo,codEmpleado),
  CONSTRAINT fkPrestamoEmpleado FOREIGN KEY(codEmpleado) REFERENCES EMPLEADOS(codEmpleado)
);

CREATE TABLE ADELANTOSEMPLEADO(
  codAdelanto varchar2(30),
  codEmpleado varchar2(30),
  fechaAdelanto date,
  montoAdelanto number(6,2),
  estadoAdelanto varchar2(30),
  CONSTRAINT pkADELANTOSEMPLEADO PRIMARY KEY(codAdelanto,codEmpleado),
  CONSTRAINT fkADELANTOSEMPLEADO FOREIGN KEY(codEmpleado) REFERENCES EMPLEADOS(codEmpleado)
);

CREATE TABLE AGENDAEMPLEADO(
  codEmpleado varchar2(30),
  tipoRegistro varchar2(20),
  fechaHoraEntrada date,
  fechaHoraSalida date,
  observacion varchar2(225),
  CONSTRAINT pkAgendaEmpleado PRIMARY KEY(codEmpleado,fechaHoraEntrada,fechaHoraSalida),
  CONSTRAINT fkAgendaEmpleado FOREIGN KEY(codEmpleado) REFERENCES EMPLEADOS(codEmpleado)
);

CREATE TABLE ASISTENCIAEMPLEADO(
  codEmpleado varchar2(30),
  fechaHoraReg date,
  tipoRegistro varchar2(30),
  observacion varchar2(250),
  CONSTRAINT pkAsistenciaEmpleado PRIMARY KEY(codEmpleado,fechaHoraReg),
  CONSTRAINT fkAsistenciaEmpleado FOREIGN KEY(codEmpleado) REFERENCES EMPLEADOS(codEmpleado)
);

CREATE TABLE CONFRENTA(
  codRenta varchar2(30),
  montoDesde number(6,2),
  montoHasta number(6,2),
  porcentAplicar number(2,2),
  sobreExcedenteDe number(6,2),
  masCuotaFijaDe number(6,2),
  tipoPeriodo varchar2(30)
);


CREATE TABLE USUARIOS(
  CODUSUARIO varchar2(30),
  NICK varchar2(50),
  PASS varchar2(254),
  ESTADO varchar2(50),
  NIVELACCESO number(38,0)
);

/*
* DESDE AQUI VAN LAS TABLAS PARA EL MODULO DOS....
*/

CREATE TABLE PERFILPLAZA(
    codPerfilPlaza      varchar2(30),
    nombrePlaza         varchar2(25),
    descripcionPlaza    varchar(100),
    PRIMARY KEY(codPerfilPlaza)
);

CREATE TABLE REQUERIMIENTOSPLAZA(
    codRequerimientoPlaza varchar2(30),
    codPerfilPlaza      varchar2(30),
    nombreRequerimiento varchar2(100),
    descripcionRequerimiento varchar2(225),
    PRIMARY KEY(codRequerimientoPlaza, codPerfilPlaza),
    CONSTRAINT fkPerfilPlazaReq FOREIGN KEY(codPerfilPlaza) REFERENCES PERFILPLAZA(codPerfilPlaza)
);

CREATE TABLE FUNCIONESPLAZA(
    codFuncionesPlaza varchar2(30),
    codPerfilPlaza      varchar2(30),
    nombreFunciones varchar2(100),
    descripcionFunciones varchar2(200),
    PRIMARY KEY(codFuncionesPlaza,codPerfilPlaza),
    CONSTRAINT fkperfilPlazaFunc FOREIGN KEY(codPerfilPlaza) REFERENCES PERFILPLAZA(codPerfilPlaza)
);

CREATE TABLE DEPARTAMENTOPERFILPLAZA(
    codPerfilPlaza varchar2(30),
    codDepartamento varchar2(30),
    codSucursal     varchar2(30),
    cantidadPlazas smallint,
    plazasActivas smallint,
    observaciones varchar2(150),
    CONSTRAINT pkPerfilPlazaDepartamento PRIMARY KEY (codPerfilPlaza,codDepartamento,codSucursal),
    CONSTRAINT fkDepartamentoPerfilPlaza FOREIGN KEY (codDepartamento, codSucursal) REFERENCES DEPARTAMENTO(codDepartamento, codSucursal)
 );

CREATE TABLE CANDIDATOS(
  codCandidato varchar2(30),
  codPerfilPlaza varchar2(30),
  codSucursal varchar2(30),
  codDepartamento varchar2(30),
  nombreCompleto varchar2(250),
  documentoIdentidad varchar2(25),
  tipoDocumento varchar2(25),
  tituloCandidato varchar2(25),
  telefonoCandidato varchar2(43),
  correoElectronicoCandidato varchar2(250),
  fechaSolicitud date,
  estadoCandidato varchar2(25),
  PRIMARY KEY(codCandidato),
  CONSTRAINT fkDeptoPerPlz FOREIGN KEY (codPerfilPlaza,codDepartamento,codSucursal) REFERENCES DEPARTAMENTOPERFILPLAZA(codPerfilPlaza,codDepartamento,codSucursal)
);

CREATE TABLE EVALUACIONESCANDIDATOS(
  codEvaluacion varchar2(30),
  nombreEvaluacion varchar2(100),
  estadoEvaluacion varchar2(100),
  descripcionEvaluacion varchar2(200),
  puntuacionRequerida number(4,2),
  puntuacionMaxima number(4,2),
  PRIMARY KEY (codEvaluacion)
);

CREATE TABLE CANDIDATOSEVALUACIONES(
  codCandidato varchar2(30),
  codEvaluacion varchar2(30),
  fechaEvaluacion date,
  puntajeEvaluacion number(4,2),
  observaciones varchar2(150),
  documentoEvaluacion BLOB,
  CONSTRAINT pkCandidatosEvaluacion PRIMARY KEY(codCandidato,codEvaluacion),
  CONSTRAINT fkCandidatoCandEva FOREIGN KEY(codCandidato) REFERENCES CANDIDATOS(codCandidato),
  CONSTRAINT fkEvaluacionCandEva FOREIGN KEY(codEvaluacion) REFERENCES EVALUACIONESCANDIDATOS(codEvaluacion)
);