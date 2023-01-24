import { useEffect } from 'react'
import { H1 } from '../styles/SearchResultsStyles'
import { SearchItem } from '../components/UI/molecules/SearchItem/SearchItem'
import { getSearchesThunk } from '../store/slices/searches/searchesThunks'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { Pagination } from '../components/UI/molecules/Pagination/Pagination'
import { OpacityAnimationContainer } from '../../utils/styledGlobal'
import { Skeleton } from '../components/UI/atoms/Skeleton/Skeleton'

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
      {/* TODO: Hacer bien el skeleton, o intalar una libreria, que creo seria lo mas conveniente
        suggerencia: https://www.npmjs.com/package/react-loading-skeleton
      */}
      {loading ? <Skeleton width="164px" height="24px" /> : <H1>Mis Busquedas</H1>}
      {searchResults.map((search) => (
        <SearchItem key={search.uid} search={search} />
      ))}
      <Pagination
        currentPage={currentPage}
        totalCount={searches}
        pageSize={10}
        onPageChange={handlePagination}
      />
    </OpacityAnimationContainer>
  )
}
