## Inicio

Se ejecuta el comando: 
    
    npm init -y 

Con el cual se inicia el package.json, el `-y` sirve para no realizar las
preguntas de nombrado del projecto, dueño del proyecto y cosas por ese estilo.

### Dependencias

Se instalará:

1. Sequelize (ORM)
2. express (Enviar respuestas y recibir peticiones)
3. Morgan (Ver por consola las peticiones que llegan)
4. Drivers for database (Postgres)

Lo que más me intriga es morgan.

### Estructura del proyecto

src:
src/index.js: arranca la aplicación
src/app.js: contiene la configuracion de express

### Configuración del servidor 

Creando archivos app.js e index.js

El app.js contiene la configuración para las peticiones http
El index.js contiene el arranque principal.

La manera de importar es mediante `import name from file`, pero para utilizar esta
forma es necesario el uso de `"type": "module"` en el package.json

Listo, con esto se ejecuta el comando por consola: `node src/index.js`

Ahora para un restarting automático, se utliza: nodemon. `node i nodemon -D` La mayúscula
es para ponerlo en la sección devDependencies, del package.json

Ejecutando el nodemon: `npx nodemon src/index.js`

Pero también podemos automatizar este comando poniéndolo en la sección de script del
package.json. `"dev": "nodemon src/index.js"` y lo ejecutamos en consola: 

    npm run dev

### Configuración Sequelize

