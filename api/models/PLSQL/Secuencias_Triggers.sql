/* SECUENCIAS */

/* Secuencia para cï¿½digo de empleado */
create sequence sec_codEmpl
start with 100001
increment by 1
maxvalue 999999
minvalue 1;
/*
select sec_codEmpl.Nextval from dual;

insert into prueba values ('E'|| sec_codEmpl.Nextval);
create table prueba(
    cod varchar2(10)
);
select * from prueba;*/
/* Secuencia para cï¿½digo de sucursal */
create sequence sec_codSuc
start with 101
increment by 1
maxvalue 999
minvalue 1;

drop sequence sec_codSuc;

/* Secuencia para cï¿½digo de departamento */
create sequence sec_codDepto
start with 101
increment by 1
maxvalue 999
minvalue 1;

CREATE OR REPLACE PROCEDURE p_agregar_depto (pcodSucursal varchar2, pnomDepto varchar2, pnumPla varchar2)
IS
Existe NUMBER;
CodDepto NUMBER;
BEGIN
    SELECT COUNT(*) INTO Existe FROM DEPARTAMENTO WHERE CODSUCURSAL = pcodSucursal;
    IF Existe > 0 THEN
        SELECT to_number(ltrim(CODDEPARTAMENTO,'D')) INTO CodDepto
        FROM (SELECT * FROM DEPARTAMENTO ORDER BY CODDEPARTAMENTO DESC)
        WHERE CODSUCURSAL = pcodSucursal AND ROWNUM = 1;
        INSERT INTO DEPARTAMENTO VALUES('D'||(CodDepto+1), pcodSucursal, pnomDepto, pnumPla);
    ELSE
        INSERT INTO DEPARTAMENTO VALUES('D1001', pcodSucursal, pnomDepto, pnumPla);
    END IF;
END p_agregar_depto;
/*
EXECUTE P_AGREGAR_DEPTO ('S104','SISTEMAS',10);

delete from departamento;
SELECT * FROM DEPARTAMENTO;

INSERT INTO DEPARTAMENTO VALUES ('D1001','S101','ADMINISTRADOR',1);
*/

--CONSULTAR DESCUENTOS EMPLEADO--
SET SERVEROUTPUT ON
CREATE OR REPLACE PROCEDURE p_consDescEmpl (pcodEmpleado VARCHAR2)
IS
    v_codEmpleado varchar2(10);
    v_sueldoBase number(9,2);
    v_montoAdelanto number(9,2);
    v_cuotaPrestamo number(9,2);
    v_tiempoPago varchar2(25);
BEGIN
    SELECT empl.codEmpleado , empl.sueldoBase, aEmpl.montoAdelanto, descAuto.cuotaPrestamo, empl.tiempoPago
    INTO v_codEmpleado, v_sueldoBase, v_montoAdelanto, v_cuotaPrestamo, v_tiempoPago
    FROM EMPLEADOS empl
    INNER JOIN ADELANTOSEMPLEADO aEmpl ON aEmpl.codEmpleado = empl.codEmpleado
    INNER JOIN DESCUENTOSAUTOMATICOS descAuto ON descAuto.codEmpleado = empl.codEmpleado
    WHERE empl.codEmpleado = pcodEmpleado;
    
    DBMS_OUTPUT.PUT_LINE('codEmpleado: ' || v_codEmpleado ||', sueldo base: '|| v_sueldoBase ||', monto adelanto: '|| v_montoAdelanto ||', cuota préstamo: '|| v_cuotaPrestamo ||', tiempo de pago: '|| v_tiempoPago);
END p_consDescEmpl;

EXECUTE p_consDescEmpl('E100026');

/* Secuencia para cï¿½digo de planilla */
create sequence sec_codPlan
start with 10001
increment by 1
maxvalue 99999
minvalue 1;

/* Secuencia para cï¿½digo de catï¿½logo planilla */
create sequence sec_codCatPlan
start with 10001
increment by 1
maxvalue 99999
minvalue 1;

/* Secuencia para cï¿½digo de descuento automï¿½ticos */
create sequence sec_codDescAut
start with 1000001
increment by 1
maxvalue 9999999
minvalue 1;

/* Secuencia para cï¿½digo de adelanto empleado */
create sequence sec_codAdeEmpl
start with 10001
increment by 1
maxvalue 99999
minvalue 1;

