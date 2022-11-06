import styled from 'styled-components'
import { deviceSize } from '../../../../styles/Styles'

export const StyledButtonMenu = styled.button`
  height: 100%;
  background-color: red;
  width: 5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  gap: 0.1rem;
  flex-direction: column;
  color: white;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.2rem;
  @media ${deviceSize.tablet} {
    font-size: 0.6rem;
  }
`
export const StyledTextButtonMenu = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
`
