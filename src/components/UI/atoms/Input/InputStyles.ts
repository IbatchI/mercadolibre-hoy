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
    border-radius: 5px;
    border: 0.3px solid ${mainTheme.colors.primaryColor};
    box-sizing: border-box;
    display: flex;
    font-size: 100%;
    font-weight: bold;
    height: ${height || '30px'};
    min-width: ${minWidth || 0};
    padding: ${padding || '0 10px'};
    width: ${width || '100%'};
    &:focus {
      outline: none;
      box-shadow: 0px 0px 2px ${mainTheme.colors.primaryColor};
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
  background-color: #fff;
  display: block;
  height: ${(props) => props.height || '30px'};
  min-width: ${(props) => props.minWidth || 0};
  padding: 0;
  position: relative;
  margin: 0;
  width: ${(props) => props.width || '100%'};

  & input {
    position: relative;
    font-size: 100%;
    font-weight: bold;
    height: 100%;
    box-sizing: border-box;
    border-radius: 5px;
    border: 0.3px solid ${mainTheme.colors.primaryColor};
    padding: ${(props) => props.padding || '0 10px'};

    &:focus {
      outline: none;
      box-shadow: 0px 0px 2px ${mainTheme.colors.primaryColor};
    }
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px ${mainTheme.colors.primaryColor};
  }
`

export const InputButtonIcon = styled.button`
  -webkit-box-align: center;
  align-items: center;
  background-color: transparent;
  border: none;
  bottom: 0px;
  color: ${mainTheme.colors.primaryColor};
  display: flex;
  font-size: 1.2rem;
  padding: 0;
  position: absolute;
  right: 10px;
  top: 0px;

  & svg {
    display: flex;
    align-items: center;
    color: ${mainTheme.colors.primaryColor};

    &:hover {
      color: ${mainTheme.colors.secondaryColor};
      cursor: pointer;
    }

    &:disabled {
      color: ${mainTheme.colors.disabledColor};
    }
  }
`
