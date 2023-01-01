import { H1 } from '../styles/SearchResultsStyles'
import { SearchItem } from '../components/UI/molecules/SearchItem/SearchItem'
import { useContext } from 'react'
import { SearchesContext } from '../context/SearchesProvider'
import { Pagination } from '../components/UI/molecules/Pagination/Pagination'

export const MySearches = () => {
  const { mySearches, totalSearches, handlePagination } = useContext(SearchesContext)

  return (
    <>
      <H1>Mis busquedas</H1>
      {mySearches.map((search) => (
        <SearchItem key={search.uid} search={search} />
      ))}
      <Pagination totalResults={totalSearches} resultsPerPage={5} setPage={handlePagination} />
    </>
  )
}
