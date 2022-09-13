import styled, { keyframes } from 'styled-components'
import { deviceSize } from '../src/styles/Styles'

export const StyledGlobalContainer = styled.div`
  max-width: 1024px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 15px;
  @media ${deviceSize.tablet} {
    margin-top: 15px;
  }
`

export const opacityAnimation = keyframes`
  0% {
		opacity: 0;
	}

	50% {
		opacity: 0.5;
	}

	100% {
		opacity: 1;
	}
`

export const OpacityAnimationContainer = styled.div`
  animation: ${opacityAnimation} 0.2s linear;
`