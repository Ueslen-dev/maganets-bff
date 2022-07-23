import { Request, Response, NextFunction } from 'express'

import ProductsService from '@services/ProductsService'

class ProductsController {
  async getAll (request: Request, response: Response, next:NextFunction) {
    try {
      const service = new ProductsService()
      const products = await service.execute()

      const filterProductsInfos = products.map((product) => {
        const { id, image, price, sku, title } = product

        return { id, image, price, sku, title }
      })

      return response.status(200).json(filterProductsInfos)
    } catch (error) {
      next(error)
    }
  }
}

export default ProductsController
