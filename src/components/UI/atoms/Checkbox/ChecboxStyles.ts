import styled from 'styled-components'
import { mainTheme } from '../../../../styles/Styles'
import { CheckboxProps } from './Checkbox'

export const CheckboxStyle = styled.div<CheckboxProps>`
  width: 20px;
  height: 20px;
  margin: 0 10px 0 0;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid
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
