import { SearchBox } from '../../atoms/SearchBox/SearchBox'
import { UserDropDown } from '../../atoms/UserDropdown/UserDropdown'
import { StyledNavBarContainer, StyledMainLogo } from './NavBarStyles'

const Navbar = () => {
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

export default Navbar
