import { FC } from 'react'
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
import { Button } from '../Button/Button'
import { HiOutlineClipboardCopy } from 'react-icons/hi'
import { BiLinkExternal } from 'react-icons/bi'

interface ProductCardProps {
  title: string
  price: number
  pictures: string[]
  link: string
}

export const ProductCard: FC<ProductCardProps> = ({ title, price, pictures, link }) => {
  const goToPage = () => {
    window.open(link, '_blank')
  }
  return (
    <StyledCard>
      <StyledCarrouselContainer>
        <Carousel
          showArrows
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
          emulateTouch={false}
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
