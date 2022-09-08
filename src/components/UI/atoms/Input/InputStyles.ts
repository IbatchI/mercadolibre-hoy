import styled from "styled-components";
import { deviceSize, mainTheme } from "../../../../styles/Styles";

export const StyledInput = styled.input`
min-width: 300px;
height: 30px;
border:0;
opacity: 0.5;
font-size: 100%;
border-radius: 5px;
display: flex;
&:focus {
        outline: none;
        box-shadow: 0px 0px 2px red;
    }
`