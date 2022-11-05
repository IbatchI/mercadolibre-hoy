import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Pagination } from '../components/UI/molecules/Pagination/Pagination'
import {
  StyledCardContainer,
  StyledSearchAndFilters,
  StyledTextSeatch,
  StyledTextTotal,
} from '../styles/SearchResultsStyles'
import { BiFilterAlt } from 'react-icons/bi'
import { capitalizeFirstLetter } from '../../utils/utilsFunctions'
import { OpacityAnimationContainer } from '../../utils/styledGlobal'
import { LIMIT } from '../services/api-mercadolibre/settings'
import { Button } from '../components/UI/atoms/Button/ButtonStyles'
import { useProducts } from '../hooks'
import { NewProductCard } from '../components/UI/molecules/NewProductCard/NewProductCard'

export const SearchResults = () => {
  const { keyword } = useParams()
  const [pagination, setPagination] = useState<number>(0)
  const { products, totalResults } = useProducts(keyword, pagination * LIMIT)

  useEffect(() => {
    setPagination(0)
  }, [keyword])

  return (
    <>
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
      {totalResults && (
        <Pagination totalResults={totalResults} setPage={setPagination} initialPage={pagination} />
      )}
    </>
  )
}
