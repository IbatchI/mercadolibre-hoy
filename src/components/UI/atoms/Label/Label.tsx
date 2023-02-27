import { LabelHTMLAttributes } from 'react'
import { StyledLabel } from './LabelStyles'

export interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string
}

export const Label = ({ htmlFor, ...rest }: ILabelProps) => {
  const { children } = rest
  return (
    <StyledLabel htmlFor={htmlFor} {...rest}>
      {children}
    </StyledLabel>
  )
}
