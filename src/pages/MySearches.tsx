import { H1 } from '../styles/SearchResultsStyles'
import { SearchItem } from '../components/UI/molecules/SearchItem/SearchItem'
import { useContext } from 'react'
import { SearchesContext } from '../context/SearchesProvider'
import { Pagination } from '../components/UI/molecules/Pagination/Pagination'
import { OpacityAnimationContainer } from '../../utils/styledGlobal'

export const MySearches = () => {
  const { mySearches, totalSearches, handlePagination, currentPage } = useContext(SearchesContext)

  return (
    <OpacityAnimationContainer>
      <H1>Mis busquedas</H1>
      {mySearches.map((search) => (
        <SearchItem key={search.uid} search={search} />
      ))}
      <Pagination
        currentPage={currentPage}
        totalCount={totalSearches}
        pageSize={10}
        onPageChange={handlePagination}
      />
    </OpacityAnimationContainer>
  )
}
