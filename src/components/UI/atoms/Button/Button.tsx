import React from 'react'
import { mainTheme } from '../../../../styles/Styles'
import { StyledButton } from './ButtonStyles'
mainTheme.colors.navBarBackgroundColor
interface ButtonProps {
  children: JSX.Element | string
  BackgroundColor?: string
  TextColor?: string
  active?: boolean
  padding?: string
  onClick?: () => void
}
export const Button: React.FC<ButtonProps> = ({
  children,
  BackgroundColor = mainTheme.colors.navBarBackgroundColor,
  TextColor = '#ffffff',
  active = false,
  padding = '',
  onClick,
}) => {
  return (
    <StyledButton
      active={active}
      BackgroundColor={BackgroundColor}
      TextColor={TextColor}
      onClick={onClick}
      paddingStyled={padding}
    >
      {children}
    </StyledButton>
  )
}
