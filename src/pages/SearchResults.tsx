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
import { capitalizeFirstLetter } from '../../utils/utilsFunctions'
import { getProductsThunk } from '../store/slices/products/productsThunks'
import { LIMIT } from '../services/api-mercadolibre/settings'
import { NewProductCard } from '../components/UI/molecules/NewProductCard/NewProductCard'
import { TFilter } from '../types/types'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { MySkeleton } from '../components/UI/atoms/Skeleton/Skeleton'

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

  const auxiliar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  useEffect(() => {
    const search = searchResults.find((search) => search.keyword === keyword)
    const { filters } = search || { filters: {} }
    setFilters(filters)
    const page = 0
    dispatch(getProductsThunk({ keyword, page, filters }))
  }, [keyword])

  return (
    <>
      <StyledSearchAndFilters>
        <div>
          <H1>Resultados para : {capitalizeFirstLetter(keyword || '')}</H1>
          <StyledResultContainer>
            <H2>Total: </H2>
            {loading ? <MySkeleton height="17px" width="30px" /> : <H2>{totalResults}</H2>}
          </StyledResultContainer>
        </div>
        <Button padding="10px" textColor="white">
          <BiFilterAlt size="16px" />
        </Button>
      </StyledSearchAndFilters>
      <StyledCardContainer>
        {loading
          ? auxiliar.map((numberOfArray) => (
              <NewProductCard isSqueleton={true} key={numberOfArray} />
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
