const { productController } = require('../controllers')
const express = require('express')
const router = express.Router()
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')


router.post('/', authentication, authorization, productController.newProduct)

router.put('/:id', authentication, authorization, productController.editProduct)

router.get('/', productController.getProducts)

router.get('/:id', productController.getOneProduct)

router.delete('/:id', authentication, authorization, productController.removeProduct)
module.exports = router