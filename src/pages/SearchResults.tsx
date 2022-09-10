import { useParams } from 'react-router-dom'
import { Pagination } from '../components/UI/molecules/Pagination/Pagination'
import useProducts from '../hooks/useProducts'
import { useState } from 'react'

const SearchResults = () => {
  const { keyword } = useParams()
  const [pagination, setPagination] = useState<number>(0)
  const { products, loading, totalResults } = useProducts(keyword)
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {products.map((product) => (
            <article key={product.id}>
              <h3>{product.title}</h3>
              <span>{product.price}</span>
            </article>
          ))}
          <Pagination totalResults={totalResults} />
        </div>
      )}
    </>
  )
}

export default SearchResults
