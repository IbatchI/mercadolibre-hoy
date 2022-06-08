import { useEffect, useState } from 'react'
import ListOfProducts from 'components/ListOfProducts/ListOfProducts'
import Paginator from 'components/Paginator/Paginator'
import Spinner from 'components/Spinner/Spinner'
import useProducts from 'hooks/useProducts'

export default function SearchResults({ params }) {
  const { keyword } = params
  const { products, loading } = useProducts({ keyword })
  const [page, setPage] = useState(1)

  useEffect(() => {
    setPage(1)
  }, [keyword])

  return (
    <div className="container">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h5>
            {products.length} resultados de {decodeURI(keyword)}
          </h5>
          <ListOfProducts page={page} products={products} />
          <Paginator
            page={page}
            nextPage={setPage}
            totalResults={products.length}
          />
        </>
      )}
    </div>
  )
}
