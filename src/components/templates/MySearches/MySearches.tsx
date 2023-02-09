import { useEffect } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { OpacityAnimationContainer } from '../../../../utils/styledGlobal'
import { generateRandomKey, skeletonArray } from '../../../../utils/utilsFunctions'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { getSearchesThunk } from '../../../store/slices/searches/searchesThunks'
import { H3, StyledSaveSearchs } from '../../../styles/SearchResultsStyles'
import { Pagination } from '../../UI/molecules/Pagination/Pagination'
import { SearchItem } from '../../UI/molecules/SearchItem/SearchItem'

export const MySearches = () => {
  // getInfo from redux store
  const { searchResults, currentPage, searches, loading } = useAppSelector(
    (state) => state.searches
  )
  const dispatch = useAppDispatch()

  const handlePagination = (page: number) => {
    dispatch(getSearchesThunk(page))
  }

  useEffect(() => {
    dispatch(getSearchesThunk(0))
  }, [])

  return (
    <OpacityAnimationContainer>
      <StyledSaveSearchs>
        <H3>Mis Busquedas</H3>
        {loading
          ? skeletonArray.map(() => (
              // Todo: llevar colores a variables globales
              // Todo: crear un componente Skeleton que reciba la cantidad de elementos a renderizar
              <SkeletonTheme baseColor="#202020" highlightColor="#444" key={generateRandomKey()}>
                <Skeleton count={1} height="50px" />
              </SkeletonTheme>
            ))
          : searchResults.map((search) => <SearchItem key={search.uid} search={search} />)}

        <Pagination
          currentPage={currentPage}
          onPageChange={handlePagination}
          pageSize={10}
          totalCount={searches}
        />
      </StyledSaveSearchs>
    </OpacityAnimationContainer>
  )
}
