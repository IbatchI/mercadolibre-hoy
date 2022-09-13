import styled from 'styled-components'
import { deviceSize } from '../../../../styles/Styles'

export const StyledCard = styled.div`
  width: 200px;
  height: 250px;
  display: flex;
  flex-direction: column;
  background-color: white;
  color: black;

  border-radius: 4px;
  -webkit-box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.47);
  @media ${deviceSize.tablet} {
    width: 170px;
    height: 230px;
  }
`

export const StyledCarrouselContainer = styled.div`
  width: 200px;
  height: 150px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  @media ${deviceSize.tablet} {
    width: 170px;
    height: 130px;
  }
`
export const StyledCardTextContainer = styled.div`
  padding: 5px;
  height: 130px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  -webkit-box-shadow: inset 0px 0px 15px -3px rgba(0, 0, 0, 0.28);
  box-shadow: inset 0px 0px 15px -3px rgba(0, 0, 0, 0.28);
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
  padding: 5px 5px 5px 5px;
`
export const StyledButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1px;
  align-items: center;
`

export const StyledPriceCard = styled.div`
  font-size: 1rem;
  padding: 5px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: normal;
  font-weight: 500;
  ::before {
    content: '$';
  }
`

export const ImageCardStyled = styled.img`
  height: 150px;
  object-fit: cover;
  @media ${deviceSize.tablet} {
    height: 130px;
  }
`
