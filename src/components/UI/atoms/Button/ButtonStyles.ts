import styled from 'styled-components'

export const StyledButton = styled.button<{
  BackgroundColor: string
  TextColor: string
  active: boolean
  paddingStyled: string
}>`
  align-items: center;
  background-clip: padding-box;

  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  background-color: ${(props) => (props.active ? '#cdaa03' : props.BackgroundColor)};
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  font-weight: 500;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  padding: ${(props) =>
    props.paddingStyled || 'calc(0.875rem - 1px) calc(1.5rem - 1px)' || props.paddingStyled};
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    background-color: #f9e275;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &:hover {
    transform: translateY(-1px);
  }
`
