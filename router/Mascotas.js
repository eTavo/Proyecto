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

// agrega datos a la base y los muestra en enlace
router.post('/', async(req, res) => {
    const body = req.body
    try {
        //------  metodo 1 ---------

        // crea modelo de Mascota
        //const mascotaDB = new Mascota(body)
        // guarda en la base de dato
        //await mascotaDB.save()

        //------  metodo 2 ---------
        // espera que se cree el documento en mongodb
        await Mascota.create(body)
        // redirecciona la carga a la vista de mascotas
        res.redirect('/mascotas')

    } catch (error) {
        console.log(body)
    }
})

module.exports = router;