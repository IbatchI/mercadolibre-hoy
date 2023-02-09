import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Pagination } from '../components/UI/molecules/Pagination/Pagination'
import {
  H1,
  H2,
  StyledCardContainer,
  StyledResultContainer,
  StyledSearchAndFilters,
} from '../styles/SearchResultsStyles'
import { BiFilterAlt } from 'react-icons/bi'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { capitalizeFirstLetter, generateRandomKey, skeletonArray } from '../../utils/utilsFunctions'
import { OpacityAnimationContainer } from '../../utils/styledGlobal'
import { LIMIT } from '../services/api-mercadolibre/settings'
import { Button } from '../components/UI/atoms/Button/Button'
import { NewProductCard } from '../components/UI/molecules/NewProductCard/NewProductCard'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getProductsThunk } from '../store/slices/products/productsThunks'

export const SearchResults = () => {
  const { keyword } = useParams()
  const { products, totalResults, currentPage, loading } = useAppSelector((state) => state.products)
  const dispatch = useAppDispatch()

  const handlePagination = (page: number) => {
    dispatch(getProductsThunk(keyword, page))
  }

  useEffect(() => {
    dispatch(getProductsThunk(keyword, 0))
  }, [keyword])

  return (
    <>
      <OpacityAnimationContainer>
        <StyledSearchAndFilters>
          <div>
            <H1>Resultados para : {capitalizeFirstLetter(keyword || '')}</H1>
            <StyledResultContainer>
              <H2>Total: </H2>
              {loading ? (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <Skeleton count={1} height="17px" width="30px" />
                </SkeletonTheme>
              ) : (
                <H2>{totalResults}</H2>
              )}
            </StyledResultContainer>
          </div>
          <Button padding="10px" textColor="white">
            <BiFilterAlt size="16px" />
          </Button>
        </StyledSearchAndFilters>
        <StyledCardContainer>
          {loading
            ? skeletonArray.map(() => (
                <NewProductCard key={generateRandomKey()} isSqueleton={true} />
              ))
            : products.map((product) => (
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
