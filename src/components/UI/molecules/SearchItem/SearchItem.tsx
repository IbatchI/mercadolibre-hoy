import { AiTwotoneDelete } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

import { IconButton } from '../../atoms/IconButton/IconButton'
import { ISearch } from '../../../../types/types'
import {
  ListOfActionButtonsContainer,
  SearchItemStyled,
  StyledTextButton,
} from './SearchItemStyles'
import { mainTheme } from '../../../../styles/Styles'
import { deleteSearchThunk } from '../../../../store/slices/searches/searchesThunks'
import { useAppDispatch } from '../../../../store/hooks'

interface ISearchItemProps {
  search: ISearch
}

export const SearchItem = ({ search }: ISearchItemProps) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleOnDeleteSearch = (id: string) => {
    dispatch(deleteSearchThunk(id))
  }

  const handleOnClickSearch = (keyword: string) => {
    navigate(`/search/${keyword}`)
  }

  return (
    <SearchItemStyled>
      <StyledTextButton onClick={() => handleOnClickSearch(search.keyword)}>
        {search.keyword}
      </StyledTextButton>
      <ListOfActionButtonsContainer>
        <IconButton
          color={mainTheme.colors.dangerColor}
          icon={<AiTwotoneDelete />}
          onClick={() => handleOnDeleteSearch(search.uid)}
        />
      </ListOfActionButtonsContainer>
    </SearchItemStyled>
  )
}
