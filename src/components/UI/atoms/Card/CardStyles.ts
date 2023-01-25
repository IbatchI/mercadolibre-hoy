import styled from 'styled-components'
import { mainTheme } from '../../../../styles/Styles'
import { ICardProps } from './Card'

export const CardStyled = styled.li<ICardProps>`
  background-color: ${(props) => props.backgroundColor || mainTheme.colors.defaultBackgroundColor};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  padding: ${(props) => props.padding || mainTheme.padding.medium};
  margin: ${(props) => props.margin || '0'};
  border-radius: ${(props) => props.borderRadius || mainTheme.mainBorderRadius};
  box-shadow: ${(props) => props.boxShadow || mainTheme.mainShadow};
  display: flex;
`
