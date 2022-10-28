import styled from 'styled-components'
import { deviceSize } from '../../../../styles/Styles'

interface CardProps {
  backgroundColor?: string
  children: React.ReactNode
  height?: string
  heightTablet?: string
  heightMobile?: string
  width?: string
  widthTablet?: string
  widthMobile?: string
}

export const Card = styled.div<CardProps>`
  background-color: ${(props) => props.backgroundColor || '#FFF'};
  border-radius: 5px;
  box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.47);
  color: black;
  display: flex;
  flex-direction: column;
  height: ${(props) => props.height || 'auto'};
  width: ${(props) => props.width || 'auto'};

  -webkit-box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.47);
  @media ${deviceSize.tablet} {
    box-shadow: 0px 0px 10px -5px #000000;
    height: ${(props) => props.heightTablet || 'auto'};
    width: ${(props) => props.widthTablet || 'auto'};
    -webkit-box-shadow: 0px 0px 10px -5px #000000;
  }

  @media ${deviceSize.mobile} {
    box-shadow: 0px 0px 10px -5px #000000;
    height: ${(props) => props.heightMobile || 'auto'};
    width: ${(props) => props.widthMobile || 'auto'};
  }
`
