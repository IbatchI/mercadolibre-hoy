import styled from "styled-components";
import { deviceSize, mainTheme } from "../../../../styles/Styles";

export const StyledNavBarContainer = styled.div`
background-color: ${mainTheme.colors.navBarBackgroundColor};
height: 70px;
display: flex;
align-items: center;
padding: 10px;
justify-content: space-between;
width: auto;
@media ${deviceSize.tablet} {
    height: 50px;
}
`

export const StyledMainLogo = styled.img`
height: 30px;
width: 120px;

`
