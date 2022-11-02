const express = require('express');
const router = express.Router();

const Mascota = require('../models/mascota');

router.get('/', async (req,res) => {

    try{

        const arrayMascotasDB = await Mascota.find()
        console.log(arrayMascotasDB)

        res.render('mascotas', {

            arrayMascotas : arrayMascotasDB

            //arrayMascotas: [
            //    {id: 1, nombre: 'Perro', descripcion: 'Henry'},
            //    {id: 2, nombre: 'Hamster', descripcion: 'Sin nombre'},
            //]
        })

    }catch (error){
        console.log(error)
    }
})

router.get('/crear', (req, res) => {
    res.render('crear')
})

module.exports = router;