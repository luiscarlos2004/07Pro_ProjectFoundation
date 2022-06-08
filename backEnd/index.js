var express = require("express")
var app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const ServerI = require('./models/server');
let serveri = new ServerI();


app.use(bodyParser.json());




serveri.listen();



