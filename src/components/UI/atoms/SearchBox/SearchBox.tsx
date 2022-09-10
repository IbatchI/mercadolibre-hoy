import { useState } from 'react'
import {
  StyledSearchInput,
  StyledSearchInputt,
  SearchIcon,
  StyledContainer,
} from './SearchBoxStyles'
export const SearchBox = () => {
  const [value, setValue] = useState('')
  return (
    <StyledContainer>
      <StyledSearchInput action="" value={value} onChange={(e) => setValue(e.target.value)}>
        <StyledSearchInputt type="search" required />
        <SearchIcon onClick={() => console.log('holi')} />
      </StyledSearchInput>
    </StyledContainer>
  )
}
