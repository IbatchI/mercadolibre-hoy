import styled from 'styled-components'
import { deviceSize, mainTheme } from '../../../../styles/Styles'

export const SearchItemStyled = styled.li`
  color: ${mainTheme.colors.primaryTextColor};
  background-color: ${mainTheme.colors.formBackgroundColor};
  list-style-type: none;
  padding: 0.5rem;
  margin: 3px 0;
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
    padding: 0.35rem;
  }
`

export const ListOfActionButtonsContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
`
