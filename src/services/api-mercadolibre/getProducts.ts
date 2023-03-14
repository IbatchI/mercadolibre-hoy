import { API_URL, LIMIT } from './settings'
import { IProduct, TFilter } from '../../types/types'
import getDetailProduct from './getDetailProduct'

export async function getProducts({
  keyword = '',
  page = 0,
  filters,
}: {
  keyword: string
  page: number
  filters: TFilter
}) {
  let sarchUrl = `${API_URL}/sites/MLA/search?q=${keyword}&since=today&condition=used&sort=price_asc&limit=${LIMIT}&offset=${
    page * LIMIT
  }`

  if (filters?.minPrice && filters?.maxPrice) {
    sarchUrl += `&price=${filters.minPrice}-${filters.maxPrice}`
  }

  const res = await fetch(sarchUrl)
  const response = await res.json()
  const data = response.results
  const totalResults = response.paging.total

  const products = await Promise.all(
    data.map(async (product: IProduct) => {
      const { id, permalink, title, price } = product
      const { pictures, description } = await getDetailProduct(id)
      return { id, permalink, title, price, pictures, description }
    })
  )

  return {
    products: products.sort((productA, productB) => (productA.price > productB.price ? 1 : -1)),
    totalResults: totalResults,
  }
}
