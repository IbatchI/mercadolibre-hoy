import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  FormSearchBox,
  InputSearchBox,
  SearchIcon,
  StyledContainer,
  StyledNavBarGhost,
} from './SearchBoxStyles'

export const SearchBox = () => {
  const [keyword, setKeyword] = useState<string>('')
  const history = useNavigate()

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    setKeyword('')
    history(`/search/${keyword}`)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  return (
    <StyledNavBarGhost active={keyword === ''}>
      <StyledContainer>
        <FormSearchBox method="get" onSubmit={handleSubmit}>
          <InputSearchBox onChange={handleChange} required type="search" value={keyword} />
          <SearchIcon onClick={handleSubmit} type="submit" />
        </FormSearchBox>
      </StyledContainer>
    </StyledNavBarGhost>
  )
}
