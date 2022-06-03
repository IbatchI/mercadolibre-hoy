import { useCallback, useEffect, useRef } from 'react'
import debounce from 'just-debounce-it'
import ListOfProducts from 'components/ListOfProducts/ListOfProducts'
import Spinner from 'components/Spinner/Spinner'
import useNearScreen from 'hooks/useNearScreen'
import useProducts from 'hooks/useProducts'

export default function SearchResults ({ params }) {
  const { keyword } = params
  const { products, loading, setOffset } = useProducts({ keyword })
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({
    distance: '50px',
    externalRef: loading ? null : externalRef,
    once: false,
  })

  const handleLoadMore = () => setOffset((prevOffset) => prevOffset + 12)

  const deboundHandleLoadModer = useCallback(() =>
    debounce(handleLoadMore(), 1000)
  )

  useEffect(function () {
    isNearScreen && deboundHandleLoadModer()
  }, [isNearScreen])

  return (
    <div className="container">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h2>Resultados de {decodeURI(keyword)}</h2>
          <ListOfProducts products={products} />
        </>
      )}
      <div id="visor" ref={externalRef}></div>
    </div>
  )
}
