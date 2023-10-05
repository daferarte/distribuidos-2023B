/**
 * @author Daniel Arteaga
 * @version 1.0.0
 * 
 * Aplicativo central del servidor
 */

require('dotenv').config();


const Server = require('./models/server');
const server = new Server();

server.listen();