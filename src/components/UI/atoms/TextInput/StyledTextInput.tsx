import styled from 'styled-components'
import { mainTheme } from '../../../../styles/Styles'

interface TextInputTypes {
  backgroundColor?: string
  borderColor?: string
  fontSize?: string
  fontWeight?: string
  hoverBackgroundColor?: string
  textColor?: string
}

export const Input = styled.input<TextInputTypes>`
  background-color: ${(props) => props.backgroundColor || mainTheme.colors.bgInputColor};
  border: none;
  border-radius: ${mainTheme.mainBorderRadius};
  color: ${(props) => props.textColor || mainTheme.colors.textColor};
  font-weight: ${(props) => props.fontWeight || mainTheme.fontWeights.bold};
  font-size: ${(props) => props.fontSize || mainTheme.fontSizes.small};
  padding: ${mainTheme.padding.smallXY};

  $:hover {
    background-color: red;
    outline: none;
    transition: border 0.3s ease-in-out;
  }
`
