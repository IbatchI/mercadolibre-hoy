import { useEffect, useState } from 'react'
// import { useLoading } from '../context/LoadingProvider'
import { getProducts } from '../services/api-mercadolibre/getProducts'
import { IProductDetail } from '../types/types'

export const useProducts = (keyword = '', offset = 0) => {
  // const { setLoading } = useLoading()
  const [products, setProducts] = useState<Array<IProductDetail>>([])
  const [totalResults, setTotalResults] = useState<number>(0)

  useEffect(() => {
    try {
      // setLoading(true)
      getProducts(keyword, offset).then(({ products, totalResults }) => {
        setProducts(products)
        // setLoading(false)
        setTotalResults(totalResults)
      })
    } catch (error) {
      // setLoading(false)
    }
  }, [keyword, offset])

  return { products, totalResults }
}
