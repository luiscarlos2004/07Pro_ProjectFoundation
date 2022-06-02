const express = require('express');
const cors = require('cors');
const {dbConnection} = require('../database/config');
const user = require('../models/users');
class Server{
    constructor(){
        this.app = express();
        this.userPath = '/api/users'
        this.port = process.env.PORT;
        this.conectarDb();
        this.middlewares();//se llama primero antes de la rutas para que no salga error
        this.routes();
        
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }
    routes(){
        this.app.use(this.userPath,require('../routes/user'));
    }
    async conectarDb(){
        await dbConnection(user);
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log('conectado en el puerto', this.port);
        })
    }
}

module.exports = Server;