import styled from 'styled-components'
import { deviceSize, mainTheme } from '../../../../styles/Styles'

export const StyledNavBarContainer = styled.div`
  background-color: ${mainTheme.colors.navBarBackgroundColor};
  height: 70px;
  display: flex;
  position: relative;
  align-items: center;
  -webkit-box-shadow: 0px -10px 12px 8px rgba(0, 0, 0, 0.53);
  box-shadow: 0px -10px 12px 8px rgba(0, 0, 0, 0.53);
  padding: 10px;
  justify-content: space-between;
  width: auto;
  @media ${deviceSize.tablet} {
    height: 50px;
  }
`

export const StyledMainLogo = styled.img`
  height: 30px;
  width: 120px;
`
