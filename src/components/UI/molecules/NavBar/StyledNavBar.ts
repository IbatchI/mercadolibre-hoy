import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { mainTheme } from '../../../../styles/Styles'

interface NavBarContainerProps {
  extendNavbar: boolean
}

export const NavbarContainer = styled.nav<NavBarContainerProps>`
  background-color: ${mainTheme.colors.navBarBackgroundColor};
  display: flex;
  height: ${(props) => (props.extendNavbar ? '100vh' : '80px')};
  flex-direction: column;
  width: 100%;
  @media (min-width: 700px) {
    height: 80px;
  }
`

export const LeftContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 70%;
  padding-left: 5%;
`

export const RightContainer = styled.div`
  display: flex;
  flex: 30%;
  justify-content: flex-end;
  padding-right: 50px;
`

export const NavbarInnerContainer = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
`

export const NavbarLinkContainer = styled.div`
  display: flex;
`

export const NavbarLink = styled(Link)`
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: x-large;
  margin: 10px;
  text-decoration: none;
  @media (max-width: 700px) {
    display: none;
  }
`
export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: x-large;
  margin: 10px;
  text-decoration: none;
`

export const Logo = styled.img`
  height: auto;
  margin: 10px;
  max-width: 180px;
`

export const OpenLinksButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 45px;
  height: 50px;
  width: 70px;
  @media (min-width: 700px) {
    display: none;
  }
`

export const NavbarExtendedContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    display: none;
  }
`
