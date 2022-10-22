import { SearchBox } from '../../atoms/SearchBox/SearchBox'
import { UserDropDown } from '../../atoms/UserDropdown/UserDropdown'
import { StyledNavBarContainer, StyledMainLogo } from './NavBarStyles'

export const Navbar = () => {
  return (
    <>
      <SearchBox />
      <StyledNavBarContainer>
        <StyledMainLogo src="/images/logo.png" />
        <UserDropDown />
      </StyledNavBarContainer>
    </>
  )
}
