import cors from "cors";
import express, { Application, Request, Response } from "express";
import router from "../routes/usuario";



class Server {
    private app: Application;
    private port: string;
    private rutasApi =  {
        //este es el tipo de ruta que quiero que se solicite en la web ejem: localhost:3001/api/usuarios/123srtjryukrajsy
        usuarios: '/api'
    }


    constructor() {
        this.port =  process.env.PORT || '3001';
        this.app = express();


        // Middlewares
        this.middlewares();

        // Rutas de mi aplicacion
        this.routes();
    }

    middlewares() {

        // Configurando cors
        this.app.use ( cors())


        // Directorio publico
        this.app.use( express.static('dist/public'));
    }

    routes() {
        this.app.use( this.rutasApi.usuarios, router )
    }

    listen () {
        this.app.listen( this.port, () => {
            console.log( `Servidor corriendo en puerto ${this.port}`)
        })
    }


}

export default Server;