import styled from 'styled-components'
import { deviceSize, mainTheme } from '../../../../styles/Styles'

interface IInputProps {
  width?: string
  height?: string
  minWidth?: string
}
export const Form = styled.form<IInputProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  /* height: ${({ height }) => height || '100%'}; */
  /* min-width: ${({ minWidth }) => minWidth || ''}; */
  padding: 10px;
  width: 40%;
  border-radius: 5px;
  margin: 40px auto;
  border: 1px solid #e0e0e0;
  box-shadow: ${mainTheme.mainShadow};

  @media ${deviceSize.tablet} {
    width: 85%;
  }

  @media ${deviceSize.mobile} {
    width: 90%;
  }
`
