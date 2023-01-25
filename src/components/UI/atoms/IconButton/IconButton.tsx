import { StyledIconButton } from './IconButtonStyles'

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: JSX.Element
  color?: string
  loading?: boolean
  // Esto es porque si no tira error de que no se puede pasar un booleano a un string
  loadingStyles?: number
  onclick?: () => void
}

export const IconButton = ({ icon, color, loading, disabled, ...rest }: IconButtonProps) => {
  return (
    <StyledIconButton
      {...rest}
      color={color}
      disabled={loading || disabled}
      icon={icon}
      loadingStyles={loading ? 1 : 0}
    >
      {icon}
    </StyledIconButton>
  )
}
