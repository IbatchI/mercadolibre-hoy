import { useEffect, useState } from 'react'
import getProducts from 'services/getProducts'

const INITIAL_PAGE = 1

const useProducts = ({ keyword }) => {
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const [products, setProducts] = useState([])
  const [totalResults, setTotalResults] = useState(0)

  useEffect(() => {
    setLoading(true)
    getProducts({ keyword, page }).then((result) => {
      const { products, totalResults } = result
      setProducts(products)
      setTotalResults(totalResults)
      setLoading(false)
    })
  }, [keyword, setProducts, page, setPage])

  return { products, totalResults, loading, page, setPage }
}

export default useProducts
