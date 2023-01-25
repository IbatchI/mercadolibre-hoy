import styled from 'styled-components'
import { deviceSize } from '../../../../styles/Styles'

export const CardStyled = styled.div`
  aspect-ratio: 16 / 11;
`
export const StyledCarrouselContainer = styled.div`
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  height: auto;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.3rem;
  border-radius: 10px;
  @media ${deviceSize.tablet} {
    width: 100%;
  }
`
export const ImageCardStyled = styled.img`
  aspect-ratio: 16 / 8;
  object-fit: cover;
  border-radius: 0.8rem;
  @media ${deviceSize.tablet} {
    aspect-ratio: 16 / 8;
  }
`

export const StyledTitle = styled.div`
  padding: 12px;
  font-size: 0.8rem;
  line-height: 20px;
  max-height: 11px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`
export const StyledTitleAndButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-height: 35px;
  justify-content: space-between;
`

export const StyledIconContainer = styled.div`
  display: flex;
  max-height: 40px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 7px;
`
export const StyledPriceContainer = styled.div`
  display: flex;
  padding: 0 12px 0 12px;
`
