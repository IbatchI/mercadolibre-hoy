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
  padding: 0px 10px 0px 10px;
  align-self: center;
  justify-self: center;
  margin: auto;
  @media ${deviceSize.tablet} {
    padding: 5px 10px 0px 10px;
  }
`

export const H1 = styled.h1`
  font-size: 24px;
  margin: 0;
  font-weight: 500;
  @media ${deviceSize.tablet} {
    font-size: 16px;
  }
`
export const H3 = styled.h1`
  font-size: 24px;
  margin: 0;
  margin-bottom: 18px;
  font-weight: 500;
  @media ${deviceSize.tablet} {
    font-size: 16px;
    margin-bottom: 14px;
  }
`
export const H2 = styled.h2`
  font-size: 16px;
  padding: 0;
  font-weight: 500;
  @media ${deviceSize.tablet} {
    font-size: 13px;
  }
`

export const StyledResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

export const StyledSaveSearchs = styled.div`
  display: flex;
  padding: 0px 15px 15px 15px;
  flex-direction: column;
  gap: 5px;
`
