import {
  ImageCardStyled,
  StyledButtonsAndPriceContainer,
  StyledButtonsContainer,
  StyledCardTextContainer,
  StyledCarrouselContainer,
  StyledTitleCard,
} from './ProductCardStyles'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { HiOutlineClipboardCopy } from 'react-icons/hi'
import { BiLinkExternal } from 'react-icons/bi'
import { Card } from '../../atoms/Card/CardStyles'
import { Button } from '../../atoms/Button/ButtonStyles'
import { Price } from '../../atoms/Price/Price'

interface ProductCardProps {
  link: string
  pictures: string[]
  price: number
  title: string
}

export const ProductCard = ({ title, price, pictures, link }: ProductCardProps) => {
  const goToPage = () => {
    window.open(link, '_blank')
  }

  return (
    <Card width="200px" height="250px" heightMobile="230px" widthMobile="180px">
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
      <StyledCardTextContainer>
        <StyledTitleCard>{title}</StyledTitleCard>
        <StyledButtonsAndPriceContainer>
          <Price currency="ARS" timeZone="es-AR" fontWeight="bold">
            {price}
          </Price>
          <StyledButtonsContainer>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(link)
              }}
              padding="7px"
            >
              <HiOutlineClipboardCopy size="16px" />
            </Button>
            <Button onClick={() => goToPage()} padding="7px">
              <BiLinkExternal size="16px" />
            </Button>
          </StyledButtonsContainer>
        </StyledButtonsAndPriceContainer>
      </StyledCardTextContainer>
    </Card>
  )
}
