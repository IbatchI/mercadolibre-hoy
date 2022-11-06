import { Carousel } from 'react-responsive-carousel'
import {
  ButtonCopy,
  CardStyled,
  ImageCardStyled,
  StyledCarrouselContainer,
  StyledContainerButton,
  StyledPriceContainer,
  StyledTitle,
  VerticalLine,
} from './NewProductCardStyles'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Price } from '../../atoms/Price/Price'
import { BiLinkExternal } from 'react-icons/bi'
import { HiOutlineClipboardCopy } from 'react-icons/hi'

interface ProductCardProps {
  link: string
  pictures: string[]
  price: number
  title: string
}

export const NewProductCard = ({ title, price, pictures, link }: ProductCardProps) => {
  const goToPage = () => {
    window.open(link, '_blank')
  }

  return (
    <CardStyled>
      <StyledCarrouselContainer>
        <Carousel
          emulateTouch={false}
          showArrows
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          swipeable={false}
        >
          {pictures.map((picture, index) => (
            <div key={index}>
              <ImageCardStyled src={picture} />
            </div>
          ))}
        </Carousel>
      </StyledCarrouselContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledPriceContainer>
        <Price color="rgb(53 225 230)" fontWeight="500">
          {price}
        </Price>
      </StyledPriceContainer>
      <StyledContainerButton>
        <ButtonCopy
          onClick={() => {
            navigator.clipboard.writeText(link)
          }}
        >
          <HiOutlineClipboardCopy size="14px" />
          Copiar
        </ButtonCopy>
        <VerticalLine></VerticalLine>
        <ButtonCopy onClick={() => goToPage()}>
          Visitar
          <BiLinkExternal size="14px" />
        </ButtonCopy>
      </StyledContainerButton>
    </CardStyled>
  )
}
