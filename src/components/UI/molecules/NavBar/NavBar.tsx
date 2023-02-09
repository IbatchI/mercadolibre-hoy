import { useNavigate } from 'react-router-dom'

import { DropDownMenu } from '../../atoms/UserDropdown/DropDownMenu'
import { SearchBox } from '../../atoms/SearchBox/SearchBox'
import { StyledNavBarContainer, StyledMainLogo } from './NavBarStyles'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { logoutThunk } from '../../../../store/slices/users/userThunks'

export const Navbar = () => {
  const { isAuth } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const userDropDownItems = isAuth
    ? [
        {
          text: 'Cerrar Sesión',
          handleOnClick: () => {
            dispatch(logoutThunk())
            navigate('/')
          },
        },
      ]
    : [
        { text: 'Registrarse', handleOnClick: () => navigate('/register') },
        { text: 'Loguearse', handleOnClick: () => navigate('/') },
      ]

  return (
    <>
      {isAuth && <SearchBox />}
      <StyledNavBarContainer>
        <StyledMainLogo
          onClick={() => {
            navigate('/')
          }}
          src="/images/logo.png"
        />
        <DropDownMenu items={userDropDownItems} />
      </StyledNavBarContainer>
    </>
  )
}
