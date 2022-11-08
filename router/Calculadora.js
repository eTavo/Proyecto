// FUNCIONA CON BASE DE MONGO
const express = require('express');
const router = express.Router();

const Calculadora = require('../models/calcula')

router.get('/', async(req,res) => {

    try{

        const arrayCalculadorasEST = await Calculadora.find()
        console.log(arrayCalculadorasEST)
        
        res.render('calculadora', {

            arrayCalculadora : arrayCalculadorasEST
        })

    }catch (error){
        console.log(error)
    }
})


router.post('/', async(req,res) => {
    const body = req.body
    const valor = body.valor
    const horas = body.horas
    const dias = body.dias

    const dia = valor * horas
    const semana = dia * dias
    const mes = semana * 4
    const anio = mes * 12

    var viewData = {
        "semana": semana,
        "mes": mes,
        "anio": anio
    };
    
    try {

        await Calculadora.create(viewData)
      
        res.redirect('/calculadora')

    } catch (error) {
        console.log(error)
    }
    
})

module.exports = router;


