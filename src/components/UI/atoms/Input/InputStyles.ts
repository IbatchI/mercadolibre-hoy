import styled from 'styled-components'
import { mainTheme } from '../../../../styles/Styles'

interface IInputProps {
  height?: string
  icon?: React.ReactNode
  minWidth?: string
  padding?: string
  width?: string
}

const getStylesFromInput = (
  hasIconInRight: boolean,
  height?: string,
  minWidth?: string,
  padding?: string,
  width?: string
): string => {
  if (!hasIconInRight) {
    return `
    background-color: ${mainTheme.colors.inputBackgroundColor};
    border-radius: 5px;
    border: 0.3px solid ${mainTheme.colors.borderColors};
    box-sizing: border-box;
    color: ${mainTheme.colors.primaryTextColor};
    display: flex;
    font-size: 100%;
    height: ${height || '30px'};
    min-width: ${minWidth || 0};
    padding: ${padding || '0 10px'};
    width: ${width || '100%'};
    &:focus {
      outline: none;
      box-shadow: 0px 0px 2px ${mainTheme.colors.secondaryColor};
      background-color: ${mainTheme.colors.primaryColor};
      color: ${mainTheme.colors.primaryTextColor};
    }`
  } else {
    return `
      width: 100%;
      border: none;
      &:focus {
        outline: none;
      }
      `
  }
}

export const StyledInput = styled.input<IInputProps>`
  ${(props) =>
    getStylesFromInput(
      props?.icon !== undefined,
      props.height,
      props.minWidth,
      props.padding,
      props.width
    )}
`

export const StyledInputContainer = styled.div<IInputProps>`
  align-items: center;
  display: block;
  height: ${(props) => props.height || '30px'};
  min-width: ${(props) => props.minWidth || 0};
  padding: 0;
  position: relative;
  margin: 0;
  width: ${(props) => props.width || '100%'};

  & input {
    color: ${mainTheme.colors.primaryTextColor};
    background-color: ${mainTheme.colors.inputBackgroundColor};
    border-radius: 5px;
    border: 0.3px solid ${mainTheme.colors.borderColors};
    box-sizing: border-box;
    font-size: 100%;
    height: 100%;
    padding: ${(props) => props.padding || '0 10px'};
    position: relative;

    &:focus {
      box-shadow: 0px 0px 2px ${mainTheme.colors.secondaryColor};
      background-color: ${mainTheme.colors.primaryColor};
      color: ${mainTheme.colors.primaryTextColor};
    }
  }

  &:focus {
    box-shadow: 0px 0px 2px ${mainTheme.colors.secondaryColor};
    background-color: ${mainTheme.colors.primaryColor};
    color: ${mainTheme.colors.primaryTextColor};
  }
`

export const InputButtonIcon = styled.button`
  -webkit-box-align: center;
  align-items: center;
  background-color: transparent;
  border: none;
  bottom: 0px;
  color: ${mainTheme.colors.primaryTextColor};
  display: flex;
  font-size: 1.2rem;
  padding: 0;
  position: absolute;
  right: 10px;
  top: 0px;

  & svg {
    display: flex;
    align-items: center;
    color: ${mainTheme.colors.primaryTextColor};

    &:hover {
      color: ${mainTheme.colors.secondaryColor};
      cursor: pointer;
    }

    &:disabled {
      color: ${mainTheme.colors.disabledColor};
    }
  }
`
