import styled from 'styled-components'
import { deviceSize, mainTheme } from '../../../../styles/Styles'

export const StyledBottomMenu = styled.div`
  background-color: ${mainTheme.colors.primaryColor};
  position: fixed;
  bottom: 0;
  justify-content: center;
  align-items: center;
  gap: 7.5rem;
  padding: 0.5rem 0 0.5rem 0;
  height: 4.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 999;
  border-top: 1px solid ${mainTheme.colors.borderColors};
  @media ${deviceSize.tablet} {
    height: 4rem;
    gap: 4.6rem;
    padding: 0.3rem 0 0.3rem 0;
  }
`
