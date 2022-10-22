import { deviceSize, mainTheme } from '../../../../styles/Styles'
import styled from 'styled-components'

export const StyledNavBarContainer = styled.div`
  align-items: center;
  background-color: ${mainTheme.colors.primaryColor};
  box-shadow: 0px -10px 12px 8px rgba(0, 0, 0, 0.53);
  display: flex;
  height: 70px;
  justify-content: space-between;
  padding: 10px;
  position: relative;
  width: auto;
  -webkit-box-shadow: 0px -10px 12px 8px rgba(0, 0, 0, 0.53);

  @media ${deviceSize.tablet} {
    height: 65px;
  }
`

export const StyledMainLogo = styled.img`
  height: 30px;
  width: 120px;
`
