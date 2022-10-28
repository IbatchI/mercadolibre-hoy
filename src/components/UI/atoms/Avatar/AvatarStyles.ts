import styled from 'styled-components'
import { mainTheme } from '../../../../styles/Styles'

interface ButtonProps {
  heigth?: string
  width?: string
}

export const StyledAvatar = styled.img<ButtonProps>`
  border-radius: 50%;
  height: ${(props) => props.heigth || '50px'};
  vertical-align: middle;
  width: ${(props) => props.width || '50px'};

  &:hover {
    cursor: pointer;
    box-shadow: ${mainTheme.mainShadow};
  }
`
