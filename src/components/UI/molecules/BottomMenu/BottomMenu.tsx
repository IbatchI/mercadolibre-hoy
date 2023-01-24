import { MdNotificationsNone, MdSave } from 'react-icons/md'

import { BiSearchAlt2 } from 'react-icons/bi'
import { IconButton } from '../../atoms/IconButton/IconButton'
import { saveSearchThunk } from '../../../../store/slices/searches/searchesThunks'
import { StyledBottomMenu } from './BottomMenuStyles'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'

export const BottomMenu = () => {
  // get keyword from /search/:keyword
  const re = /\/search\/(.*)/
  const keyword = window.location.pathname.match(re)?.[1]
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { loading } = useAppSelector((state) => state.searches)

  const handleClickOnSaveSearch = () => {
    if (keyword) {
      dispatch(saveSearchThunk(decodeURI(keyword)))
    }
  }

  return (
    <StyledBottomMenu>
      <IconButton icon={<MdNotificationsNone />} />
      <IconButton icon={<BiSearchAlt2 />} onClick={() => navigate(`/my-searches`)} />
      <IconButton
        loading={loading}
        icon={<MdSave />}
        disabled={!keyword}
        onClick={handleClickOnSaveSearch}
      />
    </StyledBottomMenu>
  )
}