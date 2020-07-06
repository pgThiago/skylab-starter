const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

try{
    mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true } );
    console.log('Conectado');
}
catch(er){
    console.log('Deu pau' + er);
}

requireDir('./src/models');
//const Product = mongoose.model('Product');

//Primeira rota
app.use('/api', require('./src/routes'));

app.listen(3001);

