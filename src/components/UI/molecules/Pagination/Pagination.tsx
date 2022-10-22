import { useState, useEffect } from 'react'

import { Button } from '../../atoms/Button/ButtonStyles'
import { LIMIT } from '../../../../services/api-mercadolibre/settings'
import { StyledPaginationContainer } from './PaginationStyles'

interface PaginationProps {
  totalResults: number
  // eslint-disable-next-line no-unused-vars
  setPage: (page: number) => void
  initialPage: number
}

export const Pagination = ({ totalResults = 0, setPage, initialPage = 0 }: PaginationProps) => {
  const NUM_OF_PAGES = Math.ceil(totalResults / LIMIT)
  const [selectedPage, setSelectedPage] = useState<number>(initialPage + 1)
  const [pagesState, setPages] = useState<Array<number>>()

  useEffect(() => {
    const pages: Array<number> = []
    window.scrollTo(0, 0)
    if (selectedPage <= NUM_OF_PAGES) {
      if (selectedPage === 1) {
        for (let i = 1; i <= Math.min(NUM_OF_PAGES, 3); i++) {
          pages.push(i)
        }
      } else {
        pages.push(selectedPage - 1)
        pages.push(selectedPage)
        if (selectedPage + 1 <= NUM_OF_PAGES) pages.push(selectedPage + 1)
      }
      setPages(pages)
    }
  }, [selectedPage])

  return (
    <StyledPaginationContainer>
      {pagesState?.map((page: number, index: number) => (
        <Button
          padding="0.5rem 1rem"
          // active={page === selectedPage}
          key={index}
          onClick={() => {
            setSelectedPage(page)
            setPage(page - 1)
          }}
        >
          {page}
        </Button>
      ))}
    </StyledPaginationContainer>
  )
}
