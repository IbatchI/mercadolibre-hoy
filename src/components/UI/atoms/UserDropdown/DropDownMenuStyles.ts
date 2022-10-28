import { mainTheme } from '../../../../styles/Styles'
import styled from 'styled-components'

interface IListOfDropsItmesProps {
  isOpen: boolean
}

export const DropDownMenuContainer = styled.div`
  position: relative;
`
export const ListOfDropsItmes = styled.ul<IListOfDropsItmesProps>`
  background-color: #fff;
  border-radius: ${mainTheme.mainBorderRadius};
  border: 1px solid #ddd;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  max-height: ${(props) => (props.isOpen ? '300px' : '0')};
  overflow: hidden;
  padding: 4px;
  position: absolute;
  position: absolute;
  right: 15px;
  transition: all 0.5s;
  width: 150px;
`
