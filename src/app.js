// Local during development --> const PORT = 3003;
const PORT = process.env.PORT || 3004;

// 1) Importar tanto el framework Express y path.
const express = require('express');
const path = require('path');

// 2) Crear una instancia de Express.
const app = express();

app.use(express.static(path.join(__dirname, "../public")));

// 3) Poner al servidor a escuchar al puerto 3001.
app.listen(PORT, () => console.log('Se prendió en el puerto ' + PORT));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
})
app.get('/register', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
})
app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
})
app.post('/home', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
})
