//se llama a express 
const express = require('express');
const app = express();

require('dotenv').config()

// se define un puerto 
const port = process.env.PORT || 3000;

//conexion a base de datos
const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.iyn5zgg.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri,
    {useNewUrlParser: true, useUnifiedTopology: true}
)   
    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log(e))

//motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));

//rutas web
app.use('/', require('./router/RutasWeb'));
app.use('/mascotas', require('./router/Mascotas'));

app.use((req,res,next) => {
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "Este enlace no se encuentra o no existe."
    })
})

app.listen(port, () => {
    console.log('Servidor a su servicio en puerto:', port)
})

// https://www.youtube.com/watch?v=IpQSsb-1N1g&list=PLPl81lqbj-4IEnmCXEJeEXPepr8gWtsl6&index=14   10:12 min

// https://nodejs-emmanuel.herokuapp.com/  ----> url de pagina en la nube