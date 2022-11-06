import styled from 'styled-components'
import { deviceSize } from '../../../../styles/Styles'
import { Currency, TimeZone } from '../../../../types/types'

export interface StyledPriceProps {
  fontSize?: string
  fontWeight?: string
  color?: string
  margin?: string
  padding?: string
  children: React.ReactNode
  currency?: Currency
  TimeZone?: TimeZone
}

export const StyledPrice = styled.span<StyledPriceProps>`
  color: ${(props) => props.color || 'white'};
  font-size: ${(props) => props.fontSize || '1.1rem'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  line-height: normal;
  padding: ${(props) => props.padding || '0'};
  @media ${deviceSize.tablet} {
    font-size: 0.8rem;
  }
`
