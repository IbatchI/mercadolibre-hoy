import styled from 'styled-components'
import { deviceSize } from '../src/styles/Styles'

export const StyledGlobalContainer = styled.div`
  max-width: 1378px;
  margin: auto;
  margin: 30px 8px 0 8px;
  @media ${deviceSize.tablet} {
    margin: 15px 8px 0 8px;
  }
`
