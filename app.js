//se llama a express 
const express = require('express');
const app = express();

// se define un puerto 
const port = 3000;

//motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/home', (req, res) => {
    res.render("home")
})

app.get('/programs', (req, res) => {
    res.render("programs")
})

app.get('/calculadora', (req, res) => {
    res.render("calculadora")
})

app.listen(port, () => {
    console.log('Servidor a su servicio en puerto:', port)
})