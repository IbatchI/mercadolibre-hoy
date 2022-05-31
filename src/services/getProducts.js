import getProduct from './getProduct'
import { API_URL } from './settings'

export default async function getProducts({
  keyword = 'placas de video',
  limit = 12,
  offset = 0,
} = {}) {
  const sarchUrl = `${API_URL}/sites/MLA/search?q=${keyword}&since=today&condition=used&limit=${limit}&offset=${offset}&sort=price_asc`

  const res = await fetch(sarchUrl)
  const response = await res.json()
  const data = response.results

  const products = data.map((product) => {
    const { id, permalink, title, price } = product
    const productDetail = getProduct({ id }).then((detailProduct) => {
      const { pictures, description } = detailProduct
      return { pictures, description }
    })
    const { pictures, description } = productDetail
    return { id, permalink, title, price, pictures, description }
  })
  return products
}
