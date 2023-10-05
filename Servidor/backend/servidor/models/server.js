/**
 * @author Daniel Arteaga
 * @version 1.0.0
 * 
 * Servidor de express
 * Esta clase llama a los metodos necesarios para instanciar un servidor
 */

/**
 * Importando variables
 */
const express = require('express');
const cors = require('cors');


/**
 * @class Server
 * CLase servidor que inicia el servicio de node
 */
class Server{

    constructor (){
        this.app = express();
        this.port = process.env.PORT;
        this.path= '/api/';
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        //ruta ejemplo
        this.app.use(`${this.path}usuarios`,require('../routes/usuarios.routes'));
        this.app.use('/personas',require('../routes/personas.routes'));
    }

    listen(){
        this.app.listen( this.port, ()=>{
            console.log('Servidor funcionando en el puerto: ',this.port);
        })
    }
}

module.exports = Server;