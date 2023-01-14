import { StyledIconButton } from './IconButtonStyles'

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: JSX.Element
  color?: string
  onclick?: () => void
}

export const IconButton = ({ icon, color, ...rest }: IconButtonProps) => {
  return (
    <StyledIconButton {...rest} color={color}>
      {icon}
    </StyledIconButton>
  )
}
