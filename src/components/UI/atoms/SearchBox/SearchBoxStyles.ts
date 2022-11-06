import styled from 'styled-components'
import { deviceSize, mainTheme } from '../../../../styles/Styles'
import { AiOutlineSearch } from 'react-icons/ai'

export const StyledContainer = styled.div`
  position: relative;
`
export const StyledNavBarGhost = styled.div<{
  active: boolean
}>`
  align-items: center;
  background-color: ${mainTheme.colors.primaryColor};
  border-radius: 20px;
  display: flex;
  height: 70px;
  justify-content: center;
  left: 0;
  left: 50%;
  padding: 10px;
  position: absolute;
  position: absolute;
  transform: translate(-50%, 0);
  transition: all 0.5s;
  width: 14%;
  z-index: 30;
  @media ${deviceSize.tablet} {
    height: 50px;
    &:hover {
      width: 100%;
    }
    width: ${(props) => (props.active ? '14%' : '100%')};
  }
`

export const InputSearchBox = styled.input`
  border-radius: 20px;
  border: 0;
  display: none;
  font-size: 1em;
  height: 42.5px;
  left: 0;
  line-height: 30px;
  outline: 0;
  padding: 0 20px;
  position: absolute;
  top: 0;
  width: 100%;
  @media ${deviceSize.tablet} {
    height: 36px;
  }
`

// Esto deberia ser un button para que ya tenga el evento submit asociado
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SearchIcon = styled(AiOutlineSearch)<{ onClick?: any }>`
  border-radius: 50%;
  box-sizing: border-box;
  color: #07051a;
  cursor: pointer;
  font-size: 1.2em;
  height: 42.5px;
  padding: 10px;
  pointer-events: none;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  transition: all 1s;
  width: 42.5px;
  @media ${deviceSize.tablet} {
    width: 36px;
    height: 36px;
  }
`

export const FormSearchBox = styled.form`
  background: white;
  border-radius: 25px;
  border: 4px solid white;
  box-shadow: 0px 0px 8px -3px #000000;
  box-sizing: border-box;
  height: 50px;
  padding: 5px;
  position: relative;
  transition: all 0.5s;
  width: 250px;
  -webkit-box-shadow: 0px 0px 8px -3px #000000;

  &:hover ${InputSearchBox},&:valid ${InputSearchBox} {
    display: block;
  }
  &:hover,
  &:valid {
    -webkit-box-shadow: 0px 0px 8px -1px #000000;
    box-shadow: 0px 0px 8px -1px #000000;
    cursor: pointer;
  }
  &:hover ${SearchIcon},&:valid ${SearchIcon} {
    background: ${mainTheme.colors.primaryColor};
    color: black;
  }
  &:valid ${SearchIcon} {
    background: ${mainTheme.colors.primaryColor};
    color: black;
    pointer-events: all;
  }

  @media ${deviceSize.tablet} {
    height: 43px;
    width: 43px;
    &:hover,
    &:valid {
      width: 200px;
    }
  }
`
