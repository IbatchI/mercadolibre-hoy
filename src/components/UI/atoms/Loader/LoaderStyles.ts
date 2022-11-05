import styled, { keyframes } from 'styled-components'
import { mainTheme } from '../../../../styles/Styles'

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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: rgba(255, 255, 255, 0.7);
`

export const StyledLoader = styled.div`
  border: 10px solid #a2a2a2;
  border-top: 10px solid ${mainTheme.colors.primaryColor};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${spin} 1s linear infinite;
`
