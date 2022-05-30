import { useEffect, useState } from 'react'
import getProducts from 'services/getProducts'

const INITIAL_OFFSET = 12

const useProducts = ({ keyword }) => {
  const [loading, setLoading] = useState(false)
  const [loadingMoreProducts, setLoadingMoreProducts] = useState(false)
  const [products, setProducts] = useState([])

  const [offset, setOffset] = useState(INITIAL_OFFSET)

  useEffect(() => {
    setLoading(true)
    getProducts({ keyword }).then((products) => {
      setProducts(products)
      setLoading(false)
    })
  }, [keyword, setProducts])

  useEffect(() => {
    if (offset === INITIAL_OFFSET) return

    setLoadingMoreProducts(true)
    getProducts({ keyword, offset }).then((nextProducts) => {
      setProducts((prevProducts) => prevProducts.concat(nextProducts))
      setLoadingMoreProducts(false)
    })
  }, [keyword, offset, setOffset])

  return { products, loading, loadingMoreProducts, setOffset }
}

export default useProducts
