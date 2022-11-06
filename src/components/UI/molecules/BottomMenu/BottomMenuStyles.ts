import styled from 'styled-components'
import { deviceSize, mainTheme } from '../../../../styles/Styles'

export const StyledBottomMenu = styled.div`
  background-color: ${mainTheme.colors.primaryColor};
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 0.5rem 0 0.5rem 0;
  height: 4.5rem;
  width: 100%;
  z-index: 999;
  -webkit-box-shadow: inset 4px 15px 21px -16px rgba(0, 0, 0, 0.67);
  box-shadow: inset 4px 15px 21px -16px rgba(0, 0, 0, 0.67);
  @media ${deviceSize.tablet} {
    height: 4rem;
    gap: 0.6rem;
    padding: 0.3rem 0 0.3rem 0;
  }
`
export const StyledLineVertical = styled.div`
  width: 1px;
  height: 3rem;
  background-color: white;
`
