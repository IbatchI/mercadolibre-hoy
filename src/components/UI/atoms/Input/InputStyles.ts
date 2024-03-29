import styled from 'styled-components'
import { mainTheme } from '../../../../styles/Styles'

interface IInputProps {
  error?: string
  height?: string
  icon?: React.ReactNode
  minWidth?: string
  padding?: string
  width?: string
}

export const StyledInput = styled.input<IInputProps>`
  width: 100%;
  border: none;
  &:focus {
    outline: none;
  }
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
    border: 0.3px solid
      ${(props) => (props.error ? mainTheme.colors.dangerColor : mainTheme.colors.borderColors)};
    box-sizing: border-box;
    font-size: 0.95rem;
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
  font-size: 0.95rem;
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
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const InputRightSpinner = styled.i`
  position: absolute;
  right: 10px;
  top: 15px;
  height: 25px;
  width: 25px;
  display: inline-block;
  animation: around 5.4s infinite;

  @keyframes around {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &::after,
  &::before {
    content: '';
    background: transparent;
    position: absolute;
    display: inline-block;
    width: 100%;
    height: 100%;
    border-width: 2px;
    border-color: ${mainTheme.colors.secondaryColor} ${mainTheme.colors.secondaryColor} transparent
      transparent;
    border-style: solid;
    border-radius: 20px;
    box-sizing: border-box;
    top: 0;
    left: 0;
    animation: around 0.7s ease-in-out infinite;
  }

  &::after {
    animation: around 0.7s ease-in-out 0.1s infinite;
    background: transparent;
  }
`
