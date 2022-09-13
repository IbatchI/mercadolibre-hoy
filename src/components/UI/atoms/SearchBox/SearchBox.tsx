import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  StyledSearchInput,
  StyledSearchInputt,
  SearchIcon,
  StyledContainer,
  StyledNavBarGhost,
} from './SearchBoxStyles'
export const SearchBox = () => {
  const [valueSelected, setValueSelected] = useState<string>('')
  const history = useNavigate()

  const handleSubmit = () => {
    setValueSelected('')
    history(`/search/${valueSelected}`)
  }
  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      setValueSelected('')
      history(`/search/${valueSelected}`)
    }
  }
  return (
    <StyledNavBarGhost active={valueSelected === ''}>
      <StyledContainer>
        <StyledSearchInput
          onKeyDown={(e) => {
            handleKeyDown(e)
          }}
          method="get"
          onChange={(e) => setValueSelected((e.target as HTMLTextAreaElement).value)}
        >
          <StyledSearchInputt value={valueSelected} type="search" required />
          <SearchIcon
            type="button"
            onClick={() => {
              handleSubmit()
            }}
          />
        </StyledSearchInput>
      </StyledContainer>
    </StyledNavBarGhost>
  )
}
