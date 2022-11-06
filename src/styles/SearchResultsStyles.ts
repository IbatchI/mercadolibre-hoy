import styled from 'styled-components'
import { deviceSize } from './Styles'

export const StyledCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media ${deviceSize.tablet} {
    gap: 0.4rem;
  }
`

export const StyledSearchAndFilters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 20px 35px 20px;
  align-self: center;
  justify-self: center;
  max-width: 880px;
  margin: auto;
  @media ${deviceSize.tablet} {
    padding: 5px 10px 15px 10px;
  }
`

export const StyledTextSeatch = styled.div`
  font-size: 24px;
  font-weight: 500;
  @media ${deviceSize.tablet} {
    font-size: 16px;
  }
`
export const StyledTextTotal = styled.div`
  font-size: 16px;
  font-weight: 500;
  @media ${deviceSize.tablet} {
    font-size: 13px;
  }
`
