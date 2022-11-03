const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home')
})

router.get('/home', (req, res) => {
    res.render("home")
})

router.get('/programs', (req, res) => {
    res.render("programs")
})

router.get('/calculadora', (req, res) => {
    res.render("calculadora")
})

router.get('/contact', (req, res) => {
    res.render("contact")
})

module.exports = router;