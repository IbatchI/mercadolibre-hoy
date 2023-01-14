import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Pagination } from '../components/UI/molecules/Pagination/Pagination'
import { H1, H2, StyledCardContainer, StyledSearchAndFilters } from '../styles/SearchResultsStyles'
import { BiFilterAlt } from 'react-icons/bi'
import { capitalizeFirstLetter } from '../../utils/utilsFunctions'
import { OpacityAnimationContainer } from '../../utils/styledGlobal'
import { LIMIT } from '../services/api-mercadolibre/settings'
import { Button } from '../components/UI/atoms/Button/ButtonStyles'
import { useProducts } from '../hooks'
import { NewProductCard } from '../components/UI/molecules/NewProductCard/NewProductCard'
import { useLoading } from '../context/LoadingProvider'

export const SearchResults = () => {
  const { keyword } = useParams()
  const [pagination, setPagination] = useState<number>(0)
  const { loading } = useLoading()
  const { products, totalResults } = useProducts(keyword, pagination * LIMIT)

  useEffect(() => {
    setPagination(0)
  }, [keyword])

  return (
    <>
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
      {!loading && (
        <Pagination
          pageSize={LIMIT}
          totalCount={totalResults}
          onPageChange={setPagination}
          currentPage={pagination}
        />
      )}
    </>
  )
}
