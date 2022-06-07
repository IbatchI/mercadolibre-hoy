import getProduct from './getProduct'
import { API_URL } from './settings'

export default async function getProducts({
  keyword = 'placas de video',
  limit = 12,
  page = 1,
} = {}) {
  const sarchUrl = `${API_URL}/sites/MLA/search?q=${keyword}&since=today&condition=used&limit=${limit}&offset=${page * limit}&sort=price_asc`

  const res = await fetch(sarchUrl)
  const response = await res.json()
  const data = response.results
  const totalResults = response.paging.total
  const products = []

  await Promise.all(
    data.map(async (product) => {
      try {
        const { id, permalink, title, price } = product
        const { pictures, description } = await getProduct({ id })

        products.push({ id, permalink, title, price, pictures, description })
      } catch (error) {
        console.log('error' + error)
      }
    })
  )
  return { products, totalResults }
}
