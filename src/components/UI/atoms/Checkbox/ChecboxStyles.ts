import styled from 'styled-components'
import { mainTheme } from '../../../../styles/Styles'
import { CheckboxProps } from './Checkbox'

export const CheckboxStyle = styled.input<CheckboxProps>`
  width: 1rem;
  height: 1rem;
  ${(props) => (props.checked ? mainTheme.colors.primaryColor : mainTheme.colors.borderColors)};
  background-color: ${(props) =>
    props.checked ? mainTheme.colors.secondaryColor : mainTheme.colors.defaultBackgroundColor};
`

export const StyleCheckboxContainter = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 100%;
  gap: 10px;
`
