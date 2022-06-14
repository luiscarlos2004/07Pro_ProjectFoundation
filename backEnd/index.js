require('dotenv').config();

const ServerI = require('./models/server');
let serveri = new ServerI();






serveri.listen();



