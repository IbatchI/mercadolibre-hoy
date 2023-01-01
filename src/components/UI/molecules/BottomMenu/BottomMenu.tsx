import { MdNotificationsNone, MdSave } from 'react-icons/md'
import { StyledBottomMenu } from './BottomMenuStyles'
import { useNavigate } from 'react-router-dom'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useContext } from 'react'
import { SearchesContext } from '../../../../context/SearchesProvider'
import { IconButton } from '../../atoms/IconButton/IconButton'
export const BottomMenu = () => {
  // get keyword from /search/:keyword
  const re = /\/search\/(.*)/
  const keyword = window.location.pathname.match(re)?.[1]
  const navigate = useNavigate()
  const { handleSaveSearch } = useContext(SearchesContext)

  const handleClickOnSaveSearch = (keyword: string | undefined) => {
    if (keyword) {
      handleSaveSearch(decodeURI(keyword))
    }
  }

  return (
    <StyledBottomMenu>
      <IconButton icon={<MdNotificationsNone />} />
      <IconButton icon={<BiSearchAlt2 />} onClick={() => navigate(`/my-searches`)} />
      <IconButton
        icon={<MdSave />}
        disabled={!keyword}
        onClick={() => handleClickOnSaveSearch(keyword)}
      />
    </StyledBottomMenu>
  )
}
