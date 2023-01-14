import { useContext } from 'react'
import { AiTwotoneDelete } from 'react-icons/ai'
import { BiRightArrow } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

import { IconButton } from '../../atoms/IconButton/IconButton'
import { ISearch } from '../../../../types/types'
import { ListOfActionButtonsContainer, SearchItemStyled } from './SearchItemStyles'
import { mainTheme } from '../../../../styles/Styles'
import { SearchesContext } from '../../../../context/SearchesProvider'

interface ISearchItemProps {
  search: ISearch
}

export const SearchItem = ({ search }: ISearchItemProps) => {
  const { handleDeleteSearch } = useContext(SearchesContext)
  const navigate = useNavigate()

  const handleOnDeleteSearch = (id: string) => {
    handleDeleteSearch(id)
  }

  const handleOnClickSearch = (keyword: string) => {
    navigate(`/search/${keyword}`)
  }

  return (
    <SearchItemStyled>
      {search.keyword}
      <ListOfActionButtonsContainer>
        <IconButton
          color={mainTheme.colors.dangerColor}
          icon={<AiTwotoneDelete />}
          onClick={() => handleOnDeleteSearch(search.uid)}
        />
        <IconButton icon={<BiRightArrow />} onClick={() => handleOnClickSearch(search.keyword)} />
      </ListOfActionButtonsContainer>
    </SearchItemStyled>
  )
}
