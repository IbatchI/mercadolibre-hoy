import styled from 'styled-components'
import { deviceSize, mainTheme } from '../../../../styles/Styles'

export const CardStyled = styled.div`
  display: flex;
  height: 18rem;
  flex-direction: column;
  width: 13rem;
  border-radius: 1rem;
  background: rgb(37, 67, 113);
  background: linear-gradient(180deg, rgba(37, 67, 113, 1) 0%, rgba(21, 37, 62, 1) 86%);
  box-shadow: 0px 2px 14px -1px rgba(0, 0, 0, 0.79);
  -webkit-box-shadow: 0px 2px 14px -1px rgba(0, 0, 0, 0.79);
  -moz-box-shadow: 0px 2px 14px -1px rgba(0, 0, 0, 0.79);
  @media ${deviceSize.tablet} {
    height: 15rem;
    width: 9rem;
    box-shadow: 1px 2px 14px -6px rgba(0, 0, 0, 0.95);
    -webkit-box-shadow: 1px 2px 14px -6px rgba(0, 0, 0, 0.95);
    -moz-box-shadow: 1px 2px 14px -6px rgba(0, 0, 0, 0.95);
  }
`
export const StyledCarrouselContainer = styled.div`
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  height: auto;
  width: 12.4rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.3rem;
  border-radius: 10px;
  @media ${deviceSize.tablet} {
    height: 8.1rem;
    margin-top: 0.2rem;
    width: 8.6rem;
  }
`
export const ImageCardStyled = styled.img`
  height: 9rem;
  object-fit: cover;
  border-radius: 0.3rem;
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
  @media ${deviceSize.tablet} {
    height: 7.7rem;
  }
`

export const StyledTitle = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  color: white;
  font-weight: 400;
  font-size: 0.8rem;
  height: 2.1rem;
  line-height: 1.2em;
  padding: 0.5rem 0.5rem 0 0.5rem;
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  @media ${deviceSize.tablet} {
    padding: 0 0.5rem 0 0.5rem;
    font-size: 0.7rem;
    height: 1.7rem;
  }
`
export const StyledPriceContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  @media ${deviceSize.tablet} {
    margin-top: 0.9rem;
  }
`

export const StyledContainerButton = styled.div`
  background-color: ${mainTheme.colors.primaryColor};
  width: 100%;
  height: 2.2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: auto;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`

export const ButtonCopy = styled.button`
  border: none;
  display: flex;
  gap: 4px;
  color: white;
  font-weight: 500;
  font-size: 0.9rem;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  @media ${deviceSize.tablet} {
    font-size: 0.7rem;
  }
`
export const VerticalLine = styled.div`
  height: 1.1rem;
  width: 1px;
  background: white;
`
