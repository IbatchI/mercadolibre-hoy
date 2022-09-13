import { useEffect, useState } from 'react'
import getProducts from '../services/api-mercadolibre/getProducts'

const useProducts = (keyword = '', offset = 0) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [products, setProducts] = useState<Array<IProductDetail>>([])
  const [totalResults, setTotalResults] = useState<number>(0)

  useEffect(() => {
    try {
      setLoading(true)
      getProducts(keyword, offset).then(({ products, totalResults }) => {
        setProducts(products)
        setLoading(false)
        setTotalResults(totalResults)
      })
    } catch (error) {
      setLoading(false)
    }
  }, [keyword, offset])

  return { products, loading, totalResults }
}

export default useProducts
