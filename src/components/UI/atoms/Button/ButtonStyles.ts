import styled from 'styled-components'

interface ButtonProps {
  active?: boolean
  backgroundColor?: string
  padding?: string
  textColor?: string
}

export const Button = styled.button<ButtonProps>`
  -webkit-user-select: none;
  align-items: center;
  background-clip: padding-box;
  background-color: ${(props) => (props.active ? '#cdaa03' : '#ffd301')};
  border-radius: 0.25rem;
  border: 1px solid transparent;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  font-weight: 500;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  padding: ${(props) => props.padding || 'calc(0.875rem - 1px) calc(1.5rem - 1px)'};
  position: relative;
  text-decoration: none;
  touch-action: manipulation;
  transition: all 250ms;
  user-select: none;

  &:hover {
    background-color: #f9e275;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &:hover {
    transform: translateY(-1px);
  }
`
