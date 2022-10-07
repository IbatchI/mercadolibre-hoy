import { useParams } from 'react-router-dom'
import { Pagination } from '../components/UI/molecules/Pagination/Pagination'
import useProducts from '../hooks/useProducts'
import { useState, useEffect } from 'react'
import { ProductCard } from '../components/UI/atoms/ProductCard/ProductCard'
import {
  StyledCardContainer,
  StyledSearchAndFilters,
  StyledTextSeatch,
  StyledTextTotal,
} from '../styles/SearchResultsStyles'
import { BiFilterAlt } from 'react-icons/bi'
import { capitalizeFirstLetter } from '../../utils/utilsFunctions'
import { Loader } from '../components/UI/atoms/Loader/Loader'
import { OpacityAnimationContainer } from '../../utils/styledGlobal'
import { LIMIT } from '../services/api-mercadolibre/settings'
import { Button } from '../components/UI/atoms/Button/ButtonStyles'

const SearchResults = () => {
  const { keyword } = useParams()
  const [pagination, setPagination] = useState<number>(0)
  const { products, loading, totalResults } = useProducts(keyword, pagination * LIMIT)

  useEffect(() => {
    setPagination(0)
  }, [keyword])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <OpacityAnimationContainer>
          <StyledSearchAndFilters>
            <div>
              <StyledTextSeatch>
                Resultados para : {capitalizeFirstLetter(keyword || '')}
              </StyledTextSeatch>
              <StyledTextTotal>Total : {totalResults}</StyledTextTotal>
            </div>
            <Button padding="10px">
              <BiFilterAlt size="16px" />
            </Button>
          </StyledSearchAndFilters>

          <StyledCardContainer>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                pictures={product.pictures}
                link={product.permalink}
              />
            ))}
          </StyledCardContainer>
          <Pagination
            totalResults={totalResults}
            setPage={setPagination}
            initialPage={pagination}
          />
        </OpacityAnimationContainer>
      )}
    </>
  )
}

export default SearchResults
