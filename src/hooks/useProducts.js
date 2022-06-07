import { useEffect, useState } from 'react'
import getProducts from 'services/getProducts'

const useProducts = ({ keyword }) => {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(() => {
    setLoading(true)
    getProducts({ keyword }).then((products) => {
      setProducts(products)
      setLoading(false)
    })
  }, [keyword, setProducts])

  return { products, loading }
}

export default useProducts
