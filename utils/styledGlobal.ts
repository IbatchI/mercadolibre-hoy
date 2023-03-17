import styled, { keyframes } from 'styled-components'
import { deviceSize } from '../src/styles/Styles'

export const StyledGlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 4.5rem;
  margin-top: 35px;
  margin: auto;
  max-width: 1024px;
  @media ${deviceSize.tablet} {
    margin-top: 20px;
    max-width: 94%;
    margin-bottom: 4rem;
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
