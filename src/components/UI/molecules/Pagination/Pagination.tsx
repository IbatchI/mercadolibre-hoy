import React from 'react'
import { LIMIT } from '../../../../services/api-mercadolibre/settings'
import { Button } from '../../atoms/Button/Button'
import { StyledPaginationContainer } from './PaginationStyles'
import { useState, useEffect } from 'react'

interface PaginationProps {
  totalResults: number
}

export const Pagination: React.FC<PaginationProps> = ({ totalResults = 0 }) => {
  const NUM_OF_PAGES = Math.ceil(totalResults / LIMIT)
  const [selectedPage, setSelectedPage] = useState(1)
  const [pagesState, setPages] = useState<any>([])
  useEffect(() => {
    const pages = []
    if (selectedPage < NUM_OF_PAGES) {
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
      {pagesState.map((page, index) => (
        <Button
          active={page === selectedPage}
          key={index}
          onClick={() => {
            setSelectedPage(page)
          }}
        >
          {page.toString()}
        </Button>
      ))}
    </StyledPaginationContainer>
  )
}
