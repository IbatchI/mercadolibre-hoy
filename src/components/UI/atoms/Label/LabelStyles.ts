import styled from 'styled-components'
import { mainTheme } from '../../../../styles/Styles'
import { ILabelProps } from './Label'

export const StyledLabel = styled.label<ILabelProps>`
  color: ${mainTheme.colors.primaryTextColor};
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 0.5rem;
  display: block;
  width: 100%;
  &:focus {
    outline: none;
  }
`
