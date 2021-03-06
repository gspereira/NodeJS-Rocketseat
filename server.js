const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

// Iniciando APP
const app = express();
app.use(express.json());
app.use(cors());

// Conectando db
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);