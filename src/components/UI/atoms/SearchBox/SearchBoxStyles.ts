import styled from 'styled-components'
import { deviceSize, mainTheme } from '../../../../styles/Styles'
import { AiOutlineSearch } from 'react-icons/ai'

export const StyledContainer = styled.div`
  position: relative;
`
export const StyledNavBarGhost = styled.div<{
  active: boolean
}>`
  background-color: ${mainTheme.colors.navBarBackgroundColor};
  height: 70px;
  position: absolute;
  left: 0;
  border-radius: 20px;
  z-index: 9999;
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  width: 14%;
  transition: all 0.5s;
  @media ${deviceSize.tablet} {
    height: 65px;
    &:hover {
      width: 100%;
    }
    width: ${(props) => (props.active ? '14%' : '100%')};
  }
`

export const StyledSearchInputt = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 42.5px;
  line-height: 30px;
  outline: 0;
  border: 0;
  display: none;
  font-size: 1em;
  border-radius: 20px;
  padding: 0 20px;
  @media ${deviceSize.tablet} {
    height: 36px;
  }
`
export const SearchIcon = styled(AiOutlineSearch)`
  box-sizing: border-box;
  cursor: pointer;
  padding: 10px;
  width: 42.5px;
  height: 42.5px;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50%;
  color: #07051a;
  text-align: center;
  pointer-events: none;
  font-size: 1.2em;
  transition: all 1s;
  @media ${deviceSize.tablet} {
    width: 36px;
    height: 36px;
  }
`

export const StyledSearchInput = styled.form`
  position: relative;
  -webkit-box-shadow: 0px 0px 8px -3px #000000;
  box-shadow: 0px 0px 8px -3px #000000;
  transition: all 0.5s;
  width: 50px;
  height: 50px;
  background: white;
  box-sizing: border-box;
  border-radius: 25px;
  border: 4px solid white;
  padding: 5px;
  width: 250px;

  &:hover ${StyledSearchInputt},&:valid ${StyledSearchInputt} {
    display: block;
  }
  &:hover,
  &:valid {
    -webkit-box-shadow: 0px 0px 8px -1px #000000;
    box-shadow: 0px 0px 8px -1px #000000;
    cursor: pointer;
  }
  &:hover ${SearchIcon},&:valid ${SearchIcon} {
    background: #ffd301;
    color: black;
  }
  &:valid ${SearchIcon} {
    background: #ffd301;
    color: black;
    pointer-events: all;
  }

  @media ${deviceSize.tablet} {
    width: 43px;
    height: 43px;
    &:hover,
    &:valid {
      width: 200px;
    }
  }
`
