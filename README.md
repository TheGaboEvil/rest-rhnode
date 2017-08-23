Bienvenidos a RHNODE (REST-API VERSION)
===================


Propuesta de sistema gestion y control de recursos humanos utilizando node, oracledb, express

----------


Requerimientos
-------------

**Para windows:**
> antes de instalar oracledb tienes que cumplir con algunos pre-requisitos:

> **Pasos:**
> 1. Instalar  Visual Studio 2013 Community Edition o superior https://www.visualstudio.com/downloads/
>  2. Instalar Python 2.7  https://www.python.org/downloads/release/python-2710/
> 3. node.js https://nodejs.org/en/download/
> 4. descargar y descomprimir "Instant Client Package - Basic:" y "Instant Client Package - SDK" [en una ruta facil de recordar]  primero descomprimir el ICPB y luego dentro de la carpeta el ICP-SDK http://www.oracle.com/technetwork/database/features/instant-client/index-097480.html (Version 11.2.0.4.0 ) ****NO INSTALAR LA V12.X.X.X.X****
> 5. (Ya falta poco... :D ).... luego de tener todo lo anterior instalado... tenemos que configurar variables de entorno. 
> para entrar a las variables de entorno presionado las tecla de windows+pause, luego buscamos la opcion de "configuracion avanzada de sistema", luego opciones avanzadas, variables de entorno. en variable sistema crear "OCI_LIB_DIR" con el vaor "C:\Oracle\instantclient\sdk\lib\msvc" (ruta donde descomprimieron los paquetes) y crear "OCI_INC_DIR" con el valor "C:\Oracle\instantclient\sdk\include". a la variable path agregar al inicio “C:\Oracle\instantclient;” 
> y por ultimo reiniciamos la computadora. 

****
Para mayor informacion de los pre-requisitor entra al siguiente link https://community.oracle.com/docs/DOC-931127
****

**Instalacion del proyecto.. **
****
> descargamos el proyecto de github.com con 
>```
> git clone https://github.com/ejchicas/rest-rhnode
> ```
> o descarga proyecto y descomprimidos  https://github.com/ejchicas/rest-rhnode/archive/master.zip

Abrimos cmd o node.js command prompt
y vamos hasta la carpeta donde tememos el proyecto. 
>ejemplo:
>```
>cd c:\proyectos\rhnode
>```
>ejecutamos 
>```
>c:\proyectos\rhnode> npm install
>```
>cuando termine de instalar los paquetes requeridos ejecutamos
>```
>c:\proyectos\rhnode> node debug.js
>```
>y entramos desde el navegador a la ruta
>```
>http://localhost:8030/
>```
