import styled from 'styled-components'

export const Input = styled.input`
  border-radius: 5px;
  border: 0;
  display: flex;
  font-size: 100%;
  height: 30px;
  min-width: 300px;
  opacity: 0.5;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
`
