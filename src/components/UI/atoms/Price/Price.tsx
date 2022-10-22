import { formatPrice } from '../../../../../utils/utilsFunctions'
import { Currency, TimeZone } from '../../../../types/types'
import { StyledPrice } from './PriceStyles'

interface PriceProps {
  children: number
  currency?: Currency
  fontWeight?: string
  timeZone?: TimeZone
}

export const Price = ({ children, currency, fontWeight, timeZone }: PriceProps) => {
  const formatedPrice = formatPrice(children, currency, timeZone)

  return <StyledPrice fontWeight={fontWeight}>{formatedPrice}</StyledPrice>
}
