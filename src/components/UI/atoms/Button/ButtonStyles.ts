import styled from 'styled-components'
import { mainTheme } from '../../../../styles/Styles'

interface ButtonProps {
  backgroundColor?: string
  fontWeight?: string
  hoverBackgroundColor?: string
  padding?: string
  textColor?: string
  width?: string
}

export const Button = styled.button<ButtonProps>`
  -webkit-user-select: none;
  align-items: center;
  background-clip: padding-box;
  background-color: ${(props) => props.backgroundColor ?? mainTheme.colors.primaryColor};
  border-radius: 5px;
  border: 1px solid transparent;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  font-weight: ${(props) => props.fontWeight ?? mainTheme.fontWeights.normal};
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  padding: ${(props) => props.padding || 'calc(0.875rem - 1px) calc(1.5rem - 1px)'};
  position: relative;
  text-decoration: none;
  touch-action: manipulation;
  transition: all 250ms;
  user-select: none;
  width: ${(props) => props.width || 'auto'};

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor ?? mainTheme.colors.secondaryColor};
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:disabled {
    background-color: ${mainTheme.colors.disabledColor};
    cursor: not-allowed;
  }
`
