// aqui configuramos el servidor

const express = require("express");
const cors = require('cors');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosRoutePath = '/api/usuarios';

    // Middlewares: funciones que le añaden otra fucionalidad al Web Server
    this.middlewares();

    // Rutas de mi aplicacion
    this.routes(); //cuando se llama al constructor aqui se llama a las rutas
  }

  middlewares() {

    //CORS
    this.app.use( cors() );

    //lectura y paseo del body
    this.app.use( express.json() );

    // Directorio publico
    this.app.use(express.static("public") );
  }

  //aqui se definen las rutas que uno quiere
  routes() {
   
    this.app.use(this.usuariosRoutePath, require('../routes/usuarios') );
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
