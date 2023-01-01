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
  background-color: ${mainTheme.colors.formBackgroundColor};
  gap: 10px;
  padding: 10px;
  width: 40%;
  border-radius: 5px;
  margin: 40px auto;
  color: ${mainTheme.colors.primaryTextColor};
  border: 1px solid ${mainTheme.colors.borderColors};
  box-shadow: ${mainTheme.mainShadow};

  @media ${deviceSize.tablet} {
    width: 85%;
  }

  @media ${deviceSize.mobile} {
    width: 90%;
  }
`
