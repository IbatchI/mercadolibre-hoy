import styled, { keyframes } from 'styled-components'

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

export const StyledGlobalContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;

  max-width: 75%;

  @media (max-width: 576px) {
    max-width: 540px;
  }

  @media (max-width: 768px) {
    max-width: 720px;
  }

  @media (max-width: 992px) {
    max-width: 960px;
  }

  @media (max-width: 1200px) {
    max-width: 1140px;
  }

  animation: ${opacityAnimation} 0.2s linear;
`
