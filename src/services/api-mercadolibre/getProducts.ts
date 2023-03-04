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
  const sarchUrl = `${API_URL}/sites/MLA/search?q=${keyword}_PriceRange_${filters.minPrice}-${
    filters.maxPrice
  }&since=today&condition=used&sort=price_asc&limit=${LIMIT}&offset=${page * LIMIT}`

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
