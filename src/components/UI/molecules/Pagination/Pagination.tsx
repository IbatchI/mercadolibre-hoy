/* eslint-disable no-unused-vars */
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import { usePagination, DOTS } from '../../../../hooks/usePagination'

import { Button } from '../../atoms/Button/ButtonStyles'
import { Dot } from '../../atoms/Dot/DotStyles'
import { StyledPaginationContainer } from './PaginationStyles'

interface PaginationProps {
  currentPage: number
  onPageChange: (page: number) => void
  pageSize: number
  siblingCount?: number
  totalCount: number
}

export const Pagination = ({
  totalCount = 0,
  onPageChange,
  pageSize = 5,
  siblingCount = 1,
  currentPage,
}: PaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  const lastPage = paginationRange[paginationRange.length - 1]
  // // If there are less than 2 times in pagination range we shall not render the component
  if (paginationRange.length < 2) {
    return null
  }

  const goToPreviusPage = () => {
    onPageChange(currentPage - 1)
  }

  const goToNextPage = () => {
    onPageChange(currentPage + 1)
  }

  return (
    <StyledPaginationContainer>
      {/* Go to previus page */}
      <Button onClick={goToPreviusPage} disabled={currentPage === 0}>
        <BiLeftArrow />
      </Button>

      {/*  Go to Page */}
      {paginationRange?.map((page: number | string, index: number) => {
        if (page === DOTS) {
          return <Dot key={`${index} + ${page}`}>{page}</Dot>
        }

        return (
          <Button
            padding="0.4rem 1rem"
            active={page === currentPage + 1}
            key={`${index} + ${page}`}
            onClick={() => onPageChange(Number(page) - 1)}
          >
            {page}
          </Button>
        )
      })}

      {/*  Go to next Page */}
      <Button onClick={goToNextPage} disabled={currentPage === Number(lastPage) - 1}>
        <BiRightArrow />
      </Button>
    </StyledPaginationContainer>
  )
}
