//npm imports
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');
require('dotenv').config();

const ServerI = require('./models/server');

let serveri = new ServerI();






serveri.listen();



