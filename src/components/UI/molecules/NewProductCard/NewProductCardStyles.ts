import styled from 'styled-components'
import { deviceSize, mainTheme } from '../../../../styles/Styles'

export const CardStyled = styled.div`
  display: flex;
  height: 18rem;
  flex-direction: column;
  width: 13rem;
  position: relative;
  border-radius: 0.5rem;
  background: ${mainTheme.colors.ternaryColor};
  @media ${deviceSize.tablet} {
    height: 15rem;
    width: 11rem;
  }
`
export const StyledCarrouselContainer = styled.div`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  height: 18rem;
  border-radius: 10px;
  @media ${deviceSize.tablet} {
    height: 8.1rem;
  }
`
export const ImageCardStyled = styled.img`
  height: 9rem;
  object-fit: cover;
  border-radius: 10px;
  @media ${deviceSize.tablet} {
    height: 8.1rem;
  }
`
export const ButtonCopy = styled.button`
  width: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  color: white;
  background-color: ${mainTheme.colors.secondaryColor};
  height: 2rem;
  border-radius: 15px;
  border: none;
  font-size: 0.8rem;
  cursor: pointer;
  box-shadow: 3px 0px 8px 1px rgba(0, 0, 0, 0.27);
  -webkit-box-shadow: 3px 0px 8px 1px rgba(0, 0, 0, 0.27);
  -moz-box-shadow: 3px 0px 8px 1px rgba(0, 0, 0, 0.27);
`

export const StyledTitle = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  color: white;
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 1.2em;
  margin-top: 0.8rem;
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
`
export const StyledContainerButton = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  gap: 1.5rem;
  top: 8rem;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 20;
  @media ${deviceSize.tablet} {
    top: 7rem;
    gap: 0.6rem;
  }
`
export const StyledContainerTitleAndPrice = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 12px;
`

export const StyledLine = styled.div`
  height: 0.5px;
  background-color: white;
  width: 100%;
`

export const StyledPriceAndLine = styled.div`
  gap: 0.3rem;
  display: flex;
  flex-direction: column;
`
