import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../../../context/AuthProvider'
import { DropDownMenu } from '../../atoms/UserDropdown/DropDownMenu'
import { SearchBox } from '../../atoms/SearchBox/SearchBox'
import { StyledNavBarContainer, StyledMainLogo } from './NavBarStyles'
import { useContext } from 'react'

export const Navbar = () => {
  const { isAuth, handleOnLogOut } = useContext(AuthContext)
  const navigate = useNavigate()

  const userDropDownItems = isAuth
    ? [{ text: 'Cerrar Sesión', handleOnClick: handleOnLogOut }]
    : [
        { text: 'Registrarse', handleOnClick: () => navigate('/register') },
        { text: 'Loguearse', handleOnClick: () => navigate('/') },
      ]

  return (
    <>
      {isAuth && <SearchBox />}
      <StyledNavBarContainer>
        <StyledMainLogo
          src="/images/logo.png"
          onClick={() => {
            navigate('/')
          }}
        />
        <DropDownMenu items={userDropDownItems} />
      </StyledNavBarContainer>
    </>
  )
}
