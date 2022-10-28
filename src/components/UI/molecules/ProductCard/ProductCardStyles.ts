import styled from 'styled-components'
import { deviceSize } from '../../../../styles/Styles'

export const StyledCarrouselContainer = styled.div`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  height: 150px;
  width: 200px;

  @media ${deviceSize.tablet} {
    width: 170px;
    height: 130px;
  }
`
export const StyledCardTextContainer = styled.div`
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: inset 0px 0px 15px -3px rgba(0, 0, 0, 0.28);
  height: 130px;
  padding: 5px;

  -webkit-box-shadow: inset 0px 0px 15px -3px rgba(0, 0, 0, 0.28);
`

export const StyledTitleCard = styled.div`
  font-size: 0.8rem;
  padding: 5px;
  height: 40px;
  color: gray;
  text-align: center;
  line-height: normal;
  font-weight: 500;
  line-height: 1.3em;
  overflow: hidden;
`

export const StyledButtonsAndPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`
export const StyledButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1px;
  align-items: center;
`

export const ImageCardStyled = styled.img`
  height: 150px;
  object-fit: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  @media ${deviceSize.tablet} {
    height: 130px;
  }
`
