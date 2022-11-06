import { formatPrice } from '../../../../../utils/utilsFunctions'
import { Currency, TimeZone } from '../../../../types/types'
import { StyledPrice, StyledPriceProps } from './PriceStyles'

interface PriceProps extends StyledPriceProps {
  children: number
  currency?: Currency
  fontWeight?: string
  timeZone?: TimeZone
}

export const Price = ({ children, currency, fontWeight, timeZone, ...props }: PriceProps) => {
  const formatedPrice = formatPrice(children, currency, timeZone)

  return (
    <StyledPrice fontWeight={fontWeight} {...props}>
      {formatedPrice}
    </StyledPrice>
  )
}
