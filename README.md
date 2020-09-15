# Build test with Node, MongoDB and Express

## API con Node, MongoDB y Express

### Iniciar el proyecto con NPM

Creamos el archivo `package.json` en nuestro directorio raiz con el siguiente comando.

~~~
  $ npm init -y
~~~

### Intalar la dependencias iniciales para levantar el servidor

Esto agregara las dependecias a nuestro proyecto.

~~~
  $ npm i express bcryptjs cors dotenv jsonwebtoken mongoose morgan helmet
~~~

1. [**Express**](https://expressjs.com/es/): Express es una infraestructura de aplicaciones web Node.js mínima y flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles. 
2. [**bcryptjs**](https://www.npmjs.com/package/bcryptjs): Optimized bcrypt in JavaScript with zero dependencies. Compatible to the C++ bcrypt binding on node.js and also working in the browser.
3. [**cors**](https://www.npmjs.com/package/cors): CORS es un paquete node.js para proporcionar un middleware Connect / Express que se puede usar para habilitar CORS con varias opciones.
4. [**dotenv**](https://www.npmjs.com/package/dotenv): Dotenv es un módulo de dependencia cero que carga variables de entorno desde un archivo .env a process.env. El almacenamiento de la configuración en el entorno por separado del código se basa en la metodología de la aplicación de doce factores.
5. [**jsonwebtoken**](https://www.npmjs.com/package/jsonwebtoken): Los tokens web JSON son un método RFC 7519 estándar de la industria abierto para representar reclamaciones de forma segura entre dos partes.
6. [**mongoose**](https://www.npmjs.com/package/mongoose): Mongoose es una herramienta de modelado de objetos de MongoDB diseñada para funcionar en un entorno asincrónico. Mongoose admite promesas y devoluciones de llamada.
7. [**morgan**](https://www.npmjs.com/package/morgan): Middleware del registrador de solicitudes HTTP para node.js.
8. [**helmet**](https://www.npmjs.com/package/helmet): Helmet lo ayuda a proteger sus aplicaciones Express configurando varios encabezados HTTP. No es una solución milagrosa, ¡pero puede ayudar!.

### Intalar las dependencias/Dev de Babel JS necesarias para + nodemoon

~~~
  $ npm i @babel/core @babel/cli @babel/node @babel/preset-env nodemon -D
~~~

1. [**Babel**](https://babeljs.io/docs/en/): Babel es una cadena de herramientas que se utiliza principalmente para convertir el código ECMAScript 2015+ en una versión retrocompatible de JavaScript en navegadores o entornos actuales y antiguos.
2. [**nodemon**](https://www.npmjs.com/package/nodemon): nodemon es una herramienta que ayuda a desarrollar aplicaciones basadas en node.js al reiniciar automáticamente la aplicación de nodo cuando se detectan cambios de archivo en el directorio.

### Crear archivo de configuración de Babel

~~~
  // .babelrc

  {
    "presets": [
      "@babel/preset-env"
    ]
  }
~~~

### Agregar nuestro script al package.json para iniciar el servidor 

~~~
  // package.json

  "scripts": {
    "start": "babel-node src"
  }
~~~

### Iniciamos la configuración de nuestro servidor de Express 

~~~
  // src/index.js

  import express from 'express';

  // Instancia de express
  const app = express();
  const PORT = 1922;

  // Iniciar el servidor
  app.listen(PORT);

  console.log('Serve listen on port', 1922);"scripts": {
    "start": "babel-node src"
  }
~~~

### Iniciamos el servidor

~~~
  $ npm start
~~~