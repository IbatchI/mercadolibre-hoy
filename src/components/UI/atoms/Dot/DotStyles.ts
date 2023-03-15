import styled from 'styled-components'
import { mainTheme } from '../../../../styles/Styles'

export const Dot = styled.div`
  padding: 0 5px;
  text-align: center;
  margin: auto 4px;
  color: ${mainTheme.colors.secondaryColor};
  display: flex;
  box-sizing: border-box;
  align-items: center;
  letter-spacing: 0.05071em;
  border-radius: 16px;
  line-height: 1.43;
  font-weight: bold;
  font-size: ${mainTheme.fontSizes.medium};
  min-width: 32px;
`
