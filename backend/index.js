const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: 'https://localhost'
}));

app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: '¡Hola desde el backend!' });
});

app.get('/api/despedida', (req, res) => {
  res.json({ mensaje: '¡Adiós desde el backend!' });
});

app.get('/api/servidor', (req, res) => {
  res.json({ mensaje: 'servidor inverso' });
});

app.listen(port, () => {
  console.log(`Backend escuchando en ${port}`);
});
