import { useEffect } from 'react'
import { H3, StyledSaveSearchs } from '../styles/SearchResultsStyles'
import { SearchItem } from '../components/UI/molecules/SearchItem/SearchItem'
import { getSearchesThunk } from '../store/slices/searches/searchesThunks'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { Pagination } from '../components/UI/molecules/Pagination/Pagination'
import { OpacityAnimationContainer } from '../../utils/styledGlobal'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { skeletonArray, generateRandomKey } from '../../utils/utilsFunctions'

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
