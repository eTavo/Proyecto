
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const calcuSchema = new Schema({
    valor: String,
    horas: String,
    dias: String,
    dia: String,
    semana: String,
    mes: String,
    anio: String,

});

// crear modelo
const Calculadora = mongoose.model('Calculadora', calcuSchema);

module.exports = Calculadora;



