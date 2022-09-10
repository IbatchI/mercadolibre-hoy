import React from 'react'
import { mainTheme } from '../../../../styles/Styles'
import { StyledButton } from './ButtonStyles'
mainTheme.colors.navBarBackgroundColor
interface ButtonProps {
  children: string
  BackgroundColor?: string
  TextColor?: string
  active?: boolean
  onClick?: () => void
}
export const Button: React.FC<ButtonProps> = ({
  children,
  BackgroundColor = mainTheme.colors.navBarBackgroundColor,
  TextColor = '#ffffff',
  active = false,
  onClick,
}) => {
  return (
    <StyledButton
      active={active}
      BackgroundColor={BackgroundColor}
      TextColor={TextColor}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  )
}
