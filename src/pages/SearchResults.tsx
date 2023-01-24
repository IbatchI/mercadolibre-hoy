import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Pagination } from '../components/UI/molecules/Pagination/Pagination'
import { H1, H2, StyledCardContainer, StyledSearchAndFilters } from '../styles/SearchResultsStyles'
import { BiFilterAlt } from 'react-icons/bi'
import { capitalizeFirstLetter } from '../../utils/utilsFunctions'
import { OpacityAnimationContainer } from '../../utils/styledGlobal'
import { LIMIT } from '../services/api-mercadolibre/settings'
import { Button } from '../components/UI/atoms/Button/Button'
import { NewProductCard } from '../components/UI/molecules/NewProductCard/NewProductCard'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getProductsThunk } from '../store/slices/products/productsThunks'
import { Skeleton } from '../components/UI/atoms/Skeleton/Skeleton'

export const SearchResults = () => {
  const { keyword } = useParams()
  const { products, totalResults, currentPage, loading } = useAppSelector((state) => state.products)
  const dispatch = useAppDispatch()

  const handlePagination = (page: number) => {
    dispatch(getProductsThunk(keyword, page))
  }

  useEffect(() => {
    dispatch(getProductsThunk(keyword, currentPage))
  }, [keyword])

  return (
    <>
      {/* TODO: Hacer bien el skeleton, o intalar una libreria, que creo seria lo mas conveniente
        suggerencia: https://www.npmjs.com/package/react-loading-skeleton
      */}

      {loading && <Skeleton width="164px" height="24px" />}
      {!loading && (
        <OpacityAnimationContainer>
          <StyledSearchAndFilters>
            <div>
              <H1>Resultados para : {capitalizeFirstLetter(keyword || '')}</H1>
              <H2>Total : {totalResults}</H2>
            </div>
            <Button padding="10px" textColor="white">
              <BiFilterAlt size="16px" />
            </Button>
          </StyledSearchAndFilters>
          <StyledCardContainer>
            {products.map((product) => (
              <NewProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                pictures={product.pictures}
                link={product.permalink}
              />
            ))}
          </StyledCardContainer>
        </OpacityAnimationContainer>
      )}
      {!loading && (
        <Pagination
          pageSize={LIMIT}
          totalCount={totalResults}
          onPageChange={handlePagination}
          currentPage={currentPage}
        />
      )}
    </>
  )
}
