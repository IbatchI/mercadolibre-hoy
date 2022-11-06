// import { IconType } from 'react-icons/lib'
import { StyledButtonMenu, StyledTextButtonMenu } from './ButtonMenuStyles'

interface ButtonMenuProps {
  children?: React.ReactNode
  Icon?: any
}
export const ButtonMenu = ({ children, Icon }: ButtonMenuProps) => {
  return (
    <StyledButtonMenu>
      <Icon size="30px" color="white" />
      <StyledTextButtonMenu>{children}</StyledTextButtonMenu>
    </StyledButtonMenu>
  )
}
