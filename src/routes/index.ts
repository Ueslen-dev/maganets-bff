import express from 'express'

import ProductsController from '@controllers/ProductsController'

const route = express.Router()

const Products = new ProductsController()

route.get('/products', Products.getAll)

export default route
