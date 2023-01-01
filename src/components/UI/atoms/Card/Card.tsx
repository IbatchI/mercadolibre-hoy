import { CardStyled } from './CardStyles'

export interface ICardProps {
  backgroundColor?: string
  borderRadius?: string
  boxShadow?: string
  children: React.ReactNode
  height?: string
  margin?: string
  padding?: string
  width?: string
}

export const Card = ({ children }: ICardProps) => {
  return <CardStyled>{children}</CardStyled>
}
