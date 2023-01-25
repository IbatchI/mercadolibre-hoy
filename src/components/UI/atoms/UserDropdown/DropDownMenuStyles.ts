import { mainTheme } from '../../../../styles/Styles'
import styled from 'styled-components'

interface IListOfDropsItmesProps {
  isOpen: boolean
}

export const DropDownMenuContainer = styled.div`
  position: relative;
`
export const ListOfDropsItmes = styled.ul<IListOfDropsItmesProps>`
  background-color: ${mainTheme.colors.formBackgroundColor};
  border-radius: ${mainTheme.mainBorderRadius};
  color: ${mainTheme.colors.primaryTextColor};
  border: 1px solid ${mainTheme.colors.borderColors};
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  max-height: ${(props) => (props.isOpen ? '300px' : '0')};
  overflow: hidden;
  padding: 4px 10px;
  position: absolute;
  right: 10px;
  transition: all 0.5s;
  width: 150px;
`
