const express = require('express')
const router = express.Router()

const autosController = require('../controller/autosController')

router.get('/', autosController.index)
//router.get('/:marcas', autosController.id);
//router.get('/:marcas/:dato', autosController.dato);






module.exports = router