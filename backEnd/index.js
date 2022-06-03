var express = require("express")
var app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const ServerI = require('./models/server');
let serveri = new ServerI();


app.get('/get_mascotas' , function (req , res){
   res.send('adoptame.component.html')


});


serveri.listen();



