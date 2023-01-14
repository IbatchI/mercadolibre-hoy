import { Carousel } from 'react-responsive-carousel'
import {
  CardStyled,
  ImageCardStyled,
  StyledCarrouselContainer,
  StyledIconContainer,
  StyledPriceContainer,
  StyledTitle,
  StyledTitleAndButtonsContainer,
} from './NewProductCardStyles'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Price } from '../../atoms/Price/Price'
import { BiLinkExternal } from 'react-icons/bi'
import { HiOutlineClipboardCopy } from 'react-icons/hi'
import { toast } from 'react-toastify'
import { IconButton } from '../../atoms/IconButton/IconButton'

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

  const copyClipboard = () => {
    toast.success('Link copiado al portapapeles')
    navigator.clipboard.writeText(link)
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
      <StyledTitleAndButtonsContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledIconContainer>
          <IconButton onClick={copyClipboard} icon={<HiOutlineClipboardCopy size="20px" />} />
          <IconButton
            onClick={goToPage}
            style={{ marginTop: '2.5px' }}
            icon={<BiLinkExternal size="19px" />}
          />
        </StyledIconContainer>
      </StyledTitleAndButtonsContainer>
      <StyledPriceContainer>
        <Price color="gray">{price}</Price>
      </StyledPriceContainer>
    </CardStyled>
  )
}
