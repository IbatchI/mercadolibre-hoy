import styled, { keyframes } from 'styled-components'
import { mainTheme } from '../../../../styles/Styles'

interface IStyledLoaderProps {
  width?: string
  height?: string
  isLocalLoader?: boolean
}

export const spin = keyframes`
0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
export const StyledLoaderContainer = styled.div`
  position: fixed;
  top: calc(50% - 40px);
  left: calc(50% - 40px);
`

export const StyledLoader = styled.div<IStyledLoaderProps>`
  border: 10px solid #a2a2a2;
  border-top: 10px solid ${mainTheme.colors.primaryColor};
  border-radius: 50%;
  width: ${(props) => props.width ?? '80px'};
  height: ${(props) => props.height ?? '80px'};
  animation: ${spin} 1s linear infinite;
`
