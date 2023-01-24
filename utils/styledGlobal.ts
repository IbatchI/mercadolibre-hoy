import styled, { keyframes } from 'styled-components'
import { deviceSize } from '../src/styles/Styles'

export const StyledGlobalContainer = styled.div`
  max-width: 95%;
  margin: auto;
  display: flex;
  overflow-y: auto;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 6rem;
  @media ${deviceSize.tablet} {
    margin-top: 25px;
    max-width: 94%;
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
