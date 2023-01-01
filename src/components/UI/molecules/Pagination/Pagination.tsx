/* eslint-disable react/display-name */
import React, { useState, useEffect } from 'react'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'

import { Button } from '../../atoms/Button/ButtonStyles'
import { StyledPaginationContainer } from './PaginationStyles'

interface PaginationProps {
  totalResults: number
  resultsPerPage: number
  // eslint-disable-next-line no-unused-vars
  setPage: (page: number) => void
}

export const Pagination = ({ totalResults = 0, setPage, resultsPerPage = 5 }: PaginationProps) => {
  // TODO: Cuando cambiamos de pagina, se vuelve a renderizar el componente
  // y el selectedPage vuelve a 1, por lo que se pierde la seleccion
  // de la pagina que se estaba viendo
  // intente con reactMemo pero no logre arreglarlo
  const NUM_OF_PAGES = Math.ceil(totalResults / resultsPerPage)
  const hasPages = NUM_OF_PAGES >= 1
  const [pages, setPages] = useState<Array<number>>()
  const [selectedPage, setSelectedPage] = useState<number>(1)

  const goToFirstPage = () => {
    setSelectedPage(1)
    setPage(0)
  }

  const goToLastPage = () => {
    setSelectedPage(NUM_OF_PAGES)
    setPage(NUM_OF_PAGES - 1)
  }

  const goToSelectedPage = (page: number) => {
    setSelectedPage(page)
    setPage(page - 1)
  }

  useEffect(() => {
    // Go to up of the screen
    window.scrollTo(0, 0)

    const pagesArray = []
    if (!hasPages) return
    if (selectedPage <= NUM_OF_PAGES) {
      if (selectedPage === 1) {
        for (let i = 1; i <= Math.min(NUM_OF_PAGES, 3); i++) {
          pagesArray.push(i)
        }
      } else {
        pagesArray.push(selectedPage - 1)
        pagesArray.push(selectedPage)
        if (selectedPage + 1 <= NUM_OF_PAGES) pagesArray.push(selectedPage + 1)
      }
    }
    setPages(pagesArray)
  }, [selectedPage])

  return (
    <StyledPaginationContainer>
      {/*  Go Previus Page */}
      {hasPages && (
        <Button onClick={goToFirstPage}>
          <BiLeftArrow />
        </Button>
      )}

      {/*  Go to Page */}
      {pages?.map((page: number, index: number) => (
        <Button
          padding="0.4rem 1rem"
          active={page === selectedPage}
          key={index}
          onClick={() => goToSelectedPage(page)}
        >
          {page}
        </Button>
      ))}

      {/*  Go Next Page */}
      {hasPages && (
        <Button onClick={goToLastPage}>
          <BiRightArrow />
        </Button>
      )}
    </StyledPaginationContainer>
  )
}
