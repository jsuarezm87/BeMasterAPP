const express = require('express');
const cors = require('cors');
const route = require('../constants/routes');
const message = require('../constants/messages');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        this.paths = {
            api: route.API
        }
        this.middlewares();
        this.routes();
    }


    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use( this.paths.api, require( '../routes/api.route') ); 
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log(message.SERVER_RUNNING, this.port);
        });
    }
}

module.exports = Server;