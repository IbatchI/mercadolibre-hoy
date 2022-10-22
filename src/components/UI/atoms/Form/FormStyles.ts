import styled from 'styled-components'
import { mainTheme } from '../../../../styles/Styles'

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
  height: ${({ height }) => height || '100%'};
  min-width: ${({ minWidth }) => minWidth || ''};
  padding: 10px;
  width: ${({ width }) => width || '100%'};
  border-radius: 5px;
  margin: 40px auto;
  border: 1px solid #e0e0e0;
  box-shadow: ${mainTheme.mainShadow};
`
