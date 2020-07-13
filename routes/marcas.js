const express = require('express')
const router = express.Router()
const marcasController = require('../controller/marcasControllers')
router.get('/', marcasController.index)
router.get('/:marcas', marcasController.id)



module.exports = router