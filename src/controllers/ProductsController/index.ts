import { Request, Response, NextFunction } from 'express'

import ProductsService from '@services/ProductsService'
import { moneyConversor } from '@utils/conversors'

class ProductsController {
  async getAll (request: Request, response: Response, next:NextFunction) {
    try {
      const service = new ProductsService()
      const products = await service.execute()

      const filterProductsInfos = products.map((product) => {
        const { id, price, sku, title } = product

        return {
          id,
          image: 'https://via.placeholder.com/120',
          price: moneyConversor(price),
          sku,
          title
        }
      })

      return response.status(200).json(filterProductsInfos)
    } catch (error) {
      next(error)
    }
  }
}

export default ProductsController
