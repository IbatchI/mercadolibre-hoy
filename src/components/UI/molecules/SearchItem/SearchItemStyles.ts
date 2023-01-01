import styled from 'styled-components'
import { deviceSize, mainTheme } from '../../../../styles/Styles'

export const SearchItemStyled = styled.li`
  color: ${mainTheme.colors.primaryTextColor};
  background-color: ${mainTheme.colors.formBackgroundColor};
  list-style-type: none;
  padding: ${mainTheme.padding.medium};
  margin: 3px 20px;
  font-size: ${mainTheme.fontSizes.small};
  border: 1px solid ${mainTheme.colors.borderColors};
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background-color: ${mainTheme.colors.inputBackgroundColor};
    font-weight: bold;
  }

  @media ${deviceSize.tablet} {
    padding: ${mainTheme.padding.small};
    margin: 3px 0px;
  }
`

export const ListOfActionButtonsContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
`
