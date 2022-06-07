import ListOfProducts from 'components/ListOfProducts/ListOfProducts'
import Paginator from 'components/Paginator/Paginator'
import Spinner from 'components/Spinner/Spinner'
import useProducts from 'hooks/useProducts'

export default function SearchResults({ params }) {
  const { keyword } = params
  const { products, totalResults, page, loading, setPage } = useProducts({
    keyword,
  })

  const handleLoadMore = (pageNumber) => setPage(pageNumber)

  return (
    <div className="container">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h5>
            {totalResults} resultados de {decodeURI(keyword)}
          </h5>
          <ListOfProducts products={products} />
          <Paginator
            handleLoadMore={handleLoadMore}
            page={page}
            totalResults={totalResults}
          />
        </>
      )}
    </div>
  )
}
