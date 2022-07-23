import api from '@config/api'
import ProductsInterface from '@interfaces/Products'

const mockIoApi = api(process.env.MOCKIO_URL)

class ProductsService {
  async execute () {
    const endpoint = '/66063904-d43c-49ed-9329-d69ad44b885e'

    const { data: { products } } = await mockIoApi.get<ProductsInterface>(endpoint)

    return products
  }
}

export default ProductsService