/* Secuencia para cï¿½digo de configuraciï¿½n de renta */
create sequence sec_codConfRent
start with 1001
increment by 1
maxvalue 9999
minvalue 1;

drop sequence sec_CodPlan;
select sec_codPlan.nextval from dual;

/* TRIGGERS */

CREATE TABLE bitacora(
    fecha_hora CHAR(19) NOT NULL,
    usuario VARCHAR2(15) NOT NULL,
    hostname VARCHAR2(20) NOT NULL,
    programa VARCHAR2(30) NOT NULL,
    tipo VARCHAR2(6) NOT NULL,
    accion VARCHAR2(255) NOT NULL
);

/* Trigger para tabla empleados */
CREATE OR REPLACE TRIGGER tr_empleados
AFTER DELETE OR INSERT OR UPDATE ON EMPLEADOS
FOR EACH ROW
BEGIN
    IF DELETING THEN
        INSERT INTO CONTROL VALUES(:old.codEmpleado, user, sysdate, 'DELETE');
    ELSIF INSERTING THEN
        INSERT INTO CONTROL VALUES(:new.codEmpleado, user, sysdate, 'INSERT');
    ELSIF UPDATING THEN
        INSERT INTO CONTROL VALUES(:new.codEmpleado, user, sysdate, 'INSERT');
    END IF;
    EXCEPTION
        WHEN OTHERS THEN
            raise_application_error(-20000,'OCURRIï¿½ UN ERROR, POR FAVOR CONTACTE AL ADMINISTRADOR');
END tr_empleados;

/* Trigger para tabla departamento */
CREATE OR REPLACE TRIGGER tr_depto
AFTER DELETE OR INSERT OR UPDATE ON DEPARTAMENTO
FOR EACH ROW
BEGIN
    IF DELETING THEN
        INSERT INTO CONTROL VALUES(:old.codDepto, user, sysdate, 'DELETE');
    ELSIF INSERTING THEN
        INSERT INTO CONTROL VALUES(:new.codDepto, user, sysdate, 'INSERT');
    ELSIF UPDATING THEN
        INSERT INTO CONTROL VALUES(:new.codDepto, user, sysdate, 'INSERT');
    END IF;
    EXCEPTION
        WHEN OTHERS THEN
            raise_application_error(-20000,'OCURRIï¿½ UN ERROR, POR FAVOR CONTACTE AL ADMINISTRADOR');
END tr_depto;

/* Trigger para tabla sucursal */
CREATE OR REPLACE TRIGGER tr_sucursal
AFTER DELETE OR INSERT OR UPDATE ON SUCURSAL
FOR EACH ROW
BEGIN
    IF DELETING THEN
        INSERT INTO CONTROL VALUES(:old.codSucursal, user, sysdate, 'DELETE');
    ELSIF INSERTING THEN
        INSERT INTO CONTROL VALUES(:new.codSucursal, user, sysdate, 'INSERT');
    ELSIF UPDATING THEN
        INSERT INTO CONTROL VALUES(:new.codSucursal, user, sysdate, 'INSERT');
    END IF;
    EXCEPTION
        WHEN OTHERS THEN
            raise_application_error(-20000,'OCURRIï¿½ UN ERROR, POR FAVOR CONTACTE AL ADMINISTRADOR');
END tr_depto;

/* Trigger para tabla catï¿½logo planilla  */
CREATE OR REPLACE TRIGGER tr_cat_plailla
AFTER DELETE OR INSERT OR UPDATE ON CATALOGOPLANILLA
FOR EACH ROW
BEGIN
    IF DELETING THEN
        INSERT INTO CONTROL VALUES(:old.codEmpleado, user, sysdate, 'DELETE');
    ELSIF INSERTING THEN
        INSERT INTO CONTROL VALUES(:new.codEmpleado, user, sysdate, 'INSERT');
    ELSIF UPDATING THEN
        INSERT INTO CONTROL VALUES(:new.codEmpleado, user, sysdate, 'INSERT');
    END IF;
    EXCEPTION
        WHEN OTHERS THEN
            raise_application_error(-20000,'OCURRIO UN ERROR, POR FAVOR CONTACTE AL ADMINISTRADOR');
END tr_depto;
