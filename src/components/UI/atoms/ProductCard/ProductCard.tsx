import {
  ImageCardStyled,
  StyledButtonsAndPriceContainer,
  StyledButtonsContainer,
  StyledCard,
  StyledCardTextContainer,
  StyledCarrouselContainer,
  StyledPriceCard,
  StyledTitleCard,
} from './ProductCardStyles'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { HiOutlineClipboardCopy } from 'react-icons/hi'
import { BiLinkExternal } from 'react-icons/bi'
import { Button } from '../Button/ButtonStyles'

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
    <StyledCard>
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
          <StyledPriceCard>{price}</StyledPriceCard>
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
    </StyledCard>
  )
}
