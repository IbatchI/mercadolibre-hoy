import { useEffect, useState } from 'react'
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
import { Button } from '../components/UI/atoms/Button/Button'
import { capitalizeFirstLetter, generateRandomKey, skeletonArray } from '../../utils/utilsFunctions'
import { getProductsThunk } from '../store/slices/products/productsThunks'
import { LIMIT } from '../services/api-mercadolibre/settings'
import { NewProductCard } from '../components/UI/molecules/NewProductCard/NewProductCard'
import { OpacityAnimationContainer } from '../../utils/styledGlobal'
import { TFilter } from '../types/types'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

export const SearchResults = () => {
  const [filters, setFilters] = useState<TFilter>({})
  const { keyword } = useParams()
  const { products, totalResults, currentPage, loading } = useAppSelector((state) => state.products)
  const { searchResults } = useAppSelector((state) => state.searches)
  const dispatch = useAppDispatch()

  const handlePagination = (page: number) => {
    window.scrollTo(0, 0)
    dispatch(getProductsThunk({ keyword, page, filters }))
  }

  useEffect(() => {
    const search = searchResults.find((search) => search.keyword === keyword)
    const { filters } = search || { filters: {} }
    setFilters(filters)
    const page = 0
    dispatch(getProductsThunk({ keyword, page, filters }))
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
                <NewProductCard isSqueleton={true} key={generateRandomKey()} />
              ))
            : products.map((product) => (
                <NewProductCard
                  key={product.id}
                  link={product.permalink}
                  pictures={product.pictures}
                  price={product.price}
                  title={product.title}
                />
              ))}
        </StyledCardContainer>
      </OpacityAnimationContainer>
      {!loading && (
        <Pagination
          currentPage={currentPage}
          onPageChange={handlePagination}
          pageSize={LIMIT}
          totalCount={totalResults}
        />
      )}
    </>
  )
}
