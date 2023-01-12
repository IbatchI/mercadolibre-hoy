import styled from 'styled-components'
import { deviceSize } from './Styles'

export const StyledCardContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  grid-auto-rows: auto;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  grid-gap: 1rem;
  @media ${deviceSize.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.7rem;
  }
  @media ${deviceSize.mobile} {
    grid-template-columns: repeat(1, 1fr);
    gap: 0.7rem;
  }
`

export const StyledSearchAndFilters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 20px 15px 20px;
  align-self: center;
  justify-self: center;
  margin: auto;
  @media ${deviceSize.tablet} {
    padding: 5px 10px 15px 10px;
  }
`

export const H1 = styled.h1`
  font-size: 24px;
  font-weight: 500;
  @media ${deviceSize.tablet} {
    font-size: 16px;
  }
`
export const H2 = styled.h2`
  font-size: 16px;
  font-weight: 500;
  @media ${deviceSize.tablet} {
    font-size: 13px;
  }
`
