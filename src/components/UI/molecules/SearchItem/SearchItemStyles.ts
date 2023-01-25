import styled from 'styled-components'
import { deviceSize, mainTheme } from '../../../../styles/Styles'

export const SearchItemStyled = styled.li`
  color: ${mainTheme.colors.primaryTextColor};
  background-color: ${mainTheme.colors.formBackgroundColor};
  list-style-type: none;
  font-size: ${mainTheme.fontSizes.small};
  border: 1px solid ${mainTheme.colors.borderColors};
  border-radius: 3px;
  padding-right: 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background-color: ${mainTheme.colors.inputBackgroundColor};
    font-weight: bold;
  }
`

export const ListOfActionButtonsContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: end;
  align-items: center;
  gap: 10px;
`
export const StyledTextButton = styled.div`
  display: flex;
  height: 100%;
  justify-content: start;
  width: 100%;
  height: 100%;
  padding: 0.7rem 0.7rem 0.7rem 1rem;
  margin: 3px 0;
  cursor: pointer;
  @media ${deviceSize.tablet} {
    padding: 0.7rem 0.7rem 0.7rem 1rem;
  }
`
