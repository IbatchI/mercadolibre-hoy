import styled from 'styled-components'
import { mainTheme } from '../../../../styles/Styles'

interface ButtonProps {
  backgroundColor?: string
  fontSize?: string
  fontWeight?: string
  hoverBackgroundColor?: string
  textColor?: string
}

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => props.backgroundColor || mainTheme.colors.buttonBackgroundColor};
  border-radius: ${mainTheme.mainBorderRadius};
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  margin: 3px 2px;
  padding: ${mainTheme.padding.smallXY};
  width: 110px;
  color: ${(props) => props.textColor || mainTheme.colors.buttonTextColor};
  font-weight: ${(props) => props.fontWeight || mainTheme.fontWeights.bold};
  font-size: ${(props) => props.fontSize || mainTheme.fontSizes.small};

  &:hover {
    background-color: ${(props) =>
      props.hoverBackgroundColor || mainTheme.colors.buttonHoverBackgroundColor};
    transition: all 0.8 ease-in-out;
  }
`
