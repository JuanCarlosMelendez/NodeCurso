import express, { Application} from 'express';

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3002';
       // console.log('Servidor corriendo en puerto ' +  this.port);
    }
    listen()  {
        this.app.listen('3002'),
        console.log('Servidor corriendo en puerto ' + '3002');
    }
}
export default Server;