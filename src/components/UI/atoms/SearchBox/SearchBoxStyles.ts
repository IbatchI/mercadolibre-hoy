import styled from "styled-components";
import { deviceSize, mainTheme } from "../../../../styles/Styles";
import { FaBeer } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';

export const StyledContainer = styled.div`
 position: relative;
 
`

export const StyledSearchInputt = styled.input`
 position: absolute;
    top: 0;
    left: 0;
    width: 100%;;
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
    padding: 10px;
    width: 42.5px;
    height: 42.5px;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
    color: #07051a;
    text-align: center;
    font-size: 1.2em;
    transition: all 1s;
    @media ${deviceSize.tablet} {
    width: 36px;
    height: 36px;
  }
`

export const StyledSearchInput = styled.form`
    position: relative;

    transition: all 0.5s;
    width: 50px;
    height: 50px;
    background: white;
    box-sizing: border-box;
    border-radius: 25px;
    border: 4px solid white;
    padding: 5px;
    &:hover, &:valid {
    width: 200px;
    cursor: pointer;
  }
    &:hover ${StyledSearchInputt},&:valid ${StyledSearchInputt} {
        display: block;
  }
  &:hover ${SearchIcon},&:valid ${SearchIcon} {
    background: #ffd301;
    color: black;
  }
  @media ${deviceSize.tablet} {
    width: 43px;
    height: 43px;
  }
`