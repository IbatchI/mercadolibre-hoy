import { useEffect } from 'react'

import { getSearchesThunk } from '../../../store/slices/searches/searchesThunks'
import { H3, StyledSaveSearchs } from '../../../styles/SearchResultsStyles'
import { MySkeleton } from '../../UI/atoms/Skeleton/Skeleton'
import { Pagination } from '../../UI/molecules/Pagination/Pagination'
import { SearchItem } from '../../UI/molecules/SearchItem/SearchItem'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'

export const MySearches = () => {
  // getInfo from redux store
  const { searchResults, currentPage, searches, loading } = useAppSelector(
    (state) => state.searches
  )
  const dispatch = useAppDispatch()

  const handlePagination = (page: number) => {
    window.scrollTo(0, 0)
    dispatch(getSearchesThunk(page))
  }

  useEffect(() => {
    dispatch(getSearchesThunk(0))
  }, [])

  return (
    <StyledSaveSearchs>
      <H3>Mis Busquedas</H3>
      {loading ? (
        <MySkeleton height={'50px'} quantity={10} />
      ) : (
        searchResults.map((search) => <SearchItem key={search.uid} search={search} />)
      )}

      <Pagination
        currentPage={currentPage}
        onPageChange={handlePagination}
        pageSize={10}
        totalCount={searches}
      />
    </StyledSaveSearchs>
  )
}
