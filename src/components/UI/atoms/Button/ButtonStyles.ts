import styled from 'styled-components'
import { deviceSize, mainTheme } from '../../../../styles/Styles'
import { ButtonProps } from './Button'

export const StyledButton = styled.button<ButtonProps>`
  -webkit-user-select: none;
  align-items: center;
  background-clip: padding-box;
  background-color: ${(props) => props.backgroundColor ?? mainTheme.colors.secondaryColor};
  ${(props) => props.active && `background-color: ${mainTheme.colors.formBackgroundColor};`}
  border: ${(props) => (props.active ? '1px solid ' + mainTheme.colors.secondaryColor : 'none')};
  border-radius: ${mainTheme.mainBorderRadius};
  color: ${(props) => props.textColor ?? mainTheme.colors.primaryTextColor};
  ${(props) => props.active && `color: ${mainTheme.colors.secondaryColor};`}
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  font-size: ${mainTheme.fontSizes.small};
  font-weight: ${(props) => props.fontWeight ?? mainTheme.fontWeights.normal};
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  padding: ${(props) => props.padding || 'calc(0.875rem - 1px) calc(1.1rem - 1px)'};
  position: relative;
  text-decoration: none;
  touch-action: manipulation;
  transition: all 250ms;
  user-select: none;
  width: ${(props) => props.width || 'auto'};

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor ?? mainTheme.colors.secondaryColor};
    // if is active
    ${(props) => props.active && `color: ${mainTheme.colors.formBackgroundColor};`}
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:disabled {
    background-color: ${mainTheme.colors.disabledColor};
    cursor: not-allowed;
  }

  @media ${deviceSize.mobile} {
    font-size: ${mainTheme.fontSizes.xSmall};
    padding: ${(props) => (props.isPagination ? `0.4rem 0.8rem` : ``)};
  }
`
