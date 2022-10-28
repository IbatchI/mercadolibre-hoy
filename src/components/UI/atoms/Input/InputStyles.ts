import styled from 'styled-components'
import { mainTheme } from '../../../../styles/Styles'

interface IInputProps {
  height?: string
  minWidth?: string
  padding?: string
  width?: string
}

export const Input = styled.input<IInputProps>`
  border-radius: 5px;
  border: 0.3px solid ${mainTheme.colors.primaryColor};
  display: flex;
  font-size: 100%;
  font-weight: bold;
  height: ${({ height }) => height || '30px'};
  min-width: ${({ minWidth }) => minWidth || 0};
  opacity: 1;
  padding: ${({ padding }) => padding || '0 10px'};
  width: ${({ width }) => width || '100%'};
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px ${mainTheme.colors.primaryColor};
  }
`
