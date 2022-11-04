import styled from 'styled-components'
import { Currency, TimeZone } from '../../../../types/types'

interface StyledPriceProps {
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
  display: flex;
  font-size: ${(props) => props.fontSize || '1.1rem'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  justify-content: flex-end;
  line-height: normal;
  padding: ${(props) => props.padding || '0'};
`
