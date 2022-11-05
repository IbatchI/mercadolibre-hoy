import { Carousel } from 'react-responsive-carousel'
import {
  ButtonCopy,
  CardStyled,
  ImageCardStyled,
  StyledCarrouselContainer,
  StyledContainerButton,
  StyledContainerTitleAndPrice,
  StyledLine,
  StyledPriceAndLine,
  StyledTitle,
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
      <StyledContainerButton>
        <ButtonCopy
          onClick={() => {
            navigator.clipboard.writeText(link)
          }}
        >
          <HiOutlineClipboardCopy size="16px" />
          Copiar
        </ButtonCopy>
        <ButtonCopy onClick={() => goToPage()}>
          Visitar
          <BiLinkExternal size="16px" />
        </ButtonCopy>
      </StyledContainerButton>
      <StyledContainerTitleAndPrice>
        <StyledTitle>{title}</StyledTitle>
        <StyledPriceAndLine>
          <StyledLine></StyledLine>
          <Price currency="ARS" timeZone="es-AR">
            {price}
          </Price>
        </StyledPriceAndLine>
      </StyledContainerTitleAndPrice>
    </CardStyled>
  )
}
