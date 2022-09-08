import React from 'react'
import { StyledSearchInput,StyledSearchInputt,SearchIcon, StyledContainer } from './SearchBoxStyles'
export const SearchBox = () => {
  return (
    <StyledContainer>
    <StyledSearchInput action="">
      <StyledSearchInputt type="search" required />
      <SearchIcon/>
    </StyledSearchInput>
    </StyledContainer>
  )
}
