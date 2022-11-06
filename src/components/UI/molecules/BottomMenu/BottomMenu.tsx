import { ButtonMenu } from '../../atoms/ButtonMenu/ButtonMenu'
import { MdSavedSearch, MdZoomIn, MdNotificationsNone } from 'react-icons/md'
import { StyledBottomMenu, StyledLineVertical } from './BottomMenuStyles'
export const BottomMenu = () => {
  return (
    <StyledBottomMenu>
      <ButtonMenu Icon={MdNotificationsNone}>Notificaciones</ButtonMenu>
      <StyledLineVertical />
      <ButtonMenu Icon={MdSavedSearch}>Mis busquedas</ButtonMenu>
      <StyledLineVertical />
      <ButtonMenu Icon={MdZoomIn}>Guardar busqueda</ButtonMenu>
    </StyledBottomMenu>
  )
}
