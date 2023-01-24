import { Spinner } from '../Spinner/SpinnerStyles'
import { StyledButton } from './ButtonStyles'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string
  active?: boolean
  fontWeight?: string
  hoverBackgroundColor?: string
  padding?: string
  textColor?: string
  width?: string
  loading?: boolean
}

export const Button = ({ loading, disabled, children, ...props }: ButtonProps) => {
  return (
    <StyledButton disabled={loading || disabled} {...props}>
      {loading ? <Spinner /> : children}
    </StyledButton>
  )
}
