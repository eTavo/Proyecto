const express = require('express');
const router = express.Router();

const Valor = require('/calculadora');


router.post('/', async(req, res) => {
    const body = req.form
    try {
        //------  metodo 2 ---------
        // espera que se cree el documento en mongodb
        await Valor.create(body);
        // redirecciona la carga a la vista de mascotas
        res.redirect('/calculadora')

    } catch (error) {
        console.log(body)
    }
})

module.exports = router;