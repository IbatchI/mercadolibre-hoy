import { API_URL } from './settings'
import getProduct from './getProduct'

export default async function getProducts({
  keyword = 'placas de video',
} = {}) {
  const sarchUrl = `${API_URL}/sites/MLA/search?q=${keyword}&since=today&condition=used&sort=price_asc`

  const res = await fetch(sarchUrl)
  const response = await res.json()
  const data = response.results

  const products = await Promise.all(
    data.map(async (product) => {
      const { id, permalink, title, price } = product
      const { pictures, description } = await getProduct({ id })
      return { id, permalink, title, price, pictures, description }
    })
  )

  return products.sort((productA, productB) => (productA.price > productB.price ? 1 : -1))
}
