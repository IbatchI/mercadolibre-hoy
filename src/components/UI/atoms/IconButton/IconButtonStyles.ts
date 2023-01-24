import styled from 'styled-components'
import { mainTheme } from '../../../../styles/Styles'
import { IconButtonProps } from './IconButton'

export const StyledIconButton = styled.button<IconButtonProps>`
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
  // Button is loading, so animate it with a breathing effect
  ${(props) =>
    props.loading &&
    `
    animation: breathing 1s infinite;
    @keyframes breathing {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
  `}

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`
