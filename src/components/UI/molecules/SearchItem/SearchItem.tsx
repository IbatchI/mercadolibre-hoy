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
import { BiDetail } from 'react-icons/bi'

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
    window.scrollTo(0, 0)
    navigate(`/search/${keyword}`)
  }

  const handleOnClickDetail = (id: string) => {
    window.scrollTo(0, 0)
    navigate(`/my-searches/${id}`)
  }

  return (
    <SearchItemStyled>
      <StyledTextButton onClick={() => handleOnClickSearch(search.keyword)}>
        {search.keyword}
      </StyledTextButton>
      <ListOfActionButtonsContainer>
        <IconButton
          color={mainTheme.colors.secondaryColor}
          icon={<BiDetail />}
          onClick={() => {
            handleOnClickDetail(search.uid)
          }}
        />

        <IconButton
          color={mainTheme.colors.dangerColor}
          icon={<AiTwotoneDelete />}
          onClick={() => handleOnDeleteSearch(search.uid)}
        />
      </ListOfActionButtonsContainer>
    </SearchItemStyled>
  )
}
