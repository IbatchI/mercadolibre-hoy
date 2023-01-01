import styled from 'styled-components'
import { mainTheme } from '../../../../styles/Styles'

interface IInputProps extends React.HTMLAttributes<HTMLButtonElement> {
  color?: string
}

export const StyledIconButton = styled.button<IInputProps>`
  background-color: transparent;
  color: ${(props) => props.color ?? mainTheme.colors.secondaryColor};
  font-size: ${mainTheme.fontSizes.medium};
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`
