CREATE VIEW BOLETA_PAGO AS
SELECT
    PLANILLA.CODPLANILLA,
    PLANILLA.CODSUCURSAL,
    PLANILLA.CODDEPARTAMENTO,
    EMPLEADOS.codEmpleado,
        ( EMPLEADOS.TITULOEMPLEADO || ' ' ||
        EMPLEADOS.NOMBRE1 || ' ' ||
        EMPLEADOS.NOMBRE2 || ' ' ||
        EMPLEADOS.APELLIDO1 || ' ' ||
        EMPLEADOS.APELLIDO2 ) AS
    NOMBRE_EMPLEADO,
    PLANILLAEMPLEADO.monto,
    PLANILLAEMPLEADO.OBSERVACION,
    CATALOGOPLANILLA.NOMCATPLANILLA,
    CATALOGOPLANILLA.TIPOCATPLANILLA,
    PLANILLA.FECHAINI,
    PLANILLA.FECHAFIN,
    PLANILLA.TIPOPLANILLA

FROM
    EMPLEADOS,
    PLANILLAEMPLEADO,
    CATALOGOPLANILLA,
    PLANILLA

WHERE
    PLANILLA.CODPLANILLA = PLANILLAEMPLEADO.CODPLANILLA
    AND
    PLANILLAEMPLEADO.CODPLANILLA = PLANILLA.CODPLANILLA
    AND
    PLANILLAEMPLEADO.CODEMPLEADO = EMPLEADOS.CODEMPLEADO
    AND
    EMPLEADOS.CODEMPLEADO = PLANILLAEMPLEADO.CODEMPLEADO
    AND
    PLANILLAEMPLEADO.CODCATPLANILLA = CATALOGOPLANILLA.CODCATPLANILLA
    AND
    CATALOGOPLANILLA.CODCATPLANILLA = PLANILLAEMPLEADO.CODCATPLANILLA;
