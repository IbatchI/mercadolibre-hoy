import { AiTwotoneDelete } from 'react-icons/ai'
import { BiRightArrow } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

import { IconButton } from '../../atoms/IconButton/IconButton'
import { ISearch } from '../../../../types/types'
import { ListOfActionButtonsContainer, SearchItemStyled } from './SearchItemStyles'
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
